import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

function makeMaterial(color, metalness = 0.2, roughness = 0.5, emissive = 0x000000, emissiveIntensity = 0) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness, emissive, emissiveIntensity });
}

function createRoundedBox(width, height, depth, radius, smoothness, material) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: smoothness,
    steps: 1,
    bevelSize: radius * 0.45,
    bevelThickness: radius * 0.45,
    curveSegments: smoothness
  });
  geometry.center();
  return new THREE.Mesh(geometry, material);
}

function createInsulinPumpModel(refs) {
  const root = new THREE.Group();

  const body = createRoundedBox(0.9, 1.35, 0.22, 0.08, 6, makeMaterial(0xf8fafc, 0.08, 0.7));
  body.position.y = 0.82;
  root.add(body);

  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.45, 0.32),
    makeMaterial(0x22d3ee, 0.15, 0.25, 0x0ea5e9, 0.4)
  );
  screen.position.set(0, 1.03, 0.115);
  root.add(screen);
  refs.screen = screen;

  const buttonGeometry = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 20);
  const buttonMaterial = makeMaterial(0x2563eb, 0.25, 0.35);
  [-0.14, 0, 0.14].forEach((x) => {
    const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
    button.position.set(x, 0.58, 0.12);
    button.rotation.x = Math.PI / 2;
    root.add(button);
  });

  const cartridge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 0.7, 24),
    makeMaterial(0xcbd5e1, 0.3, 0.35)
  );
  cartridge.rotation.z = Math.PI / 2;
  cartridge.position.set(0.58, 0.8, 0);
  root.add(cartridge);

  const tube = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.01, 8, 80, Math.PI),
    makeMaterial(0x60a5fa, 0.15, 0.8)
  );
  tube.position.set(0.15, 0.45, 0.02);
  tube.rotation.z = 0.5;
  root.add(tube);

  return root;
}

function createHeartModel(refs) {
  const root = new THREE.Group();

  const heartMaterial = makeMaterial(0xdc2626, 0.1, 0.65);
  const leftLobe = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32), heartMaterial);
  const rightLobe = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 32), heartMaterial);
  leftLobe.position.set(-0.2, 1.05, 0);
  rightLobe.position.set(0.18, 1.0, 0.08);
  root.add(leftLobe, rightLobe);

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.75, 28), heartMaterial);
  tip.position.set(0, 0.45, 0.02);
  tip.rotation.z = Math.PI;
  root.add(tip);

  const vesselMaterial = makeMaterial(0x991b1b, 0.08, 0.55);
  const vessel1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.55, 18), vesselMaterial);
  vessel1.position.set(-0.15, 1.58, 0);
  vessel1.rotation.z = 0.15;
  root.add(vessel1);

  const vessel2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 18), vesselMaterial);
  vessel2.position.set(0.18, 1.48, -0.05);
  vessel2.rotation.z = -0.28;
  root.add(vessel2);

  refs.heart = root;
  return root;
}

function createNeurochipModel(refs) {
  const root = new THREE.Group();

  const brainMaterial = makeMaterial(0xf1c0d8, 0.05, 0.82);
  const hemisphereLeft = new THREE.Mesh(new THREE.SphereGeometry(0.5, 28, 28), brainMaterial);
  const hemisphereRight = new THREE.Mesh(new THREE.SphereGeometry(0.5, 28, 28), brainMaterial);
  hemisphereLeft.position.set(-0.28, 0.88, 0);
  hemisphereRight.position.set(0.28, 0.88, 0);
  hemisphereLeft.scale.set(1, 0.85, 1.12);
  hemisphereRight.scale.set(1, 0.85, 1.12);
  root.add(hemisphereLeft, hemisphereRight);

  const chip = new THREE.Mesh(
    createRoundedBox(0.34, 0.26, 0.05, 0.03, 4, makeMaterial(0x0f172a, 0.55, 0.2)).geometry,
    makeMaterial(0x0f172a, 0.55, 0.2)
  );
  chip.position.set(0, 1.2, 0.28);
  root.add(chip);
  refs.chip = chip;

  const pinMaterial = makeMaterial(0xf8fafc, 0.7, 0.25);
  for (let index = -2; index <= 2; index += 1) {
    const pin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.12, 0.02), pinMaterial);
    pin.position.set(index * 0.07, 1.01, 0.28);
    root.add(pin);
  }

  const traceMaterial = makeMaterial(0x22c55e, 0.35, 0.3, 0x22c55e, 0.15);
  const trace = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.015, 10, 40, Math.PI * 1.3), traceMaterial);
  trace.position.set(0, 1.14, 0.24);
  trace.rotation.z = 0.35;
  root.add(trace);

  return root;
}

function createDnaHelixFallbackModel(refs) {
  const root = new THREE.Group();
  const strandMaterialA = makeMaterial(0x2563eb, 0.35, 0.35, 0x1d4ed8, 0.2);
  const strandMaterialB = makeMaterial(0xef4444, 0.35, 0.35, 0xb91c1c, 0.2);
  const rungMaterial = makeMaterial(0xf8fafc, 0.55, 0.18, 0x93c5fd, 0.08);

  const steps = 40;
  const radius = 0.33;
  const totalHeight = 1.9;

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps;
    const angle = t * Math.PI * 8;
    const y = t * totalHeight;
    const xA = Math.cos(angle) * radius;
    const zA = Math.sin(angle) * radius;
    const xB = Math.cos(angle + Math.PI) * radius;
    const zB = Math.sin(angle + Math.PI) * radius;

    const nodeA = new THREE.Mesh(new THREE.SphereGeometry(0.04, 14, 14), strandMaterialA);
    nodeA.position.set(xA, y, zA);
    root.add(nodeA);

    const nodeB = new THREE.Mesh(new THREE.SphereGeometry(0.04, 14, 14), strandMaterialB);
    nodeB.position.set(xB, y, zB);
    root.add(nodeB);

    if (index % 2 === 0) {
      const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, radius * 1.95, 10), rungMaterial);
      const midpoint = new THREE.Vector3((xA + xB) / 2, y, (zA + zB) / 2);
      rung.position.copy(midpoint);
      rung.lookAt(new THREE.Vector3(xA, y, zA));
      rung.rotateX(Math.PI / 2);
      root.add(rung);
    }
  }

  root.position.y = 0.05;
  refs.dnaHelix = root;
  return root;
}

function createBMWFallbackModel(refs) {
  const root = new THREE.Group();

  const body = new THREE.Mesh(
    createRoundedBox(1.9, 0.45, 0.78, 0.08, 5, makeMaterial(0x2563eb, 0.35, 0.35)).geometry,
    makeMaterial(0x2563eb, 0.35, 0.35)
  );
  body.position.set(0, 0.46, 0);
  root.add(body);

  const roof = new THREE.Mesh(
    createRoundedBox(0.95, 0.28, 0.68, 0.08, 5, makeMaterial(0x1d4ed8, 0.35, 0.35)).geometry,
    makeMaterial(0x1d4ed8, 0.35, 0.35)
  );
  roof.position.set(0.1, 0.8, 0);
  root.add(roof);

  const windshield = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 0.22),
    makeMaterial(0xbfdbfe, 0.2, 0.1, 0x60a5fa, 0.12)
  );
  windshield.position.set(-0.18, 0.81, 0.35);
  windshield.rotation.x = -0.8;
  root.add(windshield);

  const wheelGeometry = new THREE.CylinderGeometry(0.18, 0.18, 0.16, 24);
  const wheelMaterial = makeMaterial(0x111827, 0.15, 0.85);
  const wheelOffsets = [
    [-0.58, 0.18, -0.42],
    [0.58, 0.18, -0.42],
    [-0.58, 0.18, 0.42],
    [0.58, 0.18, 0.42]
  ];
  wheelOffsets.forEach((offset) => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.set(offset[0], offset[1], offset[2]);
    wheel.rotation.z = Math.PI / 2;
    root.add(wheel);
  });

  refs.car = root;
  return root;
}

function createCTScannerFallbackModel(refs) {
  const root = new THREE.Group();

  const base = createRoundedBox(2.4, 0.28, 1.55, 0.08, 6, makeMaterial(0xe6edf8, 0.1, 0.7));
  base.position.y = 0.14;
  root.add(base);

  const gantryOuter = new THREE.Mesh(
    new THREE.TorusGeometry(0.78, 0.22, 22, 80),
    makeMaterial(0xffffff, 0.05, 0.5)
  );
  gantryOuter.rotation.y = Math.PI / 2;
  gantryOuter.position.set(-0.35, 0.94, 0);
  root.add(gantryOuter);

  const gantryInner = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.07, 20, 60),
    makeMaterial(0x93c5fd, 0.3, 0.3)
  );
  gantryInner.rotation.y = Math.PI / 2;
  gantryInner.position.copy(gantryOuter.position);
  root.add(gantryInner);
  refs.ctRing = gantryInner;

  const tableRail = new THREE.Mesh(
    new THREE.BoxGeometry(1.55, 0.12, 0.38),
    makeMaterial(0xb6c6d9, 0.2, 0.6)
  );
  tableRail.position.set(0.45, 0.62, 0);
  root.add(tableRail);

  const movingTable = createRoundedBox(0.95, 0.09, 0.42, 0.03, 4, makeMaterial(0xdce6f6, 0.05, 0.8));
  movingTable.position.set(0.42, 0.72, 0);
  movingTable.userData.baseX = movingTable.position.x;
  root.add(movingTable);
  refs.ctTable = movingTable;

  root.position.y = 0.02;
  return root;
}

function createMRTScannerFallbackModel(refs) {
  const root = new THREE.Group();

  const body = createRoundedBox(2.3, 1.4, 1.55, 0.18, 8, makeMaterial(0xf8fafc, 0.05, 0.7));
  body.position.set(0, 0.76, 0);
  root.add(body);

  const tunnel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.47, 0.47, 1.7, 48),
    makeMaterial(0xe2e8f0, 0.05, 0.6)
  );
  tunnel.rotation.z = Math.PI / 2;
  tunnel.position.set(-0.1, 0.78, 0);
  root.add(tunnel);

  const tunnelGlow = new THREE.Mesh(
    new THREE.CylinderGeometry(0.37, 0.37, 1.72, 48),
    makeMaterial(0x60a5fa, 0.55, 0.25)
  );
  tunnelGlow.rotation.z = Math.PI / 2;
  tunnelGlow.position.copy(tunnel.position);
  root.add(tunnelGlow);
  refs.mrtRing = tunnelGlow;

  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(1.35, 0.1, 0.48),
    makeMaterial(0xc7d2fe, 0.1, 0.65)
  );
  bed.position.set(0.65, 0.57, 0);
  root.add(bed);

  return root;
}

function createUltrasoundFallbackModel(refs) {
  const root = new THREE.Group();

  const cartBase = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 0.95, 0.62),
    makeMaterial(0xf1f5f9, 0.08, 0.65)
  );
  cartBase.position.set(0, 0.54, 0);
  root.add(cartBase);

  const screen = createRoundedBox(0.66, 0.42, 0.05, 0.05, 6, makeMaterial(0x1e293b, 0.35, 0.2));
  screen.position.set(0, 1.23, -0.06);
  screen.rotation.x = -0.2;
  root.add(screen);

  const screenGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.54, 0.29),
    new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.5, metalness: 0.1, roughness: 0.3 })
  );
  screenGlow.position.set(0, 1.23, -0.035);
  screenGlow.rotation.x = -0.2;
  root.add(screenGlow);
  refs.screen = screenGlow;

  const arm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 0.52, 24),
    makeMaterial(0x94a3b8, 0.25, 0.4)
  );
  arm.position.set(0.38, 1.08, 0.05);
  arm.rotation.z = 0.55;
  root.add(arm);

  const probe = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.09, 0.28, 6, 18),
    makeMaterial(0x2563eb, 0.2, 0.35)
  );
  probe.position.set(0.55, 0.9, 0.18);
  probe.rotation.set(0.8, 0.4, 0.2);
  root.add(probe);
  refs.usProbe = probe;

  const wheelGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.04, 22);
  const wheelMaterial = makeMaterial(0x111827, 0.15, 0.8);
  const wheelPositions = [
    [-0.4, 0.08, -0.25],
    [0.4, 0.08, -0.25],
    [-0.4, 0.08, 0.25],
    [0.4, 0.08, 0.25]
  ];
  wheelPositions.forEach((position) => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.set(position[0], position[1], position[2]);
    wheel.rotation.z = Math.PI / 2;
    root.add(wheel);
  });

  return root;
}

const fallbackFactories = {
  'insulin-pump': createInsulinPumpModel,
  heart: createHeartModel,
  neurochip: createNeurochipModel,
  'dna-helix': createDnaHelixFallbackModel,
  bmw: createBMWFallbackModel,
  'ct-scanner': createCTScannerFallbackModel,
  'mrt-scanner': createMRTScannerFallbackModel,
  ultraschall: createUltrasoundFallbackModel
};

function fitCameraToObject(camera, controls, object) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const distance = Math.abs((maxDimension / 2) / Math.tan((camera.fov * Math.PI) / 360)) * 1.8;

  camera.position.set(center.x + distance * 0.45, center.y + distance * 0.25, center.z + distance);
  controls.target.copy(center);
  controls.update();
}

function normalizeModel(model, targetSize, yOffset = 0) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const scaleFactor = targetSize / maxDimension;

  model.scale.multiplyScalar(scaleFactor);

  const scaledBox = new THREE.Box3().setFromObject(model);
  const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
  const min = scaledBox.min;

  model.position.x -= scaledCenter.x;
  model.position.z -= scaledCenter.z;
  model.position.y -= min.y;
  model.position.y += yOffset;
}

function setWireframe(model, enabled) {
  if (!model) return;
  model.traverse((node) => {
    if (!node.isMesh || !node.material) return;
    if (Array.isArray(node.material)) {
      node.material.forEach((material) => {
        material.wireframe = enabled;
        material.needsUpdate = true;
      });
      return;
    }
    node.material.wireframe = enabled;
    node.material.needsUpdate = true;
  });
}

function disposeModel(model) {
  if (!model) return;
  model.traverse((node) => {
    if (!node.isMesh) return;
    node.geometry.dispose();
    if (Array.isArray(node.material)) {
      node.material.forEach((material) => material.dispose());
      return;
    }
    if (node.material) {
      node.material.dispose();
    }
  });
}

function buildViewer(section) {
  const viewer = section.querySelector('.imaging-3d-viewer');
  const statusEl = section.querySelector('.imaging-3d-status');
  const btnReload = section.querySelector('[data-action="reload"]');
  const btnReset = section.querySelector('[data-action="reset"]');
  const btnRotate = section.querySelector('[data-action="autorotate"]');
  const btnWireframe = section.querySelector('[data-action="wireframe"]');
  const title = section.dataset.modelLabel || '3D-Modell';
  const modelPath = section.dataset.modelPath || '';
  const fallbackKey = section.dataset.fallbackModel || '';
  const targetSize = Number(section.dataset.targetSize || '1.9');
  const yOffset = Number(section.dataset.yOffset || '0');

  if (!viewer) {
    return;
  }

  const refs = {
    screen: null,
    heart: null,
    chip: null,
    dnaHelix: null,
    car: null,
    ctRing: null,
    ctTable: null,
    mrtRing: null,
    usProbe: null
  };
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf4f9ff);

  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 200);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  viewer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 0.7;
  controls.maxDistance = 12;

  scene.add(new THREE.HemisphereLight(0xffffff, 0xb3d7ff, 1.2));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
  keyLight.position.set(5, 8, 4);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.55);
  fillLight.position.set(-4, 3, -3);
  scene.add(fillLight);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(3.2, 64),
    new THREE.MeshStandardMaterial({ color: 0xdbeafe, roughness: 0.96, metalness: 0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  scene.add(ground);

  let currentModel = null;
  let autoRotate = false;
  let wireframe = false;
  let pulseEnabled = false;

  function setStatus(text, isError = false) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.style.color = isError ? '#b91c1c' : '#1f2937';
  }

  function resize() {
    const width = viewer.clientWidth;
    const height = viewer.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function replaceModel(nextModel) {
    if (currentModel) {
      scene.remove(currentModel);
      disposeModel(currentModel);
    }

    normalizeModel(nextModel, targetSize, yOffset);
    currentModel = nextModel;
    scene.add(currentModel);
    setWireframe(currentModel, wireframe);
    fitCameraToObject(camera, controls, currentModel);
  }

  function loadFallback(reasonText) {
    const factory = fallbackFactories[fallbackKey];
    if (!factory) {
      setStatus(reasonText || 'Kein Fallback-Modell verfuegbar.', true);
      return;
    }

    refs.screen = null;
    refs.heart = null;
    refs.chip = null;
    refs.dnaHelix = null;
    refs.car = null;
    refs.ctRing = null;
    refs.ctTable = null;
    refs.mrtRing = null;
    refs.usProbe = null;
    const fallbackModel = factory(refs);
    replaceModel(fallbackModel);
    setStatus(reasonText || `${title} als programmiertes Fallback geladen.`);
  }

  function loadModel() {
    if (!modelPath) {
      loadFallback('Kein GLB-Pfad gesetzt. Fallback aktiv.');
      return;
    }

    setStatus(`${title} wird geladen...`);
    loader.load(
      modelPath,
      (gltf) => {
        refs.screen = null;
        refs.heart = null;
        refs.chip = null;
        refs.dnaHelix = null;
        refs.car = null;
        refs.ctRing = null;
        refs.ctTable = null;
        refs.mrtRing = null;
        refs.usProbe = null;
        replaceModel(gltf.scene);
        setStatus(`${title} als GLB geladen.`);
      },
      undefined,
      () => {
        loadFallback(`${title} GLB nicht gefunden unter ${modelPath}. Fallback aktiv.`);
      }
    );
  }

  btnReload?.addEventListener('click', () => {
    loadModel();
  });

  btnReset?.addEventListener('click', () => {
    if (currentModel) {
      fitCameraToObject(camera, controls, currentModel);
    }
  });

  btnRotate?.addEventListener('click', () => {
    autoRotate = !autoRotate;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.2;
    btnRotate.setAttribute('aria-pressed', autoRotate ? 'true' : 'false');
    btnRotate.textContent = autoRotate ? 'Auto-Rotate an' : 'Auto-Rotate aus';
  });

  btnWireframe?.addEventListener('click', () => {
    wireframe = !wireframe;
    setWireframe(currentModel, wireframe);
    btnWireframe.setAttribute('aria-pressed', wireframe ? 'true' : 'false');
    btnWireframe.textContent = wireframe ? 'Wireframe an' : 'Wireframe aus';
  });

  const animate = (timeMs) => {
    requestAnimationFrame(animate);
    const time = timeMs * 0.001;

    if (refs.screen) {
      refs.screen.material.emissiveIntensity = 0.22 + Math.sin(time * 2.3) * 0.18;
    }

    if (refs.heart) {
      const scale = 1 + Math.sin(time * 2.8) * 0.05;
      refs.heart.scale.setScalar(scale);
    }

    if (refs.chip) {
      refs.chip.rotation.z = Math.sin(time * 1.4) * 0.18;
    }

    if (refs.dnaHelix) {
      refs.dnaHelix.rotation.y = time * 0.65;
    }

    if (refs.car) {
      refs.car.rotation.y = Math.sin(time * 0.8) * 0.2;
    }

    if (refs.ctRing) {
      refs.ctRing.rotation.z = Math.sin(time * 1.25) * 0.35;
    }

    if (refs.ctTable) {
      const baseX = refs.ctTable.userData.baseX || 0;
      refs.ctTable.position.x = baseX + Math.sin(time * 1.1) * 0.08;
    }

    if (refs.mrtRing) {
      refs.mrtRing.material.emissiveIntensity = 0.25 + Math.sin(time * 2.1) * 0.15;
    }

    if (refs.usProbe) {
      refs.usProbe.rotation.y = Math.sin(time * 2.0) * 0.45;
    }

    if (currentModel && pulseEnabled && !refs.heart) {
      const scale = 1 + Math.sin(time * 2.2) * 0.025;
      currentModel.scale.setScalar(scale);
    }

    controls.update();
    renderer.render(scene, camera);
  };

  window.addEventListener('resize', resize);
  resize();
  loadModel();
  animate(0);
}

document.querySelectorAll('[data-three-viewer]').forEach((section) => {
  buildViewer(section);
});
