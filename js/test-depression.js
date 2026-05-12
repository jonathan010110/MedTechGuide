/**
à*à=====================================================
à*àDEPRESSIONSTESTà-àModul
à*àSelbsttestàzuràgrobenàEinschätzungàdepressiveràSymptome
à*àOrientierung:àPHQ-9àStrukturàerweitert
à*à=====================================================
à*/

constàDepressionTestà=à{
ààtestId:à'depression',
ààtestName:à'Depressionstest',
ààtestDescription:à'GrobeàEinschätzungàdepressiveràSymptomeà(40àFragen)',
àà
àà//à4-stufigeàAntwortskala
ààanswerOptions:à[
àààà{àvalue:à0,àlabel:à'Nie',àcolor:à'#22c55e'à},
àààà{àvalue:à1,àlabel:à'AnàeinzelnenàTagen',àcolor:à'#f59e0b'à},
àààà{àvalue:à2,àlabel:à'AnàmehràalsàderàHälfteàderàTage',àcolor:à'#f97316'à},
àààà{àvalue:à3,àlabel:à'Fastàtäglich',àcolor:à'#ef4444'à}
àà],

àà//à40àwissenschaftlichàstrukturierteàFragen
ààquestions:à[
àààà//à===àSTIMMUNGà(5àFragen)à===
àààà{àid:à1,àcategory:à'Stimmung',àquestion:à'Ichàfühleàmichàniedergeschlagenàoderàtraurig.'à},
àààà{àid:à2,àcategory:à'Stimmung',àquestion:à'IchàhabeàdasàGefühl,àeigentlichànichtàmehràamàLebenàteilzunehmen.'à},
àààà{àid:à3,àcategory:à'Stimmung',àquestion:à'Allesàerlebtàmichàgrauàundàhoffnungslosàan.'à},
àààà{àid:à4,àcategory:à'Stimmung',àquestion:à'Ichàkannànichtsàfinden,àdasàmichàfreut.'à},
àààà{àid:à5,àcategory:à'Stimmung',àquestion:à'MeineàStimmungàistàsehràlabyrinthischàundàunbeständig.'à},

àààà//à===àANTRIEBà(5àFragen)à===
àààà{àid:à6,àcategory:à'Antrieb',àquestion:à'Miràfälltàesàschwer,àmichàzuàalltäglichenàDingenàaufzuraffen.'à},
àààà{àid:à7,àcategory:à'Antrieb',àquestion:à'Ichàbinàmüdeàundàerschöpft,àselbstàwennàichàausreichendàgeschlafenàhabe.'à},
àààà{àid:à8,àcategory:à'Antrieb',àquestion:à'IchàhabeàwenigeràEnergieàalsàsonst.'à},
àààà{àid:à9,àcategory:à'Antrieb',àquestion:à'Aktivitäten,àdieàmiràfrüheràSpa—àgemachtàhaben,àinteressierenàmichànichtàmehr.'à},
àààà{àid:à10,àcategory:à'Antrieb',àquestion:à'IchàbinàlangsameràalsàgewöhnlichàbeiàGedankenàundàHandlungen.'à},

àààà//à===àSCHLAFà(5àFragen)à===
àààà{àid:à11,àcategory:à'Schlaf',àquestion:à'IchàhabeàSchwierigkeitenàeinzuschlafen.'à},
àààà{àid:à12,àcategory:à'Schlaf',àquestion:à'Ichàwacheànachtsàmehrmalsàaufàundàkannànichtàwiederàeinschlafen.'à},
àààà{àid:à13,àcategory:à'Schlaf',àquestion:à'Ichàwacheàsehràfrühàaufàundàkannànichtàmehràeinschlafen.'à},
àààà{àid:à14,àcategory:à'Schlaf',àquestion:à'Ichàschlafeàdeutlichàmehràalsàsonst.'à},
àààà{àid:à15,àcategory:à'Schlaf',àquestion:à'MeinàSchlafàistànichtàerholsam.'à},

àààà//à===àKONZENTRATIONà(5àFragen)à===
àààà{àid:à16,àcategory:à'Konzentration',àquestion:à'IchàkannàmichànichtàkonzentrierenàoderàmeineàGedankenàabschweifenàlassen.'à},
àààà{àid:à17,àcategory:à'Konzentration',àquestion:à'Miràfälltàesàschwer,àEntscheidungenàzuàtreffen.'à},
àààà{àid:à18,àcategory:à'Konzentration',àquestion:à'IchàkannàmichàschweràaufàAufgabenàkonzentrieren.'à},
àààà{àid:à19,àcategory:à'Konzentration',àquestion:à'MeinàGedächtnisàistàschlechteràgeworden.'à},
àààà{àid:à20,àcategory:à'Konzentration',àquestion:à'IchàverliereàleichtàdenàFadenàbeiàGesprächen.'à},

àààà//à===àSELBSTWERTà(5àFragen)à===
àààà{àid:à21,àcategory:à'Selbstwert',àquestion:à'IchàfühleàmichàwertlosàoderàeinàVersager.'à},
àààà{àid:à22,àcategory:à'Selbstwert',àquestion:à'Ichàbinàunzufriedenàmitàmiràselbst.'à},
àààà{àid:à23,àcategory:à'Selbstwert',àquestion:à'IchàhabeàdasàGefühl,àfüràandereàeineàLastàzuàsein.'à},
àààà{àid:à24,àcategory:à'Selbstwert',àquestion:à'Ichàtraueàmirànichtsàzu.'à},
àààà{àid:à25,àcategory:à'Selbstwert',àquestion:à'Ichàkritisiereàmichàselbstàständig.'à},

àààà//à===àHOFFNUNGSLOSIGKEITà(5àFragen)à===
àààà{àid:à26,àcategory:à'Hoffnungslosigkeit',àquestion:à'IchàseheàdieàZukunftàdüster.'à},
àààà{àid:à27,àcategory:à'Hoffnungslosigkeit',àquestion:à'Ichàglaubeànicht,àdassàesàmiràinàZukunftàbesseràgehenàwird.'à},
àààà{àid:à28,àcategory:à'Hoffnungslosigkeit',àquestion:à'Ichàfühleàmichàhoffnungslos.'à},
àààà{àid:à29,àcategory:à'Hoffnungslosigkeit',àquestion:à'Nichtsàwirdàsichàjemalsàändern.'à},
àààà{àid:à30,àcategory:à'Hoffnungslosigkeit',àquestion:à'IchàseheàkeinenàAuswegàausàmeineràSituation.'à},

àààà//à===àSUIZIDGEDANKENà(3àFragenà-àsensibelàformuliert)à===
àààà{àid:à31,àcategory:à'Suizidgedanken',àquestion:à'Manchmalàdenkeàich,àdassàesàbesseràwäre,ànichtàzuàleben.'à},
àààà{àid:à32,àcategory:à'Suizidgedanken',àquestion:à'IchàhabeàGedanken,àmiràselbstàSchadenàzuzufügen.'à},
àààà{àid:à33,àcategory:à'Suizidgedanken',àquestion:à'Ichàdenkeàdarüberànach,ànichtàmehràexistierenàzuàwollen.'à},

àààà//à===àSOZIALERàR—CKZUGà(4àFragen)à===
àààà{àid:à34,àcategory:à'SozialeràRückzug',àquestion:à'IchàmöchteàmichàvonàanderenàMenschenàzurückziehen.'à},
àààà{àid:à35,àcategory:à'SozialeràRückzug',àquestion:à'IchàhabeàwenigeràLustàaufàsozialeàKontakte.'à},
àààà{àid:à36,àcategory:à'SozialeràRückzug',àquestion:à'Ichàfühleàmichàvonàanderenàisoliertàoderàunverstanden.'à},
àààà{àid:à37,àcategory:à'SozialeràRückzug',àquestion:à'IchàhabeàdasàGefühl,àdassàmeineàFamilieàoderàFreundeàmichànichtàverstehen.'à},

àààà//à===àPSYCHOSOMATISCHEàSYMPTOMEà(3àFragen)à===
àààà{àid:à38,àcategory:à'Psychosomatik',àquestion:à'IchàhabeàkörperlicheàBeschwerdenàwieàKopfschmerzen,àMagenschmerzenàoderàVerspannungen.'à},
àààà{àid:à39,àcategory:à'Psychosomatik',àquestion:à'MeinàAppetitàhatàsichàverändertà(zuàvielàoderàzuàwenig).'à},
àààà{àid:à40,àcategory:à'Psychosomatik',àquestion:à'Ichàbinàaggressiveràoderàreizbaràalsàsonst.'à}
àà],

àà/**
ààà*àBerechnetàdenàGesamtscoreà(0-120)
ààà*/
ààcalculateScore(answers)à{
ààààreturnàObject.values(answers).reduce((sum,àval)à=>àsumà+à(valà||à0),à0);
àà},

àà/**
ààà*àLiefertàdieàInterpretationàderàScore
ààà*/
ààgetInterpretation(score)à{
ààààifà(scoreà<=à15)à{
ààààààreturnà{
ààààààààlevel:à'Minimal',
ààààààààcolor:à'#22c55e',
ààààààààdescription:à'MinimalàSymptome',
ààààààààtext:à'IhreàAntwortenàdeutenàaufàminimalàdepressiveàSymptomeàhin.àDiesàistàvölligànormalàundàliegtàimàBereichàtypischeràAlltagserfahrungen.'
àààààà};
àààà}àelseàifà(scoreà<=à30)à{
ààààààreturnà{
ààààààààlevel:à'Leicht',
ààààààààcolor:à'#f59e0b',
ààààààààdescription:à'LeichteàSymptome',
ààààààààtext:à'SieàzeigenàleichteàAnzeichenàdepressiveràSymptome.àDiesàistàrelativàhäufig,àsollteàaberàimàBlickàbehaltenàwerden.'
àààààà};
àààà}àelseàifà(scoreà<=à50)à{
ààààààreturnà{
ààààààààlevel:à'Moderat',
ààààààààcolor:à'#f97316',
ààààààààdescription:à'ModerateàSymptome',
ààààààààtext:à'IhreàSymptomeàsindàmoderatàbelastend.àProfessionelleàUnterstützungàkönnteàsinnvollàsein.'
àààààà};
àààà}àelseàifà(scoreà<=à80)à{
ààààààreturnà{
ààààààààlevel:à'Schwer',
ààààààààcolor:à'#ef4444',
ààààààààdescription:à'SchwereàSymptome',
ààààààààtext:à'SieàzeigenàschwereàdepressiveàSymptome.àEsàwirdàdringendàempfohlen,àprofessionelleàHilfeàzuàsuchen.'
àààààà};
àààà}àelseà{
ààààààreturnà{
ààààààààlevel:à'Sehràschwer',
ààààààààcolor:à'#991b1b',
ààààààààdescription:à'SehràschwereàSymptome',
ààààààààtext:à'IhreàSymptomeàsindàsehràbelastendàundàbeeinflussenàbedeutsamàIhrenàAlltag.àDringendeàprofessionelleàHilfeàwirdàempfohlen.'
àààààà};
àààà}
àà},

àà/**
ààà*àMedizinischeràHinweisà(wirdàamàEndeàangezeigt)
ààà*/
ààmedicalDisclaimer:à`
àààà<divàstyle="background:à#fef2f2;àborder-left:à4pxàsolidà#ef4444;àpadding:à1rem;àmargin-top:à2rem;àborder-radius:à8px;">
àààààà<pàstyle="margin:à0;àfont-weight:à600;àcolor:à#7f1d1d;"> —¯¸àWichtigeràHinweis:</p>
àààààà<pàstyle="margin:à0.5remà0à0à0;àcolor:à#5f3738;àfont-size:à0.95rem;">
ààààààààDieseràTestàdientànuràzuràgrobenàOrientierungàundàersetztàkeineàmedizinischeàDiagnose.àBeiàanhaltendenàoderàbelastendenàBeschwerdenàwendenàSieàsichàbitteàanàeineàÄrztin,àeinenàArztàoderàeineàpsychologischeàFachperson.
àààààà</p>
àààà</div>
àà`
};
