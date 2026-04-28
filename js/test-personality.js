/**
à*à=====================================================
à*àPERSÖNLICHKEITSTESTà-àMBTI-System
à*àVollständigeràPersönlichkeitstestànachàMBTI-Modell
à*à4àDimensionenàmitàjeà10àFragen
à*à=====================================================
à*/

constàPersonalityTestà=à{
ààtestId:à'personality',
ààtestName:à'Persönlichkeitstestà(MBTI)',
ààtestDescription:à'PersönlichkeitstestànachàdemàMBTI-Modellà(40àFragen)',

àà//à5-stufigeàLikert-Skala
ààanswerOptions:à[
àààà{àvalue:à-2,àlabel:à'Stimmeàüberhauptànichtàzu',àcolor:à'#ef4444'à},
àààà{àvalue:à-1,àlabel:à'Eherànicht',àcolor:à'#f59e0b'à},
àààà{àvalue:à0,àlabel:à'Neutral',àcolor:à'#6b7280'à},
àààà{àvalue:à1,àlabel:à'Eheràja',àcolor:à'#84cc16'à},
àààà{àvalue:à2,àlabel:à'Stimmeàsehràzu',àcolor:à'#22c55e'à}
àà],

àà//à40àFragenà-à10àproàDimension
ààquestions:à[
àààà//à===àEXTRAVERSIONà(E)àvs.àINTROVERSIONà(I)à-à10àFragenà===
àààà{àid:à1,àdimension:à'EI',àpolarity:à'E',àquestion:à'Ichàgenie—eàGro—veranstaltungenàundàbinàgerneàunteràvielenàMenschen.'à},
àààà{àid:à2,àdimension:à'EI',àpolarity:à'I',àquestion:à'IchàbraucheàvielàZeitàallein,àumàaufzutanken.'à},
àààà{àid:à3,àdimension:à'EI',àpolarity:à'E',àquestion:à'IchàliebeàneueàMenschenàkennenzulernenàundàfreundeàmichàschnellàan.'à},
àààà{àid:à4,àdimension:à'EI',àpolarity:à'I',àquestion:à'Ichàfühleàmichàinàeins-zu-eins-GesprächenàwohleràalsàinàGruppen.'à},
àààà{àid:à5,àdimension:à'EI',àpolarity:à'E',àquestion:à'Ichàredeàgerneàundàkannàvonàmiràselbstàerzählen.'à},
àààà{àid:à6,àdimension:à'EI',àpolarity:à'I',àquestion:à'Ichàdenkeàlieberànachàalsàzuàreden.'à},
àààà{àid:à7,àdimension:à'EI',àpolarity:à'E',àquestion:à'Michàsprichtàesàan,àspontanàetwasàzuàunternehmen.'à},
àààà{àid:à8,àdimension:à'EI',àpolarity:à'I',àquestion:à'IchàverbringeàgerneàZeitàmitàmeinenàengstenàVertrauten.'à},
àààà{àid:à9,àdimension:à'EI',àpolarity:à'E',àquestion:à'IchàbinàdieàlebendigeàSeeleàaufàPartysàundàTreffen.'à},
àààà{àid:à10,àdimension:à'EI',àpolarity:à'I',àquestion:à'IchàzündeàmichàlieberàinàBücheràoderàHobbysàein,àalsàauszugehen.'à},

àààà//à===àSENSINGà(S)àvs.àINTUITIONà(N)à-à10àFragenà===
àààà{àid:à11,àdimension:à'SN',àpolarity:à'S',àquestion:à'IchàvertraueàaufàkonkreteàFaktenàundàpraktischeàErfahrungen.'à},
àààà{àid:à12,àdimension:à'SN',àpolarity:à'N',àquestion:à'Ichàseheàgerneàgrö—ereàMusteràundàZusammenhänge.'à},
àààà{àid:à13,àdimension:à'SN',àpolarity:à'S',àquestion:à'IchàmagàklareàAnweisungenàundàbewährteàWege.'à},
àààà{àid:à14,àdimension:à'SN',àpolarity:à'N',àquestion:à'IchàträumeàgerneàvonàMöglichkeitenàundàderàZukunft.'à},
àààà{àid:à15,àdimension:à'SN',àpolarity:à'S',àquestion:à'Detailsàsindàmiràwichtigàundàichàbemerkeàsieànormalerweise.'à},
àààà{àid:à16,àdimension:à'SN',àpolarity:à'N',àquestion:à'IchàverliereàmichàgerneàinàabstraktenàIdeenàundàTheorien.'à},
àààà{àid:à17,àdimension:à'SN',àpolarity:à'S',àquestion:à'IchàkonzentriereàmichàaufàdasàHieràundàJetzt.'à},
àààà{àid:à18,àdimension:à'SN',àpolarity:à'N',àquestion:à'IchàhabeàoftàintuitiveàHunches,àdieàsichàspäteràalsàrichtigàerweisen.'à},
àààà{àid:à19,àdimension:à'SN',àpolarity:à'S',àquestion:à'Ichàmagàpraktische,àhandfesteàProblemeàlösen.'à},
àààà{àid:à20,àdimension:à'SN',àpolarity:à'N',àquestion:à'IchàliebeàkonzeptionelleàundàkreativeàHerausforderungen.'à},

àààà//à===àTHINKINGà(T)àvs.àFEELINGà(F)à-à10àFragenà===
àààà{àid:à21,àdimension:à'TF',àpolarity:à'T',àquestion:à'IchàtreffeàEntscheidungenàlogischàbasierendàaufàFakten.'à},
àààà{àid:à22,àdimension:à'TF',àpolarity:à'F',àquestion:à'IchàberücksichtigeàGefühleàundàBeziehungenàbeiàEntscheidungen.'à},
àààà{àid:à23,àdimension:à'TF',àpolarity:à'T',àquestion:à'Kritikàistàfüràmichàsachlichàundàhatànichtsàmitàmiràpersönlichàzuàtun.'à},
àààà{àid:à24,àdimension:à'TF',àpolarity:à'F',àquestion:à'IchàbinàempfindlichàgegenüberàKritikàanàmir.'à},
àààà{àid:à25,àdimension:à'TF',àpolarity:à'T',àquestion:à'IchàbevorzugeàEffizienzàundàLeistungàüberàHarmonie.'à},
àààà{àid:à26,àdimension:à'TF',àpolarity:à'F',àquestion:à'HarmonieàinàBeziehungenàistàmiràsehràwichtig.'à},
àààà{àid:à27,àdimension:à'TF',àpolarity:à'T',àquestion:à'IchàstelleàgerneàFragenàundàseiàskeptischàgegenüberàAnnahmen.'à},
àààà{àid:à28,àdimension:à'TF',àpolarity:à'F',àquestion:à'IchàsympathisiereàleichtàmitàanderenàMenschen.'à},
àààà{àid:à29,àdimension:à'TF',àpolarity:à'T',àquestion:à'IchàzerlegeàProblemeàmitàanalytischeràStrenge.'à},
àààà{àid:à30,àdimension:à'TF',àpolarity:à'F',àquestion:à'IchàorientiereàmichàanàWertenàundàtieferenàBedeutungen.'à},

àààà//à===àJUDGINGà(J)àvs.àPERCEIVINGà(P)à-à10àFragenà===
àààà{àid:à31,àdimension:à'JP',àpolarity:à'J',àquestion:à'IchàliebeàPläneàundàStrukturen.'à},
àààà{àid:à32,àdimension:à'JP',àpolarity:à'P',àquestion:à'Ichàbinàflexibelàundàimprovisiereàgerne.'à},
àààà{àid:à33,àdimension:à'JP',àpolarity:à'J',àquestion:à'IchàmöchteàDingeàerledigtàhabenàundàabschlie—en.'à},
àààà{àid:à34,àdimension:à'JP',àpolarity:à'P',àquestion:à'IchàbehalteàgerneàOptionenàoffen.'à},
àààà{àid:à35,àdimension:à'JP',àpolarity:à'J',àquestion:à'IchàarbeiteàbesseràmitàDeadlineàundàStruktur.'à},
àààà{àid:à36,àdimension:à'JP',àpolarity:à'P',àquestion:à'IchàarbeiteàbesseràunteràZeitdruckàundàSpontaneität.'à},
àààà{àid:à37,àdimension:à'JP',àpolarity:à'J',àquestion:à'Ichàbinàorganisiertàundàplaneàvoraus.'à},
àààà{àid:à38,àdimension:à'JP',àpolarity:à'P',àquestion:à'IchàbinàspontanàundàlebeàeheràimàMoment.'à},
àààà{àid:à39,àdimension:à'JP',àpolarity:à'J',àquestion:à'IchàmagàklareàeindeutigeàErgebnisse.'à},
àààà{àid:à40,àdimension:à'JP',àpolarity:à'P',àquestion:à'IchàhalteàgerneàmehrereàWegeàoffenàundàentscheideàmichàspät.'à}
àà],

àà//àMBTIàTypenàundàihreàBeschreibungen
ààtypes:à{
ààààENTJ:à{
ààààààname:à'DeràStrategeà(ENTJ)',
ààààààstrength:à'°¯àStrategisch,àFührend,àEhrgeiziger,àEntschlossener',
ààààààchallenges:à' —¯¸àUngeduldig,àDirekt,àFokusànuràaufàEffizienz',
ààààààworkplace:à'Management,àStrategischeàPlanung,àUnternehmertum',
ààààààdescription:à'ENTJsàsindànatürlicheàAnführeràmitàstrategischemàVerstand.àSieàliebenàHerausforderungenàundàarbeitenàeffizientàaufàZieleàhin.'
àààà},
ààààENTJ:à{
ààààààname:à'DeràStrategeà(ENTJ)',
ààààààstrength:à'°¯àStrategisch,àFührend,àEhrgeiziger,àEntschlossener',
ààààààchallenges:à' —¯¸àUngeduldig,àDirekt,àFokusànuràaufàEffizienz',
ààààààworkplace:à'Management,àStrategischeàPlanung,àUnternehmertum',
ààààààdescription:à'ENTJsàsindànatürlicheàAnführeràmitàstrategischemàVerstand.àSieàliebenàHerausforderungenàundàarbeitenàeffizientàaufàZieleàhin.'
àààà},
ààààINTJ:à{
ààààààname:à'DeràArchitektà(INTJ)',
ààààààstrength:à'°—¯¸àVisionar,àUnabhängig,àPlanungsorientiert,àIntellektuello',
ààààààchallenges:à' —¯¸àZuàkritisch,àUnflexibel,àKannàemotionaleàNuancenàübersehen',
ààààààworkplace:à'Wissenschaft,àForschung,àStrategischeàAnalysen,àSoftwareentwicklung',
ààààààdescription:à'INTJsàsindàvisionäreàDenker,àdieàkomplexeàSystemeàdurchschauen.àSieàsindàunabhängigàundàzielbewusst.'
àààà},
ààààENTP:à{
ààààààname:à'DeràVisionarà(ENTP)',
ààààààstrength:à'¡àKreativ,àDebattierfreudig,àflexibel,àInnovativer',
ààààààchallenges:à' —¯¸àVerliertàFokus,àUngeduldig,àKannàandereàreizenàmitàDebaten',
ààààààworkplace:à'Unternehmertum,àConsulting,àProduktentwicklung,àVertrieb',
ààààààdescription:à'ENTPsàsindàcleveràundàvolleràIdeen.àSieàliebenàDebattenàundàkreativeàHerausforderungen.'
àààà},
ààààINTP:à{
ààààààname:à'DeràDenkerà(INTP)',
ààààààstrength:à'°ç àLogisch,àAnalytischer,àUnabhängiger,àOrigineller',
ààààààchallenges:à' —¯¸àKannàsozialàunbeholfenàsein,àPerfektionist,àProkrastiniert',
ààààààworkplace:à'Forschung,àProgrammierung,àAkademie,àWissenschaft',
ààààààdescription:à'INTPsàsindàtiefeàDenkeràundàProblemlöser.àSieàliebenàLogikàundàsindàoftàPioniereàinàihrenàBereichen.'
àààà},
ààààESFJ:à{
ààààààname:à'DeràKonsulà(ESFJ)',
ààààààstrength:à'°àWarmherzig,àVerantwortungsvoll,àKontaktfreudig,àUnterstützender',
ààààààchallenges:à' —¯¸àKannàzuàgeschwätzigàsein,àBrauchtàvielàBestätigung,àUnhaftàneueràIdeen',
ààààààworkplace:à'Bildung,àPflege,àSoziales,àHR',
ààààààdescription:à'ESFJsàsindàwarmherzigàundàverantwortungsvoll.àSieàkümmernàsichàumàandereàundàmögenàStrukturen.'
àààà},
ààààISFJ:à{
ààààààname:à'DeràBeschützerà(ISFJ)',
ààààààstrength:à'°¡—¯¸àZuverlässig,àGeduldig,àUnterstützender,àPraktischer',
ààààààchallenges:à' —¯¸àZuàzurückhaltend,àKannàÄrgeràanstauen,àSchweràmitàKritik',
ààààààworkplace:à'Pflege,àBildung,àAdministration,àSozialarbeit',
ààààààdescription:à'ISFJsàsindàzuverlässigeàHelfer.àSieàarbeitenàgerneàmitàDetailsàundàachtenàaufàandere.'
àààà},
ààààESFP:à{
ààààààname:à'DeràEntertainerà(ESFP)',
ààààààstrength:à'°àLebhaft,àSpontan,àKontaktfreudig,àPräsenter',
ààààààchallenges:à' —¯¸àKannàoberflächlichàsein,àSchwierigkeitenàmitàlangenàFrist-Aufgaben',
ààààààworkplace:à'Event-Management,àVerkauf,àEntertainment,àMarketing',
ààààààdescription:à'ESFPsàsindàdieàLebenskünstler.àSieàliebenàAction,àMenschenàundàlebenàimàHieràundàJetzt.'
àààà},
ààààISFP:à{
ààààààname:à'DeràAbenteurerà(ISFP)',
ààààààstrength:à'°¨àKünstlerisch,àFlexibel,àSensitiv,àAbenteuerlustig',
ààààààchallenges:à' —¯¸àKannàsichàzuàemotionalàinàDingeàverfangen,àSchwierigkeitenàmitàHierachien',
ààààààworkplace:à'Kunst,àDesign,àHandwerk,àCoaching,àAdventureàTourism',
ààààààdescription:à'ISFPsàsindàsensibleàundàkünstlerischeàGeister.àSieàlebenànachàihrenàWertenàundàgenie—enàdieàVielfalt.'
àààà},
ààààESTJ:à{
ààààààname:à'DeràLogistikerà(ESTJ)',
ààààààstrength:à'°àOrganisiert,àVerantwortungsvoll,àTreuer,àHardworker',
ààààààchallenges:à' —¯¸àKannàzuàrigidàsein,àSchwierigkeitenàmitàunkonventionellenàIdeen',
ààààààworkplace:à'Management,àMilitär,àVerwaltung,àHandwerk',
ààààààdescription:à'ESTJsàsindàpraktischeàOrganisatoren.àSieàliebenàRegeln,àEffizienzàundàklareàHierarchien.'
àààà},
ààààISTJ:à{
ààààààname:à'DeràLogistikerà(ISTJ)',
ààààààstrength:à'—¯¸àVerantwortungsvoll,àPraktisch,àLoyal,àGründlic',
ààààààchallenges:à' —¯¸àKannàzuàsteifàsein,àSchwierigkeitenàmitàVeränderungen',
ààààààworkplace:à'Buchhaltung,àIngenieurwesen,àIT,àAdministration',
ààààààdescription:à'ISTJsàsindàpflichtbewusstàundàzuverlässig.àSieàarbeitenàmethodischàundàwertschätzenàStabilität.'
àààà},
ààààESTP:à{
ààààààname:à'DeràUnternehmerà(ESTP)',
ààààààstrength:à'°àWagemutig,àPragmatisch,àCharismativ,àRisikobereiter',
ààààààchallenges:à' —¯¸àKannàrücksichtslosàsein,àSchwierigkeitenàmitàPlanung',
ààààààworkplace:à'Verkauf,àUnternehmertum,àSport,àMilitär',
ààààààdescription:à'ESTPsàsindàgewageàMacher.àSieàlebenàfüràActionàundàliebenàdieàHerausforderung.'
àààà},
ààààISTP:à{
ààààààname:à'DeràHandwerkerà(ISTP)',
ààààààstrength:à'°çàPraktisch,àUnabhängig,àLogisch,àProblemlöser',
ààààààchallenges:à' —¯¸àKannàunflexibelàsein,àSchwierigkeitenàmitàemotionaleràKommunikation',
ààààààworkplace:à'Handwerk,àIngenieurwesen,àTechniker,àMechaniker',
ààààààdescription:à'ISTPsàsindàpraktischeàProblemlöser.àSieàverstehen,àwieàDingeàfunktionierenàundàmögenàesàkonkret.'
àààà},
ààààENFJ:à{
ààààààname:à'DeràProtagonistà(ENFJ)',
ààààààstrength:à'°¥àCharismatisch,àInspirierend,àOrganisiert,àEinfühlsam',
ààààààchallenges:à' —¯¸àKannàzuàidealistischàsein,àBrauchtàvielàsozialeàValidierung',
ààààààworkplace:à'Training,àCoaching,àPolitik,àPsychologie',
ààààààdescription:à'ENFJsàsindàinspirierendeàFührungspersonen.àSieàkümmernàsichàumàandereàundàmobilisierenàsieàfüràZiele.'
àààà},
ààààINFJ:à{
ààààààname:à'DeràBeraterà(INFJ)',
ààààààstrength:à'°®àEinfühlsam,àIdealistisch,àIntuitiv,àTiefgründig',
ààààààchallenges:à' —¯¸àKannàzuàperfektionistischàsein,à—berfordertàdurchàzuàvieleàAnfragen',
ààààààworkplace:à'Beratung,àPsychologie,àSchreiben,àKünstlerisches',
ààààààdescription:à'INFJsàsindàtiefeàundàidealisticalàDenker.àSieàsehenàgro—esàPotenzialàbeiàanderenàundàwollenàhelfen.'
àààà},
ààààENFP:à{
ààààààname:à'DeràKampagnerà(ENFP)',
ààààààstrength:à'°àCharismatisch,àSpontan,àKreativ,àEnthusiastisch',
ààààààchallenges:à' —¯¸àKannàunstetàsein,àSchwierigkeitenàmitàFokus',
ààààààworkplace:à'Marketing,àPR,àKreativeàBranchen,àTraining',
ààààààdescription:à'ENFPsàsindàcharismatischàundàvolleràEnthusiasmus.àSieàliebenàVielfaltàundàregenàandereàan.'
àààà},
ààààINFP:à{
ààààààname:à'DeràMediatorà(INFP)',
ààààààstrength:à'°«àAuthentisch,àKreativ,àIdealistisch,àIndividualistisch',
ààààààchallenges:à' —¯¸àKannàverletzlichàsein,àSchwierigkeitenàmitàKonflikten',
ààààààworkplace:à'Schreiben,àKünstlerisches,àBeratung,àNonprofits',
ààààààdescription:à'INFPsàsindàauthentischeàIdealisten.àSieàwollenàauthentischàseinàundàeinenàsinnvollenàBeitragàleisten.'
àààà}
àà},

àà/**
ààà*àBerechnetàdenàPersönlichkeitstypàbasierendàaufàAntworten
ààà*/
ààcalculateType(answers)à{
ààààconstàscoresà=à{
ààààààE:à0,àI:à0,àà//àExtraversionàvs.àIntroversion
ààààààS:à0,àN:à0,àà//àSensingàvs.àIntuition
ààààààT:à0,àF:à0,àà//àThinkingàvs.àFeeling
ààààààJ:à0,àP:à0ààà//àJudgingàvs.àPerceiving
àààà};

ààààthis.questions.forEach(qà=>à{
ààààààconstàanswerValueà=àanswers[q.id]à||à0;
ààààààconstàdimensionà=àq.dimension;

ààààààifà(dimensionà===à'EI')à{
ààààààààifà(q.polarityà===à'E'à&&àanswerValueà>à0)àscores.Eà+=àanswerValue;
ààààààààelseàifà(q.polarityà===à'I'à&&àanswerValueà>à0)àscores.Ià+=àanswerValue;
ààààààààifà(q.polarityà===à'E'à&&àanswerValueà<à0)àscores.Ià+=àMath.abs(answerValue);
ààààààààelseàifà(q.polarityà===à'I'à&&àanswerValueà<à0)àscores.Eà+=àMath.abs(answerValue);
àààààà}àelseàifà(dimensionà===à'SN')à{
ààààààààifà(q.polarityà===à'S'à&&àanswerValueà>à0)àscores.Sà+=àanswerValue;
ààààààààelseàifà(q.polarityà===à'N'à&&àanswerValueà>à0)àscores.Nà+=àanswerValue;
ààààààààifà(q.polarityà===à'S'à&&àanswerValueà<à0)àscores.Nà+=àMath.abs(answerValue);
ààààààààelseàifà(q.polarityà===à'N'à&&àanswerValueà<à0)àscores.Sà+=àMath.abs(answerValue);
àààààà}àelseàifà(dimensionà===à'TF')à{
ààààààààifà(q.polarityà===à'T'à&&àanswerValueà>à0)àscores.Tà+=àanswerValue;
ààààààààelseàifà(q.polarityà===à'F'à&&àanswerValueà>à0)àscores.Fà+=àanswerValue;
ààààààààifà(q.polarityà===à'T'à&&àanswerValueà<à0)àscores.Fà+=àMath.abs(answerValue);
ààààààààelseàifà(q.polarityà===à'F'à&&àanswerValueà<à0)àscores.Tà+=àMath.abs(answerValue);
àààààà}àelseàifà(dimensionà===à'JP')à{
ààààààààifà(q.polarityà===à'J'à&&àanswerValueà>à0)àscores.Jà+=àanswerValue;
ààààààààelseàifà(q.polarityà===à'P'à&&àanswerValueà>à0)àscores.Pà+=àanswerValue;
ààààààààifà(q.polarityà===à'J'à&&àanswerValueà<à0)àscores.Pà+=àMath.abs(answerValue);
ààààààààelseàifà(q.polarityà===à'P'à&&àanswerValueà<à0)àscores.Jà+=àMath.abs(answerValue);
àààààà}
àààà});

ààààconstàtypeà=
àààààà(scores.Eà>àscores.Ià?à'E'à:à'I')à+
àààààà(scores.Sà>àscores.Nà?à'S'à:à'N')à+
àààààà(scores.Tà>àscores.Fà?à'T'à:à'F')à+
àààààà(scores.Jà>àscores.Pà?à'J'à:à'P');

ààààreturnàtype;
àà},

àà/**
ààà*àGibtàdieàTypbeschreibungàzurück
ààà*/
ààgetTypeInfo(type)à{
ààààreturnàthis.types[type]à||à{
ààààààname:àtype,
ààààààstrength:à'EinzigartigeàQualitäten',
ààààààchallenges:à'Entwicklungsbereiche',
ààààààworkplace:à'VerschiedeneàUmgebungen',
ààààààdescription:à'DieseràTypàhatàeineàeinzigartigeàKombinationàvonàEigenschaften.'
àààà};
àà},

àà//àKEINàmedizinischeràHinweisàfüràPersönlichkeitstest
ààmedicalDisclaimer:à''
};
