importà*àasàTHREEàfromà'three';
importà{àcreatePulseDisplayCanvasà}àfromà'../core/SignalCanvases.js';

exportàfunctionàcreatePulseOximeter()à{
ààconstàrootà=ànewàTHREE.Group();
ààroot.nameà=à'pulse-root';

ààconstàshellMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#d6dde7',àroughness:à0.35,àmetalness:à0.18à});
ààconstàdarkMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#263246',àroughness:à0.55,àmetalness:à0.15à});
ààconstàdisplayMatà=ànewàTHREE.MeshStandardMaterial({àcolor:à'#101e3b',àemissive:à'#07204a',àroughness:à0.2à});

ààconstàbottomShellà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(3.2,à0.8,à1.8),àshellMat);
ààbottomShell.position.yà=à-0.45;
ààroot.add(bottomShell);

ààconstàtopShellà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(3.2,à0.62,à1.8),àshellMat);
ààtopShell.position.yà=à0.56;
ààroot.add(topShell);

ààconstàhingeà=ànewàTHREE.Mesh(newàTHREE.CylinderGeometry(0.14,à0.14,à1.82,à28),àdarkMat);
ààhinge.rotation.zà=àMath.PIà/à2;
ààhinge.position.yà=à0.07;
ààhinge.position.xà=à-1.56;
ààroot.add(hinge);

ààconstàsoftPadà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(1.9,à0.35,à1.15),àdarkMat);
ààsoftPad.position.set(0.46,à0.05,à0);
ààroot.add(softPad);

ààconstàdisplayPanelà=ànewàTHREE.Mesh(newàTHREE.PlaneGeometry(2.3,à1.05),àdisplayMat);
ààdisplayPanel.position.set(0.45,à0.89,à0.91);
ààroot.add(displayPanel);

ààconstàpulseCanvasà=àcreatePulseDisplayCanvas();
ààconstàpulseTextureà=ànewàTHREE.CanvasTexture(pulseCanvas.canvas);
ààpulseTexture.colorSpaceà=àTHREE.SRGBColorSpace;
ààpulseTexture.needsUpdateà=àtrue;

ààconstàdisplayScreenà=ànewàTHREE.Mesh(
àààànewàTHREE.PlaneGeometry(2.08,à0.9),
àààànewàTHREE.MeshBasicMaterial({àmap:àpulseTextureà})
àà);
ààdisplayScreen.position.set(0.45,à0.89,à0.93);
ààroot.add(displayScreen);

ààconstàledà=ànewàTHREE.Mesh(
àààànewàTHREE.SphereGeometry(0.1,à18,à18),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#ff3b3b',àemissive:à'#7c0000',àemissiveIntensity:à1.6à})
àà);
ààled.position.set(-0.3,à0.02,à0);
ààled.nameà=à'pulse-led';
ààroot.add(led);

ààconstàaccentRingà=ànewàTHREE.Mesh(
àààànewàTHREE.TorusGeometry(0.22,à0.03,à14,à32),
àààànewàTHREE.MeshStandardMaterial({àcolor:à'#7a90aa',àroughness:à0.3,àmetalness:à0.55à})
àà);
ààaccentRing.rotation.yà=àMath.PIà/à2;
ààaccentRing.position.set(1.48,à0.07,à0);
ààroot.add(accentRing);

ààconstàinteractiveà=à[
àààà{
ààààààmesh:àled,
ààààààtitle:à'PulsoximeteràLED',
ààààààtext:à'DieàroteàLEDàsendetàLichtàdurchàdenàFinger.àAusàderàAbschwächungàwirdàdieàSauerstoffsättigungà(SpO——)àbestimmt.',
ààààààaction:à'explain-led',
àààà},
àà];

ààconstàstateà=à{
ààààoxygen:à98,
ààààpulse:à72,
ààààphase:à0,
àà};

ààreturnà{
ààààid:à'pulse',
ààààname:à'Pulsoximeter',
ààààroot,
ààààinteractive,
ààààdescription:
àààààà'Clip-DesignàmitàLED-LichtquelleàundàDisplay.àDasàDisplayàzeigtàanimierteàSpO——-WerteàundàeineàPulswelle.',
ààààonActivate()à{},
ààààonDeactivate()à{},
ààààupdate(delta,àelapsed)à{
ààààààstate.phaseà+=àdelta;
ààààààstate.oxygenà=à97à+àMath.round(Math.sin(state.phaseà*à0.5)à*à1);
ààààààstate.pulseà=à70à+àMath.round(Math.sin(state.phaseà*à1.7)à*à4);

ààààààpulseCanvas.draw({àoxygen:àstate.oxygen,àpulse:àstate.pulse,àtime:àelapsedà});
ààààààpulseTexture.needsUpdateà=àtrue;

ààààààled.material.emissiveIntensityà=à1.25à+àMath.sin(elapsedà*à5.6)à*à0.35;
ààààààroot.rotation.yà=àMath.sin(elapsedà*à0.45)à*à0.06;
àààà},
àà};
}
