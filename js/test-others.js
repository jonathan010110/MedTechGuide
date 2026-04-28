/**
à*à=====================================================
à*àWEITEREàSELBSTTESTSà-àModul
à*àAngst,àBurnout,àStress,àSchlafqualität
à*àJederàTestàmità40àFragen
à*à=====================================================
à*/

//à=====àTESTà1:àANGSTTESTà=====
constàAnxietyTestà=à{
ààtestId:à'anxiety',
ààtestName:à'Angst-Selbsttest',
ààtestDescription:à'SelbsttestàzuràEinschätzungàvonàAngststörungenà(40àFragen)',

ààanswerOptions:à[
àààà{àvalue:à0,àlabel:à'Nie',àcolor:à'#22c55e'à},
àààà{àvalue:à1,àlabel:à'AnàeinzelnenàTagen',àcolor:à'#f59e0b'à},
àààà{àvalue:à2,àlabel:à'AnàmehràalsàderàHälfteàderàTage',àcolor:à'#f97316'à},
àààà{àvalue:à3,àlabel:à'Fastàtäglich',àcolor:à'#ef4444'à}
àà],

ààquestions:à[
àààà//àALLGEMEINEàANGSTà(5àFragen)
àààà{àid:à1,àcategory:à'AllgemeineàAngst',àquestion:à'IchàhabeàeinàdiffusesàGefühlàvonàBesorgnisàoderàUnruhe.'à},
àààà{àid:à2,àcategory:à'AllgemeineàAngst',àquestion:à'IchàmacheàmiràSorgenàumàalltäglicheàDinge.'à},
àààà{àid:à3,àcategory:à'AllgemeineàAngst',àquestion:à'Ichàbinànervösàoderàangespannt.'à},
àààà{àid:à4,àcategory:à'AllgemeineàAngst',àquestion:à'IchàhabeàAngst,àdassàetwasàSchlimmesàpassieràwird.'à},
àààà{àid:à5,àcategory:à'AllgemeineàAngst',àquestion:à'Ichàbinàleichtàzuàerschrecken.'à},

àààà//àPANIKATTACKENà(5àFragen)
àààà{àid:à6,àcategory:à'Panik',àquestion:à'IchàerlebeàplötzlicheàAngstschübeàohneàoffensichtlichenàGrund.'à},
àààà{àid:à7,àcategory:à'Panik',àquestion:à'IchàhabeàeinàGefühlàderàBeklemmungàoderàBeklemmung.'à},
àààà{àid:à8,àcategory:à'Panik',àquestion:à'MeinàHerzàrastàwährendàAngstepisoden.'à},
àààà{àid:à9,àcategory:à'Panik',àquestion:à'IchàhabeàAngstàdavor,àdieàKontrolleàzuàverlieren.'à},
àààà{àid:à10,àcategory:à'Panik',àquestion:à'IchàhabeàAngstàvoràerneutenàAngstattacken.'à},

àààà//àKÖRPERLICHEàSYMPTOMEà(5àFragen)
àààà{àid:à11,àcategory:à'Körperlich',àquestion:à'IchàhabeàKopfschmerzenàoderàMigräne.'à},
àààà{àid:à12,àcategory:à'Körperlich',àquestion:à'IchàhabeàMagen-àoderàDarmprobleme.'à},
àààà{àid:à13,àcategory:à'Körperlich',àquestion:à'IchàhabeàMuskelangespannungàoderàZittern.'à},
àààà{àid:à14,àcategory:à'Körperlich',àquestion:à'IchàhabeàSchwierigkeiten,àtiefeàAtemzügeàzuànehmen.'à},
àààà{àid:à15,àcategory:à'Körperlich',àquestion:à'Ichàschwitzeàexzessiv,àbesondersàbeiàAngst.'à},

àààà//àSOZIALEàANGSTà(5àFragen)
àààà{àid:à16,àcategory:à'SozialeàAngst',àquestion:à'IchàhabeàAngstàdavor,àinàsozialenàSituationenànichtàzurechtzukommen.'à},
àààà{àid:à17,àcategory:à'SozialeàAngst',àquestion:à'Ichàfürchteàmichàdavor,àvonàanderenànegativàbeurteiltàzuàwerden.'à},
àààà{àid:à18,àcategory:à'SozialeàAngst',àquestion:à'IchàvermeideàöffentlicheàAuftritteàoderàReden.'à},
àààà{àid:à19,àcategory:à'SozialeàAngst',àquestion:à'IchàbinàselbstbewusstàinàsozialenàSituationen.'à},
àààà{àid:à20,àcategory:à'SozialeàAngst',àquestion:à'IchàhabeàAngst,àmitàfremdenàMenschenàzuàsprechen.'à},

àààà//àSPEZIFISCHEàPHOBIENà(5àFragen)
àààà{àid:à21,àcategory:à'Phobien',àquestion:à'IchàhabeàintensiveàAngstàvoràbestimmtenàSituationenà(Höhe,àFliegen,àetc.).'à},
àààà{àid:à22,àcategory:à'Phobien',àquestion:à'IchàvermeideàSituationen,àdieàmeineàAngstàauslösen.'à},
àààà{àid:à23,àcategory:à'Phobien',àquestion:à'MeineàAngstàistàdisproportionalàzumàtatsächlichenàRisiko.'à},
àààà{àid:à24,àcategory:à'Phobien',àquestion:à'MeineàAngstàbeeinträchtigtàmeinàLeben.'à},
àààà{àid:à25,àcategory:à'Phobien',àquestion:à'Ichàwisse,àdassàmeineàAngstàirrationalàist,àkannàsieàaberànichtàkontrollieren.'à},

àààà//àSEPARATIONàANGSTà/àBESORGNISàANGSTà(5àFragen)
àààà{àid:à26,àcategory:à'Besorgnis',àquestion:à'IchàmacheàmiràSorgenàumàdieàSicherheitàmeineràLieben.'à},
àààà{àid:à27,àcategory:à'Besorgnis',àquestion:à'IchàbinàüberbesorgtàumàmeineàGesundheitàoderàdieàGesundheitàanderer.'à},
àààà{àid:à28,àcategory:à'Besorgnis',àquestion:à'KleineàSymptomeàlassenàmichàbefürchten,àichàhätteàeineàernsthafteàKrankheit.'à},
àààà{àid:à29,àcategory:à'Besorgnis',àquestion:à'IchàüberprüfeàwiederholtàmeineàGesundheitàoderàSicherheit.'à},
àààà{àid:à30,àcategory:à'Besorgnis',àquestion:à'KatastrophischesàDenkenàbelinstàmichàGedanken.'à},

àààà//àAUSWIRKUNGENà(5àFragen)
àààà{àid:à31,àcategory:à'Auswirkungen',àquestion:à'MeineàAngstàbeeinträchtigtàmeineàArbeitàoderàSchule.'à},
àààà{àid:à32,àcategory:à'Auswirkungen',àquestion:à'MeineàAngstàbeeinträchtigtàmeineàBeziehungen.'à},
àààà{àid:à33,àcategory:à'Auswirkungen',àquestion:à'MeineàAngstàbeschränktàmeinàLebenàundàmeineàAktivitäten.'à},
àààà{àid:à34,àcategory:à'Auswirkungen',àquestion:à'Ichàfindeàesàschwer,àmichàzuàentspannen.'à},
àààà{àid:à35,àcategory:à'Auswirkungen',àquestion:à'Ichàversuche,àangstauslösendeàSituationenàzuàvermeiden.'à},

àààà//àKOGNITIVEàSYMPTOMEà(5àFragen)
àààà{àid:à36,àcategory:à'Kognitiv',àquestion:à'IchàkannàmeineàängstlichenàGedankenànichtàstoppen.'à},
àààà{àid:à37,àcategory:à'Kognitiv',àquestion:à'IchàstelleàmiràdasàSchlimmsteàvor.'à},
àààà{àid:à38,àcategory:à'Kognitiv',àquestion:à'Ichàhabeàschwarzwei—-DenkenàbeimàUmgangàmitàUnsicherheit.'à},
àààà{àid:à39,àcategory:à'Kognitiv',àquestion:à'IchàkannàmichàschweràkonzentrierenàwegenàAngstgedanken.'à},
àààà{àid:à40,àcategory:à'Kognitiv',àquestion:à'MeinàGedächtnisàistàwegenàAngstàbeeinträchtigt.'à}
àà],

ààcalculateScore(answers)à{
ààààreturnàObject.values(answers).reduce((sum,àval)à=>àsumà+à(valà||à0),à0);
àà},

ààgetInterpretation(score)à{
ààààifà(scoreà<=à15)à{
ààààààreturnà{
ààààààààlevel:à'Minimal',
ààààààààcolor:à'#22c55e',
ààààààààdescription:à'MinimaleàAngstsymptome',
ààààààààtext:à'SieàzeigenàminimaleàAngstsymptome.àDiesàliegtàimànormalenàBereich.'
àààààà};
àààà}àelseàifà(scoreà<=à30)à{
ààààààreturnà{
ààààààààlevel:à'Leicht',
ààààààààcolor:à'#f59e0b',
ààààààààdescription:à'LeichteàAngstsymptome',
ààààààààtext:à'SieàzeigenàleichteàAngstsymptome.àDieseàsolltenàbeobachtetàwerden.'
àààààà};
àààà}àelseàifà(scoreà<=à50)à{
ààààààreturnà{
ààààààààlevel:à'Moderat',
ààààààààcolor:à'#f97316',
ààààààààdescription:à'ModerateàAngstsymptome',
ààààààààtext:à'SieàzeigenàmoderateàAngstsymptome.àProfessionelleàHilfeàwirdàempfohlen.'
àààààà};
àààà}àelseà{
ààààààreturnà{
ààààààààlevel:à'Schwer',
ààààààààcolor:à'#ef4444',
ààààààààdescription:à'SchwereàAngstsymptome',
ààààààààtext:à'SieàzeigenàschwereàAngstsymptome.àDringendeàprofessionelleàHilfeàwirdàempfohlen.'
àààààà};
àààà}
àà},

ààmedicalDisclaimer:à`
àààà<divàstyle="background:à#fef2f2;àborder-left:à4pxàsolidà#ef4444;àpadding:à1rem;àmargin-top:à2rem;àborder-radius:à8px;">
àààààà<pàstyle="margin:à0;àfont-weight:à600;àcolor:à#7f1d1d;"> —¯¸àWichtigeràHinweis:</p>
àààààà<pàstyle="margin:à0.5remà0à0à0;àcolor:à#5f3738;àfont-size:à0.95rem;">
ààààààààDieseràTestàdientànuràzuràgrobenàOrientierungàundàersetztàkeineàmedizinischeàDiagnose.àBeiàanhaltendenàoderàbelastendenàBeschwerdenàwendenàSieàsichàbitteàanàeineàÄrztin,àeinenàArztàoderàeineàpsychologischeàFachperson.
àààààà</p>
àààà</div>
àà`
};

//à=====àTESTà2:àBURNOUT-TESTà=====
constàBurnoutTestà=à{
ààtestId:à'burnout',
ààtestName:à'Burnout-Selbsttest',
ààtestDescription:à'SelbsttestàzumàBurnout-Risikoà(40àFragen)',

ààanswerOptions:à[
àààà{àvalue:à0,àlabel:à'Nie',àcolor:à'#22c55e'à},
àààà{àvalue:à1,àlabel:à'AnàeinzelnenàTagen',àcolor:à'#f59e0b'à},
àààà{àvalue:à2,àlabel:à'AnàmehràalsàderàHälfteàderàTage',àcolor:à'#f97316'à},
àààà{àvalue:à3,àlabel:à'Fastàtäglich',àcolor:à'#ef4444'à}
àà],

ààquestions:à[
àààà//àEMOTIONALEàERSCHÖPFUNGà(8àFragen)
àààà{àid:à1,àcategory:à'EmotionaleàErschöpfung',àquestion:à'IchàfühleàmichàemotionalàausgelaugtàvonàmeineràArbeit.'à},
àààà{àid:à2,àcategory:à'EmotionaleàErschöpfung',àquestion:à'IchàbinàamàEndeàmeinesàArbeitstagesàvölligàerschöpft.'à},
àààà{àid:à3,àcategory:à'EmotionaleàErschöpfung',àquestion:à'Ichàbinàmüde,àwennàichàaufwacheàundàmussàarbeiten.'à},
àààà{àid:à4,àcategory:à'EmotionaleàErschöpfung',àquestion:à'Ichàbinàchronischàmüdeàundàverausgabt.'à},
àààà{àid:à5,àcategory:à'EmotionaleàErschöpfung',àquestion:à'MeineàArbeitàstelltàmichàemotionalàvoràHerausforderungen.'à},
àààà{àid:à6,àcategory:à'EmotionaleàErschöpfung',àquestion:à'Ichàhöreànieàaufàzuàarbeiten,àselbstàwennàichàzuàHauseàbin.'à},
àààà{àid:à7,àcategory:à'EmotionaleàErschöpfung',àquestion:à'IchàübernehmeàmehràVerantwortungàalsàichàverkraftenàkann.'à},
àààà{àid:à8,àcategory:à'EmotionaleàErschöpfung',àquestion:à'MeineàGrenzenàzwischenàArbeitàundàFreizeitàsindàverschwunden.'à},

àààà//àDEPERSONALISIERUNGà(8àFragen)
àààà{àid:à9,àcategory:à'Depersonalisierung',àquestion:à'IchàbinàzynischàgegenüberàmeineràArbeitàgeworden.'à},
àààà{àid:à10,àcategory:à'Depersonalisierung',àquestion:à'MeineàArbeitàwirdàmiràzunehmendàsinnlos.'à},
àààà{àid:à11,àcategory:à'Depersonalisierung',àquestion:à'IchàfühleàmichàisoliertàundàalleinàbeiàderàArbeit.'à},
àààà{àid:à12,àcategory:à'Depersonalisierung',àquestion:à'IchàbinàentfremdetàvonàmeinenàKollegen.'à},
àààà{àid:à13,àcategory:à'Depersonalisierung',àquestion:à'IchàseheàmeineàArbeitàmitàGleichgültigkeit.'à},
àààà{àid:à14,àcategory:à'Depersonalisierung',àquestion:à'IchàhabeàSchwierigkeiten,àempatteàmitàmeinenàKlienten/Kundenàzuàsein.'à},
àààà{àid:à15,àcategory:à'Depersonalisierung',àquestion:à'IchàbinàhartherzigàgewordenàRichtungàandereràMenschen.'à},
àààà{àid:à16,àcategory:à'Depersonalisierung',àquestion:à'Michàinteressiertànichtàmehr,àwieàandereàmiràergent.'à},

àààà//àREDUZIERTEàLEISTUNGà(8àFragen)
àààà{àid:à17,àcategory:à'Leistung',àquestion:à'IchàkannàmeineàArbeitànichtàmehràsoàeffizientàbewältigen—'à},
àààà{àid:à18,àcategory:à'Leistung',àquestion:à'IchàverliereàVertrauenàinàmeineàFähigkeiten.'à},
àààà{àid:à19,àcategory:à'Leistung',àquestion:à'MeineàProduktivitätàsinkt.'à},
àààà{àid:à20,àcategory:à'Leistung',àquestion:à'IchàkannàmichàbeiàderàArbeitànichtàkonzentrieren.'à},
àààà{àid:à21,àcategory:à'Leistung',àquestion:à'IchàhabeàwenigeràInitiativeàbeiàderàWorkbench.'à},
àààà{àid:à22,àcategory:à'Leistung',àquestion:à'MeineàArbeitàistàwenigeràkreativàalsàfrüher.'à},
àààà{àid:à23,àcategory:à'Leistung',àquestion:à'IchàkannàkeineàHerausforderungenàmehràannehmen.'à},
àààà{àid:à24,àcategory:à'Leistung',àquestion:à'Ichàzweifle,àobàichàinàmeinemàJobàweiterarbeitenàkann.'à},

àààà//àKÖRPERLICHEàSYMPTOMEà(8àFragen)
àààà{àid:à25,àcategory:à'Körperlich',àquestion:à'IchàhabeàhäufigeàKopfschmerzenàoderàMigräne.'à},
àààà{àid:à26,àcategory:à'Körperlich',àquestion:à'IchàhabeàMagen-àoderàDarmprobleme.'à},
àààà{àid:à27,àcategory:à'Körperlich',àquestion:à'Ichàschlafeàschlechtàoderàbinàunausgeruht.'à},
àààà{àid:à28,àcategory:à'Körperlich',àquestion:à'MeinàBlutdruckàistàerhöhtàoderàichàhabeàHerzräcing.'à},
àààà{àid:à29,àcategory:à'Körperlich',àquestion:à'IchàbinàanfälligeràfüràKrankheiten.'à},
àààà{àid:à30,àcategory:à'Körperlich',àquestion:à'IchàhabeàMuskelverspannungenàoderàRückenschmerzen.'à},
àààà{àid:à31,àcategory:à'Körperlich',àquestion:à'Ichàschwítzeàmehràalsàgewöhnlich.'à},
àààà{àid:à32,àcategory:à'Körperlich',àquestion:à'MeinàAppetitàhatàsichàverändert.'à},

àààà//àPERSÖNLICHEàBEZIEHUNGENà(4àFragen)
àààà{àid:à33,àcategory:à'Beziehungen',àquestion:à'MeineàBeziehungenàzumàPartneràleidenàunteràmeinemàStress.'à},
àààà{àid:à34,àcategory:à'Beziehungen',àquestion:à'IchàbinàreizbaràRichtungàFamilieàundàFreunde.'à},
àààà{àid:à35,àcategory:à'Beziehungen',àquestion:à'IchàzieheàmichàvonàsozialenàAktivitätenàzurück.'à},
àààà{àid:à36,àcategory:à'Beziehungen',àquestion:à'IchàhabeàwenigeràGeduldàmitàUnterstützungàanderen.'à},

àààà//àSELBSTPFLEGEàUNDàHOBBYSà(4àFragen)
àààà{àid:à37,àcategory:à'Selbstpflege',àquestion:à'IchàvernachlässigeàmeineàSelbstpflegeà(Schlaf,àErnährung,àSport).'à},
àààà{àid:à38,àcategory:à'Selbstpflege',àquestion:à'IchàhabàZeitàfüràHobbysàundàzeitgemä—eàAktivitätenàgegeben.'à},
àààà{àid:à39,àcategory:à'Selbstpflege',àquestion:à'Ichàvergesse,àmichàselbstàzuàkümmern.'à},
àààà{àid:à40,àcategory:à'Selbstpflege',àquestion:à'Meinàsoziallivesàistàmangelhaftàgeworden.'à}
àà],

ààcalculateScore(answers)à{
ààààreturnàObject.values(answers).reduce((sum,àval)à=>àsumà+à(valà||à0),à0);
àà},

ààgetInterpretation(score)à{
ààààifà(scoreà<=à15)à{
ààààààreturnà{
ààààààààlevel:à'Minimal',
ààààààààcolor:à'#22c55e',
ààààààààdescription:à'MinimalesàBurnout-Risiko',
ààààààààtext:à'SieàzeigenàeinàminimalesàBurnout-Risiko.'
àààààà};
àààà}àelseàifà(scoreà<=à30)à{
ààààààreturnà{
ààààààààlevel:à'Leicht',
ààààààààcolor:à'#f59e0b',
ààààààààdescription:à'LeichtesàBurnout-Risiko',
ààààààààtext:à'EsàgibtàersteàZeichenàvonàBurnout.àAchtsamkeitàundàSelbstpflegeàwerdenàempfohlen.'
àààààà};
àààà}àelseàifà(scoreà<=à50)à{
ààààààreturnà{
ààààààààlevel:à'Moderat',
ààààààààcolor:à'#f97316',
ààààààààdescription:à'ModeratesàBurnout-Risiko',
ààààààààtext:à'SieàzeigenàZeichenàvonàBurnout.àProfessionelleàUnterstützungàwirdàempfohlen.'
àààààà};
àààà}àelseà{
ààààààreturnà{
ààààààààlevel:à'Schwer',
ààààààààcolor:à'#ef4444',
ààààààààdescription:à'SchweresàBurnout-Risiko',
ààààààààtext:à'SieàzeigenàdeutlicheàBurnout-Symptome.àDringendeàUnterstützungàwirdàempfohlen.'
àààààà};
àààà}
àà},

ààmedicalDisclaimer:à`
àààà<divàstyle="background:à#fef2f2;àborder-left:à4pxàsolidà#ef4444;àpadding:à1rem;àmargin-top:à2rem;àborder-radius:à8px;">
àààààà<pàstyle="margin:à0;àfont-weight:à600;àcolor:à#7f1d1d;"> —¯¸àWichtigeràHinweis:</p>
àààààà<pàstyle="margin:à0.5remà0à0à0;àcolor:à#5f3738;àfont-size:à0.95rem;">
ààààààààDieseràTestàdientànuràzuràgrobenàOrientierungàundàersetztàkeineàmedizinischeàDiagnose.àBeiàanhaltendenàoderàbelastendenàBeschwerdenàwendenàSieàsichàbitteàanàeineàÄrztin,àeinenàArztàoderàeineàpsychologischeàFachperson.
àààààà</p>
àààà</div>
àà`
};

//à=====àTESTà3:àSTRESSTESTà=====
constàStressTestà=à{
ààtestId:à'stress',
ààtestName:à'Stressbelastungstest',
ààtestDescription:à'SelbsttestàzuràMessungàvonàStressbelastungà(40àFragen)',

ààanswerOptions:à[
àààà{àvalue:à0,àlabel:à'Nie',àcolor:à'#22c55e'à},
àààà{àvalue:à1,àlabel:à'AnàeinzelnenàTagen',àcolor:à'#f59e0b'à},
àààà{àvalue:à2,àlabel:à'AnàmehràalsàderàHälfteàderàTage',àcolor:à'#f97316'à},
àààà{àvalue:à3,àlabel:à'Fastàtäglich',àcolor:à'#ef4444'à}
àà],

ààquestions:à[
àààà//àWAHRNEHMUNGàVONàKONTROLLIERBARKEITà(5àFragen)
àààà{àid:à1,àcategory:à'Kontrolle',àquestion:à'IchàfühleàmichàüberfordertàvonàEreignissenàau—erhalbàmeineràKontrolle.'à},
àààà{àid:à2,àcategory:à'Kontrolle',àquestion:à'Ichàbinàunsicher,àwieàichàProblemeàbewältigenàsoll.'à},
àààà{àid:à3,àcategory:à'Kontrolle',àquestion:à'Dingeàwerdenàschnelleràschlechtàalsàichàsieàreparierenàkann.'à},
àààà{àid:à4,àcategory:à'Kontrolle',àquestion:à'IchàkannàHerausforderungenàinàmeinemàLebenànichtàbewältigen.'à},
àààà{àid:à5,àcategory:à'Kontrolle',àquestion:à'IchàfühleàmichàderàSituationànichtàgewachsen.'à},

àààà//àLEBENSVERÄNDERUNGENà(5àFragen)
àààà{àid:à6,àcategory:à'Veränderungen',àquestion:à'Ichàerlebeàgro—eàVeränderungenàinàmeinemàLeben.'à},
àààà{àid:à7,àcategory:à'Veränderungen',àquestion:à'MeineàLebensumständeàhabenàsichàerheblichàverändert.'à},
àààà{àid:à8,àcategory:à'Veränderungen',àquestion:à'Ichàhabeàschwierigeàpersönlicheà—bergängeàerlebt.'à},
àààà{àid:à9,àcategory:à'Veränderungen',àquestion:à'UnerwarteteàEreignisseàhabenàmeinàLebenàbeeinflusst.'à},
àààà{àid:à10,àcategory:à'Veränderungen',àquestion:à'Ichàversuche,àmichàanàneueàSituationenàanzupassen.'à},

àààà//àBERUFLICHERàSTRESSà(5àFragen)
àààà{àid:à11,àcategory:à'Beruflich',àquestion:à'MeineàArbeitàistàstressigàundàzeitaufwändig.'à},
àààà{àid:à12,àcategory:à'Beruflich',àquestion:à'IchàhabeàKonflikteàmitàmeinenàKollegenàoderàmeinemàBoss.'à},
àààà{àid:à13,àcategory:à'Beruflich',àquestion:à'MeineàArbeitàbietetàwenigàAnerkennung.'à},
àààà{àid:à14,àcategory:à'Beruflich',àquestion:à'MeineàArbeitsplatzicherheitàistàbedroht.'à},
àààà{àid:à15,àcategory:à'Beruflich',àquestion:à'IchàhabeàzuàvielàVerantwortungàbeiàderàArbeit.'à},

àààà//àFINANZIELLEàSORGENà(5àFragen)
àààà{àid:à16,àcategory:à'Finanziell',àquestion:à'IchàhabeàfinanzielleàSchwierigkeiten.'à},
àààà{àid:à17,àcategory:à'Finanziell',àquestion:à'IchàsorgeàmichàumàmeineàwirtschaftlicheàStabilität.'à},
àààà{àid:à18,àcategory:à'Finanziell',àquestion:à'UnerwarteteàAusgabenàverursachenàmiràStress.'à},
àààà{àid:à19,àcategory:à'Finanziell',àquestion:à'GeldmangelàbeeinflusstàmeineàGesundheit.'à},
àààà{àid:à20,àcategory:à'Finanziell',àquestion:à'IchàhabeàSchulden,àdieàmichàstressen.'à},

àààà//àZWISCHENMENSCHLICHEàKONFLIKTEà(5àFragen)
àààà{àid:à21,àcategory:à'Beziehungen',àquestion:à'IchàhabeàKonflikteàmitàmeinemàPartneràoderàmeineràFamilie.'à},
àààà{àid:à22,àcategory:à'Beziehungen',àquestion:à'MeineàBeziehungenàsindàangespannt.'à},
àààà{àid:à23,àcategory:à'Beziehungen',àquestion:à'IchàfühleàmichàmissverstandenàvonàNahestehenden.'à},
àààà{àid:à24,àcategory:à'Beziehungen',àquestion:à'EinsamkeitàoderàIsolationàstressenàmich.'à},
àààà{àid:à25,àcategory:à'Beziehungen',àquestion:à'IchàhabeàSchwierigkeitenàmitàKommunikationàinàBeziehungen.'à},

àààà//àEMOTIONALEàREAKTIONENà(5àFragen)
àààà{àid:à26,àcategory:à'Emotional',àquestion:à'Ichàfühleàmichàreizbaràoderàleichtàfrustriert.'à},
àààà{àid:à27,àcategory:à'Emotional',àquestion:à'MeineàStimmungàistàschnellenàSchwankungenàausgesetzt.'à},
àààà{àid:à28,àcategory:à'Emotional',àquestion:à'Ichàfühleàmichàemotionalàausgelaugt.'à},
àààà{àid:à29,àcategory:à'Emotional',àquestion:à'IchàhabeànegativeàoderàkatastrophaleàGedanken.'à},
àààà{àid:à30,àcategory:à'Emotional',àquestion:à'IchàfühleàmichàhoffnungslosàinàstressigenàSituationen.'à},

àààà//àKÖRPERLICHEàMANIFESTATIONENà(5àFragen)
àààà{àid:à31,àcategory:à'Körperlich',àquestion:à'StressàverursachtàmiràkörperlicheàBeschwerden.'à},
àààà{àid:à32,àcategory:à'Körperlich',àquestion:à'MeinàSchlafàistàdurchàStressàbeeinträchtigt.'à},
àààà{àid:à33,àcategory:à'Körperlich',àquestion:à'IchàhabeàMuskelverspannungenàdurchàStress.'à},
àààà{àid:à34,àcategory:à'Körperlich',àquestion:à'MeineàVerdauungàistàdurchàStressàbeeinträchtigt.'à},
àààà{àid:à35,àcategory:à'Körperlich',àquestion:à'IchàbinàanfälligeràfüràErkältungenàundàKrankheiten.'à},

àààà//àBEWÄLTIGUNGSMECHANISMENà(5àFragen)
àààà{àid:à36,àcategory:à'Bewältigung',àquestion:à'IchàgreifteàzuàuntauglichenàBewältigungsmechanismenà(Alkohol,àEssen,àetc.).'à},
àààà{àid:à37,àcategory:à'Bewältigung',àquestion:à'IchàhabeàSchwierigkeiten,àgesundeàGrenzenàzuàsetzen.'à},
àààà{àid:à38,àcategory:à'Bewältigung',àquestion:à'Ichàübernehmeàzuàvielàundàvernachlässigeàmichàselbst.'à},
àààà{àid:à39,àcategory:à'Bewältigung',àquestion:à'IchàhabeàSchwierigkeiten,àmichàzuàentspannen.'à},
àààà{àid:à40,àcategory:à'Bewältigung',àquestion:à'IchàvermeideàProblemeàstattàsieàzuàlösen.'à}
àà],

ààcalculateScore(answers)à{
ààààreturnàObject.values(answers).reduce((sum,àval)à=>àsumà+à(valà||à0),à0);
àà},

ààgetInterpretation(score)à{
ààààifà(scoreà<=à15)à{
ààààààreturnà{
ààààààààlevel:à'Gering',
ààààààààcolor:à'#22c55e',
ààààààààdescription:à'GeringeàStressbelastung',
ààààààààtext:à'SieàzeigenàeineàgeringeàStressbelastung.àDasàistàeinàgesundesàNiveau.'
àààààà};
àààà}àelseàifà(scoreà<=à30)à{
ààààààreturnà{
ààààààààlevel:à'Leicht-Moderat',
ààààààààcolor:à'#f59e0b',
ààààààààdescription:à'Leichtàbisàmä—igeàStressbelastung',
ààààààààtext:à'Sieàzeigenàleichteàbisàmä—igeàStressbelastung.àAchtsamkeitàundàEntspannungstechnikenàwerdenàempfohlen.'
àààààà};
àààà}àelseàifà(scoreà<=à50)à{
ààààààreturnà{
ààààààààlevel:à'Moderat-Schwer',
ààààààààcolor:à'#f97316',
ààààààààdescription:à'Mä—igàbisàschwereàStressbelastung',
ààààààààtext:à'Sieàzeigenàmä—igàbisàschwereàStressbelastung.àProfessionelleàUnterstützungàwirdàempfohlen.'
àààààà};
àààà}àelseà{
ààààààreturnà{
ààààààààlevel:à'Schwer',
ààààààààcolor:à'#ef4444',
ààààààààdescription:à'SchwereàStressbelastung',
ààààààààtext:à'SieàzeigenàschwereàStressbelastung.àDringendeàprofessionelleàHilfeàwirdàempfohlen.'
àààààà};
àààà}
àà},

ààmedicalDisclaimer:à`
àààà<divàstyle="background:à#fef2f2;àborder-left:à4pxàsolidà#ef4444;àpadding:à1rem;àmargin-top:à2rem;àborder-radius:à8px;">
àààààà<pàstyle="margin:à0;àfont-weight:à600;àcolor:à#7f1d1d;"> —¯¸àWichtigeràHinweis:</p>
àààààà<pàstyle="margin:à0.5remà0à0à0;àcolor:à#5f3738;àfont-size:à0.95rem;">
ààààààààDieseràTestàdientànuràzuràgrobenàOrientierungàundàersetztàkeineàmedizinischeàDiagnose.àBeiàanhaltendenàoderàbelastendenàBeschwerdenàwendenàSieàsichàbitteàanàeineàÄrztin,àeinenàArztàoderàeineàpsychologischeàFachperson.
àààààà</p>
àààà</div>
àà`
};

//à=====àTESTà4:àSCHLAFQUALITÄTSTESTà=====
constàSleepQualityTestà=à{
ààtestId:à'sleep',
ààtestName:à'Schlafqualitäts-Test',
ààtestDescription:à'SelbsttestàzuràBewertungàderàSchlafqualitätà(40àFragen)',

ààanswerOptions:à[
àààà{àvalue:à0,àlabel:à'Nie',àcolor:à'#22c55e'à},
àààà{àvalue:à1,àlabel:à'AnàeinzelnenàNächten',àcolor:à'#f59e0b'à},
àààà{àvalue:à2,àlabel:à'AnàmehràalsàderàHälfteàderàNächte',àcolor:à'#f97316'à},
àààà{àvalue:à3,àlabel:à'JedeàNachtàoderàfastàjedeàNacht',àcolor:à'#ef4444'à}
àà],

ààquestions:à[
àààà//àEINSCHLAFSTÖRUNGENà(5àFragen)
àààà{àid:à1,àcategory:à'Einschlafen',àquestion:à'IchàhabeàSchwierigkeiten,àeinzuschlafen.'à},
àààà{àid:à2,àcategory:à'Einschlafen',àquestion:à'IchàwälzeàmichàimàBett,àbevoràichàeinschlafe.'à},
àààà{àid:à3,àcategory:à'Einschlafen',àquestion:à'Esàdauertàlängeràalsà30àMinuten,àbisàichàeinschlafe.'à},
àààà{àid:à4,àcategory:à'Einschlafen',àquestion:à'MeinàVerstandàistàüberaktiv,àwennàichàversucheàeinzuschlafen.'à},
àààà{àid:à5,àcategory:à'Einschlafen',àquestion:à'Ichàbinànervösàoderàangespannt,àwennàichàinsàBettàgehe.'à},

àààà//àDURCHSCHLAFSTÖRUNGENà(5àFragen)
àààà{àid:à6,àcategory:à'Durchschlafen',àquestion:à'Ichàwacheànachtsàauf.'à},
àààà{àid:à7,àcategory:à'Durchschlafen',àquestion:à'IchàwacheàmehrmalsàproàNachtàauf.'à},
àààà{àid:à8,àcategory:à'Durchschlafen',àquestion:à'IchàhabeàSchwierigkeiten,ànachàdemàAufwachenàwiederàeinzuschlafen.'à},
àààà{àid:à9,àcategory:à'Durchschlafen',àquestion:à'IchàerlebeàlangeàZeiträumeàdesàWachseinsàinàderàNacht.'à},
àààà{àid:à10,àcategory:à'Durchschlafen',àquestion:à'MeinàSchlafàistàfragmentiertàoderàunterbrochen.'à},

àààà//àFR—HMORGLICHESàERWACHENà(5àFragen)
àààà{àid:à11,àcategory:à'FrühesàAufwachen',àquestion:à'IchàwacheàsehràfrühàamàMorgenàaufà(vorà5àUhr).'à},
àààà{àid:à12,àcategory:à'FrühesàAufwachen',àquestion:à'Ichàkannànichtàlängeràschlafen,àwennàichàfrühàaufwache.'à},
àààà{àid:à13,àcategory:à'FrühesàAufwachen',àquestion:à'IchàfühleàmichàtagsüberàmüdeàwegenàfrühemàAufwachen.'à},
àààà{àid:à14,àcategory:à'FrühesàAufwachen',àquestion:à'MeineàSchlafenszeitàistàzuàkurz.'à},
àààà{àid:à15,àcategory:à'FrühesàAufwachen',àquestion:à'IchàverbringeàvielàZeitàimàBettàohneàzuàschlafen.'à},

àààà//àSCHLAFQUALITÄTà(5àFragen)
àààà{àid:à16,àcategory:à'Qualität',àquestion:à'MeinàSchlafàistànichtàerholsam.'à},
àààà{àid:à17,àcategory:à'Qualität',àquestion:à'Ichàfühleàmichàtagsüberàmüdeàundàausgelaugt.'à},
àààà{àid:à18,àcategory:à'Qualität',àquestion:à'MeinàSchlafàistàleichtàoderàoberflächlich.'à},
àààà{àid:à19,àcategory:à'Qualität',àquestion:à'IchàträumeàlebhaftàoderàhabeàAlbträume.'à},
àààà{àid:à20,àcategory:à'Qualität',àquestion:à'IchàschwitzeràexzessivàwährendàdesàSchlafes.'à},

àààà//àSCHLAFMITTELàABHÄNGIGKEITà(5àFragen)
àààà{àid:à21,àcategory:à'Abhängigkeit',àquestion:à'IchàbraucheàSchlafmittel,àumàzuàschlafen.'à},
àààà{àid:à22,àcategory:à'Abhängigkeit',àquestion:à'IchànutzeàAlkohol,àumàbesseràzuàschlafen.'à},
àààà{àid:à23,àcategory:à'Abhängigkeit',àquestion:à'IchànutzeàKräuteràSchlafmittelàoderàNahrungsergänzungsmittel.'à},
àààà{àid:à24,àcategory:à'Abhängigkeit',àquestion:à'MeineàSchlafmittelàsindàwenigeràwirksamàalsàfrüher.'à},
àààà{àid:à25,àcategory:à'Abhängigkeit',àquestion:à'IchàbinàbesorgtàüberàmeineàAbhängigkeitàvonàSchlafmitteln.'à},

àààà//àTAGESSCHLÄFRIGKEITà(5àFragen)
àààà{àid:à26,àcategory:à'Tagesschläfrigkeit',àquestion:à'Ichàbinàtagsüberàschläfrig.'à},
àààà{àid:à27,àcategory:à'Tagesschläfrigkeit',àquestion:à'Ichànickeàtagsüberàein.'à},
àààà{àid:à28,àcategory:à'Tagesschläfrigkeit',àquestion:à'IchàkannàmichàwegenàMüdigkeitànichtàkonzentrieren.'à},
àààà{àid:à29,àcategory:à'Tagesschläfrigkeit',àquestion:à'IchàbinàlangsameràundàwenigeràproduktivàwährendàdesàTages.'à},
àààà{àid:à30,àcategory:à'Tagesschläfrigkeit',àquestion:à'MeineàTagesschläfrigkeitàbeeinflusstàmeineàSicherheità(fahren,àetc.).'à},

àààà//àSCHLAFHYGIENEà(5àFragen)
àààà{àid:à31,àcategory:à'Hygiene',àquestion:à'MeinàSchlafzimmeràistànichtàdunkelàgenug.'à},
àààà{àid:à32,àcategory:à'Hygiene',àquestion:à'MeinàSchlafzimmeràistàzuàlautàoderàzuàleise.'à},
àààà{àid:à33,àcategory:à'Hygiene',àquestion:à'DieàTemperaturàmeinesàSchlafzimmersàistànichtàkomfortabel.'à},
àààà{àid:à34,àcategory:à'Hygiene',àquestion:à'IchàverwendeàmeinàBettàfüràandereàAktivitätenàalsàSchlafen.'à},
àààà{àid:à35,àcategory:à'Hygiene',àquestion:à'IchàverwendeàelektronischeàGeräteàvoràdemàSchlafengehen.'à},

àààà//àSCHLAFMUSTERà(5àFragen)
àààà{àid:à36,àcategory:à'Muster',àquestion:à'MeineàSchlafens-àundàAufwachzeitenàsindàunregelmä—ig.'à},
àààà{àid:à37,àcategory:à'Muster',àquestion:à'IchàarbeiteàinàSchichtenàoderàhabeàunregelmä—igeàArbeitszeiten.'à},
àààà{àid:à38,àcategory:à'Muster',àquestion:à'IchàschlafeàzuàvielàamàWochenendeà(SocialàJetàLag).'à},
àààà{àid:à39,àcategory:à'Muster',àquestion:à'IchàreiseàhäufigàundàmussàmeineàSchlafmusteràanpassen.'à},
àààà{àid:à40,àcategory:à'Muster',àquestion:à'MeinàKörperàhatàkeineàkonsistenteàSchlaf-Wach-Routine.'à}
àà],

ààcalculateScore(answers)à{
ààààreturnàObject.values(answers).reduce((sum,àval)à=>àsumà+à(valà||à0),à0);
àà},

ààgetInterpretation(score)à{
ààààifà(scoreà<=à15)à{
ààààààreturnà{
ààààààààlevel:à'Gut',
ààààààààcolor:à'#22c55e',
ààààààààdescription:à'GuteàSchlafqualität',
ààààààààtext:à'SieàzeigenàeineàguteàSchlafqualität.àIhreàSchlafmusteràsindàgesund.'
àààààà};
àààà}àelseàifà(scoreà<=à30)à{
ààààààreturnà{
ààààààààlevel:à'Ausreichend',
ààààààààcolor:à'#f59e0b',
ààààààààdescription:à'AusreichendeàSchlafqualitätàmitàleichtenàProblemen',
ààààààààtext:à'SieàzeigenàausreichendeàSchlafqualität,àaberàmitàeinigenàProblemen.àSchlafhygiene-Verbesserungenàkönnenàhelfen.'
àààààà};
àààà}àelseàifà(scoreà<=à50)à{
ààààààreturnà{
ààààààààlevel:à'Schlecht',
ààààààààcolor:à'#f97316',
ààààààààdescription:à'SchlechteàSchlafqualität',
ààààààààtext:à'SieàzeigenàschlechteàSchlafqualität.àProfessionelleàUnterstützungàwirdàempfohlen.'
àààààà};
àààà}àelseà{
ààààààreturnà{
ààààààààlevel:à'Sehràschlecht',
ààààààààcolor:à'#ef4444',
ààààààààdescription:à'SehràschlechteàSchlafqualität',
ààààààààtext:à'SieàzeigenàsehràschlechteàSchlafqualität.àDringendeàprofessionelleàHilfeàwirdàempfohlen.'
àààààà};
àààà}
àà},

ààmedicalDisclaimer:à`
àààà<divàstyle="background:à#fef2f2;àborder-left:à4pxàsolidà#ef4444;àpadding:à1rem;àmargin-top:à2rem;àborder-radius:à8px;">
àààààà<pàstyle="margin:à0;àfont-weight:à600;àcolor:à#7f1d1d;"> —¯¸àWichtigeràHinweis:</p>
àààààà<pàstyle="margin:à0.5remà0à0à0;àcolor:à#5f3738;àfont-size:à0.95rem;">
ààààààààDieseràTestàdientànuràzuràgrobenàOrientierungàundàersetztàkeineàmedizinischeàDiagnose.àBeiàanhaltendenàoderàbelastendenàBeschwerdenàwendenàSieàsichàbitteàanàeineàÄrztin,àeinenàArztàoderàeineàpsychologischeàFachperson.
àààààà</p>
àààà</div>
àà`
};
