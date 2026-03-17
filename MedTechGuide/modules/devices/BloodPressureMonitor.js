import * as THREE from 'three';

export function createBloodPressureMonitor(onStartMeasure) {
  const root = new THREE.Group();
  root.name = 'blood-root';

  const bodyMat = new THREE.MeshStandardMaterial({ color: '#e5ebf2', roughness: 0.38, metalness: 0.12 });
  const darkMat = new THREE.MeshStandardMaterial({ color: '#23324b', roughness: 0.52, metalness: 0.2 });

  const unit = new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.25, 1.55), bodyMat);
  unit.position.y = -0.05;
  root.add(unit);

  const displayFrame = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.85, 0.14), darkMat);
  displayFrame.position.set(-0.68, 0.2, 0.85);
  root.add(displayFrame);

  const display = new THREE.Mesh(
    new THREE.PlaneGeometry(1.58, 0.62),
    new THREE.MeshStandardMaterial({ color: '#0e2a48', emissive: '#061428', emissiveIntensity: 0.45 })
  );
  display.position.set(-0.68, 0.2, 0.93);
  root.add(display);

  const startButton = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 0.09, 26),
    new THREE.MeshStandardMaterial({ color: '#45d980', emissive: '#0a5029', emissiveIntensity: 0.55 })
  );
  startButton.position.set(1.18, 0.14, 0.82);
  startButton.rotation.x = Math.PI / 2;
  startButton.name = 'bp-start';
  root.add(startButton);

  const hose = new THREE.Mesh(
    new THREE.TorusGeometry(1.06, 0.06, 14, 52, Math.PI * 1.32),
    new THREE.MeshStandardMaterial({ color: '#111722', roughness: 0.8 })
  );
  hose.rotation.set(0.25, 0.15, 0.2);
  hose.position.set(1.58, -0.32, -0.12);
  root.add(hose);

  const cuffBand = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.62, 1.4, 40, 1, true),
    new THREE.MeshStandardMaterial({ color: '#2d3b55', roughness: 0.65, side: THREE.DoubleSide })
  );
  cuffBand.rotation.z = Math.PI / 2;
  cuffBand.position.set(2.95, -0.22, 0.1);
  root.add(cuffBand);

  const cuffInner = new THREE.Mesh(
    new THREE.CylinderGeometry(0.44, 0.44, 1.38, 32),
    new THREE.MeshStandardMaterial({ color: '#151f2f', roughness: 0.82 })
  );
  cuffInner.rotation.z = Math.PI / 2;
  cuffInner.position.set(2.95, -0.22, 0.1);
  root.add(cuffInner);

  const interactive = [
    {
      mesh: startButton,
      title: 'Start-Taste',
      text: 'Startet die Messung. Der Druck steigt zuerst an und fällt dann kontrolliert zur systolischen/diastolischen Erkennung.',
      action: 'start-bp',
    },
  ];

  return {
    id: 'blood',
    name: 'Blutdruckmessgerät',
    root,
    interactive,
    description:
      'Messgerät mit Starttaste, Schlauch und Manschette. Nach Start simuliert das System den Manschettendruck und zeigt ein Ergebnis.',
    onActivate() {},
    onDeactivate() {},
    update(_delta, elapsed) {
      startButton.material.emissiveIntensity = 0.35 + Math.sin(elapsed * 2.8) * 0.2;
      root.rotation.y = Math.sin(elapsed * 0.42) * 0.05;
    },
    triggerStart() {
      onStartMeasure();
    },
  };
}
