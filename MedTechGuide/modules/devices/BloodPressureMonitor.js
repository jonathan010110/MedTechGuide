importà*àasàTHREEàfromà'three';

exportàfunctionàcreateBloodPressureMonitor(onStartMeasure)à{
ààconstàrootà=ànewàTHREE.Group();
ààroot.nameà=à'blood-root';

ààconstàbodyMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#e5ebf2',àroughness:à0.38,àmetalness:à0.12à});
ààconstàdarkMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#23324b',àroughness:à0.52,àmetalness:à0.2à});

ààconstàunità=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(3.5,à1.25,à1.55),àbodyMat);
ààunit.position.yà=à-0.05;
ààroot.add(unit);

ààconstàdisplayFrameà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(1.85,à0.85,à0.14),àdarkMat);
ààdisplayFrame.position.set(-0.68,à0.2,à0.85);
ààroot.add(displayFrame);

ààconstàdisplayà=ànewàTHREE.Mesh(
àààànewàTHREE.PlaneGeometry(1.58,à0.62),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#0e2a48',àemissive:à'#061428',àemissiveIntensity:à0.45à})
àà);
ààdisplay.position.set(-0.68,à0.2,à0.93);
ààroot.add(display);

ààconstàstartButtonà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.22,à0.22,à0.09,à26),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#45d980',àemissive:à'#0a5029',àemissiveIntensity:à0.55à})
àà);
ààstartButton.position.set(1.18,à0.14,à0.82);
ààstartButton.rotation.xà=àMath.PIà/à2;
ààstartButton.nameà=à'bp-start';
ààroot.add(startButton);

ààconstàhoseà=ànewàTHREE.Mesh(
àààànewàTHREE.TorusGeometry(1.06,à0.06,à14,à52,àMath.PIà*à1.32),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#111722',àroughness:à0.8à})
àà);
ààhose.rotation.set(0.25,à0.15,à0.2);
ààhose.position.set(1.58,à-0.32,à-0.12);
ààroot.add(hose);

ààconstàcuffBandà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.62,à0.62,à1.4,à40,à1,àtrue),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#2d3b55',àroughness:à0.65,àside:àTHREE.DoubleSideà})
àà);
ààcuffBand.rotation.zà=àMath.PIà/à2;
ààcuffBand.position.set(2.95,à-0.22,à0.1);
ààroot.add(cuffBand);

ààconstàcuffInnerà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.44,à0.44,à1.38,à32),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#151f2f',àroughness:à0.82à})
àà);
ààcuffInner.rotation.zà=àMath.PIà/à2;
ààcuffInner.position.set(2.95,à-0.22,à0.1);
ààroot.add(cuffInner);

ààconstàinteractiveà=à[
àààà{
ààààààmesh:àstartButton,
ààààààtitle:à'Start-Taste',
ààààààtext:à'StartetàdieàMessung.àDeràDruckàsteigtàzuerstàanàundàfälltàdannàkontrolliertàzuràsystolischen/diastolischenàErkennung.',
ààààààaction:à'start-bp',
àààà},
àà];

ààreturnà{
ààààid:à'blood',
ààààname:à'Blutdruckmessgerät',
ààààroot,
ààààinteractive,
ààààdescription:
àààààà'MessgerätàmitàStarttaste,àSchlauchàundàManschette.àNachàStartàsimuliertàdasàSystemàdenàManschettendruckàundàzeigtàeinàErgebnis.',
ààààonActivate()à{},
ààààonDeactivate()à{},
ààààupdate(_delta,àelapsed)à{
ààààààstartButton.material.emissiveIntensityà=à0.35à+àMath.sin(elapsedà*à2.8)à*à0.2;
ààààààroot.rotation.yà=àMath.sin(elapsedà*à0.42)à*à0.05;
àààà},
ààààtriggerStart()à{
ààààààonStartMeasure();
àààà},
àà};
}
