import * as THREE from 'three';
import { createEKGCanvas } from '../core/SignalCanvases.js';

export function createEKGMonitor(getHeartRate) {
  const root = new THREE.Group();
  root.name = 'ekg-root';

  const bodyMat = new THREE.MeshStandardMaterial({ color: '#e7edf7', roughness: 0.4, metalness: 0.15 });
  const trimMat = new THREE.MeshStandardMaterial({ color: '#2a3952', roughness: 0.55, metalness: 0.25 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(3.7, 2.25, 0.95), bodyMat);
  body.position.y = 0.58;
  root.add(body);

  const bezel = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.85, 0.13), trimMat);
  bezel.position.set(0, 0.66, 0.53);
  root.add(bezel);

  const ekgCanvas = createEKGCanvas();
  const screenTexture = new THREE.CanvasTexture(ekgCanvas.canvas);
  screenTexture.colorSpace = THREE.SRGBColorSpace;
  screenTexture.needsUpdate = true;

  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(2.9, 1.6),
    new THREE.MeshBasicMaterial({ map: screenTexture })
  );
  screen.position.set(0, 0.66, 0.6);
  root.add(screen);

  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.55, 26), trimMat);
  stand.position.set(0, -0.75, 0);
  root.add(stand);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.15, 32), trimMat);
  base.position.set(0, -1.07, 0);
  root.add(base);

  const knob = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.12, 0.08, 24),
    new THREE.MeshStandardMaterial({ color: '#49b9ff', emissive: '#0f3f64', emissiveIntensity: 0.45 })
  );
  knob.position.set(1.45, -0.1, 0.54);
  knob.rotation.x = Math.PI / 2;
  knob.name = 'ekg-knob';
  root.add(knob);

  const cable = new THREE.Mesh(
    new THREE.TorusGeometry(0.84, 0.06, 12, 60, Math.PI * 1.25),
    new THREE.MeshStandardMaterial({ color: '#151d2d', roughness: 0.75 })
  );
  cable.rotation.set(0.6, 0.2, 0.2);
  cable.position.set(1.7, -0.68, -0.3);
  root.add(cable);

  const interactive = [
    {
      mesh: knob,
      title: 'EKG Steuerknopf',
      text: 'Die Herzfrequenz wird über den Slider links eingestellt. Höhere Werte verdichten die QRS-Komplexe.',
      action: 'explain-ekg',
    },
  ];

  return {
    id: 'ekg',
    name: 'EKG-Monitor',
    root,
    interactive,
    description:
      'Monitor mit animierter EKG-Linie auf Canvas-Textur. Der Herzfrequenz-Slider verändert die Kurve in Echtzeit.',
    onActivate() {},
    onDeactivate() {},
    update(_delta, elapsed) {
      const heartRate = getHeartRate();
      ekgCanvas.draw({ heartRate, time: elapsed });
      screenTexture.needsUpdate = true;

      knob.rotation.z = Math.sin(elapsed * 2.2) * 0.05;
      root.rotation.y = Math.sin(elapsed * 0.35) * 0.03;
    },
  };
}
