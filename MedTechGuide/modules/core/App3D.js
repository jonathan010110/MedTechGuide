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
ààààthis.controls.minDistanceà=à3.5;
ààààthis.controls.maxDistanceà=à11.5;
àà}

ààsetupDevices()à{
ààààconstàpulseà=àcreatePulseOximeter();
ààààconstàekgà=àcreateEKGMonitor(()à=>àNumber(this.heartRateSlider.value));
ààààconstàbloodà=àcreateBloodPressureMonitor(()à=>àthis.startBloodPressureSimulation());

àààà[pulse,àekg,àblood].forEach((device)à=>à{
ààààààdevice.root.visibleà=àfalse;
ààààààdevice.root.position.yà=à0.15;
ààààààdevice.root.scale.set(0.96,à0.96,à0.96);
ààààààthis.scene.add(device.root);
ààààààthis.devices.set(device.id,àdevice);

ààààààdevice.interactive.forEach((entry)à=>à{
ààààààààthis.interactiveLookup.set(entry.mesh.uuid,à{à...entry,àdeviceId:àdevice.idà});
àààààà});
àààà});
àà}

ààbindEvents()à{
ààààwindow.addEventListener('resize',à()à=>àthis.onResize());

ààààthis.canvas.addEventListener('pointerdown',à(event)à=>à{
ààààààconstàboundsà=àthis.canvas.getBoundingClientRect();
ààààààthis.pointer.xà=à((event.clientXà-àbounds.left)à/àbounds.width)à*à2à-à1;
ààààààthis.pointer.yà=à-((event.clientYà-àbounds.top)à/àbounds.height)à*à2à+à1;

ààààààthis.raycaster.setFromCamera(this.pointer,àthis.camera);
ààààààconstàclickableMeshesà=à[...this.interactiveLookup.values()].map((entry)à=>àentry.mesh);
ààààààconstàhitsà=àthis.raycaster.intersectObjects(clickableMeshes,àfalse);

ààààààifà(!hits.length)àreturn;

ààààààconstàtargetà=àthis.interactiveLookup.get(hits[0].object.uuid);
ààààààifà(!targetà||àtarget.deviceIdà!==àthis.activeDeviceId)àreturn;

ààààààthis.setInfo(target.title,àtarget.text);

ààààààifà(target.actionà===à'start-bp')à{
ààààààààconstàbloodà=àthis.devices.get('blood');
ààààààààblood?.triggerStart();
àààààà}
àààà});
àà}

ààonResize()à{
ààààconstàrectà=àthis.canvas.getBoundingClientRect();
ààààthis.camera.aspectà=àrect.widthà/àrect.height;
ààààthis.camera.updateProjectionMatrix();
ààààthis.renderer.setSize(rect.width,àrect.height,àfalse);
àà}

ààsetDevice(deviceId,àimmediateà=àfalse)à{
ààààifà(this.activeDeviceIdà===àdeviceIdà&&àthis.activeDevice)àreturn;

ààààconstànextà=àthis.devices.get(deviceId);
ààààifà(!next)àreturn;

ààààconstàprevà=àthis.activeDevice;

ààààifà(prev)à{
ààààààprev.onDeactivate?.();
àààà}

àààànext.root.visibleà=àtrue;
àààànext.root.scale.set(0.92,à0.92,à0.92);
àààànext.root.position.yà=à-0.05;

ààààthis.deviceSwapà=à{
ààààààfrom:àprev,
ààààààto:ànext,
ààààààprogress:àimmediateà?à1à:à0,
ààààààduration:àimmediateà?à0.001à:à0.42,
àààà};

ààààthis.activeDeviceà=ànext;
ààààthis.activeDeviceIdà=àdeviceId;

ààààifà(deviceIdà!==à'blood')à{
ààààààthis.pressureFill.style.widthà=à'0%';
ààààààthis.bpResult.textContentà=à'WarteàaufàMessung...';
àààà}

ààààthis.setInfo(next.name,ànext.description);
àààànext.onActivate?.();
àà}

ààstartBloodPressureSimulation()à{
ààààifà(this.activeDeviceIdà!==à'blood')àreturn;
ààààifà(this.bpSim.running)àreturn;

ààààthis.bpSim.runningà=àtrue;
ààààthis.bpSim.progressà=à0;
ààààthis.bpSim.resultShownà=àfalse;

ààààthis.pressureFill.style.widthà=à'0%';
ààààthis.bpResult.textContentà=à'Messungàläuft...';
ààààthis.setInfo('Messungàgestartet',à'DieàManschetteàwirdàaufgepumptàundàderàDruckverlaufàwirdàausgewertet.');
àà}

ààupdateBloodPressure(delta)à{
ààààifà(!this.bpSim.running)àreturn;

ààààthis.bpSim.progressà+=àdelta;
ààààconstàcycleà=à6.2;
ààààconstàtà=àMath.min(this.bpSim.progressà/àcycle,à1);

ààààletàpressure;
ààààifà(tà<à0.45)à{
ààààààpressureà=à(tà/à0.45)à*à100;
àààà}àelseà{
ààààààpressureà=à((1à-àt)à/à0.55)à*à100;
àààà}

ààààthis.pressureFill.style.widthà=à`${Math.max(0,àMath.min(100,àpressure)).toFixed(1)}%`;

ààààifà(tà>=à1à&&à!this.bpSim.resultShown)à{
ààààààconstàsystà=à116à+àMath.round(Math.random()à*à8);
ààààààconstàdiastà=à74à+àMath.round(Math.random()à*à7);
ààààààthis.bpResult.textContentà=à`Ergebnis:à${syst}/${diast}àmmHg`;
ààààààthis.setInfo('BlutdruckàErgebnis',à`Messungàabgeschlossen:à${syst}/${diast}àmmHgàbeiàruhigemàSignalverlauf.`);

ààààààthis.bpSim.resultShownà=àtrue;
ààààààthis.bpSim.runningà=àfalse;
àààà}
àà}

ààupdateTransitions(delta)à{
ààààifà(!this.deviceSwap)àreturn;

ààààthis.deviceSwap.progressà=àMath.min(1,àthis.deviceSwap.progressà+àdeltaà/àthis.deviceSwap.duration);
ààààconstàpà=àthis.deviceSwap.progress;

ààààifà(this.deviceSwap.from)à{
ààààààconstàfromà=àthis.deviceSwap.from.root;
ààààààfrom.scale.setScalar(1à-àpà*à0.1);
ààààààfrom.position.yà=à0.15à-àpà*à0.2;
ààààààfrom.visibleà=àpà<à1;
àààà}

ààààifà(this.deviceSwap.to)à{
ààààààconstàtoà=àthis.deviceSwap.to.root;
ààààààto.scale.setScalar(0.92à+àpà*à0.08);
ààààààto.position.yà=à-0.05à+àpà*à0.2;
ààààààto.visibleà=àtrue;
àààà}

ààààifà(pà>=à1)à{
ààààààthis.deviceSwapà=ànull;
àààà}
àà}

ààsetInfo(title,àtext)à{
ààààthis.infoPanel.querySelector('h2').textContentà=àtitle;
ààààthis.infoText.textContentà=àtext;
àà}

ààanimate()à{
ààààrequestAnimationFrame(()à=>àthis.animate());

ààààconstàdeltaà=àthis.clock.getDelta();
ààààconstàelapsedà=àthis.clock.elapsedTime;

ààààthis.controls.update();
ààààthis.updateTransitions(delta);
ààààthis.updateBloodPressure(delta);

ààààthis.activeDevice?.update(delta,àelapsed);

ààààthis.renderer.render(this.scene,àthis.camera);
àà}
}
