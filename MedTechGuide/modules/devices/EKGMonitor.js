importà*àasàTHREEàfromà'three';
importà{àcreateEKGCanvasà}àfromà'../core/SignalCanvases.js';

exportàfunctionàcreateEKGMonitor(getHeartRate)à{
ààconstàrootà=ànewàTHREE.Group();
ààroot.nameà=à'ekg-root';

ààconstàbodyMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#e7edf7',àroughness:à0.4,àmetalness:à0.15à});
ààconstàtrimMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#2a3952',àroughness:à0.55,àmetalness:à0.25à});

ààconstàbodyà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(3.7,à2.25,à0.95),àbodyMat);
ààbody.position.yà=à0.58;
ààroot.add(body);

ààconstàbezelà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(3.2,à1.85,à0.13),àtrimMat);
ààbezel.position.set(0,à0.66,à0.53);
ààroot.add(bezel);

ààconstàekgCanvasà=àcreateEKGCanvas();
ààconstàscreenTextureà=ànewàTHREE.CanvasTexture(ekgCanvas.canvas);
ààscreenTexture.colorSpaceà=àTHREE.SRGBColorSpace;
ààscreenTexture.needsUpdateà=àtrue;

ààconstàscreenà=ànewàTHREE.Mesh(
àààànewàTHREE.PlaneGeometry(2.9,à1.6),
àààànewàTHREE.MeshBasicMaterial({àmap:àscreenTextureà})
àà);
ààscreen.position.set(0,à0.66,à0.6);
ààroot.add(screen);

ààconstàstandà=ànewàTHREE.Mesh(newàTHREE.CylinderGeometry(0.14,à0.2,à0.55,à26),àtrimMat);
ààstand.position.set(0,à-0.75,à0);
ààroot.add(stand);

ààconstàbaseà=ànewàTHREE.Mesh(newàTHREE.CylinderGeometry(0.9,à1.1,à0.15,à32),àtrimMat);
ààbase.position.set(0,à-1.07,à0);
ààroot.add(base);

ààconstàknobà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.12,à0.12,à0.08,à24),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#49b9ff',àemissive:à'#0f3f64',àemissiveIntensity:à0.45à})
àà);
ààknob.position.set(1.45,à-0.1,à0.54);
ààknob.rotation.xà=àMath.PIà/à2;
ààknob.nameà=à'ekg-knob';
ààroot.add(knob);

ààconstàcableà=ànewàTHREE.Mesh(
àààànewàTHREE.TorusGeometry(0.84,à0.06,à12,à60,àMath.PIà*à1.25),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#151d2d',àroughness:à0.75à})
àà);
ààcable.rotation.set(0.6,à0.2,à0.2);
ààcable.position.set(1.7,à-0.68,à-0.3);
ààroot.add(cable);

ààconstàinteractiveà=à[
àààà{
ààààààmesh:àknob,
ààààààtitle:à'EKGàSteuerknopf',
ààààààtext:à'DieàHerzfrequenzàwirdàüberàdenàSlideràlinksàeingestellt.àHöhereàWerteàverdichtenàdieàQRS-Komplexe.',
ààààààaction:à'explain-ekg',
àààà},
àà];

ààreturnà{
ààààid:à'ekg',
ààààname:à'EKG-Monitor',
ààààroot,
ààààinteractive,
ààààdescription:
àààààà'MonitoràmitàanimierteràEKG-LinieàaufàCanvas-Textur.àDeràHerzfrequenz-SlideràverändertàdieàKurveàinàEchtzeit.',
ààààonActivate()à{},
ààààonDeactivate()à{},
ààààupdate(_delta,àelapsed)à{
ààààààconstàheartRateà=àgetHeartRate();
ààààààekgCanvas.draw({àheartRate,àtime:àelapsedà});
ààààààscreenTexture.needsUpdateà=àtrue;

ààààààknob.rotation.zà=àMath.sin(elapsedà*à2.2)à*à0.05;
ààààààroot.rotation.yà=àMath.sin(elapsedà*à0.35)à*à0.03;
àààà},
àà};
}
