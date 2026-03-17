import * as THREE from 'three';
import { createPulseDisplayCanvas } from '../core/SignalCanvases.js';

export function createPulseOximeter() {
  const root = new THREE.Group();
  root.name = 'pulse-root';

  const shellMat = new THREE.MeshStandardMaterial({ color: '#d6dde7', roughness: 0.35, metalness: 0.18 });
  const darkMat = new THREE.MeshStandardMaterial({ color: '#263246', roughness: 0.55, metalness: 0.15 });
  const displayMat = new THREE.MeshStandardMaterial({ color: '#101e3b', emissive: '#07204a', roughness: 0.2 });

  const bottomShell = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.8, 1.8), shellMat);
  bottomShell.position.y = -0.45;
  root.add(bottomShell);

  const topShell = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.62, 1.8), shellMat);
  topShell.position.y = 0.56;
  root.add(topShell);

  const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.82, 28), darkMat);
  hinge.rotation.z = Math.PI / 2;
  hinge.position.y = 0.07;
  hinge.position.x = -1.56;
  root.add(hinge);

  const softPad = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.35, 1.15), darkMat);
  softPad.position.set(0.46, 0.05, 0);
  root.add(softPad);

  const displayPanel = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.05), displayMat);
  displayPanel.position.set(0.45, 0.89, 0.91);
  root.add(displayPanel);

  const pulseCanvas = createPulseDisplayCanvas();
  const pulseTexture = new THREE.CanvasTexture(pulseCanvas.canvas);
  pulseTexture.colorSpace = THREE.SRGBColorSpace;
  pulseTexture.needsUpdate = true;

  const displayScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(2.08, 0.9),
    new THREE.MeshBasicMaterial({ map: pulseTexture })
  );
  displayScreen.position.set(0.45, 0.89, 0.93);
  root.add(displayScreen);

  const led = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 18, 18),
    new THREE.MeshStandardMaterial({ color: '#ff3b3b', emissive: '#7c0000', emissiveIntensity: 1.6 })
  );
  led.position.set(-0.3, 0.02, 0);
  led.name = 'pulse-led';
  root.add(led);

  const accentRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.22, 0.03, 14, 32),
    new THREE.MeshStandardMaterial({ color: '#7a90aa', roughness: 0.3, metalness: 0.55 })
  );
  accentRing.rotation.y = Math.PI / 2;
  accentRing.position.set(1.48, 0.07, 0);
  root.add(accentRing);

  const interactive = [
    {
      mesh: led,
      title: 'Pulsoximeter LED',
      text: 'Die rote LED sendet Licht durch den Finger. Aus der Abschwächung wird die Sauerstoffsättigung (SpO₂) bestimmt.',
      action: 'explain-led',
    },
  ];

  const state = {
    oxygen: 98,
    pulse: 72,
    phase: 0,
  };

  return {
    id: 'pulse',
    name: 'Pulsoximeter',
    root,
    interactive,
    description:
      'Clip-Design mit LED-Lichtquelle und Display. Das Display zeigt animierte SpO₂-Werte und eine Pulswelle.',
    onActivate() {},
    onDeactivate() {},
    update(delta, elapsed) {
      state.phase += delta;
      state.oxygen = 97 + Math.round(Math.sin(state.phase * 0.5) * 1);
      state.pulse = 70 + Math.round(Math.sin(state.phase * 1.7) * 4);

      pulseCanvas.draw({ oxygen: state.oxygen, pulse: state.pulse, time: elapsed });
      pulseTexture.needsUpdate = true;

      led.material.emissiveIntensity = 1.25 + Math.sin(elapsed * 5.6) * 0.35;
      root.rotation.y = Math.sin(elapsed * 0.45) * 0.06;
    },
  };
}
