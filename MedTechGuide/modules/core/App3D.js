importà*àasàTHREEàfromà'three';
importà{àOrbitControlsà}àfromà'three/addons/controls/OrbitControls.js';
importà{àcreatePulseOximeterà}àfromà'../devices/PulseOximeter.js';
importà{àcreateEKGMonitorà}àfromà'../devices/EKGMonitor.js';
importà{àcreateBloodPressureMonitorà}àfromà'../devices/BloodPressureMonitor.js';

exportàclassàApp3Dà{
ààconstructor({àcanvas,àinfoPanel,àinfoText,àheartRateSlider,àpressureFill,àbpResultà})à{
ààààthis.canvasà=àcanvas;
ààààthis.infoPanelà=àinfoPanel;
ààààthis.infoTextà=àinfoText;
ààààthis.heartRateSliderà=àheartRateSlider;
ààààthis.pressureFillà=àpressureFill;
ààààthis.bpResultà=àbpResult;

ààààthis.sceneà=ànewàTHREE.Scene();
ààààthis.scene.backgroundà=ànewàTHREE.Color('#070d1c');

ààààthis.cameraà=ànewàTHREE.PerspectiveCamera(45,à1,à0.1,à100);
ààààthis.camera.position.set(5.6,à3.4,à6.3);

ààààthis.rendererà=ànewàTHREE.WebGLRenderer({àcanvas:àthis.canvas,àantialias:àtrueà});
ààààthis.renderer.setPixelRatio(Math.min(window.devicePixelRatio,à2));
ààààthis.renderer.outputColorSpaceà=àTHREE.SRGBColorSpace;

ààààthis.clockà=ànewàTHREE.Clock();

ààààthis.controlsà=ànull;
ààààthis.raycasterà=ànewàTHREE.Raycaster();
ààààthis.pointerà=ànewàTHREE.Vector2();

ààààthis.devicesà=ànewàMap();
ààààthis.activeDeviceIdà=à'pulse';
ààààthis.activeDeviceà=ànull;
ààààthis.deviceSwapà=ànull;

ààààthis.interactiveLookupà=ànewàMap();

ààààthis.bpSimà=à{
ààààààrunning:àfalse,
ààààààprogress:à0,
ààààààresultShown:àfalse,
àààà};
àà}

ààinit()à{
ààààthis.setupLights();
ààààthis.setupEnvironment();
ààààthis.setupControls();
ààààthis.setupDevices();
ààààthis.bindEvents();
ààààthis.onResize();
ààààthis.setDevice('pulse',àtrue);
ààààthis.animate();
àà}

ààsetupLights()à{
ààààconstàambientà=ànewàTHREE.AmbientLight('#b7d0ff',à0.55);
ààààthis.scene.add(ambient);

ààààconstàkeyà=ànewàTHREE.DirectionalLight('#d7e8ff',à1.2);
ààààkey.position.set(4,à8,à6);
ààààthis.scene.add(key);

ààààconstàfillà=ànewàTHREE.PointLight('#65a9ff',à1.4,à30);
ààààfill.position.set(-5,à2,à4);
ààààthis.scene.add(fill);

ààààconstàrimà=ànewàTHREE.PointLight('#4af7b2',à0.45,à20);
ààààrim.position.set(0,à2,à-6);
ààààthis.scene.add(rim);
àà}

ààsetupEnvironment()à{
ààààconstàfloorà=ànewàTHREE.Mesh(
àààààànewàTHREE.CircleGeometry(7.5,à80),
àààààànewàTHREE.MeshStandardMaterial({
ààààààààcolor:à'#0f1930',
ààààààààroughness:à0.82,
ààààààààmetalness:à0.05,
àààààà})
àààà);
ààààfloor.rotation.xà=à-Math.PIà/à2;
ààààfloor.position.yà=à-1.25;
ààààthis.scene.add(floor);

ààààconstàringà=ànewàTHREE.Mesh(
àààààànewàTHREE.TorusGeometry(3.8,à0.04,à10,à120),
àààààànewàTHREE.MeshStandardMaterial({àcolor:à'#244270',àemissive:à'#10233f',àemissiveIntensity:à0.4à})
àààà);
ààààring.rotation.xà=à-Math.PIà/à2;
ààààring.position.yà=à-1.22;
ààààthis.scene.add(ring);
àà}

ààsetupControls()à{
ààààthis.controlsà=ànewàOrbitControls(this.camera,àthis.renderer.domElement);
ààààthis.controls.enableDampingà=àtrue;
ààààthis.controls.dampingFactorà=à0.08;
ààààthis.controls.target.set(0,à0.2,à0);
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
