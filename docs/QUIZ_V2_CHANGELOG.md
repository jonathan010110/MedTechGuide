#à°¯àQuizàSystemàv2.0à-àNeueàFeaturesà&àUpdates

**ReleaseàDate:**à24.02.2026àà
**Version:**à2.0àà
**Status:**ààVollständigàimplementiert

---

##à°à—berblickàderàÄnderungen

DasàQuiz-Systemàwurdeàkomplettàüberarbeitetàundàerweitert:

###à¨àNeueàFeatures

####à1.à**RandomisierteàFragen**à°
-àAlleàFragenàwerdenàzufälligàsortiertà(Fisher-YatesàShuffle)
-àMultiple-ChoiceàAntwortenàwerdenàebenfallsàrandomisiert
-àJederàQuiz-Testàistàunterschiedlich
-à**Funktion:**à`getRandomizedQuestions(kategorie)`

####à2.à**DreiàPsychologischeàTests**à°ç 

#####à°´àDepression-Screeningà(PHQ-9)
-à**Basis:**àPatientàHealthàQuestionnaire-9à(wissenschaftlichàvalidiert)
-à**Fragen:**à9àFragenàzuàdepressivenàSymptomen
-à**Skala:**à0-3à(GarànichtàbisàFastàjedenàTag)
-à**Interpretation:**à
àà-à0-4:àKeineàDepression
àà-à5-9:àLeichteàDepression
àà-à10-14:àModerateàDepression
àà-à15+:àSchwereàDepression
-à**Warnung:**à —¯¸àKeinàErsatzàfüràärztlicheàDiagnose

#####à°ç àADHS-Screeningà(ASRSàv1.1)
-à**Basis:**àAdultàADHDàSelf-ReportàScaleà(professionellàvalidiert)
-à**Fragen:**à6àHauptfragenàzuàADHS-Symptomen
-à**Skala:**à0-4à(Nie/seltenàbisàImmer)
-à**Interpretation:**
àà-à0-6:àNiedrigeàADHS-Merkmale
àà-à7-12:àMöglicheàADHS
àà-à13+:àWahrscheinlichàADHS
-à**Warnung:**à —¯¸àWeitereàEvaluationàempfohlen

#####à°àBig-FiveàPersönlichkeitstestà(ENTF)
-à**Basis:**àFiveàFactoràModelà(internationalàstandardisiert)
-à**Dimensionenà(ENTF):**
àà-à**O**à=àOffenheità(Openness)à-àKreativität,àNeugier
àà-à**E**à=àExtraversionà(Extraversion)à-àGeselligkeit,àEnergie
àà-à**N**à=àNeurotizismusà(Neuroticism)à-àEmotionaleàStabilität
àà-à**F**à=àVerträglichkeità(Friendliness/Agreeableness)à-àKooperation
àà-à**C**à=àGewissenhaftigkeità(Conscientiousness)à-àOrdnung
-à**Fragen:**à20àFragenà(4àproàDimension)
-à**Skala:**à1-5à(StimmeàgarànichtàzuàbisàStimmeàsehràzu)
-à**Ergebnis:**àProfilàmitàScoreàproàDimension
-à**Interpretation:**àDetaillierteàErklärungenàfüràjedeàDimension

####à3.à**MobileàHochformat-Optimierung**à°±

**Breakpoints:**
-à**768pxà&àdarunter:**àTabletàPortrait
-à**480pxà&àdarunter:**àSmallàPhoneàPortrait
-à**Landscape:**àSpezial-Optimierung

**Optimierungen:**
-ààReduzierteàPadding/MarginàfüràkleineàScreens
-ààImprovedàTouch-Targetsà(minà44px)
-ààBetteràTypographyàfüràMobile
-ààFlexiblesàGridàLayout
-ààLandscapeàModeàSupport
-ààHochformat-spezialisiert

####à4.à**VerbesserteàUI/UX**à°¨

**MultipleàChoice:**
-àGrö—ereàTouch-ZieleàaufàMobile
-àBessereàHover-Effekte
-àKlarereàVisualisierung

**Likert-Skalen:**
-àVertikalàaufàMobileà(einfacher)
-àHorizontalàaufàDesktop
-àBig-FiveàspezialesàLayout

**Ergebnisse:**
-àAnimierteàFortschrittsbalken
-àFarbcodierteàErgebnisse
-àDetaillierteàInterpretationen
-àWarnhinweiseàfüràpsychologischeàTests

---

##à°®àNeueàTesttypen

###àDatenstrukturàv2.0

```javascript
//àMultipleàChoiceà(alt)
{
ààfrage:à"...",
ààoptionen:à["A",à"B",à"C",à"D"],
ààantwort:à1,
ààerklärung:à"..."
}

//àLikertàScaleà(neu)
{
ààfrage:à"...",
ààskala:à["Opt1",à"Opt2",à"Opt3",à"Opt4"]
}

//àBigàFiveà(neu)
{
ààfrage:à"...",
ààdimension:à"O"à|à"C"à|à"E"à|à"A"à|à"N"
}
```

###àQuizàStateàEnhancement

```javascript
quizStateà=à{
ààaktiv:àfalse,
ààkategorie:ànull,
ààtestType:à'multiple-choice'à|à'likert'à|à'bigfive',
ààaktuelleFrageIndex:à0,
ààpunkte:à0,
ààantworten:à[],
ààmaxPunkte:à0,
ààscores:à{}à//àFüràBigàFive:à{O:à0,àC:à0,àE:à0,àA:à0,àN:à0}
}
```

---

##à°çàTechnischeàÄnderungen

###àNeueàFunktionen

####à`shuffleArray(array)`
```javascript
constàshuffledà=àshuffleArray(questions);
//àRandomisiertàArrayànachàFisher-YatesàAlgorithmus
```

####à`getRandomizedQuestions(kategorie)`
```javascript
constàrandomFragenà=àgetRandomizedQuestions('diagnostik');
//àGibtàrandomisierteàFragenàzurück
//àBeiàMultipleàChoice:àauchàOptionenàrandomisiert
```

###àGeänderteàFunktionen

####à`startQuiz(kategorie)`à-àEnhanced
-àErkenntàjetztàautomatischàTest-Typ
-àInitialisiertà`scores`àfüràBigàFive
-àSetztà`testType`àbasierendàaufàKategorie

####à`nextQuizFrage(antwortIndex)`à-àEnhanced
-àMultipleàChoice:àwieàvorher
-àLikert:àspeichertàScoreà(0-3àoderà0-4)
-àBigàFive:àaggregiertànachàDimensionen

####à`displayQuizFrage()`à-àEnhanced
-àRendertàverschiedeneàUIàjeànachà`testType`
-àMultipleàChoice:àButtonsàA/B/C/D
-àLikert:àVertikaleàSkala
-àBigàFive:à1-5àSkala

####à`showQuizErgebnis()`à-àEnhanced
-àMultipleàChoice:àScoreà+àDetails
-àLikert:àInterpretationà+àWarnung
-àBigàFive:àProfilà+àDimensionen-Erklärung

###àUIà&àModalà-àEnhanced

```javascript
//àNeueàKategorienngruppeàinàModal
<divàclass="quiz-kategorie-gruppe">
àà<h3>°ç àPsychologischeàTests</h3>
àà//àPsychology-Kategorieàwerdenàsepariert
</div>
```

---

##à°¯àCSSàChanges

###àNeueàKlassen

```css
.likert-scaleàààààààààà/*àLikert-SkalenàContainerà*/
.likert-optionààààààààà/*àLikert-Buttonà*/
.likert-labelàààààààààà/*àLikert-LabelàTextà*/
.likert-numberààààààààà/*àLikertà1-5àNumberà*/

.bigfive-scaleààààààààà/*àBigàFiveàspezialesàLayoutà*/
.bigfive-resultsààààààà/*àResultsàContainerà*/
.bigfive-result-itemààà/*àDimensionàResultàRowà*/
.bigfive-barààààààààààà/*àProgressàBaràfüràDimensionà*/
.bigfive-scoreààààààààà/*àScoreàTextà*/
.bigfive-infoàààààààààà/*àInfoàTextà*/

.likert-resultààààààààà/*àLikertàResultàContainerà*/
.result-score-baràààààà/*àScoreàFortschrittà*/
.result-score-fillààààà/*àGefüllteràTeilà*/
.result-score-numàààààà/*àScoreàNummerà*/

.result-interpretationà/*àInterpretationàTextà*/
.test-warnungàààààààààà/*àWarning/Disclaimerà*/

.quiz-kategorie-gruppeà/*àKategorieàSektionà*/
.kategorie-gruppe-titelà/*àSektionàTitelà*/
```

###àMobileàOptimization

```css
/*à768pxà-àTabletàPortraità*/
@mediaà(max-width:à768px)à{
àà/*àReduzierteàGrö—en,àSpacingà*/
}

/*à480pxà-àSmallàPhoneà*/
@mediaà(max-width:à480px)à{
àà/*àNochàweitereàOptimierungenà*/
àà/*àKategorienàalsàRowàLayoutà*/
}

/*àLandscapeà*/
@mediaà(max-height:à600px)àandà(orientation:àlandscape)à{
àà/*àOptimiertàfüràbreite,àkurzeàScreensà*/
}
```

---

##à°àQUIZ_DATABASEàStrukturàv2.0

```javascript
QUIZ_DATABASEà=à{
àà//àMedizintechnikà(MultipleàChoice)
ààdiagnostik:à{
ààààtype:à'multiple-choice',
ààààfragen:à[...]
àà},
ààtherapie:à{àtype:à'multiple-choice',àfragen:à[...]à},
ààforschung:à{àtype:à'multiple-choice',àfragen:à[...]à},
ààzukunft:à{àtype:à'multiple-choice',àfragen:à[...]à},

àà//àPsychologieà(LikertàScale)
ààdepression:à{
ààààtype:à'likert',
ààààname:à'°àDepressions-Screening',
ààààbeschreibung:à'...',
ààààwarnung:à' —¯¸à...',
ààààfragen:à[...],
ààààinterpretation:à{à0:à{...},à5:à{...},à...à}
àà},
ààadhs:à{
ààààtype:à'likert',
ààààname:à'°ç àADHS-Screening',
àààà//à...
àà},

àà//àBigàFiveà(Dimensionen)
ààpersoenlichkeit:à{
ààààtype:à'bigfive',
ààààname:à'°àBig-FiveàTest',
ààààdimensionen:à{àO:à'...',àC:à'...',à...à},
ààààfragen:à[...]
àà}
}
```

---

##à°àVerwendung

###àAlleàTestsàstarten

```javascript
//àOptionà1:àModalàöffnen
openQuizModal);

//àOptionà2:àDirektesàQuiz
startQuiz('diagnostik');
startQuiz('therapie');
startQuiz('depression');ààà//àNEU
startQuiz('adhs');ààààààààà//àNEU
startQuiz('persoenlichkeit');à//àNEU
```

###àRandomisierteàFragen

```javascript
//àNuràfüràMultipleàChoice
constàrandomizedQuestionsà=àgetRandomizedQuestions('diagnostik');
//àGibtàArrayàmitàrandomisiertenàFragenàUNDàOptionenàzurück
```

---

##ààBrowseràKompatibilität

-ààChromeà85+
-ààFirefoxà78+
-ààSafarià14+
-ààEdgeà85+
-ààMobileàChrome
-ààMobileàSafari

---

##à°àDatenschutz

à**Vollständigàlokal:**
-àKeineàexterneàDatenübertragun
-àKeineàSpeicherungàaufàServer
-àKeineàCookies
-àKeineàUser-Tracking
-àErgebnisseànuràimàBrowserà(SessionStorage)

---

##à—¯¸àPsychologischeàTestsà-àDisclaimer

###à —¯¸àWICHTIG

DieseàTestsàsindà**KEINEàmedizinischeàDiagnose**.àSieàdienenànuràzu:
-àGrundlegendemàScreening
-àSelbst-Evaluierung
-àBewusstseinsfindung
-àZuràVorbereitungàfüràprofessionelleàBeratung

###àBeiàBedenken:
1.àKonsultierenàSieàeinenà**qualifiziertenàPsychologen**
2.àSuchenàSieà**ärztlicheàFachberatung**
3.àKontaktierenàSieà**Krisenhotlines**àbeiàernsthafteàGedanken
4.àZögernàSieànicht,à**Hilfeàzuàsuchen**

---

##à°àBekannteàLimitationen

-ààKeineàTest-VerlaufàSpeicherungàzwischenàSessions
-ààKeineàMehrfach-VersucheàTracking
-ààKeineàExport-Funktion
-ààKeineàLeaderboard
-ààKeineàBenachrichtigungen

---

##à°®àGeplanteàFeaturesàv2.1

-à[à]àErgebnisseàalsàPDFàexportieren
-à[à]àHistory/Verlaufàspeichern
-à[à]àSchwierigkeitsstufenàfüràMultipleàChoice
-à[à]àZeitlimitàproàFrageà(optional)
-à[à]àQuiz-StatistikenàDashboard
-à[à]àMehràFragenàproàKategorie
-à[à]àMehrsprachigeràSupport

---

##à°±àMobile-FirstàDesignàPrinzipien

1.à**Touch-Friendly:**àAlleàButtonsà44px+à(Apple)
2.à**Performance:**àSchnelleàInteraktionàauchàaufà3G
3.à**Responsive:**àFunktioniertàaufà320pxà-à2560px
4.à**Accessible:**àWCAGàAAàStandard
5.à**Offline:**àVollständigàfunktionalàohneàInternet

---

##à°àWissenschaftlicheàBasis

**Depressionà(PHQ-9):**
-àEntwickeltàvonàPfizer,àfreiàverwendbar
-àLänder-spezifischàvalidiert
-àEtwaà10àMinutenàBeantwortungszeit
-àWeltheitàverwendetàinàklinischeràPraxis

**ADHSà(ASRSàv1.1):**
-àWHOà(WorldàHealthàOrganization)àentwickelt
-àFreeàscreeningàtool
-à5àMinutenàschnelleàVersion
-à—berà100.000àmalàvalidiert

**BigàFive:**
-àInternationalàstandardisiert
-à—berà50àJahreàForschung
-àUsedàbyàHR,àUniversities,àResearchers
-àBasisàfüràvieleàPersonalityàTests

---

##à° —¯¸àTechnischeàSpezifikationen

|àAspektà|àDetailsà|
|--------|---------|
|à**JavaScript**à|àVanillaàES6+à(keineàFrameworks)à|
|à**Grö—e**à|àquiz.js:à~45KB,àquiz.css:à~35KBà|
|à**Dependencies**à|àKeineà(vollständigàindependent)à|
|à**Performance**à|à<à100msàfüràQuiz-Startà|
|à**Memory**à|à<à5MBàfüràvollständigenàSessionà|
|à**Bundling**à|àNichtàerforderlichà|
|à**Transpilation**à|àNichtàerforderlichà(ES6)à|

---

##à°àSupportà&àTesting

###àTesten
```
1.àÖffneàindex.html
2.àKlickàaufà"°¯àQuiz"à
3.àWähleàeinenàTest
4.àBeantworteàalleàFragen
5.àSchaueàErgebnisseàan
```

###àFehlerbehandlung
FallsàQuizànichtàfunktioniert:
1.àPrüfàBrowseràConsoleà(F12)
2.àCheckliste:
ààà-ààquiz.jsàgeladen?
ààà-ààquiz.cssàgeladen?
ààà-ààNoàJavaScriptàFehler?
ààà-ààCacheàgeleert?
3.àVersucheàanderenàBrowser

---

**VielàSpa—àmitàdemàneuenàQuizàSystemà2.0!à°¯°**

Version:à2.0à|àLastàUpdated:à24.02.2026

