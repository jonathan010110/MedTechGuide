// Simple 3D Viewer Script - Fallback Mode
// Wait for THREE.js to be available, then initialize 3D viewers

const waitForTHREE = () => {
  return new Promise((resolve) => {
    const checkTHREE = () => {
      if (typeof THREE !== 'undefined') {
        resolve();
      } else {
        setTimeout(checkTHREE, 100);
      }
    };
    checkTHREE();
  });
};

// Fallback factory functions for models
const createCTScannerModel = () => {
  console.log('[3D Viewer] Creating CT Scanner model');
  const group = new THREE.Group();
  
  const baseGeo = new THREE.BoxGeometry(2.4, 0.28, 1.55);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0xe6edf8, roughness: 0.7, metalness: 0.1 });
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.position.y = 0.14;
  group.add(base);
  
  const gantryGeo = new THREE.TorusGeometry(0.78, 0.22, 22, 80);
  const gantryMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.05 });
  const gantry = new THREE.Mesh(gantryGeo, gantryMat);
  gantry.rotation.y = Math.PI / 2;
  gantry.position.set(-0.35, 0.94, 0);
  group.add(gantry);
  
  const innerGeo = new THREE.TorusGeometry(0.5, 0.07, 20, 60);
  const innerMat = new THREE.MeshStandardMaterial({ color: 0x93c5fd, roughness: 0.3, metalness: 0.3 });
  const inner = new THREE.Mesh(innerGeo, innerMat);
  inner.rotation.y = Math.PI / 2;
  inner.position.copy(gantry.position);
  group.add(inner);
  
  group.position.y = 0.02;
  return group;
};

function initializeViewers() {
  console.log('[3D Viewer] Initializing 3D viewers...');
  
  document.querySelectorAll('[data-three-viewer]').forEach((section) => {
    try {
      const viewer = section.querySelector('.imaging-3d-viewer');
      const statusEl = section.querySelector('.imaging-3d-status');
      const title = section.dataset.modelLabel || '3D-Modell';
      
      if (!viewer) {
        console.warn('[3D Viewer] No viewer container');
        return;
      }
      
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf4f9ff);
      
      const width = viewer.clientWidth || 600;
      const height = viewer.clientHeight || 400;
      const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
      camera.position.set(2.2, 1.4, 3.3);
      
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      
      viewer.appendChild(renderer.domElement);
      
      const ambientLight = new THREE.HemisphereLight(0xffffff, 0xb3d7ff, 1.1);
      scene.add(ambientLight);
      
      const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
      keyLight.position.set(4, 7, 4);
      scene.add(keyLight);
      
      const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.55);
      fillLight.position.set(-5, 3, -4);
      scene.add(fillLight);
      
      const groundGeo = new THREE.CircleGeometry(3, 64);
      const groundMat = new THREE.MeshStandardMaterial({ color: 0xd8e8fb, roughness: 0.95, metalness: 0 });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -0.01;
      scene.add(ground);
      
      let model = createCTScannerModel();
      scene.add(model);
      
      const animate = () => {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.0005;
        model.rotation.y = Math.sin(time) * 0.5;
        renderer.render(scene, camera);
      };
      
      animate();
      
      if (statusEl) {
        statusEl.textContent = title + ' - ✓ 3D-Modell aktiv';
        statusEl.style.color = '#0f766e';
      }
      
    } catch (err) {
      const statusEl = section.querySelector('.imaging-3d-status');
      if (statusEl) {
        statusEl.textContent = 'Error: ' + err.message;
        statusEl.style.color = '#b91c1c';
      }
    }
  });
}

waitForTHREE().then(initializeViewers);
