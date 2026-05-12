#àMedTechGuideààTechnischeàDokumentation

##à1)à—berblick
MedTechGuideàistàeineàmodulareàWeb-AppàmitàThree.js,àdieàdreiàmedizinischeàGeräteàalsàprogrammatischàerzeugteà3D-Simulatorenàdarstellt:
-àPulsoximeter
-àEKG-Monitor
-àBlutdruckmessgerät

Alleà3D-Modelleàwerdenàausschlie—lichàausàGeometrienà(`BoxGeometry`,à`CylinderGeometry`,à`TorusGeometry`,à`PlaneGeometry`,à`SphereGeometry`)àaufgebaut.àEsàwerdenàkeineàexternenà3D-Modelleàgeladen.

##à2)àProjektstruktur
-à`index.html`:àApp-Shell,àSidebar,àControls,àCanvas
-à`style.css`:àDark-Theme,àResponsiveàLayout,àUI-States
-à`main.js`:àEinstiegspunkt,àInitialisierung
-à`modules/core/App3D.js`:àThree.jsàCoreà(Szene,àKamera,àLicht,àLoop,àRaycasting,àGerätewechsel)
-à`modules/core/SignalCanvases.js`:àCanvas-SignalrendereràfüràPulsoximeteràundàEKG
-à`modules/devices/PulseOximeter.js`:à3D-Modellà+àDisplay-Animationà+àLED-Interaktion
-à`modules/devices/EKGMonitor.js`:à3D-Modellà+àEKG-Screenà+àHF-abhängigeàKurve
-à`modules/devices/BloodPressureMonitor.js`:à3D-Modellà+àStarttasteà+àMess-Trigger
-à`modules/ui/setupUI.js`:àSidebar-Bedienung,àDevice-Switch,àLoader

##à3)à3D-AufbauàderàGeräte

###àPulsoximeter
Aufbauàaus:
-àUnter-àundàOberteilàdesàClipsà(`BoxGeometry`)
-àScharnierà(`CylinderGeometry`)
-àDisplayrahmenà(`PlaneGeometry`à+àMaterial)
-àLEDàimàInnerenà(`SphereGeometry`,àemissivesàMaterial)
-àAkzentringà(`TorusGeometry`)

Animationen:
-àLED-Glühenàüberà`emissiveIntensity`
-àDisplaywerteà(SpO——à+àPuls)àundàPulswelleàviaàCanvas-Textur

###àEKG-Monitor
Aufbauàaus:
-àMonitorgehäuseà(`BoxGeometry`)
-àBezelà+àScreen-Flächeà(`BoxGeometry`à+à`PlaneGeometry`)
-àStandfu—à(`CylinderGeometry`)
-àKabelbogenà(`TorusGeometry`)
-àInteraktiveràDrehknopfà(`CylinderGeometry`)

Animationen:
-àEKG-KurveàalsàCanvas-Signaltextur
-àHF-ÄnderungàüberàSlideràbeeinflusstàzeitlicheàDichteàderàKurveàinàEchtzeit

###àBlutdruckmessgerät
Aufbauàaus:
-àHauptgerätà(`BoxGeometry`)
-àDisplayrahmenà+àDisplayà(`BoxGeometry`à+à`PlaneGeometry`)
-àStarttasteà(`CylinderGeometry`,àemissiv)
-àSchlauchà(`TorusGeometry`)
-àManschetteà(`CylinderGeometry`,àoffenà+àinnen)

Animationen:
-àStarttasteàpulsiert
-àMesslogik:àDruckàsteigtàzunächstàan,àfälltàdannàkontrolliertàab,àdanachàErgebnisanzeige

##à4)àSignalvisualisierung

###àPulsoximeter-Signal
-àCanvasàzeichnetànumerischeàWerteà(`SpO——`,à`bpm`)
-àPulswelleàalsàvereinfachteàsinusförmigeàBasisà+àperiodischeràPeak
-àCanvasàwirdàproàFrameàaktualisiertàundàalsà`CanvasTexture`àaufàdenàDisplay-Planeàgelegt

###àEKG-Signal
-àCanvasàzeichnetàGitterà+àvereinfachteàEKG-Formà(P-Welle,àQRS-Komplex,àT-Welle)
-àHerzfrequenzà(`bpm`)àskaliertàdieàzeitlicheàAbfolgeàdesàSignals
-àDarstellungàmathematischàvereinfacht,àaberàvisuellàplausibel

##à5)àRaycastingà(Klick-Erkennung)
Inà`App3D`àwirdàRaycastingàsoàumgesetzt:
1.àMaus-/Pointer-PositionàrelativàzumàCanvasàerfassen
2.àInàNormalizedàDeviceàCoordinatesà(NDC)àumrechnen:àBereichà`[-1,à1]`
3.à`raycaster.setFromCamera(pointer,àcamera)`àerzeugtàdenàKlickstrahl
4.à`intersectObjects`àprüftàTrefferàaufàinteraktiveàMeshes
5.àBeiàTrefferàwirdàanhandàeineràLookup-Mapà(`mesh.uuidà->àAktion`)àdasàpassendeàInfo-Panelàaktualisiertàundàggf.àeineàAktionàausgelöstà(z.àB.àBlutdruck-Messstart)

Vorteil:
-àExakteàBauteil-InteraktionàohneàseparateàHTML-Hotspots
-àEinfachàerweiterbaràdurchàzusätzlicheàinteraktiveàMeshes

##à6)àGerätewechselà&à—bergänge
BeimàWechselnàzwischenàGeräten:
-àVorherigesàGerätàwirdàweichàausgeblendet/skaliert
-àNeuesàGerätàwirdàeingeblendet/skaliert
-à—bergangàwirdàzeitbasiertàimàAnimationsloopàberechnet

DadurchàentstehenàSmoothàTransitions"àohneàzusätzlicheàBibliothek.

##à7)àBedienung
-àSidebar:àAuswahlàdesàaktivenàGeräts
-àEKG:àHerzfrequenz-Sliderà(40180àbpm)
-àBlutdruck:àMessungàperàKlickàaufà3D-Starttaste
-à3D-Ansicht:àOrbitControlsà(Drehen,àZoomen,àVerschieben)

##à8)àBrowser-Start
DaàES-ModuleàundàImport-Mapàverwendetàwerden,àsollteàdieàAppàüberàeinenàlokalenàServeràgestartetàwerden.

Beispiel:
-à`pythonà-màhttp.serverà8080`
-àAufruf:à`http://localhost:8080/MedTechGuide/`

##à9)àErweiterungsideen
-àZusätzlicheàMessparameterà(z.àB.àPerfusionsindex)
-àHistorie/TrenddiagrammàimàUI
-àGeräusch-/AlarmzuständeàbeiàGrenzwertverletzung
-àWeitereàGeräteà(z.àB.àSpirometer,àDefibrillator)
-àOptionalàGSAPàfüràkomplexereàKamerafahrten

##à10)àWartungshinweise
-àNeueàGeräteàalsàeigenesàModulàunterà`modules/devices/`àanlegen
-àInteraktiveàBauteileàstetsàimà`interactive`-ArrayàdesàGerätemodulsàregistrieren
-àSignal-Renderingàzentralàinà`SignalCanvases.js`àhalten,àumàRedundanzàzuàvermeiden
-àUI-Logikàinà`setupUI.js`àbündeln;àThree.js-Logikàinà`App3D.js`àbelassen
