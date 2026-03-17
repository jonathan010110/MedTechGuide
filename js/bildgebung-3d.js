import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const viewer = document.getElementById('imaging3DViewer');
const statusEl = document.getElementById('glbStatus');
const modelSelect = document.getElementById('glbModelSelect');
const modelScaleRange = document.getElementById('modelScaleRange');
const btnLoadModel = document.getElementById('btnLoadModel');
const btnResetCamera = document.getElementById('btnResetCamera');
const btnToggleAutoRotate = document.getElementById('btnToggleAutoRotate');
const btnToggleWireframe = document.getElementById('btnToggleWireframe');
const btnTogglePulse = document.getElementById('btnTogglePulse');

const manifestPath = 'data/models/manifest.json';

if (!viewer) {
  throw new Error('3D viewer container not found.');
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf4f9ff);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
camera.position.set(2.2, 1.4, 3.3);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
viewer.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 0.8;
controls.maxDistance = 12;
controls.target.set(0, 0.8, 0);

const ambientLight = new THREE.HemisphereLight(0xffffff, 0xb3d7ff, 1.1);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
keyLight.position.set(4, 7, 4);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x88bfff, 0.6);
rimLight.position.set(-5, 3, -4);
scene.add(rimLight);

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(3, 64),
  new THREE.MeshStandardMaterial({ color: 0xd8e8fb, roughness: 0.95, metalness: 0.0 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.01;
scene.add(ground);

let currentModel = null;
let baseScale = 1;
let pulseEnabled = false;
let wireframeEnabled = false;
let currentModelConfig = null;

const gltfLoader = new GLTFLoader();

const builtInModels = [
  { id: 'ct-scanner', label: 'CT-Scanner', type: 'procedural' },
  { id: 'mrt-scanner', label: 'MRT-Scanner', type: 'procedural' },
  { id: 'ultraschall', label: 'Ultraschallgeraet', type: 'procedural' }
];

const localModels = [];

const tempObjectRefs = {
  movingTable: null,
  spinningRing: null,
  probeHead: null
};

function makeMaterial(color, metalness = 0.25, roughness = 0.45) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness });
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

function createCTScannerModel() {
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
  tempObjectRefs.spinningRing = gantryInner;

  const tableRail = new THREE.Mesh(
    new THREE.BoxGeometry(1.55, 0.12, 0.38),
    makeMaterial(0xb6c6d9, 0.2, 0.6)
  );
  tableRail.position.set(0.45, 0.62, 0);
  root.add(tableRail);

  const movingTable = new THREE.Mesh(
    createRoundedBox(0.95, 0.09, 0.42, 0.03, 4, makeMaterial(0xdce6f6, 0.05, 0.8)).geometry,
    makeMaterial(0xdce6f6, 0.05, 0.8)
  );
  movingTable.position.set(0.42, 0.72, 0);
  movingTable.userData.baseX = movingTable.position.x;
  root.add(movingTable);
  tempObjectRefs.movingTable = movingTable;

  root.position.y = 0.02;
  return root;
}

function createMRTScannerModel() {
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
  tempObjectRefs.spinningRing = tunnelGlow;

  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(1.35, 0.1, 0.48),
    makeMaterial(0xc7d2fe, 0.1, 0.65)
  );
  bed.position.set(0.65, 0.57, 0);
  bed.userData.baseX = bed.position.x;
  root.add(bed);
  tempObjectRefs.movingTable = bed;

  return root;
}

function createUltrasoundModel() {
  const root = new THREE.Group();

  const cartBase = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 0.95, 0.62),
    makeMaterial(0xf1f5f9, 0.08, 0.65)
  );
  cartBase.position.set(0, 0.54, 0);
  root.add(cartBase);

  const screen = new THREE.Mesh(
    createRoundedBox(0.66, 0.42, 0.05, 0.05, 6, makeMaterial(0x1e293b, 0.35, 0.2)).geometry,
    makeMaterial(0x1e293b, 0.35, 0.2)
  );
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
  tempObjectRefs.probeHead = probe;

  const wheelGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.04, 22);
  const wheelMaterial = makeMaterial(0x111827, 0.15, 0.8);
  const wheelPositions = [
    [-0.4, 0.08, -0.25],
    [0.4, 0.08, -0.25],
    [-0.4, 0.08, 0.25],
    [0.4, 0.08, 0.25]
  ];
  wheelPositions.forEach((pos) => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.set(pos[0], pos[1], pos[2]);
    wheel.rotation.z = Math.PI / 2;
    root.add(wheel);
  });

  return root;
}

const modelFactories = {
  'ct-scanner': createCTScannerModel,
  'mrt-scanner': createMRTScannerModel,
  ultraschall: createUltrasoundModel
};

function getAllModels() {
  return [...localModels, ...builtInModels];
}

function getModelConfig(modelId) {
  return getAllModels().find((model) => model.id === modelId) || null;
}

function populateModelSelect() {
  if (!modelSelect) return;

  modelSelect.innerHTML = '';

  getAllModels().forEach((model) => {
    const option = document.createElement('option');
    option.value = model.id;
    option.textContent = model.type === 'glb' ? `${model.label} (GLB)` : model.label;
    modelSelect.appendChild(option);
  });
}

async function loadModelManifest() {
  try {
    const response = await fetch(manifestPath, { cache: 'no-store' });
    if (!response.ok) {
      return;
    }

    const manifest = await response.json();
    if (!Array.isArray(manifest.models)) {
      return;
    }

    manifest.models.forEach((model) => {
      if (!model || !model.id || !model.path || !model.label) {
        return;
      }

      localModels.push({
        id: model.id,
        label: model.label,
        path: model.path,
        type: 'glb'
      });
    });
  } catch {
    setStatus('Manifest fuer lokale GLB-Dateien nicht geladen. Programmierte Modelle bleiben aktiv.');
  }
}

function setStatus(text, isError = false) {
  if (!statusEl) return;
  statusEl.textContent = text;
  statusEl.style.color = isError ? '#b91c1c' : '#1f2937';
}

function resizeRenderer() {
  const width = viewer.clientWidth;
  const height = viewer.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function setWireframe(enabled) {
  if (!currentModel) return;

  currentModel.traverse((obj) => {
    if (obj.isMesh && obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach((material) => {
          material.wireframe = enabled;
          material.needsUpdate = true;
        });
      } else {
        obj.material.wireframe = enabled;
        obj.material.needsUpdate = true;
      }
    }
  });
}

function fitCameraToObject(rootObject) {
  const box = new THREE.Box3().setFromObject(rootObject);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const fov = camera.fov * (Math.PI / 180);
  const distance = Math.abs((maxDim / 2) / Math.tan(fov / 2)) * 1.65;

  camera.position.set(center.x + distance * 0.5, center.y + distance * 0.3, center.z + distance);
  controls.target.copy(center);
  controls.update();
}

function updateModelScale() {
  if (!currentModel) return;
  currentModel.scale.setScalar(baseScale);
}

function applyCurrentModelFeatures() {
  updateModelScale();
  setWireframe(wireframeEnabled);
  fitCameraToObject(currentModel);
}

function removeCurrentModel() {
  if (!currentModel) return;
  scene.remove(currentModel);
  currentModel.traverse((obj) => {
    if (obj.isMesh) {
      obj.geometry.dispose();
      if (Array.isArray(obj.material)) {
        obj.material.forEach((material) => material.dispose());
      } else if (obj.material) {
        obj.material.dispose();
      }
    }
  });
  currentModel = null;
  currentModelConfig = null;
  tempObjectRefs.movingTable = null;
  tempObjectRefs.spinningRing = null;
  tempObjectRefs.probeHead = null;
}

function loadProceduralModel(modelKey) {
  if (!modelKey || !modelFactories[modelKey]) return;

  setStatus('3D-Modell wird im Code erzeugt...');
  removeCurrentModel();
  try {
    currentModelConfig = getModelConfig(modelKey);
    currentModel = modelFactories[modelKey]();
    currentModel.position.set(0, 0, 0);
    scene.add(currentModel);

    applyCurrentModelFeatures();
    setStatus(`${currentModelConfig?.label || 'Modell'} erstellt. Du kannst jetzt drehen und zoomen.`);
  } catch {
    setStatus('Fehler beim Erzeugen des Modells.', true);
  }
}

function loadGlbModel(modelConfig) {
  setStatus(`GLB wird geladen: ${modelConfig.label}...`);
  removeCurrentModel();

  gltfLoader.load(
    modelConfig.path,
    (gltf) => {
      currentModelConfig = modelConfig;
      currentModel = gltf.scene;
      currentModel.position.set(0, 0, 0);
      scene.add(currentModel);

      applyCurrentModelFeatures();
      setStatus(`${modelConfig.label} geladen. Du kannst jetzt drehen und zoomen.`);
    },
    undefined,
    () => {
      setStatus(`GLB konnte nicht geladen werden: ${modelConfig.path}`, true);
    }
  );
}

function loadModel(modelId) {
  const modelConfig = getModelConfig(modelId);
  if (!modelConfig) {
    setStatus('Ausgewaehltes Modell wurde nicht gefunden.', true);
    return;
  }

  if (modelConfig.type === 'glb') {
    loadGlbModel(modelConfig);
    return;
  }

  loadProceduralModel(modelId);
}

function resetCamera() {
  if (currentModel) {
    fitCameraToObject(currentModel);
    return;
  }

  camera.position.set(2.2, 1.4, 3.3);
  controls.target.set(0, 0.8, 0);
  controls.update();
}

function updateToggleButton(button, enabled, onText, offText) {
  if (!button) return;
  button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
  button.textContent = enabled ? onText : offText;
}

function animate(timeMs) {
  requestAnimationFrame(animate);

  const time = timeMs * 0.001;

  if (tempObjectRefs.spinningRing) {
    tempObjectRefs.spinningRing.rotation.z = Math.sin(time * 1.25) * 0.35;
  }

  if (tempObjectRefs.movingTable) {
    const baseX = tempObjectRefs.movingTable.userData.baseX || 0;
    tempObjectRefs.movingTable.position.x = baseX + Math.sin(time * 1.1) * 0.08;
  }

  if (tempObjectRefs.probeHead) {
    tempObjectRefs.probeHead.rotation.y = Math.sin(time * 2.0) * 0.45;
  }

  if (currentModel && pulseEnabled) {
    const pulseScale = baseScale * (1 + Math.sin(time * 2.4) * 0.03);
    currentModel.scale.setScalar(pulseScale);
  }

  controls.update();
  renderer.render(scene, camera);
}

modelScaleRange?.addEventListener('input', (event) => {
  baseScale = Number(event.target.value);
  if (!pulseEnabled) {
    updateModelScale();
  }
});

btnLoadModel?.addEventListener('click', () => {
  loadModel(modelSelect?.value);
});

modelSelect?.addEventListener('change', () => {
  loadModel(modelSelect.value);
});

btnResetCamera?.addEventListener('click', () => {
  resetCamera();
});

btnToggleAutoRotate?.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  controls.autoRotateSpeed = 1.3;
  updateToggleButton(btnToggleAutoRotate, controls.autoRotate, 'Auto-Rotate an', 'Auto-Rotate aus');
});

btnToggleWireframe?.addEventListener('click', () => {
  wireframeEnabled = !wireframeEnabled;
  setWireframe(wireframeEnabled);
  updateToggleButton(btnToggleWireframe, wireframeEnabled, 'Wireframe an', 'Wireframe aus');
});

btnTogglePulse?.addEventListener('click', () => {
  pulseEnabled = !pulseEnabled;
  if (!pulseEnabled) {
    updateModelScale();
  }
  updateToggleButton(btnTogglePulse, pulseEnabled, 'Pulse an', 'Pulse aus');
});

window.addEventListener('resize', resizeRenderer);

async function initViewer() {
  await loadModelManifest();
  populateModelSelect();
  resizeRenderer();

  if (modelSelect?.value) {
    loadModel(modelSelect.value);
  } else if (builtInModels[0]) {
    loadModel(builtInModels[0].id);
  }

  animate(0);
}

initViewer();
