importà*àasàTHREEàfromà'three';
importà{àOrbitControlsà}àfromà'three/addons/controls/OrbitControls.js';
importà{àGLTFLoaderà}àfromà'three/addons/loaders/GLTFLoader.js';

constàloaderà=ànewàGLTFLoader();

constàHOTSPOT_DEFINITIONSà=à{
àà'insulin-pump':à[
àààà{
ààààààid:à'display',
ààààààname:à'Display',
ààààààposition:à[0,à0.95,à0.2],
ààààààsize:à[0.45,à0.28,à0.2],
ààààààinfoText:à'DasàDisplayàzeigtàGlukosewerte,àTrendsàundàTherapiehinweiseàinàEchtzeit.'
àààà},
àààà{
ààààààid:à'cartridge',
ààààààname:à'Insulinpatrone',
ààààààposition:à[0.55,à0.8,à0],
ààààààsize:à[0.25,à0.25,à0.8],
ààààààinfoText:à'InàderàPatroneàwirdàdasàInsulinàgespeichertàundàzuràAbgabeàbereitgestellt.'
àààà}
àà],
ààheart:à[
àààà{
ààààààid:à'ventricle',
ààààààname:à'Herzkammer',
ààààààposition:à[0,à0.7,à0.06],
ààààààsize:à[0.6,à0.6,à0.55],
ààààààinfoText:à'DieàHerzkammeràpumptàsauerstoffreichesàBlutàinàdenàKoerperkreislauf.'
àààà},
àààà{
ààààààid:à'vessels',
ààààààname:à'GrosseàGefaesse',
ààààààposition:à[0,à1.45,à0],
ààààààsize:à[0.5,à0.45,à0.4],
ààààààinfoText:à'HieràverlaufenàzentraleàGefaesseàwieàAortaàundàPulmonalarterie.'
àààà}
àà],
ààneurochip:à[
àààà{
ààààààid:à'chip-core',
ààààààname:à'Chip-Kern',
ààààààposition:à[0,à1.15,à0.26],
ààààààsize:à[0.38,à0.28,à0.18],
ààààààinfoText:à'DeràChip-KernàverarbeitetàSignaleàundàermoeglichtàneuronaleàSchnittstellen.'
àààà},
àààà{
ààààààid:à'brain-interface',
ààààààname:à'NeuronaleàKontaktflaeche',
ààààààposition:à[0,à0.95,à0.05],
ààààààsize:à[0.95,à0.6,à0.8],
ààààààinfoText:à'DieseàRegionàstehtàstellvertretendàfueràdieàKopplungàmitàHirngewebe.'
àààà}
àà],
àà'dna-helix':à[
àààà{
ààààààid:à'strand-a',
ààààààname:à'DNA-Strang',
ààààààposition:à[0.25,à1.0,à0],
ààààààsize:à[0.35,à1.9,à0.35],
ààààààinfoText:à'EinàDNA-StrangàtraegtàdieàBasensequenzàalsàgenetischeàInformation.'
àààà},
àààà{
ààààààid:à'base-pairs',
ààààààname:à'Basenpaare',
ààààààposition:à[0,à1.0,à0],
ààààààsize:à[0.55,à1.9,à0.55],
ààààààinfoText:à'BasenpaareàverbindenàbeideàStraengeàundàcodierenàErbinformationen.'
àààà}
àà],
ààbmw:à[
àààà{
ààààààid:à'vehicle-body',
ààààààname:à'Fahrzeugkarosserie',
ààààààposition:à[0,à0.58,à0],
ààààààsize:à[1.8,à0.75,à0.95],
ààààààinfoText:à'DieàKarosserieàstehtàfueràdieàmechanischeàStrukturàdesàModells.'
àààà}
àà],
àà'ct-scanner':à[
àààà{
ààààààid:à'gantry',
ààààààname:à'CT-Gantry',
ààààààposition:à[-0.3,à0.95,à0],
ààààààsize:à[1.15,à1.15,à0.6],
ààààààinfoText:à'DieàGantryàenthaeltàRoentgenroehreàundàDetektorenàfueràSchnittbilder.'
àààà},
àààà{
ààààààid:à'patient-table',
ààààààname:à'Patiententisch',
ààààààposition:à[0.5,à0.72,à0],
ààààààsize:à[1.1,à0.18,à0.5],
ààààààinfoText:à'DeràTischàpositioniertàdieàPatientinàoderàdenàPatientenàpraeziseàimàScanner.'
àààà}
àà],
àà'mrt-scanner':à[
àààà{
ààààààid:à'mrt-tunnel',
ààààààname:à'MRT-Tunnel',
ààààààposition:à[-0.1,à0.78,à0],
ààààààsize:à[1.8,à0.95,à0.95],
ààààààinfoText:à'ImàTunnelàbefindetàsichàdasàstarkeàMagnetfeldàfueràdieàBildgebung.'
àààà},
àààà{
ààààààid:à'mrt-bed',
ààààààname:à'Patientenliege',
ààààààposition:à[0.66,à0.57,à0],
ààààààsize:à[1.4,à0.2,à0.55],
ààààààinfoText:à'DieàLiegeàfaehrtàinàdenàMagnetenàundàbestimmtàdieàexakteàLageàderàAufnahme.'
àààà}
àà],
ààultraschall:à[
àààà{
ààààààid:à'ultrasound-probe',
ààààààname:à'Ultraschallsonde',
ààààààposition:à[0.56,à0.9,à0.18],
ààààààsize:à[0.35,à0.35,à0.35],
ààààààinfoText:à'DieàSondeàsendetàSchallwellenàausàundàempfaengtàEchosàfueràdasàBild.'
àààà},
àààà{
ààààààid:à'ultrasound-screen',
ààààààname:à'Monitor',
ààààààposition:à[0,à1.23,à-0.05],
ààààààsize:à[0.65,à0.4,à0.2],
ààààààinfoText:à'DeràMonitoràvisualisiertàdieàrekonstruiertenàUltraschallsignale.'
àààà}
àà]
};

functionànormalizeHotspotEntry(entry,àmodelKey)à{
ààreturnà{
ààààid:àentry.id,
ààààname:àentry.name,
ààààposition:ànewàTHREE.Vector3(...entry.position),
ààààsize:ànewàTHREE.Vector3(...entry.size),
ààààmodelKey,
ààààinfoText:àentry.infoText
àà};
}

functionàgetHotspotDefinitions(modelKey)à{
ààconstàdefinitionsà=àHOTSPOT_DEFINITIONS[modelKey]à||à[];
ààreturnàdefinitions.map((entry)à=>ànormalizeHotspotEntry(entry,àmodelKey));
}

functionàcreateHotspotMesh(hotspot,àmodelRef,àmodelLabel,àdebugVisible)à{
ààconstàgeometryà=ànewàTHREE.BoxGeometry(hotspot.size.x,àhotspot.size.y,àhotspot.size.z);
ààconstàmaterialà=ànewàTHREE.MeshBasicMaterial({
ààààcolor:à0xf97316,
ààààtransparent:àtrue,
ààààopacity:àdebugVisibleà?à0.25à:à0,
ààààdepthWrite:àfalse,
ààààvisible:àtrue
àà});

ààconstàmeshà=ànewàTHREE.Mesh(geometry,àmaterial);
ààmesh.position.copy(hotspot.position);
ààmesh.nameà=à`hotspot-${hotspot.id}`;
ààmesh.renderOrderà=à999;
ààmesh.userData.hotspotà=à{
ààààid:àhotspot.id,
ààààname:àhotspot.name,
ààààmodelKey:àhotspot.modelKey,
ààààmodelLabel,
ààààmodelRef,
ààààinfoText:àhotspot.infoText
àà};
ààreturnàmesh;
}

functionàcreateHotspotInfoBox(section)à{
ààconstàpanelà=àdocument.createElement('div');
ààpanel.classNameà=à'imaging-hotspot-info';
ààpanel.style.positionà=à'absolute';
ààpanel.style.leftà=à'16px';
ààpanel.style.bottomà=à'16px';
ààpanel.style.maxWidthà=à'320px';
ààpanel.style.paddingà=à'10pxà12px';
ààpanel.style.borderRadiusà=à'10px';
ààpanel.style.backgroundà=à'rgba(15,à23,à42,à0.88)';
ààpanel.style.colorà=à'#f8fafc';
ààpanel.style.fontFamilyà=à'"SegoeàUI",àTahoma,àsans-serif';
ààpanel.style.fontSizeà=à'0.92rem';
ààpanel.style.lineHeightà=à'1.4';
ààpanel.style.boxShadowà=à'0à10pxà24pxàrgba(2,à6,à23,à0.25)';
ààpanel.style.pointerEventsà=à'none';
ààpanel.style.zIndexà=à'5';
ààpanel.style.displayà=à'none';

ààconstàtitleà=àdocument.createElement('strong');
ààtitle.style.displayà=à'block';
ààtitle.style.marginBottomà=à'4px';
ààpanel.appendChild(title);

ààconstàbodyà=àdocument.createElement('span');
ààpanel.appendChild(body);

ààsection.style.positionà=àsection.style.positionà||à'relative';
ààsection.appendChild(panel);

ààreturnà{
ààààshow(textTitle,àtextBody)à{
ààààààtitle.textContentà=àtextTitle;
ààààààbody.textContentà=àtextBody;
ààààààpanel.style.displayà=à'block';
àààà},
ààààhide()à{
ààààààpanel.style.displayà=à'none';
àààà}
àà};
}

functionàcreateHotspotDebugButton(section)à{
ààconstàcontrolsà=àsection.querySelector('.imaging-3d-controls');
ààifà(!controls)àreturnànull;

ààconstàbuttonà=àdocument.createElement('button');
ààbutton.typeà=à'button';
ààbutton.dataset.actionà=à'toggle-hotspots';
ààbutton.setAttribute('aria-pressed',à'false');
ààbutton.textContentà=à'HotspotsàDebugàaus';
ààcontrols.appendChild(button);

ààreturnàbutton;
}

functionàmakeMaterial(color,àmetalnessà=à0.2,àroughnessà=à0.5,àemissiveà=à0x000000,àemissiveIntensityà=à0)à{
ààreturnànewàTHREE.MeshStandardMaterial({àcolor,àmetalness,àroughness,àemissive,àemissiveIntensityà});
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

functionàcreateInsulinPumpModel(refs)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàbodyà=àcreateRoundedBox(0.9,à1.35,à0.22,à0.08,à6,àmakeMaterial(0xf8fafc,à0.08,à0.7));
ààbody.position.yà=à0.82;
ààroot.add(body);

ààconstàscreenà=ànewàTHREE.Mesh(
àààànewàTHREE.PlaneGeometry(0.45,à0.32),
ààààmakeMaterial(0x22d3ee,à0.15,à0.25,à0x0ea5e9,à0.4)
àà);
ààscreen.position.set(0,à1.03,à0.115);
ààroot.add(screen);
ààrefs.screenà=àscreen;

ààconstàbuttonGeometryà=ànewàTHREE.CylinderGeometry(0.045,à0.045,à0.03,à20);
ààconstàbuttonMaterialà=àmakeMaterial(0x2563eb,à0.25,à0.35);
àà[-0.14,à0,à0.14].forEach((x)à=>à{
ààààconstàbuttonà=ànewàTHREE.Mesh(buttonGeometry,àbuttonMaterial);
ààààbutton.position.set(x,à0.58,à0.12);
ààààbutton.rotation.xà=àMath.PIà/à2;
ààààroot.add(button);
àà});

ààconstàcartridgeà=ànewàTHREE.Mesh(
àààànewàTHREE.CylinderGeometry(0.08,à0.08,à0.7,à24),
ààààmakeMaterial(0xcbd5e1,à0.3,à0.35)
àà);
ààcartridge.rotation.zà=àMath.PIà/à2;
ààcartridge.position.set(0.58,à0.8,à0);
ààroot.add(cartridge);

ààconstàtubeà=ànewàTHREE.Mesh(
àààànewàTHREE.TorusGeometry(0.5,à0.01,à8,à80,àMath.PI),
ààààmakeMaterial(0x60a5fa,à0.15,à0.8)
àà);
ààtube.position.set(0.15,à0.45,à0.02);
ààtube.rotation.zà=à0.5;
ààroot.add(tube);

ààreturnàroot;
}

functionàcreateHeartModel(refs)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàheartMaterialà=àmakeMaterial(0xdc2626,à0.1,à0.65);
ààconstàleftLobeà=ànewàTHREE.Mesh(newàTHREE.SphereGeometry(0.38,à32,à32),àheartMaterial);
ààconstàrightLobeà=ànewàTHREE.Mesh(newàTHREE.SphereGeometry(0.34,à32,à32),àheartMaterial);
ààleftLobe.position.set(-0.2,à1.05,à0);
ààrightLobe.position.set(0.18,à1.0,à0.08);
ààroot.add(leftLobe,àrightLobe);

ààconstàtipà=ànewàTHREE.Mesh(newàTHREE.ConeGeometry(0.28,à0.75,à28),àheartMaterial);
ààtip.position.set(0,à0.45,à0.02);
ààtip.rotation.zà=àMath.PI;
ààroot.add(tip);

ààconstàvesselMaterialà=àmakeMaterial(0x991b1b,à0.08,à0.55);
ààconstàvessel1à=ànewàTHREE.Mesh(newàTHREE.CylinderGeometry(0.08,à0.08,à0.55,à18),àvesselMaterial);
ààvessel1.position.set(-0.15,à1.58,à0);
ààvessel1.rotation.zà=à0.15;
ààroot.add(vessel1);

ààconstàvessel2à=ànewàTHREE.Mesh(newàTHREE.CylinderGeometry(0.06,à0.06,à0.45,à18),àvesselMaterial);
ààvessel2.position.set(0.18,à1.48,à-0.05);
ààvessel2.rotation.zà=à-0.28;
ààroot.add(vessel2);

ààrefs.heartà=àroot;
ààreturnàroot;
}

functionàcreateNeurochipModel(refs)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàbrainMaterialà=àmakeMaterial(0xf1c0d8,à0.05,à0.82);
ààconstàhemisphereLeftà=ànewàTHREE.Mesh(newàTHREE.SphereGeometry(0.5,à28,à28),àbrainMaterial);
ààconstàhemisphereRightà=ànewàTHREE.Mesh(newàTHREE.SphereGeometry(0.5,à28,à28),àbrainMaterial);
ààhemisphereLeft.position.set(-0.28,à0.88,à0);
ààhemisphereRight.position.set(0.28,à0.88,à0);
ààhemisphereLeft.scale.set(1,à0.85,à1.12);
ààhemisphereRight.scale.set(1,à0.85,à1.12);
ààroot.add(hemisphereLeft,àhemisphereRight);

ààconstàchipà=ànewàTHREE.Mesh(
ààààcreateRoundedBox(0.34,à0.26,à0.05,à0.03,à4,àmakeMaterial(0x0f172a,à0.55,à0.2)).geometry,
ààààmakeMaterial(0x0f172a,à0.55,à0.2)
àà);
ààchip.position.set(0,à1.2,à0.28);
ààroot.add(chip);
ààrefs.chipà=àchip;

ààconstàpinMaterialà=àmakeMaterial(0xf8fafc,à0.7,à0.25);
ààforà(letàindexà=à-2;àindexà<=à2;àindexà+=à1)à{
ààààconstàpinà=ànewàTHREE.Mesh(newàTHREE.BoxGeometry(0.02,à0.12,à0.02),àpinMaterial);
ààààpin.position.set(indexà*à0.07,à1.01,à0.28);
ààààroot.add(pin);
àà}

ààconstàtraceMaterialà=àmakeMaterial(0x22c55e,à0.35,à0.3,à0x22c55e,à0.15);
ààconstàtraceà=ànewàTHREE.Mesh(newàTHREE.TorusGeometry(0.18,à0.015,à10,à40,àMath.PIà*à1.3),àtraceMaterial);
ààtrace.position.set(0,à1.14,à0.24);
ààtrace.rotation.zà=à0.35;
ààroot.add(trace);

ààreturnàroot;
}

functionàcreateDnaHelixFallbackModel(refs)à{
ààconstàrootà=ànewàTHREE.Group();
ààconstàstrandMaterialAà=àmakeMaterial(0x2563eb,à0.35,à0.35,à0x1d4ed8,à0.2);
ààconstàstrandMaterialBà=àmakeMaterial(0xef4444,à0.35,à0.35,à0xb91c1c,à0.2);
ààconstàrungMaterialà=àmakeMaterial(0xf8fafc,à0.55,à0.18,à0x93c5fd,à0.08);

ààconstàstepsà=à40;
ààconstàradiusà=à0.33;
ààconstàtotalHeightà=à1.9;

ààforà(letàindexà=à0;àindexà<=àsteps;àindexà+=à1)à{
ààààconstàtà=àindexà/àsteps;
ààààconstàangleà=àtà*àMath.PIà*à8;
ààààconstàyà=àtà*àtotalHeight;
ààààconstàxAà=àMath.cos(angle)à*àradius;
ààààconstàzAà=àMath.sin(angle)à*àradius;
ààààconstàxBà=àMath.cos(angleà+àMath.PI)à*àradius;
ààààconstàzBà=àMath.sin(angleà+àMath.PI)à*àradius;

ààààconstànodeAà=ànewàTHREE.Mesh(newàTHREE.SphereGeometry(0.04,à14,à14),àstrandMaterialA);
àààànodeA.position.set(xA,ày,àzA);
ààààroot.add(nodeA);

ààààconstànodeBà=ànewàTHREE.Mesh(newàTHREE.SphereGeometry(0.04,à14,à14),àstrandMaterialB);
àààànodeB.position.set(xB,ày,àzB);
ààààroot.add(nodeB);

ààààifà(indexà%à2à===à0)à{
ààààààconstàrungà=ànewàTHREE.Mesh(newàTHREE.CylinderGeometry(0.016,à0.016,àradiusà*à1.95,à10),àrungMaterial);
ààààààconstàmidpointà=ànewàTHREE.Vector3((xAà+àxB)à/à2,ày,à(zAà+àzB)à/à2);
ààààààrung.position.copy(midpoint);
ààààààrung.lookAt(newàTHREE.Vector3(xA,ày,àzA));
ààààààrung.rotateX(Math.PIà/à2);
ààààààroot.add(rung);
àààà}
àà}

ààroot.position.yà=à0.05;
ààrefs.dnaHelixà=àroot;
ààreturnàroot;
}

functionàcreateBMWFallbackModel(refs)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàbodyà=ànewàTHREE.Mesh(
ààààcreateRoundedBox(1.9,à0.45,à0.78,à0.08,à5,àmakeMaterial(0x2563eb,à0.35,à0.35)).geometry,
ààààmakeMaterial(0x2563eb,à0.35,à0.35)
àà);
ààbody.position.set(0,à0.46,à0);
ààroot.add(body);

ààconstàroofà=ànewàTHREE.Mesh(
ààààcreateRoundedBox(0.95,à0.28,à0.68,à0.08,à5,àmakeMaterial(0x1d4ed8,à0.35,à0.35)).geometry,
ààààmakeMaterial(0x1d4ed8,à0.35,à0.35)
àà);
ààroof.position.set(0.1,à0.8,à0);
ààroot.add(roof);

ààconstàwindshieldà=ànewàTHREE.Mesh(
àààànewàTHREE.PlaneGeometry(0.5,à0.22),
ààààmakeMaterial(0xbfdbfe,à0.2,à0.1,à0x60a5fa,à0.12)
àà);
ààwindshield.position.set(-0.18,à0.81,à0.35);
ààwindshield.rotation.xà=à-0.8;
ààroot.add(windshield);

ààconstàwheelGeometryà=ànewàTHREE.CylinderGeometry(0.18,à0.18,à0.16,à24);
ààconstàwheelMaterialà=àmakeMaterial(0x111827,à0.15,à0.85);
ààconstàwheelOffsetsà=à[
àààà[-0.58,à0.18,à-0.42],
àààà[0.58,à0.18,à-0.42],
àààà[-0.58,à0.18,à0.42],
àààà[0.58,à0.18,à0.42]
àà];
ààwheelOffsets.forEach((offset)à=>à{
ààààconstàwheelà=ànewàTHREE.Mesh(wheelGeometry,àwheelMaterial);
ààààwheel.position.set(offset[0],àoffset[1],àoffset[2]);
ààààwheel.rotation.zà=àMath.PIà/à2;
ààààroot.add(wheel);
àà});

ààrefs.carà=àroot;
ààreturnàroot;
}

functionàcreateCTScannerFallbackModel(refs)à{
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
ààrefs.ctRingà=àgantryInner;

ààconstàtableRailà=ànewàTHREE.Mesh(
àààànewàTHREE.BoxGeometry(1.55,à0.12,à0.38),
ààààmakeMaterial(0xb6c6d9,à0.2,à0.6)
àà);
ààtableRail.position.set(0.45,à0.62,à0);
ààroot.add(tableRail);

ààconstàmovingTableà=àcreateRoundedBox(0.95,à0.09,à0.42,à0.03,à4,àmakeMaterial(0xdce6f6,à0.05,à0.8));
ààmovingTable.position.set(0.42,à0.72,à0);
ààmovingTable.userData.baseXà=àmovingTable.position.x;
ààroot.add(movingTable);
ààrefs.ctTableà=àmovingTable;

ààroot.position.yà=à0.02;
ààreturnàroot;
}

functionàcreateMRTScannerFallbackModel(refs)à{
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
ààrefs.mrtRingà=àtunnelGlow;

ààconstàbedà=ànewàTHREE.Mesh(
àààànewàTHREE.BoxGeometry(1.35,à0.1,à0.48),
ààààmakeMaterial(0xc7d2fe,à0.1,à0.65)
àà);
ààbed.position.set(0.65,à0.57,à0);
ààroot.add(bed);

ààreturnàroot;
}

functionàcreateUltrasoundFallbackModel(refs)à{
ààconstàrootà=ànewàTHREE.Group();

ààconstàcartBaseà=ànewàTHREE.Mesh(
àààànewàTHREE.BoxGeometry(1.05,à0.95,à0.62),
ààààmakeMaterial(0xf1f5f9,à0.08,à0.65)
àà);
ààcartBase.position.set(0,à0.54,à0);
ààroot.add(cartBase);

ààconstàscreenà=àcreateRoundedBox(0.66,à0.42,à0.05,à0.05,à6,àmakeMaterial(0x1e293b,à0.35,à0.2));
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
ààrefs.screenà=àscreenGlow;

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
ààrefs.usProbeà=àprobe;

ààconstàwheelGeometryà=ànewàTHREE.CylinderGeometry(0.08,à0.08,à0.04,à22);
ààconstàwheelMaterialà=àmakeMaterial(0x111827,à0.15,à0.8);
ààconstàwheelPositionsà=à[
àààà[-0.4,à0.08,à-0.25],
àààà[0.4,à0.08,à-0.25],
àààà[-0.4,à0.08,à0.25],
àààà[0.4,à0.08,à0.25]
àà];
ààwheelPositions.forEach((position)à=>à{
ààààconstàwheelà=ànewàTHREE.Mesh(wheelGeometry,àwheelMaterial);
ààààwheel.position.set(position[0],àposition[1],àposition[2]);
ààààwheel.rotation.zà=àMath.PIà/à2;
ààààroot.add(wheel);
àà});

ààreturnàroot;
}

constàfallbackFactoriesà=à{
àà'insulin-pump':àcreateInsulinPumpModel,
ààheart:àcreateHeartModel,
ààneurochip:àcreateNeurochipModel,
àà'dna-helix':àcreateDnaHelixFallbackModel,
ààbmw:àcreateBMWFallbackModel,
àà'ct-scanner':àcreateCTScannerFallbackModel,
àà'mrt-scanner':àcreateMRTScannerFallbackModel,
ààultraschall:àcreateUltrasoundFallbackModel
};

functionàfitCameraToObject(camera,àcontrols,àobject)à{
ààconstàboxà=ànewàTHREE.Box3().setFromObject(object);
ààconstàsizeà=àbox.getSize(newàTHREE.Vector3());
ààconstàcenterà=àbox.getCenter(newàTHREE.Vector3());
ààconstàmaxDimensionà=àMath.max(size.x,àsize.y,àsize.z)à||à1;
ààconstàdistanceà=àMath.abs((maxDimensionà/à2)à/àMath.tan((camera.fovà*àMath.PI)à/à360))à*à1.8;

ààcamera.position.set(center.xà+àdistanceà*à0.45,àcenter.yà+àdistanceà*à0.25,àcenter.zà+àdistance);
ààcontrols.target.copy(center);
ààcontrols.update();
}

functionànormalizeModel(model,àtargetSize,àyOffsetà=à0)à{
ààconstàboxà=ànewàTHREE.Box3().setFromObject(model);
ààconstàsizeà=àbox.getSize(newàTHREE.Vector3());
ààconstàcenterà=àbox.getCenter(newàTHREE.Vector3());
ààconstàmaxDimensionà=àMath.max(size.x,àsize.y,àsize.z)à||à1;
ààconstàscaleFactorà=àtargetSizeà/àmaxDimension;

ààmodel.scale.multiplyScalar(scaleFactor);

ààconstàscaledBoxà=ànewàTHREE.Box3().setFromObject(model);
ààconstàscaledCenterà=àscaledBox.getCenter(newàTHREE.Vector3());
ààconstàminà=àscaledBox.min;

ààmodel.position.xà-=àscaledCenter.x;
ààmodel.position.zà-=àscaledCenter.z;
ààmodel.position.yà-=àmin.y;
ààmodel.position.yà+=àyOffset;
}

functionàsetWireframe(model,àenabled)à{
ààifà(!model)àreturn;
ààmodel.traverse((node)à=>à{
ààààifà(!node.isMeshà||à!node.material)àreturn;
ààààifà(Array.isArray(node.material))à{
àààààànode.material.forEach((material)à=>à{
ààààààààmaterial.wireframeà=àenabled;
ààààààààmaterial.needsUpdateà=àtrue;
àààààà});
ààààààreturn;
àààà}
àààànode.material.wireframeà=àenabled;
àààànode.material.needsUpdateà=àtrue;
àà});
}

functionàdisposeModel(model)à{
ààifà(!model)àreturn;
ààmodel.traverse((node)à=>à{
ààààifà(!node.isMesh)àreturn;
àààànode.geometry.dispose();
ààààifà(Array.isArray(node.material))à{
àààààànode.material.forEach((material)à=>àmaterial.dispose());
ààààààreturn;
àààà}
ààààifà(node.material)à{
àààààànode.material.dispose();
àààà}
àà});
}

functionàbuildViewer(section)à{
ààconstàviewerà=àsection.querySelector('.imaging-3d-viewer');
ààconstàstatusElà=àsection.querySelector('.imaging-3d-status');
ààconstàbtnReloadà=àsection.querySelector('[data-action="reload"]');
ààconstàbtnResetà=àsection.querySelector('[data-action="reset"]');
ààconstàbtnRotateà=àsection.querySelector('[data-action="autorotate"]');
ààconstàtitleà=àsection.dataset.modelLabelà||à'3D-Modell';
ààconstàmodelPathà=àsection.dataset.modelPathà||à'';
ààconstàfallbackKeyà=àsection.dataset.fallbackModelà||à'';
ààconstàtargetSizeà=àNumber(section.dataset.targetSizeà||à'1.9');
ààconstàyOffsetà=àNumber(section.dataset.yOffsetà||à'0');

ààifà(!viewer)à{
ààààreturn;
àà}

ààconstàrefsà=à{
ààààscreen:ànull,
ààààheart:ànull,
ààààchip:ànull,
ààààdnaHelix:ànull,
ààààcar:ànull,
ààààctRing:ànull,
ààààctTable:ànull,
ààààmrtRing:ànull,
ààààusProbe:ànull
àà};
ààconstàsceneà=ànewàTHREE.Scene();
ààscene.backgroundà=ànewàTHREE.Color(0xf4f9ff);

ààconstàcameraà=ànewàTHREE.PerspectiveCamera(52,à1,à0.1,à200);
ààconstàrendererà=ànewàTHREE.WebGLRenderer({àantialias:àtrue,àalpha:àfalseà});
ààrenderer.setPixelRatio(Math.min(window.devicePixelRatio,à2));
ààrenderer.outputColorSpaceà=àTHREE.SRGBColorSpace;
ààrenderer.toneMappingà=àTHREE.ACESFilmicToneMapping;
ààviewer.appendChild(renderer.domElement);

ààconstàcontrolsà=ànewàOrbitControls(camera,àrenderer.domElement);
ààcontrols.enableDampingà=àtrue;
ààcontrols.dampingFactorà=à0.06;
ààcontrols.minDistanceà=à0.7;
ààcontrols.maxDistanceà=à12;

ààscene.add(newàTHREE.HemisphereLight(0xffffff,à0xb3d7ff,à1.2));
ààconstàkeyLightà=ànewàTHREE.DirectionalLight(0xffffff,à1.15);
ààkeyLight.position.set(5,à8,à4);
ààscene.add(keyLight);
ààconstàfillLightà=ànewàTHREE.DirectionalLight(0x93c5fd,à0.55);
ààfillLight.position.set(-4,à3,à-3);
ààscene.add(fillLight);

ààconstàgroundà=ànewàTHREE.Mesh(
àààànewàTHREE.CircleGeometry(3.2,à64),
àààànewàTHREE.MeshStandardMaterial({àcolor:à0xdbeafe,àroughness:à0.96,àmetalness:à0à})
àà);
ààground.rotation.xà=à-Math.PIà/à2;
ààground.position.yà=à-0.01;
ààscene.add(ground);

ààletàcurrentModelà=ànull;
ààletàautoRotateà=àfalse;
ààletàpulseEnabledà=àfalse;
ààletàhotspotMeshesà=à[];
ààletàhotspotLookupà=ànewàMap();
ààletàhotspotDebugVisibleà=àfalse;

ààconstàraycasterà=ànewàTHREE.Raycaster();
ààconstàpointerà=ànewàTHREE.Vector2();
ààletàhoveredHotspotà=ànull;

ààconstàinfoBoxà=àcreateHotspotInfoBox(section);
ààconstàbtnHotspotDebugà=àcreateHotspotDebugButton(section);

ààfunctionàtoggleHotspotDebug(visible)à{
ààààhotspotDebugVisibleà=àvisible;
ààààhotspotMeshes.forEach((mesh)à=>à{
ààààààifà(!mesh.material)àreturn;
ààààààmesh.material.opacityà=àhotspotDebugVisibleà?à0.25à:à0;
ààààààmesh.material.needsUpdateà=àtrue;
àààà});

ààààifà(btnHotspotDebug)à{
ààààààbtnHotspotDebug.setAttribute('aria-pressed',àhotspotDebugVisibleà?à'true'à:à'false');
ààààààbtnHotspotDebug.textContentà=àhotspotDebugVisibleà?à'HotspotsàDebugàan'à:à'HotspotsàDebugàaus';
àààà}
àà}

ààfunctionàclearHotspots()à{
ààààhoveredHotspotà=ànull;
ààààhotspotLookupà=ànewàMap();
ààààhotspotMeshesà=à[];
ààààrenderer.domElement.style.cursorà=à'grab';
ààààinfoBox.hide();
àà}

ààfunctionàattachHotspots(modelRoot,àmodelKey)à{
ààààclearHotspots();

ààààconstàdefinitionsà=àgetHotspotDefinitions(modelKey);
ààààifà(!definitions.length)àreturn;

ààààconstàhotspotLayerà=ànewàTHREE.Group();
ààààhotspotLayer.nameà=à'hotspot-layer';

ààààdefinitions.forEach((hotspot)à=>à{
ààààààconstàmeshà=àcreateHotspotMesh(hotspot,àmodelRoot,àtitle,àhotspotDebugVisible);
ààààààhotspotLayer.add(mesh);
ààààààhotspotMeshes.push(mesh);
ààààààhotspotLookup.set(mesh.uuid,àmesh.userData.hotspot);
àààà});

ààààmodelRoot.add(hotspotLayer);
àà}

ààfunctionàsetPointerFromEvent(event)à{
ààààconstàboundsà=àrenderer.domElement.getBoundingClientRect();
ààààpointer.xà=à((event.clientXà-àbounds.left)à/àbounds.width)à*à2à-à1;
ààààpointer.yà=à-((event.clientYà-àbounds.top)à/àbounds.height)à*à2à+à1;
àà}

ààfunctionàgetHotspotHit(event)à{
ààààifà(!hotspotMeshes.length)àreturnànull;

ààààsetPointerFromEvent(event);
ààààraycaster.setFromCamera(pointer,àcamera);
ààààconstàhitsà=àraycaster.intersectObjects(hotspotMeshes,àfalse);
ààààifà(!hits.length)àreturnànull;

ààààconstàhotspotà=àhotspotLookup.get(hits[0].object.uuid);
ààààifà(!hotspot)àreturnànull;

ààààreturnà{
ààààààhotspot,
ààààààobject:àhits[0].object
àààà};
àà}

ààfunctionàsetStatus(text,àisErrorà=àfalse)à{
ààààifà(!statusEl)àreturn;
ààààstatusEl.textContentà=àtext;
ààààstatusEl.style.colorà=àisErrorà?à'#b91c1c'à:à'#1f2937';
àà}

ààfunctionàresize()à{
ààààconstàwidthà=àviewer.clientWidth;
ààààconstàheightà=àviewer.clientHeight;
ààààrenderer.setSize(width,àheight);
ààààcamera.aspectà=àwidthà/àheight;
ààààcamera.updateProjectionMatrix();
àà}

ààfunctionàreplaceModel(nextModel)à{
ààààifà(currentModel)à{
ààààààclearHotspots();
ààààààscene.remove(currentModel);
ààààààdisposeModel(currentModel);
àààà}

àààànormalizeModel(nextModel,àtargetSize,àyOffset);
ààààcurrentModelà=ànextModel;
ààààscene.add(currentModel);
ààààattachHotspots(currentModel,àfallbackKey);
ààààfitCameraToObject(camera,àcontrols,àcurrentModel);
àà}

ààfunctionàloadFallback(reasonText)à{
ààààconstàfactoryà=àfallbackFactories[fallbackKey];
ààààifà(!factory)à{
ààààààsetStatus(reasonTextà||à'Modellàkonnteànichtàgeladenàwerden.',àtrue);
ààààààreturn;
àààà}

ààààrefs.screenà=ànull;
ààààrefs.heartà=ànull;
ààààrefs.chipà=ànull;
ààààrefs.dnaHelixà=ànull;
ààààrefs.carà=ànull;
ààààrefs.ctRingà=ànull;
ààààrefs.ctTableà=ànull;
ààààrefs.mrtRingà=ànull;
ààààrefs.usProbeà=ànull;
ààààconstàfallbackModelà=àfactory(refs);
ààààreplaceModel(fallbackModel);
ààààsetStatus(reasonTextà||à`${title}àalsàprogrammiertesàFallbackàgeladen.`);
àà}

ààfunctionàloadModel)à{
ààààifà(!modelPath)à{
ààààààloadFallback('KeinàModellpfadàgesetzt.àFallbackàaktiv.');
ààààààreturn;
àààà}

ààààsetStatus('Modellàwirdàgeladen...');
ààààloader.load(
ààààààmodelPath,
àààààà(gltf)à=>à{
ààààààààrefs.screenà=ànull;
ààààààààrefs.heartà=ànull;
ààààààààrefs.chipà=ànull;
ààààààààrefs.dnaHelixà=ànull;
ààààààààrefs.carà=ànull;
ààààààààrefs.ctRingà=ànull;
ààààààààrefs.ctTableà=ànull;
ààààààààrefs.mrtRingà=ànull;
ààààààààrefs.usProbeà=ànull;
ààààààààreplaceModel(gltf.scene);
ààààààààsetStatus('Modellàbereit.');
àààààà},
ààààààundefined,
àààààà()à=>à{
ààààààààloadFallback('DasàModellàistàderzeitànichtàverfuegbar.àFallbackàaktiv.');
àààààà}
àààà);
àà}

ààbtnReload?.addEventListener('click',à()à=>à{
ààààloadModel);
àà});

ààbtnReset?.addEventListener('click',à()à=>à{
ààààifà(currentModel)à{
ààààààfitCameraToObject(camera,àcontrols,àcurrentModel);
àààà}
àà});

ààbtnRotate?.addEventListener('click',à()à=>à{
ààààautoRotateà=à!autoRotate;
ààààcontrols.autoRotateà=àautoRotate;
ààààcontrols.autoRotateSpeedà=à1.2;
ààààbtnRotate.setAttribute('aria-pressed',àautoRotateà?à'true'à:à'false');
ààààbtnRotate.textContentà=àautoRotateà?à'Rotationàan'à:à'Rotationàaus';
àà});

ààbtnHotspotDebug?.addEventListener('click',à()à=>à{
ààààtoggleHotspotDebug(!hotspotDebugVisible);
àà});

ààrenderer.domElement.addEventListener('pointermove',à(event)à=>à{
ààààconstàhità=àgetHotspotHit(event);
ààààhoveredHotspotà=àhit?.hotspotà||ànull;
ààààrenderer.domElement.style.cursorà=àhoveredHotspotà?à'pointer'à:à'grab';
àà});

ààrenderer.domElement.addEventListener('pointerleave',à()à=>à{
ààààhoveredHotspotà=ànull;
ààààrenderer.domElement.style.cursorà=à'grab';
àà});

ààrenderer.domElement.addEventListener('click',à(event)à=>à{
ààààconstàhità=àgetHotspotHit(event);
ààààifà(!hit)à{
ààààààinfoBox.hide();
ààààààreturn;
àààà}

ààààconstàheadingà=à`${hit.hotspot.modelLabel}:à${hit.hotspot.name}`;
ààààconstàtextà=à`${hit.hotspot.infoText}à(Hotspot:à${hit.hotspot.id},àModell:à${hit.hotspot.modelKey})`;
ààààinfoBox.show(heading,àtext);
àà});

ààconstàanimateà=à(timeMs)à=>à{
ààààrequestAnimationFrame(animate);
ààààconstàtimeà=àtimeMsà*à0.001;

ààààifà(refs.screen)à{
ààààààrefs.screen.material.emissiveIntensityà=à0.22à+àMath.sin(timeà*à2.3)à*à0.18;
àààà}

ààààifà(refs.heart)à{
ààààààconstàscaleà=à1à+àMath.sin(timeà*à2.8)à*à0.05;
ààààààrefs.heart.scale.setScalar(scale);
àààà}

ààààifà(refs.chip)à{
ààààààrefs.chip.rotation.zà=àMath.sin(timeà*à1.4)à*à0.18;
àààà}

ààààifà(refs.dnaHelix)à{
ààààààrefs.dnaHelix.rotation.yà=àtimeà*à0.65;
àààà}

ààààifà(refs.car)à{
ààààààrefs.car.rotation.yà=àMath.sin(timeà*à0.8)à*à0.2;
àààà}

ààààifà(refs.ctRing)à{
ààààààrefs.ctRing.rotation.zà=àMath.sin(timeà*à1.25)à*à0.35;
àààà}

ààààifà(refs.ctTable)à{
ààààààconstàbaseXà=àrefs.ctTable.userData.baseXà||à0;
ààààààrefs.ctTable.position.xà=àbaseXà+àMath.sin(timeà*à1.1)à*à0.08;
àààà}

ààààifà(refs.mrtRing)à{
ààààààrefs.mrtRing.material.emissiveIntensityà=à0.25à+àMath.sin(timeà*à2.1)à*à0.15;
àààà}

ààààifà(refs.usProbe)à{
ààààààrefs.usProbe.rotation.yà=àMath.sin(timeà*à2.0)à*à0.45;
àààà}

ààààifà(currentModelà&&àpulseEnabledà&&à!refs.heart)à{
ààààààconstàscaleà=à1à+àMath.sin(timeà*à2.2)à*à0.025;
ààààààcurrentModel.scale.setScalar(scale);
àààà}

ààààcontrols.update();
ààààrenderer.render(scene,àcamera);
àà};

ààwindow.addEventListener('resize',àresize);
ààresize();
ààtoggleHotspotDebug(false);
ààloadModel);
ààanimate(0);
}

document.querySelectorAll'[data-three-viewer]').forEach((section)à=>à{
ààbuildViewer(section);
});
