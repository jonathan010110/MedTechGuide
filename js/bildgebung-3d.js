importà*àasàTHREEàfromà'three';
importà{àOrbitControlsà}àfromà'three/addons/controls/OrbitControls.js';
importà{àGLTFLoaderà}àfromà'three/addons/loaders/GLTFLoader.js';

constàviewerà=àdocument.getElementById('imaging3DViewer');
constàstatusElà=àdocument.getElementById('glbStatus');
constàmodelSelectà=àdocument.getElementById('glbModelSelect');
constàmodelScaleRangeà=àdocument.getElementById('modelScaleRange');
constàbtnLoadModelà=àdocument.getElementById('btnLoadModel');
constàbtnResetCameraà=àdocument.getElementById('btnResetCamera');
constàbtnToggleAutoRotateà=àdocument.getElementById('btnToggleAutoRotate');
constàbtnToggleWireframeà=àdocument.getElementById('btnToggleWireframe');
constàbtnTogglePulseà=àdocument.getElementById('btnTogglePulse');

constàmanifestPathà=à'data/models/manifest.json';

ifà(!viewer)à{
ààthrowànewàError('3Dàvieweràcontainerànotàfound.');
}

constàsceneà=ànewàTHREE.Scene();
scene.backgroundà=ànewàTHREE.Color(0xf4f9ff);

constàcameraà=ànewàTHREE.PerspectiveCamera(55,à1,à0.1,à200);
camera.position.set(2.2,à1.4,à3.3);

constàrendererà=ànewàTHREE.WebGLRenderer({àantialias:àtrue,àalpha:àfalseà});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,à2));
renderer.outputColorSpaceà=àTHREE.SRGBColorSpace;
renderer.toneMappingà=àTHREE.ACESFilmicToneMapping;
viewer.appendChild(renderer.domElement);

constàcontrolsà=ànewàOrbitControls(camera,àrenderer.domElement);
controls.enableDampingà=àtrue;
controls.dampingFactorà=à0.06;
controls.minDistanceà=à0.8;
controls.maxDistanceà=à12;
controls.target.set(0,à0.8,à0);

constàambientLightà=ànewàTHREE.HemisphereLight(0xffffff,à0xb3d7ff,à1.1);
scene.add(ambientLight);

constàkeyLightà=ànewàTHREE.DirectionalLight(0xffffff,à1.25);
keyLight.position.set(4,à7,à4);
scene.add(keyLight);

constàrimLightà=ànewàTHREE.DirectionalLight(0x88bfff,à0.6);
rimLight.position.set(-5,à3,à-4);
scene.add(rimLight);

constàgroundà=ànewàTHREE.Mesh(
àànewàTHREE.CircleGeometry(3,à64),
àànewàTHREE.MeshStandardMaterial({àcolor:à0xd8e8fb,àroughness:à0.95,àmetalness:à0.0à})
);
ground.rotation.xà=à-Math.PIà/à2;
ground.position.yà=à-0.01;
scene.add(ground);

letàcurrentModelà=ànull;
letàbaseScaleà=à1;
letàpulseEnabledà=àfalse;
letàwireframeEnabledà=àfalse;
letàcurrentModelConfigà=ànull;

constàgltfLoaderà=ànewàGLTFLoader();

constàbuiltInModelsà=à[
àà{àid:à'ct-scanner',àlabel:à'CT-Scanner',àtype:à'procedural'à},
àà{àid:à'mrt-scanner',àlabel:à'MRT-Scanner',àtype:à'procedural'à},
àà{àid:à'ultraschall',àlabel:à'Ultraschallgeraet',àtype:à'procedural'à}
];

constàlocalModelsà=à[];

constàtempObjectRefsà=à{
ààmovingTable:ànull,
ààspinningRing:ànull,
ààprobeHead:ànull
};

functionàmakeMaterial(color,àmetalnessà=à0.25,àroughnessà=à0.45)à{
ààreturnànewàTHREE.MeshStandardMaterial({àcolor,àmetalness,àroughnessà});
}

functionàcreateRoundedBox(width,àheight,àdepth,àradius,àsmoothness,àmaterial)à{
ààconstàshapeà=ànewàTHREE.Shape();
ààconstàxà=à-widthà/à2;
ààconstàyà=à-heightà/à2;
ààshape.moveTo(xà+àradius,ày);
ààshape.lineTo(xà+àwidthà-àradius,ày);
ààshape.quadraticCurveTo(xà+àwidth,ày,àxà+àwidth,àyà+àradius);
ààshape.lineTo(xà+àwidth,àyà+àheightà-àradius);
ààshape.quadraticCurveTo(xà+àwidth,àyà+àheight,àxà+àwidthà-àradius,àyà+àheight);
ààshape.lineTo(xà+àradius,àyà+àheight);
ààshape.quadraticCurveTo(x,àyà+àheight,àx,àyà+àheightà-àradius);
ààshape.lineTo(x,àyà+àradius);
ààshape.quadraticCurveTo(x,ày,àxà+àradius,ày);

ààconstàgeometryà=ànewàTHREE.ExtrudeGeometry(shape,à{
ààààdepth,
ààààbevelEnabled:àtrue,
ààààbevelSegments:àsmoothness,
ààààsteps:à1,
ààààbevelSize:àradiusà*à0.45,
ààààbevelThickness:àradiusà*à0.45,
ààààcurveSegments:àsmoothness
àà});
ààgeometry.center();
ààreturnànewàTHREE.Mesh(geometry,àmaterial);
}

functionàcreateCTScannerModel)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàbaseà=àcreateRoundedBox(2.4,à0.28,à1.55,à0.08,à6,àmakeMaterial(0xe6edf8,à0.1,à0.7));
ààbase.position.yà=à0.14;
ààroot.add(base);

ààconstàgantryOuterà=ànewàTHREE.Mesh(
àààànewàTHREE.TorusGeometry(0.78,à0.22,à22,à80),
ààààmakeMaterial(0xffffff,à0.05,à0.5)
àà);
ààgantryOuter.rotation.yà=àMath.PIà/à2;
ààgantryOuter.position.set(-0.35,à0.94,à0);
ààroot.add(gantryOuter);

ààconstàgantryInnerà=ànewàTHREE.Mesh(
àààànewàTHREE.TorusGeometry(0.5,à0.07,à20,à60),
ààààmakeMaterial(0x93c5fd,à0.3,à0.3)
àà);
ààgantryInner.rotation.yà=àMath.PIà/à2;
ààgantryInner.position.copy(gantryOuter.position);
ààroot.add(gantryInner);
ààtempObjectRefs.spinningRingà=àgantryInner;

ààconstàtableRailà=ànewàTHREE.Mesh(
àààànewàTHREE.BoxGeometry(1.55,à0.12,à0.38),
ààààmakeMaterial(0xb6c6d9,à0.2,à0.6)
àà);
ààtableRail.position.set(0.45,à0.62,à0);
ààroot.add(tableRail);

ààconstàmovingTableà=ànewàTHREE.Mesh(
ààààcreateRoundedBox(0.95,à0.09,à0.42,à0.03,à4,àmakeMaterial(0xdce6f6,à0.05,à0.8)).geometry,
ààààmakeMaterial(0xdce6f6,à0.05,à0.8)
àà);
ààmovingTable.position.set(0.42,à0.72,à0);
ààmovingTable.userData.baseXà=àmovingTable.position.x;
ààroot.add(movingTable);
ààtempObjectRefs.movingTableà=àmovingTable;

ààroot.position.yà=à0.02;
ààreturnàroot;
}

functionàcreateMRTScannerModel)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàbodyà=àcreateRoundedBox(2.3,à1.4,à1.55,à0.18,à8,àmakeMaterial(0xf8fafc,à0.05,à0.7));
ààbody.position.set(0,à0.76,à0);
ààroot.add(body);

ààconstàtunnelà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.47,à0.47,à1.7,à48),
ààààmakeMaterial(0xe2e8f0,à0.05,à0.6)
àà);
ààtunnel.rotation.zà=àMath.PIà/à2;
ààtunnel.position.set(-0.1,à0.78,à0);
ààroot.add(tunnel);

ààconstàtunnelGlowà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.37,à0.37,à1.72,à48),
ààààmakeMaterial(0x60a5fa,à0.55,à0.25)
àà);
ààtunnelGlow.rotation.zà=àMath.PIà/à2;
ààtunnelGlow.position.copy(tunnel.position);
ààroot.add(tunnelGlow);
ààtempObjectRefs.spinningRingà=àtunnelGlow;

ààconstàbedà=ànewàTHREE.Mesh(
àààànewàTHREE.BoxGeometry(1.35,à0.1,à0.48),
ààààmakeMaterial(0xc7d2fe,à0.1,à0.65)
àà);
ààbed.position.set(0.65,à0.57,à0);
ààbed.userData.baseXà=àbed.position.x;
ààroot.add(bed);
ààtempObjectRefs.movingTableà=àbed;

ààreturnàroot;
}

functionàcreateUltrasoundModel)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàcartBaseà=ànewàTHREE.Mesh(
àààànewàTHREE.BoxGeometry(1.05,à0.95,à0.62),
ààààmakeMaterial(0xf1f5f9,à0.08,à0.65)
àà);
ààcartBase.position.set(0,à0.54,à0);
ààroot.add(cartBase);

ààconstàscreenà=ànewàTHREE.Mesh(
ààààcreateRoundedBox(0.66,à0.42,à0.05,à0.05,à6,àmakeMaterial(0x1e293b,à0.35,à0.2)).geometry,
ààààmakeMaterial(0x1e293b,à0.35,à0.2)
àà);
ààscreen.position.set(0,à1.23,à-0.06);
ààscreen.rotation.xà=à-0.2;
ààroot.add(screen);

ààconstàscreenGlowà=ànewàTHREE.Mesh(
àààànewàTHREE.PlaneGeometry(0.54,à0.29),
àààànewàTHREE.MeshStandardMaterial({àcolor:à0x38bdf8,àemissive:à0x0ea5e9,àemissiveIntensity:à0.5,àmetalness:à0.1,àroughness:à0.3à})
àà);
ààscreenGlow.position.set(0,à1.23,à-0.035);
ààscreenGlow.rotation.xà=à-0.2;
ààroot.add(screenGlow);

ààconstàarmà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.04,à0.04,à0.52,à24),
ààààmakeMaterial(0x94a3b8,à0.25,à0.4)
àà);
ààarm.position.set(0.38,à1.08,à0.05);
ààarm.rotation.zà=à0.55;
ààroot.add(arm);

ààconstàprobeà=ànewàTHREE.Mesh(
àààànewàTHREE.CapsuleGeometry(0.09,à0.28,à6,à18),
ààààmakeMaterial(0x2563eb,à0.2,à0.35)
àà);
ààprobe.position.set(0.55,à0.9,à0.18);
ààprobe.rotation.set(0.8,à0.4,à0.2);
ààroot.add(probe);
ààtempObjectRefs.probeHeadà=àprobe;

ààconstàwheelGeometryà=ànewàTHREE.CylinderGeometry(0.08,à0.08,à0.04,à22);
ààconstàwheelMaterialà=àmakeMaterial(0x111827,à0.15,à0.8);
ààconstàwheelPositionsà=à[
àààà[-0.4,à0.08,à-0.25],
àààà[0.4,à0.08,à-0.25],
àààà[-0.4,à0.08,à0.25],
àààà[0.4,à0.08,à0.25]
àà];
ààwheelPositions.forEach((pos)à=>à{
ààààconstàwheelà=ànewàTHREE.Mesh(wheelGeometry,àwheelMaterial);
ààààwheel.position.set(pos[0],àpos[1],àpos[2]);
ààààwheel.rotation.zà=àMath.PIà/à2;
ààààroot.add(wheel);
àà});

ààreturnàroot;
}

constàmodelFactoriesà=à{
àà'ct-scanner':àcreateCTScannerModel,
àà'mrt-scanner':àcreateMRTScannerModel,
ààultraschall:àcreateUltrasoundModel
};

functionàgetAllModels()à{
ààreturnà[...localModels,à...builtInModels];
}

functionàgetModelConfig(modelId)à{
ààreturnàgetAllModels().find((model)à=>àmodel.idà===àmodelId)à||ànull;
}

functionàpopulateModelSelect()à{
ààifà(!modelSelect)àreturn;

ààmodelSelect.innerHTMLà=à'';

ààgetAllModels().forEach((model)à=>à{
ààààconstàoptionà=àdocument.createElement('option');
ààààoption.valueà=àmodel.id;
ààààoption.textContentà=àmodel.typeà===à'glb'à?à`${model.label}à(GLB)`à:àmodel.label;
ààààmodelSelect.appendChild(option);
àà});
}

asyncàfunctionàloadModelManifest()à{
ààtryà{
ààààconstàresponseà=àawaitàfetch(manifestPath,à{àcache:à'no-store'à});
ààààifà(!response.ok)à{
ààààààreturn;
àààà}

ààààconstàmanifestà=àawaitàresponse.json();
ààààifà(!Array.isArray(manifest.models))à{
ààààààreturn;
àààà}

ààààmanifest.models.forEach((model)à=>à{
ààààààifà(!modelà||à!model.idà||à!model.pathà||à!model.label)à{
ààààààààreturn;
àààààà}

ààààààlocalModels.push({
ààààààààid:àmodel.id,
ààààààààlabel:àmodel.label,
ààààààààpath:àmodel.path,
ààààààààtype:à'glb'
àààààà});
àààà});
àà}àcatchà{
ààààsetStatus('ManifestàfueràlokaleàGLB-Dateienànichtàgeladen.àProgrammierteàModelleàbleibenàaktiv.');
àà}
}

functionàsetStatus(text,àisErrorà=àfalse)à{
ààifà(!statusEl)àreturn;
ààstatusEl.textContentà=àtext;
ààstatusEl.style.colorà=àisErrorà?à'#b91c1c'à:à'#1f2937';
}

functionàresizeRenderer()à{
ààconstàwidthà=àviewer.clientWidth;
ààconstàheightà=àviewer.clientHeight;
ààrenderer.setSize(width,àheight);
ààcamera.aspectà=àwidthà/àheight;
ààcamera.updateProjectionMatrix();
}

functionàsetWireframe(enabled)à{
ààifà(!currentModel)àreturn;

ààcurrentModel.traverse((obj)à=>à{
ààààifà(obj.isMeshà&&àobj.material)à{
ààààààifà(Array.isArray(obj.material))à{
ààààààààobj.material.forEach((material)à=>à{
ààààààààààmaterial.wireframeà=àenabled;
ààààààààààmaterial.needsUpdateà=àtrue;
àààààààà});
àààààà}àelseà{
ààààààààobj.material.wireframeà=àenabled;
ààààààààobj.material.needsUpdateà=àtrue;
àààààà}
àààà}
àà});
}

functionàfitCameraToObject(rootObject)à{
ààconstàboxà=ànewàTHREE.Box3().setFromObject(rootObject);
ààconstàsizeà=àbox.getSize(newàTHREE.Vector3());
ààconstàcenterà=àbox.getCenter(newàTHREE.Vector3());

ààconstàmaxDimà=àMath.max(size.x,àsize.y,àsize.z)à||à1;
ààconstàfovà=àcamera.fovà*à(Math.PIà/à180);
ààconstàdistanceà=àMath.abs((maxDimà/à2)à/àMath.tan(fovà/à2))à*à1.65;

ààcamera.position.set(center.xà+àdistanceà*à0.5,àcenter.yà+àdistanceà*à0.3,àcenter.zà+àdistance);
ààcontrols.target.copy(center);
ààcontrols.update();
}

functionàupdateModelScale()à{
ààifà(!currentModel)àreturn;
ààcurrentModel.scale.setScalar(baseScale);
}

functionàapplyCurrentModelFeatures()à{
ààupdateModelScale();
ààsetWireframe(wireframeEnabled);
ààfitCameraToObject(currentModel);
}

functionàremoveCurrentModel)à{
ààifà(!currentModel)àreturn;
ààscene.remove(currentModel);
ààcurrentModel.traverse((obj)à=>à{
ààààifà(obj.isMesh)à{
ààààààobj.geometry.dispose();
ààààààifà(Array.isArray(obj.material))à{
ààààààààobj.material.forEach((material)à=>àmaterial.dispose());
àààààà}àelseàifà(obj.material)à{
ààààààààobj.material.dispose();
àààààà}
àààà}
àà});
ààcurrentModelà=ànull;
ààcurrentModelConfigà=ànull;
ààtempObjectRefs.movingTableà=ànull;
ààtempObjectRefs.spinningRingà=ànull;
ààtempObjectRefs.probeHeadà=ànull;
}

functionàloadProceduralModel(modelKey)à{
ààifà(!modelKeyà||à!modelFactories[modelKey])àreturn;

ààsetStatus('3D-ModellàwirdàimàCodeàerzeugt...');
ààremoveCurrentModel);
ààtryà{
ààààcurrentModelConfigà=àgetModelConfig(modelKey);
ààààcurrentModelà=àmodelFactories[modelKey]();
ààààcurrentModel.position.set(0,à0,à0);
ààààscene.add(currentModel);

ààààapplyCurrentModelFeatures();
ààààsetStatus(`${currentModelConfig?.labelà||à'Modell'}àerstellt.àDuàkannstàjetztàdrehenàundàzoomen.`);
àà}àcatchà{
ààààsetStatus('FehleràbeimàErzeugenàdesàModells.',àtrue);
àà}
}

functionàloadGlbModel(modelConfig)à{
ààsetStatus(`GLBàwirdàgeladen:à${modelConfig.label}...`);
ààremoveCurrentModel);

ààgltfLoader.load(
ààààmodelConfig.path,
àààà(gltf)à=>à{
ààààààcurrentModelConfigà=àmodelConfig;
ààààààcurrentModelà=àgltf.scene;
ààààààcurrentModel.position.set(0,à0,à0);
ààààààscene.add(currentModel);

ààààààapplyCurrentModelFeatures();
ààààààsetStatus(`${modelConfig.label}àgeladen.àDuàkannstàjetztàdrehenàundàzoomen.`);
àààà},
ààààundefined,
àààà()à=>à{
ààààààsetStatus(`GLBàkonnteànichtàgeladenàwerden:à${modelConfig.path}`,àtrue);
àààà}
àà);
}

functionàloadModel(modelId)à{
ààconstàmodelConfigà=àgetModelConfig(modelId);
ààifà(!modelConfig)à{
ààààsetStatus('AusgewaehltesàModellàwurdeànichtàgefunden.',àtrue);
ààààreturn;
àà}

ààifà(modelConfig.typeà===à'glb')à{
ààààloadGlbModel(modelConfig);
ààààreturn;
àà}

ààloadProceduralModel(modelId);
}

functionàresetCamera()à{
ààifà(currentModel)à{
ààààfitCameraToObject(currentModel);
ààààreturn;
àà}

ààcamera.position.set(2.2,à1.4,à3.3);
ààcontrols.target.set(0,à0.8,à0);
ààcontrols.update();
}

functionàupdateToggleButton(button,àenabled,àonText,àoffText)à{
ààifà(!button)àreturn;
ààbutton.setAttribute('aria-pressed',àenabledà?à'true'à:à'false');
ààbutton.textContentà=àenabledà?àonTextà:àoffText;
}

functionàanimate(timeMs)à{
ààrequestAnimationFrame(animate);

ààconstàtimeà=àtimeMsà*à0.001;

ààifà(tempObjectRefs.spinningRing)à{
ààààtempObjectRefs.spinningRing.rotation.zà=àMath.sin(timeà*à1.25)à*à0.35;
àà}

ààifà(tempObjectRefs.movingTable)à{
ààààconstàbaseXà=àtempObjectRefs.movingTable.userData.baseXà||à0;
ààààtempObjectRefs.movingTable.position.xà=àbaseXà+àMath.sin(timeà*à1.1)à*à0.08;
àà}

ààifà(tempObjectRefs.probeHead)à{
ààààtempObjectRefs.probeHead.rotation.yà=àMath.sin(timeà*à2.0)à*à0.45;
àà}

ààifà(currentModelà&&àpulseEnabled)à{
ààààconstàpulseScaleà=àbaseScaleà*à(1à+àMath.sin(timeà*à2.4)à*à0.03);
ààààcurrentModel.scale.setScalar(pulseScale);
àà}

ààcontrols.update();
ààrenderer.render(scene,àcamera);
}

modelScaleRange?.addEventListener('input',à(event)à=>à{
ààbaseScaleà=àNumber(event.target.value);
ààifà(!pulseEnabled)à{
ààààupdateModelScale();
àà}
});

btnLoadModel?.addEventListener('click',à()à=>à{
ààloadModel(modelSelect?.value);
});

modelSelect?.addEventListener('change',à()à=>à{
ààloadModel(modelSelect.value);
});

btnResetCamera?.addEventListener('click',à()à=>à{
ààresetCamera();
});

btnToggleAutoRotate?.addEventListener('click',à()à=>à{
ààcontrols.autoRotateà=à!controls.autoRotate;
ààcontrols.autoRotateSpeedà=à1.3;
ààupdateToggleButton(btnToggleAutoRotate,àcontrols.autoRotate,à'Auto-Rotateàan',à'Auto-Rotateàaus');
});

btnToggleWireframe?.addEventListener('click',à()à=>à{
ààwireframeEnabledà=à!wireframeEnabled;
ààsetWireframe(wireframeEnabled);
ààupdateToggleButton(btnToggleWireframe,àwireframeEnabled,à'Wireframeàan',à'Wireframeàaus');
});

btnTogglePulse?.addEventListener('click',à()à=>à{
ààpulseEnabledà=à!pulseEnabled;
ààifà(!pulseEnabled)à{
ààààupdateModelScale();
àà}
ààupdateToggleButton(btnTogglePulse,àpulseEnabled,à'Pulseàan',à'Pulseàaus');
});

window.addEventListener('resize',àresizeRenderer);

asyncàfunctionàinitViewer()à{
ààawaitàloadModelManifest();
ààpopulateModelSelect();
ààresizeRenderer();

ààifà(modelSelect?.value)à{
ààààloadModel(modelSelect.value);
àà}àelseàifà(builtInModels[0])à{
ààààloadModel(builtInModels[0].id);
àà}

ààanimate(0);
}

initViewer();
