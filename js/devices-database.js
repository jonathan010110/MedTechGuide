/**
à*à=====================================================
à*àMEDIZINTECHNIK-GERÄTEàDATENBANK
à*àVollständigeàDatenàfüràVergleichsfunktion
à*à=====================================================
à*/

constàMedicalDevicesDatabaseà=à{
ààdevices:à[
àààà//à=====àDIABETES-TECHNOLOGIENà=====
àààà{
ààààààid:à'cgm-sensor',
ààààààname:à'CGM-Sensorà(ContinuousàGlucoseàMonitoring)',
ààààààcategory:à'Diabetes',
ààààààicon:à'°',
ààààààdescription:à'KontinuierlicheàGlukose-—berwachungàfüràDiabetes-Management',
àààààà
ààààààmetrics:à{
ààààààààaccuracy:à95,ààààààààààà//à0-100àProzent
ààààààààcost:à45,ààààààààààààààà//à—"àproàMonatà(0-100àrelativeàSkala)
ààààààààrisk:à15,ààààààààààààààà//àKomplikationen/Fehlerrà(0-100)
ààààààààusability:à85,àààààààààà//àBedienungsfreundlichkeità(0-100)
ààààààààeffectiveness:à90ààààààà//àTherapeutischeàEffektivitätà(0-100)
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'EnzymatischeàGlukose-Oxidase-Methode',
ààààààààaccuracy_range:à'——±15%',
ààààààààbattery_life:à'14àTage',
ààààààààmeasurement_frequency:à'Alleà15àSekunden',
ààààààààconnectivity:à'BluetoothàLE',
ààààààààdata_storage:à'Cloud-basiert',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['Typ-1-Diabetes',à'Typ-2-Diabetesà(intensiv)',à'Gravidität'],
ààààààsuitability:à{
ààààààààforChildren:àtrue,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àtrue,
ààààààààforHospital:àfalse,
ààààààààforHome:àtrue
àààààà},

ààààààadvantages:à[
àààààààà'Echtzeitdaten',
àààààààà'Nicht-invasiveràalsàBlutzuckermessungen',
àààààààà'Alarm-Funktionen',
àààààààà'Trend-Pfeile'
àààààà],

ààààààdisadvantages:à[
àààààààà'Kosten',
àààààààà'NochànichtàbeiàallenàKrankenkassenàerstattet',
àààààààà'Kalibrierungsfehleràmöglich',
àààààààà'Hautreaktionenàmöglich'
àààààà],

ààààààalternatives:à['Blutzuckermessgerät',à'Insulin-Pumpe',à'Sensor-Pflaster'],
ààààààreliability:à96,
ààààààmaintenance:à'Monatlich'
àààà},

àààà{
ààààààid:à'insulin-pump',
ààààààname:à'Insulinpumpeà(CSII)',
ààààààcategory:à'Diabetes',
ààààààicon:à'°',
ààààààdescription:à'TragbareàprogrammierbareàInsulinabgabesystem',

ààààààmetrics:à{
ààààààààaccuracy:à92,
ààààààààcost:à80,
ààààààààrisk:à20,
ààààààààusability:à70,
ààààààààeffectiveness:à95
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'ProgrammierteàInsulin-Infusion',
ààààààààinsulinCapacity:à'300àEinheiten',
ààààààààbattery_life:à'7-14àTage',
ààààààààbolusCalculation:à'Automatisch',
ààààààààconnectivity:à'Wirelessà(Modelle)',
ààààààààdata_storage:à'InterneràSpeicher',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['Typ-1-Diabetes',à'Typ-2-Diabetesà(Insulin)',à'Schwangerschaft'],
ààààààsuitability:à{
ààààààààforChildren:àtrue,
ààààààààforElderly:àfalse,
ààààààààforPregnant:àtrue,
ààààààààforHospital:àtrue,
ààààààààforHome:àtrue
àààààà},

ààààààadvantages:à[
àààààààà'PräziseàInsulinabgabe',
àààààààà'FlexibleàDosierung',
àààààààà'BessereàHbA1c-Werte',
àààààààà'NächtlicheàSicherheit'
àààààà],

ààààààdisadvantages:à[
àààààààà'HoheàKosten',
àààààààà'Schulungàerforderlich',
àààààààà'Infektionsrisiko',
àààààààà'PsychologischeàLast'
àààààà],

ààààààalternatives:à['Mehrfachinjektionen',à'CGM-Sensor',à'Pen-Injektoren'],
ààààààreliability:à94,
ààààààmaintenance:à'Wöchentlich'
àààà},

àààà//à=====àBILDGEBUNGà=====
àààà{
ààààààid:à'ct-scan',
ààààààname:à'CT-Scanà(Computertomographie)',
ààààààcategory:à'Bildgebung',
ààààààicon:à'°¥—¯¸',
ààààààdescription:à'SchichtbildverfahrenàmitàRöntgenstrahlung',

ààààààmetrics:à{
ààààààààaccuracy:à98,
ààààààààcost:à85,
ààààààààrisk:à35,
ààààààààusability:à75,
ààààààààeffectiveness:à96
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'Röntgen-Querschnittsbildgebung',
ààààààààradiation_dose:à'7àmSvà(Thorax)',
ààààààààscan_time:à'10-30àSekunden',
ààààààààresolution:à'0.5-1àmm',
ààààààààfield_of_view:à'50àcm',
ààààààààdata_storage:à'DICOM',
ààààààààcertifications:à'DIN,àCE'
àààààà},

ààààààapplications:à['Lungenkrebs-Screening',à'Traumadiagnostik',à'Abdomen-Diagnostik'],
ààààààsuitability:à{
ààààààààforChildren:àfalse,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àfalse,
ààààààààforHospital:àtrue,
ààààààààforHome:àfalse
àààààà},

ààààààadvantages:à[
àààààààà'HoheàräumlicheàAuflösung',
àààààààà'SchnelleàAkquisition',
àààààààà'Kontrast-Optimierbar',
àààààààà'à3D-Rekonstruktionàmöglich'
àààààà],

ààààààdisadvantages:à[
àààààààà'Strahlenbelastung',
àààààààà'Kontrastmittel-Nebenwirkungen',
àààààààà'HoheàKosten',
àààààààà'—berdiagnoseàmöglich'
àààààà],

ààààààalternatives:à['MRT',à'Röntgen',à'Ultraschall'],
ààààààreliability:à99,
ààààààmaintenance:à'Täglich'
àààà},

àààà{
ààààààid:à'mri-scan',
ààààààname:à'MRTà(Magnetresonanztomographie)',
ààààààcategory:à'Bildgebung',
ààààààicon:à'°ç²',
ààààààdescription:à'Magnetfeld-basierteàhochauflösendeàBildgebung',

ààààààmetrics:à{
ààààààààaccuracy:à97,
ààààààààcost:à95,
ààààààààrisk:à5,
ààààààààusability:à65,
ààààààààeffectiveness:à94
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'MagnetischeàKernresonanz',
ààààààààradiation_dose:à0,
ààààààààscan_time:à'30-60àMinuten',
ààààààààresolution:à'1-2àmm',
ààààààààfield_of_view:à'40-50àcm',
ààààààààdata_storage:à'DICOM',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['Hirn-Diagnostik',à'Wirbelsäule',à'Weichteil-Diagnostik'],
ààààààsuitability:à{
ààààààààforChildren:àtrue,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àtrue,
ààààààààforHospital:àtrue,
ààààààààforHome:àfalse
àààààà},

ààààààadvantages:à[
àààààààà'KeineàStrahung',
àààààààà'AusgezeichneteàWeichteile',
àààààààà'MehrereàParametrierungen',
àààààààà'SicheràinàderàSchwangerschaft'
àààààà],

ààààààdisadvantages:à[
àààààààà'LangeàScan-Zeit',
àààààààà'Laut',
àààààààà'Teuer',
àààààààà'Kontraindikationenà(Metalle)'
àààààà],

ààààààalternatives:à['CT',à'Röntgen',à'Ultraschall'],
ààààààreliability:à98,
ààààààmaintenance:à'Täglich'
àààà},

àààà//à=====àKARDIOà=====
àààà{
ààààààid:à'ekg-monitor',
ààààààname:à'EKG-Monitorà(Elektrokardiogramm)',
ààààààcategory:à'Kardiologie',
ààààààicon:à'ä—¯¸',
ààààààdescription:à'TragbareàkontinuierlicheàHerzrhythmus-—berwachung',

ààààààmetrics:à{
ààààààààaccuracy:à94,
ààààààààcost:à30,
ààààààààrisk:à8,
ààààààààusability:à90,
ààààààààeffectiveness:à85
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'ElektrischeàHerzaktivität-Messung',
ààààààààchannels:à'6-12àKanäle',
ààààààààbattery_life:à'24-48àStunden',
ààààààààsampling_rate:à'500-1000àHz',
ààààààààconnectivity:à'Bluetooth',
ààààààààdata_storage:à'Cloud',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['Arrhythmie-Detektion',à'MI-Monitoring',à'Prävention'],
ààààààsuitability:à{
ààààààààforChildren:àfalse,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àfalse,
ààààààààforHospital:àtrue,
ààààààààforHome:àtrue
àààààà},

ààààààadvantages:à[
àààààààà'Nicht-invasiv',
àààààààà'Günstig',
àààààààà'Tragbar',
àààààààà'Echtzeit-Daten'
àààààà],

ààààààdisadvantages:à[
àààààààà'Bewegungsartefakte',
àààààààà'BegrenzteàKanäle',
àààààààà'Batterie-abhängig',
àààààààà'Hautreizung'
àààààà],

ààààààalternatives:à['12-Kanal-EKG',à'Holter-Monitor',à'Event-Rekorder'],
ààààààreliability:à92,
ààààààmaintenance:à'Täglich'
àààà},

àààà{
ààààààid:à'pacemaker',
ààààààname:à'Schrittmacherà(Pacemaker)',
ààààààcategory:à'Kardiologie',
ààààààicon:à'°',
ààààààdescription:à'ImplantiertesàelektronischesàGerätàzuràHerzfrequenz-Regelung',

ààààààmetrics:à{
ààààààààaccuracy:à99,
ààààààààcost:à70,
ààààààààrisk:à25,
ààààààààusability:à80,
ààààààààeffectiveness:à98
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'ElektrischeàImpulseàzuràHerzreizung',
ààààààààbattery_life:à'8-10àJahre',
ààààààààsensor_type:à'Atmungs-àoràBewegungssensor',
ààààààààprogrammable:àtrue,
ààààààààconnectivity:à'Wireless-telemetry',
ààààààààdata_storage:à'Gerätespeicher',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['Bradykardie',à'Herzblock',à'Sleep-Apnoe'],
ààààààsuitability:à{
ààààààààforChildren:àfalse,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àfalse,
ààààààààforHospital:àtrue,
ààààààààforHome:àfalse
àààààà},

ààààààadvantages:à[
àààààààà'Sehràzuverlässig',
àààààààà'Programmierbar',
àààààààà'Remote-Monitoring',
àààààààà'GuteàLebensqualität'
àààààà],

ààààààdisadvantages:à[
àààààààà'InvasiveàImplantation',
àààààààà'MRT-Kontraindikation',
àààààààà'Batterie-Verschlei—',
àààààààà'Infektionsrisiko'
àààààà],

ààààààalternatives:à['ICD',à'ExterneàImpulsgeber',à'Medikamentös'],
ààààààreliability:à99,
ààààààmaintenance:à'Implantation:à45àMin'
àààà},

àààà//à=====àNEUROLOGIEà=====
àààà{
ààààààid:à'eeg-headset',
ààààààname:à'EEG-Headsetà(Elektroenzephalogramm)',
ààààààcategory:à'Neurologie',
ààààààicon:à'°ç ',
ààààààdescription:à'TragareàGehirnaktivitäts-Messung',

ààààààmetrics:à{
ààààààààaccuracy:à85,
ààààààààcost:à40,
ààààààààrisk:à3,
ààààààààusability:à75,
ààààààààeffectiveness:à80
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'MessungàvonàHirnstromaktivitäten',
ààààààààchannels:à'1-32àKanäle',
ààààààààsampling_rate:à'250-2000àHz',
ààààààààbattery_life:à'8-12àStunden',
ààààààààconnectivity:à'Bluetooth',
ààààààààdata_storage:à'Cloud',
ààààààààcertifications:à'CE'
àààààà},

ààààààapplications:à['Schlaf-Monitoring',à'Fokus-Messung',à'Anfalls-Detektion'],
ààààààsuitability:à{
ààààààààforChildren:àtrue,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àtrue,
ààààààààforHospital:àfalse,
ààààààààforHome:àtrue
àààààà},

ààààààadvantages:à[
àààààààà'Nicht-invasiv',
àààààààà'Tragbar',
àààààààà'Günstig',
àààààààà'Echtzeit-Feedback'
àààààà],

ààààààdisadvantages:à[
àààààààà'Artefakte',
àààààààà'GeringeàräumlicheàAuflösung',
àààààààà'Lernkurve',
àààààààà'Datenverlust'
àààààà],

ààààààalternatives:à['EEG-Labor',à'MEG',à'fMRT'],
ààààààreliability:à82,
ààààààmaintenance:à'Täglich'
àààà},

àààà//à=====àORTHOPÄDIEà=====
àààà{
ààààààid:à'exoskeleton',
ààààààname:à'Exoskelettà(Motorisiert)',
ààààààcategory:à'Orthopädie',
ààààààicon:à'°¦¾',
ààààààdescription:à'TragbareàRobotikàzuràBewegungsunterstützung',

ààààààmetrics:à{
ààààààààaccuracy:à90,
ààààààààcost:à90,
ààààààààrisk:à15,
ààààààààusability:à60,
ààààààààeffectiveness:à88
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'Motor-unterstützteàGelenk-Bewegung',
ààààààààweight:à'15-25àkg',
ààààààààbattery_life:à'6-8àStunden',
ààààààààpower:à'500-1500àWatt',
ààààààààdegrees_of_freedom:à'4-6',
ààààààààconnectivity:à'Wireless',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['Rehabilitation',à'Mobilität-Hilfe',à'Lauf-Training'],
ààààààsuitability:à{
ààààààààforChildren:àfalse,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àfalse,
ààààààààforHospital:àtrue,
ààààààààforHome:àfalse
àààààà},

ààààààadvantages:à[
àààààààà'MotorischeàUnterstützung',
àààààààà'ErmutigtàBewegung',
àààààààà'VerbesseràBalance',
àààààààà'EffektiveàRehabilitation'
àààààà],

ààààààdisadvantages:à[
àààààààà'Sehràteuer',
àààààààà'Schwer',
àààààààà'LangeàTrainingszeit',
àààààààà'Wartungsintensiv'
àààààà],

ààààààalternatives:à['Gehstock',à'Rollator',à'Rollstuhl'],
ààààààreliability:à88,
ààààààmaintenance:à'Wöchentlich'
àààà},

àààà//à=====àZAHNMEDIZINà=====
àààà{
ààààààid:à'intraoral-scanner',
ààààààname:à'Intraoral-Scanner',
ààààààcategory:à'Zahnmedizin',
ààààààicon:à'°¦·',
ààààààdescription:à'Digitaleà3D-Zahnabformung',

ààààààmetrics:à{
ààààààààaccuracy:à96,
ààààààààcost:à60,
ààààààààrisk:à2,
ààààààààusability:à80,
ààààààààeffectiveness:à92
àààààà},

ààààààdetails:à{
ààààààààprinciple:à'Struktuiertes-Lichtà3D-Scanning',
ààààààààaccuracy_range:à'——±10à——µm',
ààààààààscan_time:à'2-5àMinuten',
ààààààààdata_format:à'STL,àOBJ',
ààààààààconnectivity:à'USB,àWireless',
ààààààààdata_storage:à'Cloud',
ààààààààcertifications:à'CE,àFDA'
àààààà},

ààààààapplications:à['ProvisorischeàVersorgung',à'Implantologie',à'Orthodontie'],
ààààààsuitability:à{
ààààààààforChildren:àtrue,
ààààààààforElderly:àtrue,
ààààààààforPregnant:àtrue,
ààààààààforHospital:àfalse,
ààààààààforHome:àfalse
àààààà},

ààààààadvantages:à[
àààààààà'KeineàAbformungs-Masse',
àààààààà'Schneller',
àààààààà'Genauer',
àààààààà'DigitaleàPlanung'
àààààà],

ààààààdisadvantages:à[
àààààààà'Teuer',
àààààààà'Lernkurve',
àààààààà'AbhängigàvonàLicht',
àààààààà'BegrenzteàTiefe'
àààààà],

ààààààalternatives:à['KonventionelleàAbform',à'CBCT',à'Laborscanner'],
ààààààreliability:à95,
ààààààmaintenance:à'Monatlich'
àààà}
àà],

àà/**
ààà*àSucheàGerätànachàID
ààà*/
ààgetDeviceById(id)à{
ààààreturnàthis.devices.find(dà=>àd.idà===àid);
àà},

àà/**
ààà*àAlleàGeräteàeineràKategorie
ààà*/
ààgetDevicesByCategory(category)à{
ààààreturnàthis.devices.filter(dà=>àd.categoryà===àcategory);
àà},

àà/**
ààà*àAlleàKategorien
ààà*/
ààgetCategories()à{
ààààreturnà[...newàSet(this.devices.map(dà=>àd.category))];
àà},

àà/**
ààà*àSucheànachàNamen
ààà*/
ààsearchDevices(query)à{
ààààconstàlowerQueryà=àquery.toLowerCase();
ààààreturnàthis.devices.filter(dà=>
ààààààd.name.toLowerCase().includes(lowerQuery)à||
ààààààd.description.toLowerCase().includes(lowerQuery)
àààà);
àà}
};
