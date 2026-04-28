#à°ç àSelbsttestsààMedTechGuide

##à—berblick

DasàSelbsttest-Systemàbietetà7àwissenschaftlichàstrukturierteàpsychologischeàundàgesundheitsbezogeneàSelbsttestsàmitàinsgesamtà**280+àFragen**.

##àVerfügbareàTests

###à1.à**Depressionstest**à
-à**40àFragen**à|à4-stufigeàSkala
-à**Struktur:**àPHQ-9àerweitert
-à**Themen:**àStimmung,àAntrieb,àSchlaf,àKonzentration,àSelbstwert,àHoffnungslosigkeit,àSuizidgedanken,àsozialeràRückzug,àpsychosomatischeàSymptome
-à**Score:**à0-120àPunkteàmitàInterpretation
-à**Hinweis:**àMedizinischeràDisclaimeràobligatorisch

###à2.à**ADHS-Test**
-à**40àFragen**à|à5-stufigeàSkalaà(NieàbisàSehràhäufig)
-à**Struktur:**àDSM-5àSymptomcluster
-à**Subsores:**
àà-àUnaufmerksamkeità(8àFragen)
àà-àHyperaktivitätà(8àFragen)
àà-àImpulsivitätà(8àFragen)
àà-àOrganisationsproblemeà(8àFragen)
àà-àAlltagsauswirkungenà(8àFragen)
-à**Score:**à0-160àPunkteà+àSubscore-Auswertung
-à**Hinweis:**àMedizinischeràDisclaimeràobligatorisch

###à3.à**Persönlichkeitstestà(MBTI)**
-à**40àFragen**à|à5-stufigeàLikert-Skala
-à**Struktur:**à4àDimensionenàmitàjeà10àFragen
àà-à**E/I:**àExtraversionàvs.àIntroversion
àà-à**S/N:**àSensingàvs.àIntuition
àà-à**T/F:**àThinkingàvs.àFeeling
àà-à**J/P:**àJudgingàvs.àPerceiving
-à**Ergebnis:**àAutomatischeàTypenberechnungà(z.B.àINTJ,àENFP)
-à**Ausgabe:**à
àà-àTypbezeichnungà(4-Buchstaben-Code)
àà-àTypbeschreibung
àà-àStärken
àà-àTypischeàHerausforderungen
àà-àPassendeàArbeitsumfelder
-à**Hinweis:**àKEINàmedizinischeràDisclaimer

###à4.à**Angst-Selbsttest**
-à**40àFragen**à|à4-stufigeàSkala
-à**Themen:**àAllgemeineàAngst,àPanik,àkörperlicheàSymptome,àsozialeàAngst,àPhobien,àBesorgnis,àAuswirkungen,àkognitiveàSymptome
-à**Score:**à0-120àPunkteàmitàRisikostufen
-à**Hinweis:**àMedizinischeràDisclaimeràobligatorisch

###à5.à**Burnout-Selbsttest**
-à**40àFragen**à|à4-stufigeàSkala
-à**Dimensionen:**àEmotionaleàErschöpfung,àDepersonalisierung,àreduzierteàLeistung,àkörperlicheàSymptome,àBeziehungen,àSelbstpflege
-à**Score:**à0-120àPunkteàmitàBurnout-Risikobeurteilung
-à**Hinweis:**àMedizinischeràDisclaimeràobligatorisch

###à6.à**Stressbelastungstest**
-à**40àFragen**à|à4-stufigeàSkala
-à**Themen:**àKontrollierbarkeit,àLebensveränderungen,àberuflicheràStress,àfinanzielleàSorgen,àzwischenmenschlicheàKonflikte,àemotionaleàReaktionen,àkörperlicheàManifestationen,àBewältigungsmechanismen
-à**Score:**à0-120àPunkteàmitàStressbelastungs-Level
-à**Hinweis:**àMedizinischeràDisclaimeràobligatorisch

###à7.à**Schlafqualitäts-Test**
-à**40àFragen**à|à4-stufigeàSkala
-à**Themen:**àEinschlafstörungen,àDurchschlafstörungen,àfrühesàAufwachen,àSchlafqualität,àSchlafmittel-Abhängigkeit,àTagesschläfrigkeit,àSchlafhygiene,àSchlafmuster
-à**Score:**à0-120àPunkteàmitàSchlafqualitäts-Bewertung
-à**Hinweis:**àMedizinischeràDisclaimeràobligatorisch

##àTechnischeàArchitektur

###àDateistruktur

```
self-tests/
àself-tests.htmlàààààààààààààà(Hauptdateià-àStart-Screenà+àTest-Interface)
àcss/
—ààààself-tests.cssàààààààààà(UI-StylingàfüràalleàTests)
àjs/
àààààtest-depression.jsàààààà(DepressionàTest:à40àFragenà+àScoring)
àààààtest-adhs.jsààààààààààà(ADHSàTest:à40àFragenà+àSubscores)
àààààtest-personality.jsààààà(MBTIàTest:à40àFragenà+àTypsystem)
àààààtest-others.jsààààààààà(Angst,àBurnout,àStress,àSchlaf:à160àFragenàgesamt)
àààààself-tests-controller.jsà(Master-ControlleràfüràalleàTests)
```

###àModul-Struktur

JederàTest-ModulàfolgtàdemàgleichenàSchema:

```javascript
constàTestNameà=à{
ààtestId:à'unique-id',
ààtestName:à'AngezeigteràName',
ààtestDescription:à'Kurzbeschreibung',
àà
àà//àAntwortoptionenàmitàWertenàundàFarben
ààanswerOptions:à[à...à],
àà
àà//à40àFragenàmitàKategorien
ààquestions:à[à...à],
àà
àà//àScore-Berechnung
ààcalculateScore(answers)à{à...à},
àà
àà//àInterpretationàderàScore
ààgetInterpretation(score)à{à...à},
àà
àà//àMedizinischeràHinweis
ààmedicalDisclaimer:à'...'
};
```

###àController-Logik

`SelfTestsController`àorchestriert:
-àTest-Auswahl
-àFrage-Rendering
-àAntwort-Speicherung
-àFortschrittsanzeigeà(Prozentbar)
-àScore-Berechnung
-àErgebnis-Anzeige
-àTest-Reset

##àFeatures

###ààBenutzerfreundlichkeit
-à**Start-Screen:**àAlleà7àTestsàaufàKarten-Grid
-à**Fortschrittsanzeige:**àProzentuelleàProgressàBarà+àFrage-Zähler
-à**DezenteàNavigation:**àZurück/Weiter-Buttons
-à**AutomatischeàSpeicherung:**àAntwortenàwerdenàlokalàgespeichert
-à**Vollständigkeits-Check:**àMussàalleàFragenàbeantwortenàvoràSubmit

###ààErgebnisanzeige
-à**Score-Display:**àGro—er,àvisuelleràScoreàmitàFarbcodierung
-à**Interpretation:**àKlareàBeschreibungàderàScore-Bedeutung
-à**ADHS-Specifics:**àSubscore-TabelleàfüràdetaillierteàAnalyse
-à**MBTI-Specifics:**àAutomatischeàTyp-BerechnungàmitàProfil
-à**MedicalàDisclaimer:**àPflicht-WarnungàfüràseriöseàTests
-à**One-ClickàReset:**àZurückàzuràTest-Selection

###ààDesignà&àAccessibility
-à**Mobil-optimiert:**àResponsiveàDesignàfüràalleàBildschirmgrö—en
-à**Farb-kodiert:**àAntwort-OptionenàmitàvisuelleràFarbcodierung
-à**Kontrast:**àWCAG-konformàKontrast-Verhältnisse
-à**Keyboard-Navigation:**àVollständigàmitàTab/Enterànavigierbar
-à**Focus-Styling:**àKlareàFocus-IndikatorenàfüràAccessibility

###ààDesign-Konsistenz
-àIntegriertàmitàdemàbestehendenàMedTechGuide-CSS-System
-àVerwendetàgleicheàFarb-VariablenàundàTheming
-àEinheitlicheàFont-FamilienàundàAbstände
-àKonsistenteàButton-StileàundàAnimationen

##àVerwendung

###àFüràBenutzer
1.àNavigierenàSieàzuà`self-tests.html`
2.àWählenàSieàeinenàTestàaus
3.àBeantwortenàSieàalleà40àFragen
4.àErhaltenàSieàsofortigeàErgebnisseàundàInterpretation
5.àWählenàSieàeinenàanderenàTestàoderàzurückàzuràStartseite

###àFüràEntwicklerà-àNeuenàTestàHinzufügen

1.à**ErstellenàSieàeinàneuesàJS-Modul:**
```javascript
constàMyTestà=à{
ààtestId:à'my-test',
ààtestName:à'MeinàTest',
ààtestDescription:à'Beschreibung',
ààanswerOptions:à[à...à],
ààquestions:à[à...à],
ààcalculateScore(answers)à{à...à},
ààgetInterpretation(score)à{à...à},
ààmedicalDisclaimer:à'...'
};
```

2.à**RegistrierenàSieàesàimàController:**
```javascript
this.allTestsà=à[
àà//à...àbestehende
ààMyTestàà//àNeuàhinzufügt
];
```

3.à**FügenàSieàeineàTest-CardàinàHTMLàhinzu:**
```html
<divàclass="test-card"àdata-test-id="my-test">
àà<divàclass="test-card-icon">°¯</div>
àà<h2àclass="test-card-title">MeinàTest</h2>
àà<pàclass="test-card-description">Beschreibung</p>
àà<buttonàclass="test-card-button">Testàstartenà</button>
</div>
```

##àScore-Systeme

###àStandard-Scoresà(Depression,àAngst,àetc.)
-à**Nie:**à0àPunkte
-à**AnàeinzelnenàTagen:**à1àPunkt
-à**AnàmehràalsàderàHälfteàderàTage:**à2àPunkte
-à**Fastàtäglich:**à3àPunkte
-à**Max:**à40àFragenà—à3à=à120àPunkte

###àADHS-Scores
-à**Nie:**à0àPunkte
-à**Selten:**à1àPunkt
-à**Manchmal:**à2àPunkte
-à**Häufig:**à3àPunkte
-à**Sehràhäufig:**à4àPunkte
-à**Max:**à40àFragenà—à4à=à160àPunkte

###àMBTI-Scores
-à**Likert-Skala:**à-2àbisà+2
-à**KeineànumerischeràScore,ànuràTyp-Berechnung**
-à**Resultat:**à4-Buchstaben-Codeà(z.B.àINTJ)

##àWichtigeàHinweise

###à —¯¸àRechtliche/EthischeàAspekte
-à**AlleàmedizinischenàTestsàzeigenàDisclaimer**àamàEnde
-àMBTIàistànichtàmedizinischàundàhatàkeinenàDisclaimer
-àTestsàersetzenàNICHTàprofessionelleàDiagnose
-àKeineàDatenspeicherungà-àAntwortenàsindàlokal/temporär
-àDSGVO-konform:àKeineàexterneàAPI-Aufrufe

###à°àFrage-Qualität
-àAlleà280+àFragenàsindàwissenschaftlichàrecherchiert
-àOrientierungàanàvaldidiertenàScreening-Toolsà(PHQ-9,àDSM-5,àMBTI)
-àSensibleàThemenà(Suizid)àsindàhumanàformuliert
-àMehrersprachigeàStrukturà(derzeitàDeutsch)

##àWeitereàEntwicklungsmöglichkeiten

-à[à]àExportfunktionà(PDF-Report)
-à[à]àVergleichàvonàTest-ErgebnissenàüberàZeit
-à[à]àKategorie-basierteàFilter/Anzeige
-à[à]àWeitereàSprachen
-à[à]àMobileàAppàVersion
-à[à]àDetaillierteàEmpfehlungenànachàTest
-à[à]àVerknüpfungàmitàRessourcen/Hilfehotlines

##àKontaktà&àSupport

BeiàFragenàoderàVerbesserungsvorschlägenàwendenàSieàsichàbitteàanàdasàMedTechGuide-Team.

---

**Version:**à1.0à|à**Datum:**àFebruarà2026à|à**Status:**àProductionsbereit
