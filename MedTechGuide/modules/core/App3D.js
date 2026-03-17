import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createPulseOximeter } from '../devices/PulseOximeter.js';
import { createEKGMonitor } from '../devices/EKGMonitor.js';
import { createBloodPressureMonitor } from '../devices/BloodPressureMonitor.js';

export class App3D {
  constructor({ canvas, infoPanel, infoText, heartRateSlider, pressureFill, bpResult }) {
    this.canvas = canvas;
    this.infoPanel = infoPanel;
    this.infoText = infoText;
    this.heartRateSlider = heartRateSlider;
    this.pressureFill = pressureFill;
    this.bpResult = bpResult;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#070d1c');

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(5.6, 3.4, 6.3);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.clock = new THREE.Clock();

    this.controls = null;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this.devices = new Map();
    this.activeDeviceId = 'pulse';
    this.activeDevice = null;
    this.deviceSwap = null;

    this.interactiveLookup = new Map();

    this.bpSim = {
      running: false,
      progress: 0,
      resultShown: false,
    };
  }

  init() {
    this.setupLights();
    this.setupEnvironment();
    this.setupControls();
    this.setupDevices();
    this.bindEvents();
    this.onResize();
    this.setDevice('pulse', true);
    this.animate();
  }

  setupLights() {
    const ambient = new THREE.AmbientLight('#b7d0ff', 0.55);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight('#d7e8ff', 1.2);
    key.position.set(4, 8, 6);
    this.scene.add(key);

    const fill = new THREE.PointLight('#65a9ff', 1.4, 30);
    fill.position.set(-5, 2, 4);
    this.scene.add(fill);

    const rim = new THREE.PointLight('#4af7b2', 0.45, 20);
    rim.position.set(0, 2, -6);
    this.scene.add(rim);
  }

  setupEnvironment() {
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(7.5, 80),
      new THREE.MeshStandardMaterial({
        color: '#0f1930',
        roughness: 0.82,
        metalness: 0.05,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.25;
    this.scene.add(floor);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.8, 0.04, 10, 120),
      new THREE.MeshStandardMaterial({ color: '#244270', emissive: '#10233f', emissiveIntensity: 0.4 })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -1.22;
    this.scene.add(ring);
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.set(0, 0.2, 0);
    this.controls.minDistance = 3.5;
    this.controls.maxDistance = 11.5;
  }

  setupDevices() {
    const pulse = createPulseOximeter();
    const ekg = createEKGMonitor(() => Number(this.heartRateSlider.value));
    const blood = createBloodPressureMonitor(() => this.startBloodPressureSimulation());

    [pulse, ekg, blood].forEach((device) => {
      device.root.visible = false;
      device.root.position.y = 0.15;
      device.root.scale.set(0.96, 0.96, 0.96);
      this.scene.add(device.root);
      this.devices.set(device.id, device);

      device.interactive.forEach((entry) => {
        this.interactiveLookup.set(entry.mesh.uuid, { ...entry, deviceId: device.id });
      });
    });
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize());

    this.canvas.addEventListener('pointerdown', (event) => {
      const bounds = this.canvas.getBoundingClientRect();
      this.pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      this.pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      this.raycaster.setFromCamera(this.pointer, this.camera);
      const clickableMeshes = [...this.interactiveLookup.values()].map((entry) => entry.mesh);
      const hits = this.raycaster.intersectObjects(clickableMeshes, false);

      if (!hits.length) return;

      const target = this.interactiveLookup.get(hits[0].object.uuid);
      if (!target || target.deviceId !== this.activeDeviceId) return;

      this.setInfo(target.title, target.text);

      if (target.action === 'start-bp') {
        const blood = this.devices.get('blood');
        blood?.triggerStart();
      }
    });
  }

  onResize() {
    const rect = this.canvas.getBoundingClientRect();
    this.camera.aspect = rect.width / rect.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(rect.width, rect.height, false);
  }

  setDevice(deviceId, immediate = false) {
    if (this.activeDeviceId === deviceId && this.activeDevice) return;

    const next = this.devices.get(deviceId);
    if (!next) return;

    const prev = this.activeDevice;

    if (prev) {
      prev.onDeactivate?.();
    }

    next.root.visible = true;
    next.root.scale.set(0.92, 0.92, 0.92);
    next.root.position.y = -0.05;

    this.deviceSwap = {
      from: prev,
      to: next,
      progress: immediate ? 1 : 0,
      duration: immediate ? 0.001 : 0.42,
    };

    this.activeDevice = next;
    this.activeDeviceId = deviceId;

    if (deviceId !== 'blood') {
      this.pressureFill.style.width = '0%';
      this.bpResult.textContent = 'Warte auf Messung...';
    }

    this.setInfo(next.name, next.description);
    next.onActivate?.();
  }

  startBloodPressureSimulation() {
    if (this.activeDeviceId !== 'blood') return;
    if (this.bpSim.running) return;

    this.bpSim.running = true;
    this.bpSim.progress = 0;
    this.bpSim.resultShown = false;

    this.pressureFill.style.width = '0%';
    this.bpResult.textContent = 'Messung läuft...';
    this.setInfo('Messung gestartet', 'Die Manschette wird aufgepumpt und der Druckverlauf wird ausgewertet.');
  }

  updateBloodPressure(delta) {
    if (!this.bpSim.running) return;

    this.bpSim.progress += delta;
    const cycle = 6.2;
    const t = Math.min(this.bpSim.progress / cycle, 1);

    let pressure;
    if (t < 0.45) {
      pressure = (t / 0.45) * 100;
    } else {
      pressure = ((1 - t) / 0.55) * 100;
    }

    this.pressureFill.style.width = `${Math.max(0, Math.min(100, pressure)).toFixed(1)}%`;

    if (t >= 1 && !this.bpSim.resultShown) {
      const syst = 116 + Math.round(Math.random() * 8);
      const diast = 74 + Math.round(Math.random() * 7);
      this.bpResult.textContent = `Ergebnis: ${syst}/${diast} mmHg`;
      this.setInfo('Blutdruck Ergebnis', `Messung abgeschlossen: ${syst}/${diast} mmHg bei ruhigem Signalverlauf.`);

      this.bpSim.resultShown = true;
      this.bpSim.running = false;
    }
  }

  updateTransitions(delta) {
    if (!this.deviceSwap) return;

    this.deviceSwap.progress = Math.min(1, this.deviceSwap.progress + delta / this.deviceSwap.duration);
    const p = this.deviceSwap.progress;

    if (this.deviceSwap.from) {
      const from = this.deviceSwap.from.root;
      from.scale.setScalar(1 - p * 0.1);
      from.position.y = 0.15 - p * 0.2;
      from.visible = p < 1;
    }

    if (this.deviceSwap.to) {
      const to = this.deviceSwap.to.root;
      to.scale.setScalar(0.92 + p * 0.08);
      to.position.y = -0.05 + p * 0.2;
      to.visible = true;
    }

    if (p >= 1) {
      this.deviceSwap = null;
    }
  }

  setInfo(title, text) {
    this.infoPanel.querySelector('h2').textContent = title;
    this.infoText.textContent = text;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsed = this.clock.elapsedTime;

    this.controls.update();
    this.updateTransitions(delta);
    this.updateBloodPressure(delta);

    this.activeDevice?.update(delta, elapsed);

    this.renderer.render(this.scene, this.camera);
  }
}
