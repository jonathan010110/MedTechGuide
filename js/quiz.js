/**
à*à===================================================================
à*à°¯àMEDTECHGUIDEà-àADVANCEDàQUIZà&àASSESSMENTàSYSTEMàv2.0
à*à===================================================================
à*àInteraktivesàQuizàmitàMedizintechnikà+àProfessionelleàpsychologischeàTests
à*àMultipleàChoiceà&àLikert-Skalen,àRandomisierung,àScore-Tracking
à*/

//à===================================================================
//à°àQUIZàDATABASEàWITHàRANDOMIZATION
//à===================================================================

constàQUIZ_DATABASEà=à{
ààdiagnostik:à{
ààààtype:à'multiple-choice',
ààààfragen:à[
àààààà{àfrage:à"WelchesàVerfahrenàmisstàkontinuierlichàdenàBlutzucker?",àoptionen:à["EKG",à"CGMà(ContinuousàGlucoseàMonitoring)",à"Röntgen",à"MRT"],àantwort:à1,àerklärung:à"CGMàmisstàdieàGlukoseàinterstitiellàalleà5àMinuten."à},
àààààà{àfrage:à"WasàistàeinàPrick-Test?",àoptionen:à["Blutabnahme",à"Allergie-TestàmitàHautreaktion",à"Atemtest",à"Urintest"],àantwort:à1,àerklärung:à"EinàPrick-TestàkratztàdieàHautàmitàAllergenenàundàbeobachtetàdieàReaktionànachà15àMin."à},
àààààà{àfrage:à"WelcheàBildgebungànutztàMagnetfelder?",àoptionen:à["Röntgen",à"CT",à"MRT",à"Ultraschall"],àantwort:à2,àerklärung:à"MRTànutztàstarkeàMagnetfelderàundàRadiowellen."à},
àààààà{àfrage:à"WasàmisstàeinàEKG?",àoptionen:à["Blutdruck",à"ElektrischeàHerzaktivität",à"Sauerstoff",à"Temperatur"],àantwort:à1,àerklärung:à"DasàElektrokardiogrammàregistriertàdieàelektrischenàSignaleàdesàHerzens."à},
àààààà{àfrage:à"Wieàhei—tàderàSchnelltestindexàfüràAllergie-Bluttest?",àoptionen:à["CAP-FEIA",à"ELISA",à"PCR",à"WesternàBlot"],àantwort:à0,àerklärung:à"CAP-FEIAàistàderàStandardàfüràIgE-Bestimmung."à}
àààà]
àà},
ààtherapie:à{
ààààtype:à'multiple-choice',
ààààfragen:à[
àààààà{àfrage:à"WasàistàeineàInsulinpumpe?",àoptionen:à["EinàBeatmungsgerät",à"EinàtragbaresàGerätàfüràkontinuierlicheàInsulinabgabe",à"EinàDialysegerät",à"EinàInfusionsständer"],àantwort:à1,àerklärung:à"EineàInsulinpumpeàgibtàkontinuierlichàInsulinàabàüberàeinenàsubcutanenàKatheter."à},
àààààà{àfrage:à"WasàistàeinàHybrid-Closed-LoopàSystem?",àoptionen:à["CGMà+àPumpeà+àAlgorithmusàautomatischàverbunden",à"ZweiàInsulinpumpen",à"EinàaltesàSystem",à"EinàmanuellesàSystem"],àantwort:à0,àerklärung:à"Hybrid-Closed-LoopàverbindetàSensor,àPumpeàundàAlgorithmusàfüràautomatischeàKontrolle."à},
àààààà{àfrage:à"WasàistàeinàExoskelett?",àoptionen:à["Eineàäu—ereàStützstrukturàfüràBewegungen",à"EinàimplantierbaresàGerät",à"EinàMedikament",à"EineàProthese"],àantwort:à0,àerklärung:à"EinàExoskelettàistàeineàmechanischeàStruktur,àdieàBewegungenàverstärktàoderàunterstützt."à},
àààààà{àfrage:à"WasàistàHyposensibilisierung?",àoptionen:à["BlockierenàvonàAllergenen",à"SchrittweiseàGewöhnungàdesàImmunsystems",à"MedikamentàgegenàAllergie",à"ChirurgischeràEingriff"],àantwort:à1,àerklärung:à"HyposensibilisierungàgewöhntàdasàImmunsystemàschrittweiseàanàdasàAllergen."à},
àààààà{àfrage:à"WasàistàeinàSchrittmacher?",àoptionen:à["EinàMedikament",à"EinàimplantierbaresàHerzgerätàfüràRhythmusstabilität",à"EinàSensor",à"EineàSoftware"],àantwort:à1,àerklärung:à"EinàSchrittmacheràreguliertàdenàHerzrhythmusàdurchàelektrischeàImpulse."à}
àààà]
àà},
ààforschung:à{
ààààtype:à'multiple-choice',
ààààfragen:à[
àààààà{àfrage:à"WasàistàCRISPR?",àoptionen:à["EineàKamera",à"EinàGeneditierungs-Tool",à"EineàKrankheit",à"EinàProtein"],àantwort:à1,àerklärung:à"CRISPRàistàeinàmolekularesàWerkzeugàzuràpräzisenàDNA-Bearbeitung."à},
àààààà{àfrage:à"WasàistàeinàBrain-ComputeràInterfaceà(BCI)?",àoptionen:à["EinàVideospiel",à"EineàVerbindungàzwischenàGehirnàundàComputer",à"EinàHörgerät",à"EineàBrille"],àantwort:à1,àerklärung:à"EinàBCIàverbindetàdasàGehirnàdirektàmitàComputersystemen."à},
àààààà{àfrage:à"WieàschnellàistàdieàDNA-Sequenzierungàheuteàvs.à2001?",àoptionen:à["Gleichàschnell",à"10xàschneller",à"Millionenàmalàschneller",à"1000xàschneller"],àantwort:à2,àerklärung:à"DieàDNA-SequenzierungàistàheuteàMillionenàmalàschneller."à},
àààààà{àfrage:à"WasàistàtiefeàHirnstimulation?",àoptionen:à["Massage",à"ElektrischeàStimulationàvonàGehirnregionen",à"Gedankenlesung",à"Meditation"],àantwort:à1,àerklärung:à"TiefeàHirnstimulationànutztàElektrodenàumàGehirnfunktionenàzuàregulieren."à},
àààààà{àfrage:à"WasàistàdieàkünstlicheàBauchspeicheldrüse?",àoptionen:à["EinàOrgan-Implantat",à"EinàautomatisiertesàSystemàfüràInsulinregulation",à"EinàMedikament",à"EinàSensor"],àantwort:à1,àerklärung:à"DieàkünstlicheàBauchspeicheldrüseàistàeinàvollständigàautomatisiertesàInsulin-System."à}
àààà]
àà},
ààzukunft:à{
ààààtype:à'multiple-choice',
ààààfragen:à[
àààààà{àfrage:à"WasàistàNanomedizin?",àoptionen:à["Homöopathie",à"SehràkleineàPartikelàfüràMedizin",à"EineàalternativeàMedizin",à"EinàaltesàKonzept"],àantwort:à1,àerklärung:à"NanomedizinànutztàNanopartikelàfüràgezieltenàDrug-Delivery."à},
àààààà{àfrage:à"WasàistàeinàBio-Interface?",àoptionen:à["EinàVideospiel-Controller",à"EineàSchnittstelleàzwischenàBiologieàundàTechnologie",à"EinàMedikament",à"EineàProthese"],àantwort:à1,àerklärung:à"Bio-InterfacesàverbindenàbiologischeàSystemeàmitàtechnologischenàKomponenten."à},
àààààà{àfrage:à"WelchesàProblemàsollànicht-invasiveàGlukosemessungàlösen?",àoptionen:à["ZuàhoheàKosten",à"ZuàvieleàNadeln",à"Zuàlangsam",à"Zuàunpräzise"],àantwort:à1,àerklärung:à"Nicht-invasiveàCGM-SensorenàsollenàohneàNadelnàmessen."à},
àààààà{àfrage:à"WasàistàPräzisionsmedizin?",àoptionen:à["AllgemeineàBehandlung",à"PersonalisierteàBehandlungàbasierendàaufàGenetik",à"AlteàMedizin",à"Naturheilkunde"],àantwort:à1,àerklärung:à"PräzisionsmedizinànutztàgenetischeàDatenàfüràindividualisierteàBehandlungen."à},
àààààà{àfrage:à"WasàkönnteàbidirektionaleàNeural-Recordingàermöglichen?",àoptionen:à["BessereàHörgeräte",à"LesenàUNDàSchreibenàvonàHirnsignalen",à"MehràSpeicher",à"SchnelleresàInternet"],àantwort:à1,àerklärung:à"BidirektionaleàNeural-RecordingàwürdeàGedankenlesungàermöglichen."à}
àààà]
àà},

ààdepression:à{
ààààtype:à'likert',
ààààname:à'°àDepressions-Screeningà(PHQ-9)',
ààààbeschreibung:à'WissenschaftlichàvalidierteràTestàzuràFrüherkennung',
ààààwarnung:à' —¯¸àErsatzànichtàfüràärztlicheàDiagnose.àKonsultierenàSieàbeiàBedarfàeinenàArzt.',
ààààfragen:à[
àààààà{àfrage:à"WenigàInteresseàoderàFreudeàanàseinenàTätigkeiten",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"Niedergeschlagenheit,àSchwermutàoderàHoffnungslosigkeit",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"Schwierigkeitenàein-àoderàdurchzuschlafen",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"MüdigkeitàoderàMangelàanàEnergie",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"VerminderteràAppetitàoderà—beressen",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"NegativeàGefühleàsichàselbstàgegenüber",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"Schwierigkeitenàsichàzuàkonzentrieren",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"VerlangsamtàoderàbeschleunigtàsichàinàBewegungen",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à},
àààààà{àfrage:à"Gedanken,àbesseràtotàzuàsein",àskala:à["Garànicht",à"AnàmehrerenàTagen",à"AnàmehràalsàderàHälfteàderàTage",à"FastàjedenàTag"]à}
àààà],
ààààinterpretation:à{
àààààà0:à{àlabel:à"KeineàDepression",àdescription:à"ErgebnisseàdeutenànichtàaufàDepressionàhin."à},
àààààà5:à{àlabel:à"LeichteàDepression",àdescription:à"SieàzeigenàeinigeàdepressiveàSymptome."à},
àààààà10:à{àlabel:à"ModerateàDepression",àdescription:à"Fachberatungàwirdàempfohlen."à},
àààààà15:à{àlabel:à"SchwereàDepression",àdescription:à" —¯¸àKonsultierenàSieàdringendàeinenàPsychologen."à}
àààà}
àà},

ààadhs:à{
ààààtype:à'likert',
ààààname:à'°ç àADHS-Screeningà(ASRSàv1.1)',
ààààbeschreibung:à'ProfessionelleràADHS-Screening-Test',
ààààwarnung:à' —¯¸àErsatzànichtàfüràärztlicheàDiagnose.àKonsultierenàSieàeinenàSpezialisten.',
ààààfragen:à[
àààààà{àfrage:à"WieàoftàvergessenàSieàTermineàoderàAufgaben?",àskala:à["Nie/selten",à"Manchmal",à"Oft",à"Sehràoft",à"Immer"]à},
àààààà{àfrage:à"WieàoftàfälltàesàIhnenàschweràbeiàDetails?",àskala:à["Nie/selten",à"Manchmal",à"Oft",à"Sehràoft",à"Immer"]à},
àààààà{àfrage:à"WieàoftàfälltàesàIhnenàschweràsichàzuàkonzentrieren?",àskala:à["Nie/selten",à"Manchmal",à"Oft",à"Sehràoft",à"Immer"]à},
àààààà{àfrage:à"WieàoftàzappelnàSieàherum?",àskala:à["Nie/selten",à"Manchmal",à"Oft",à"Sehràoft",à"Immer"]à},
àààààà{àfrage:à"WieàoftàfälltàesàIhnenàschweràzuàwarten?",àskala:à["Nie/selten",à"Manchmal",à"Oft",à"Sehràoft",à"Immer"]à},
àààààà{àfrage:à"WieàoftàunterbrechenàoderàstörenàSieàandere?",àskala:à["Nie/selten",à"Manchmal",à"Oft",à"Sehràoft",à"Immer"]à}
àààà],
ààààinterpretation:à{
àààààà0:à{àlabel:à"NiedrigeàADHS-Merkmale",àdescription:à"KeineàsignifikantenàAnzeichenàerkannt."à},
àààààà10:à{àlabel:à"MöglicheàADHS",àdescription:à"WeitereàEvaluationàempfohlen."à},
àààààà15:à{àlabel:à"WahrscheinlichàADHS",àdescription:à" —¯¸àFachlicheàBewertungàwirdàempfohlen."à}
àààà}
àà},

ààpersoenlichkeit:à{
ààààtype:à'bigfive',
ààààname:à'°àBig-FiveàPersönlichkeitstestà(ENTF)',
ààààbeschreibung:à'WissenschaftlichàvalidierteràTestàderàfünfàPersönlichkeitsfaktoren',
ààààdimensionen:à{
ààààààO:à"Offenheità-àKreativitätà&àNeugier",
ààààààC:à"Gewissenhaftigkeità-àOrdnungà&àPünktlichkeit",
ààààààE:à"Extraversionà-àGeselligkeità&àAktivität",
ààààààA:à"Verträglichkeità-àKooperationà&àEmpathie",
ààààààN:à"Neurotizismusà-àEmotionaleàStabilität"
àààà},
ààààfragen:à[
àààààà{àfrage:à"IchàbinàdasàLebenàderàGruppe",àdimension:à"E"à},
àààààà{àfrage:à"Ichàbinàgeordnetàundàpünktlich",àdimension:à"C"à},
àààààà{àfrage:à"IchàinteressiereàmichàfüràabstrakteàIdeen",àdimension:à"O"à},
àààààà{àfrage:à"Ichàbinàeinfühlsamàundàinteressiereàmichàfüràandere",àdimension:à"A"à},
àààààà{àfrage:à"IchàmacheàmiràoftàSorgenàüberàverschiedeneàDinge",àdimension:à"N"à},
àààààà{àfrage:à"Ichàbinàspontanàundàkontaktfreudig",àdimension:à"E"à},
àààààà{àfrage:à"IchàachteàaufàdieàOrdnungàinàmeinemàUmfeld",àdimension:à"C"à},
àààààà{àfrage:à"IchàbinàoffenàfüràneueàundàungewöhnlicheàErfahrungen",àdimension:à"O"à},
àààààà{àfrage:à"IchàbeschäftigeàmichàgerneàmitàanderenàMenschen",àdimension:à"A"à},
àààààà{àfrage:à"Ichàbinàeheràreizbaràundàgestresst",àdimension:à"N"à},
àààààà{àfrage:à"IchàbinàeineàdynamischeàundàenergischeàPerson",àdimension:à"E"à},
àààààà{àfrage:à"IchàbinàsorgfältigàinàmeineràArbeit",àdimension:à"C"à},
àààààà{àfrage:à"IchàhabeàvieleàkreativeàIdeen",àdimension:à"O"à},
àààààà{àfrage:à"Ichàversuche,àharmonischàmitàanderenàauszukommen",àdimension:à"A"à},
àààààà{àfrage:à"Ichàbinàleichtàangespanntàoderànervös",àdimension:à"N"à},
àààààà{àfrage:à"IchàsprecheàgerneàmitàvielenàverschiedenenàMenschen",àdimension:à"E"à},
àààààà{àfrage:à"IchàbinàgründlichàbeiàmeinenàAufgaben",àdimension:à"C"à},
àààààà{àfrage:à"IchàdenkeàgerneàüberàPhilosophieàundàBedeutungànach",àdimension:à"O"à},
àààààà{àfrage:à"Ichàbinàverständnisvollàundànachsichtig",àdimension:à"A"à},
àààààà{àfrage:à"IchàbinàempfindlichàgegenüberàKritik",àdimension:à"N"à}
àààà]
àà}
};

//à===================================================================
//à°®àUTILITYàFUNCTIONS
//à===================================================================

functionàshuffleArray(array)à{
ààconstàshuffledà=à[...array];
ààforà(letàià=àshuffled.lengthà-à1;àià>à0;ài--)à{
ààààconstàjà=àMath.floor(Math.random()à*à(ià+à1));
àààà[shuffled[i],àshuffled[j]]à=à[shuffled[j],àshuffled[i]];
àà}
ààreturnàshuffled;
}

functionàgetRandomizedQuestions(kategorie)à{
ààconstàdataà=àQUIZ_DATABASE[kategorie];
ààifà(data.typeà===à'multiple-choice')à{
ààààreturnàshuffleArray(data.fragen).map(fà=>à({
àààààà...f,
ààààààoptionen:àshuffleArray([...f.optionen])
àààà}));
àà}
ààreturnàdata.fragen;
}

//à===================================================================
//à°®àQUIZàSTATEà&àLOGIC
//à===================================================================

letàquizStateà=à{
ààaktiv:àfalse,
ààkategorie:ànull,
ààtestType:ànull,
ààaktuelleFrageIndex:à0,
ààpunkte:à0,
ààantworten:à[],
ààmaxPunkte:à0,
ààscores:à{}
};

functionàstartQuiz(kategorie)à{
ààifà(!QUIZ_DATABASE[kategorie])à{
ààààconsole.warn('Kategorieànichtàgefunden:',àkategorie);
ààààreturn;
àà}

ààconstàdbEntryà=àQUIZ_DATABASE[kategorie];
ààquizStateà=à{
ààààaktiv:àtrue,
ààààkategorie:àkategorie,
ààààtestType:àdbEntry.type,
ààààaktuelleFrageIndex:à0,
ààààpunkte:à0,
ààààantworten:à[],
ààààmaxPunkte:àdbEntry.fragen.length,
ààààscores:àdbEntry.typeà===à'bigfive'à?à{àO:à0,àC:à0,àE:à0,àA:à0,àN:à0à}à:à{}
àà};

ààshowQuizUI();
ààdisplayQuizFrage();
}

functionànextQuizFrage(antwortIndex)à{
ààconstàkategorieà=àquizState.kategorie;
ààconstàdbEntryà=àQUIZ_DATABASE[kategorie];
ààconstàfragenà=àdbEntry.fragen;
ààconstàaktuelleFrageà=àfragen[quizState.aktuelleFrageIndex];

ààifà(dbEntry.typeà===à'multiple-choice')à{
ààààconstàisKorrektà=àantwortIndexà===àaktuelleFrage.antwort;
ààààquizState.antworten.push({
ààààààfrage:àaktuelleFrage.frage,
ààààààselected:àantwortIndex,
ààààààkorrekt:àaktuelleFrage.antwort,
ààààààisKorrekt:àisKorrekt
àààà});
ààààifà(isKorrekt)àquizState.punkte++;
àà}àelseàifà(dbEntry.typeà===à'likert')à{
ààààquizState.antworten.push({
ààààààfrage:àaktuelleFrage.frage,
ààààààscore:àantwortIndex
àààà});
ààààquizState.punkteà+=àantwortIndex;
àà}àelseàifà(dbEntry.typeà===à'bigfive')à{
ààààconstàdimensionà=àaktuelleFrage.dimension;
ààààquizState.scores[dimension]à+=àantwortIndex;
ààààquizState.antworten.push({
ààààààfrage:àaktuelleFrage.frage,
ààààààdimension:àdimension,
ààààààscore:àantwortIndex
àààà});
àà}

ààquizState.aktuelleFrageIndex++;

ààifà(quizState.aktuelleFrageIndexà<àfragen.length)à{
ààààdisplayQuizFrage();
àà}àelseà{
ààààshowQuizErgebnis();
àà}
}

functionàdisplayQuizFrage()à{
ààconstàkategorieà=àquizState.kategorie;
ààconstàdbEntryà=àQUIZ_DATABASE[kategorie];
ààconstàfragenà=àdbEntry.fragen;
ààconstàfrageà=àfragen[quizState.aktuelleFrageIndex];
ààconstàcontainerà=àdocument.getElementById('quiz-container');

ààifà(!container)àreturn;

ààconstàprogressProzentà=à((quizState.aktuelleFrageIndexà+à1)à/àfragen.length)à*à100;

ààletàhtmlà=à`
àààà<divàclass="quiz-question">
àààààà<divàclass="quiz-progress">
àààààààà<divàclass="quiz-progress-bar"àstyle="width:à${progressProzent}%"></div>
àààààààà<divàclass="quiz-progress-text">
ààààààààààFrageà${quizState.aktuelleFrageIndexà+à1}àvonà${fragen.length}
àààààààà</div>
àààààà</div>
àààààà
àààààà<h2>${frage.frage}</h2>
àà`;

ààifà(dbEntry.typeà===à'multiple-choice')à{
ààààhtmlà+=à`<divàclass="quiz-optionen">`;
ààààfrage.optionen.forEach((option,àindex)à=>à{
ààààààhtmlà+=à`
àààààààà<buttonàclass="quiz-option"àonclick="nextQuizFrage(${index})">
àààààààààà<spanàclass="option-letter">${String.fromCharCode(65à+àindex)}</span>
àààààààààà<spanàclass="option-text">${option}</span>
àààààààà</button>
àààààà`;
àààà});
ààààhtmlà+=à`</div>`;
àà}àelseàifà(dbEntry.typeà===à'likert')à{
ààààhtmlà+=à`<divàclass="likert-scale">`;
ààààfrage.skala.forEach((label,àindex)à=>à{
ààààààhtmlà+=à`
àààààààà<buttonàclass="likert-option"àonclick="nextQuizFrage(${index})"àtitle="${label}">
àààààààààà<spanàclass="likert-label">${label}</span>
àààààààà</button>
àààààà`;
àààà});
ààààhtmlà+=à`</div>`;
àà}àelseàifà(dbEntry.typeà===à'bigfive')à{
ààààhtmlà+=à`<divàclass="likert-scaleàbigfive-scale">`;
ààààconstàlabelsà=à["Stimmeàgarànichtàzu",à"Stimmeàwenigàzu",à"Neutral",à"Stimmeàzu",à"Stimmeàsehràzu"];
ààààlabels.forEach((label,àindex)à=>à{
ààààààhtmlà+=à`
àààààààà<buttonàclass="likert-option"àonclick="nextQuizFrage(${index})"àtitle="${label}">
àààààààààà<spanàclass="likert-number">${indexà+à1}</span>
àààààààà</button>
àààààà`;
àààà});
ààààhtmlà+=à`</div>`;
àà}

ààhtmlà+=à`
àààààà<buttonàclass="quiz-close"àonclick="closeQuiz()">àQuizàbeenden</button>
àààà</div>
àà`;

ààcontainer.innerHTMLà=àhtml;
}

functionàshowQuizErgebnis()à{
ààconstàcontainerà=àdocument.getElementById('quiz-container');
ààifà(!container)àreturn;

ààconstàkategorieà=àquizState.kategorie;
ààconstàdbEntryà=àQUIZ_DATABASE[kategorie];
ààconstàtestTypeà=àdbEntry.type;

ààletàhtmlà=à`<divàclass="quiz-result">`;

ààifà(testTypeà===à'multiple-choice')à{
ààààconstàpunkteà=àquizState.punkte;
ààààconstàmaxPunkteà=àquizState.maxPunkte;
ààààconstàprozentà=àMath.round((punkteà/àmaxPunkte)à*à100);
àààà
ààààletàbewertungà=à'';
ààààletàemojià=à'';
ààààifà(prozentà>=à90)à{
ààààààbewertungà=à'Ausgezeichnet!à°';
ààààààemojià=à'°';
àààà}àelseàifà(prozentà>=à80)à{
ààààààbewertungà=à'Sehràgut!à°';
ààààààemojià=à'°¥';
àààà}àelseàifà(prozentà>=à70)à{
ààààààbewertungà=à'Gut!à°';
ààààààemojià=à'°¥';
àààà}àelseàifà(prozentà>=à60)à{
ààààààbewertungà=à'Bestanden!à';
ààààààemojià=à'°¥';
àààà}àelseà{
ààààààbewertungà=à'Nochàetwasà—ben!à°ª';
ààààààemojià=à'°';
àààà}

ààààletàdetailsHtmlà=àquizState.antworten.map((a,ài)à=>à`
àààààà<divàclass="quiz-result-itemà${a.isKorrektà?à'korrekt'à:à'falsch'}">
àààààààà<h4>Frageà${ià+à1}:à${a.frage}</h4>
àààààààà<pàclass="status">${a.isKorrektà?à'àKorrekt'à:à'àFalsch'}</p>
àààààà</div>
àààà`).join('');

ààààhtmlà+=à`
àààààà<divàclass="quiz-result-header">
àààààààà<divàclass="quiz-result-emoji">${emoji}</div>
àààààààà<h2>Quizàabgeschlossen!</h2>
àààààààà<pàclass="quiz-result-rating">${bewertung}</p>
àààààà</div>
àààààà
àààààà<divàclass="quiz-result-score">
àààààààà<divàclass="score-circle">
àààààààààà<divàclass="score-number">${punkte}/${maxPunkte}</div>
àààààààààà<divàclass="score-percent">${prozent}%</div>
àààààààà</div>
àààààà</div>
àààààà
àààààà<divàclass="quiz-result-details">
àààààààà<h3>Detailergebnisse:</h3>
àààààààà${detailsHtml}
àààààà</div>
àààààà
àààààà<divàclass="quiz-result-actions">
àààààààà<buttonàclass="btnàbtn-primary"àonclick="startQuiz('${kategorie}')">Quizàwiederholen</button>
àààààààà<buttonàclass="btnàbtn-secondary"àonclick="closeQuiz()">Beenden</button>
àààààà</div>
àààà`;
àà}àelseàifà(testTypeà===à'likert')à{
ààààconstàtotalScoreà=àquizState.punkte;
ààààconstàmaxScoreà=àquizState.maxPunkteà*à3;
ààààletàinterpretationà=àdbEntry.interpretation[0];
àààà
ààààconstàscoreKeysà=àObject.keys(dbEntry.interpretation).sort((a,àb)à=>àbà-àa);
ààààforà(constàkeyàofàscoreKeys)à{
ààààààifà(totalScoreà>=àparseInt(key))à{
ààààààààinterpretationà=àdbEntry.interpretation[key];
ààààààààbreak;
àààààà}
àààà}

ààààhtmlà+=à`
àààààà<divàclass="quiz-result-header">
àààààààà<divàclass="quiz-result-emoji">°</div>
àààààààà<h2>Testàabgeschlossen!</h2>
àààààààà<pàclass="quiz-result-rating">${interpretation.label}</p>
àààààà</div>
àààààà
àààààà<divàclass="likert-result">
àààààààà<divàclass="result-score-bar">
àààààààààà<divàclass="result-score-fill"àstyle="width:à${(totalScoreà/àmaxScore)à*à100}%"></div>
àààààààà</div>
àààààààà<pàclass="result-score-num">Gesamtscore:à${totalScore}à/à${maxScore}</p>
àààààà</div>
àààààà
àààààà<divàclass="result-interpretation">
àààààààà<p>${interpretation.description}</p>
àààààà</div>

àààààà<divàclass="test-warnung">
àààààààà${dbEntry.warnung}
àààààà</div>
àààààà
àààààà<divàclass="quiz-result-actions">
àààààààà<buttonàclass="btnàbtn-primary"àonclick="startQuiz('${kategorie}')">Testàwiederholen</button>
àààààààà<buttonàclass="btnàbtn-secondary"àonclick="closeQuiz()">Beenden</button>
àààààà</div>
àààà`;
àà}àelseàifà(testTypeà===à'bigfive')à{
ààààconstàdimensionenà=à{àO:à"Offenheit",àC:à"Gewissenhaftigkeit",àE:à"Extraversion",àA:à"Verträglichkeit",àN:à"Neurotizismus"à};
ààààconstàmaxPerDimensionà=à20à*à5;

ààààletàresultsHtmlà=à'';
ààààforà(constà[dim,àname]àofàObject.entries(dimensionen))à{
ààààààconstàscoreà=àquizState.scores[dim];
ààààààconstàpercentà=à(scoreà/àmaxPerDimension)à*à100;
ààààààresultsHtmlà+=à`
àààààààà<divàclass="bigfive-result-item">
àààààààààà<divàclass="bigfive-label">${dim}:à${name}</div>
àààààààààà<divàclass="bigfive-bar">
àààààààààààà<divàclass="bigfive-fill"àstyle="width:à${percent}%"></div>
àààààààààà</div>
àààààààààà<divàclass="bigfive-score">${score}à/à${maxPerDimension}</div>
àààààààà</div>
àààààà`;
àààà}

ààààhtmlà+=à`
àààààà<divàclass="quiz-result-header">
àààààààà<divàclass="quiz-result-emoji">°</div>
àààààààà<h2>Persönlichkeitsprofil</h2>
àààààààà<pàclass="quiz-result-rating">DeineàBig-FiveàErgebnisse</p>
àààààà</div>
àààààà
àààààà<divàclass="bigfive-results">
àààààààà${resultsHtml}
àààààà</div>
àààààà
àààààà<divàclass="bigfive-info">
àààààààà<p><strong>Offenheit:</strong>àKreativität,àNeugier,àInteresseàanàneuenàIdeen</p>
àààààààà<p><strong>Gewissenhaftigkeit:</strong>àOrganisiert,àpünktlich,àzuverlässig</p>
àààààààà<p><strong>Extraversion:</strong>àGesellig,àenergisch,àdurchsetzungsstark</p>
àààààààà<p><strong>Verträglichkeit:</strong>àKooperativ,àverständnisvoll,àeinfühlsam</p>
àààààààà<p><strong>Neurotizismus:</strong>àEmotionaleàStabilitätàoderàAnfälligkeitàfüràStress</p>
àààààà</div>
àààààà
àààààà<divàclass="quiz-result-actions">
àààààààà<buttonàclass="btnàbtn-primary"àonclick="startQuiz('${kategorie}')">Testàwiederholen</button>
àààààààà<buttonàclass="btnàbtn-secondary"àonclick="closeQuiz()">Beenden</button>
àààààà</div>
àààà`;
àà}

ààhtmlà+=à`</div>`;
ààcontainer.innerHTMLà=àhtml;
}

//à===================================================================
//à°¨àUIàMANAGEMENT
//à===================================================================

functionàshowQuizUI()à{
ààletàcontainerà=àdocument.getElementById('quiz-container');
ààifà(!container)à{
ààààcontainerà=àdocument.createElement('div');
ààààcontainer.idà=à'quiz-container';
ààààcontainer.classNameà=à'quiz-modal';
ààààdocument.body.appendChild(container);
àà}
àà
ààcontainer.classList.add('quiz-active');
}

functionàcloseQuiz()à{
ààconstàcontainerà=àdocument.getElementById('quiz-container');
ààifà(container)à{
ààààcontainer.classList.remove('quiz-active');
ààààquizState.aktivà=àfalse;
àà}
}

functionàopenQuizModal)à{
ààletàmodalà=àdocument.getElementById('quiz-modal');
ààifà(!modal)à{
ààààmodalà=àdocument.createElement('div');
ààààmodal.idà=à'quiz-modal';
ààààmodal.classNameà=à'quiz-select-modal';
ààààdocument.body.appendChild(modal);
àà}

ààconstàkategorienà=à[
àààà{àkey:à'diagnostik',àname:à'°àDiagnostik',àdesc:à'TestverfahrenàundàMess-Instrumente',àtype:à'medical'à},
àààà{àkey:à'therapie',àname:à'°àTherapie',àdesc:à'Behandlungs-Geräte',àtype:à'medical'à},
àààà{àkey:à'forschung',àname:à'°"àForschung',àdesc:à'NeueàTechnologien',àtype:à'medical'à},
àààà{àkey:à'zukunft',àname:à'°àZukunft',àdesc:à'KommendeàInnovationen',àtype:à'medical'à},
àààà{àkey:à'depression',àname:à'°àDepression',àdesc:à'PHQ-9àScreening',àtype:à'psychology'à},
àààà{àkey:à'adhs',àname:à'°ç àADHS',àdesc:à'ASRSàScreening',àtype:à'psychology'à},
àààà{àkey:à'persoenlichkeit',àname:à'°àPersönlichkeit',àdesc:à'Big-FiveàTest',àtype:à'psychology'à}
àà];

ààletàhtmlà=à`
àààà<divàclass="quiz-modal-overlay"àonclick="closeQuizModal)"></div>
àààà<divàclass="quiz-modal-content">
àààààà<buttonàclass="modal-close"àonclick="closeQuizModal)"></button>
àààààà<h2>WähleàeinenàTest</h2>
àààààà<pàclass="quiz-modal-subtitle">MedizintechnikàQuizàoderàpsychologischeàTests</p>
àààààà
àààààà<divàclass="quiz-kategorie-gruppe">
àààààààà<h3àclass="kategorie-gruppe-titel">°àMedizintechnik</h3>
àààààààà<divàclass="quiz-kategorien-grid">
àà`;

ààkategorien.filter(kà=>àk.typeà===à'medical').forEach(katà=>à{
ààààconstàdbEntryà=àQUIZ_DATABASE[kat.key];
ààààhtmlà+=à`
àààààà<buttonàclass="quiz-kategorie-btn"àonclick="startQuiz('${kat.key}')">
àààààààà<divàclass="kategorie-icon">${kat.name.split('à')[0]}</div>
àààààààà<divàclass="kategorie-name">${kat.name.split('à').slice(1).join('à')}</div>
àààààààà<divàclass="kategorie-desc">${kat.desc}</div>
àààààààà<divàclass="kategorie-fragen">${dbEntry.fragen.length}àFragen</div>
àààààà</button>
àààà`;
àà});

ààhtmlà+=à`
àààààààà</div>
àààààà</div>

àààààà<divàclass="quiz-kategorie-gruppe">
àààààààà<h3àclass="kategorie-gruppe-titel">°ç àPsychologischeàTests</h3>
àààààààà<divàclass="quiz-kategorien-grid">
àà`;

ààkategorien.filter(kà=>àk.typeà===à'psychology').forEach(katà=>à{
ààààconstàdbEntryà=àQUIZ_DATABASE[kat.key];
ààààconstànameà=àdbEntry.nameà||àkat.name;
ààààhtmlà+=à`
àààààà<buttonàclass="quiz-kategorie-btnàpsychology"àonclick="startQuiz('${kat.key}')">
àààààààà<divàclass="kategorie-icon">${kat.name.split('à')[0]}</div>
àààààààà<divàclass="kategorie-name">${name}</div>
àààààààà<divàclass="kategorie-desc">${kat.desc}</div>
àààààààà<divàclass="kategorie-fragen">${dbEntry.fragen.length}àFragen</div>
àààààà</button>
àààà`;
àà});

ààhtmlà+=à`
àààààààà</div>
àààààà</div>
àààà</div>
àà`;

ààmodal.innerHTMLà=àhtml;
ààmodal.classList.add('quiz-modal-active');
}

functionàcloseQuizModal)à{
ààconstàmodalà=àdocument.getElementById('quiz-modal');
ààifà(modal)à{
ààààmodal.classList.remove('quiz-modal-active');
àà}
}

//à===================================================================
//à°àINITIALIZATION
//à===================================================================

functionàinitQuizSystem()à{
ààconsole.log('àQuizàSystemàv2.0àinitialisiertà(mitàpsychologischenàTests)');
àà
ààconstàquizBtnà=àdocument.querySelector('[data-quiz-button]');
ààifà(quizBtn)à{
ààààquizBtn.addEventListener('click',àopenQuizModal);
àà}
}

ifà(document.readyStateà===à'loading')à{
ààdocument.addEventListener('DOMContentLoaded',àinitQuizSystem);
}àelseà{
ààinitQuizSystem();
}

ifà(typeofàmoduleà!==à'undefined'à&&àmodule.exports)à{
ààmodule.exportsà=à{
ààààstartQuiz,
ààààopenQuizModal,
ààààcloseQuiz,
ààààcloseQuizModal,
ààààQUIZ_DATABASE,
ààààgetRandomizedQuestions
àà};
}
