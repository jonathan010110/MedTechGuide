#à°àMedTechGuideàProjekt-Struktur

##à—bersichtàderàOrdnerorganisation

```
c:\WMC\Projekt_25\
—
à°àStartdateienà(Root)
—ààààindex.htmlààààààààààààààààHAUPT-Einstiegspunkt
—ààààstyle.cssàààààààààààààààààHaupt-CSSà(1700+Zeilen)
—ààààscript.jsàààààààààààààààààHaupt-JavaScript
—ààààsearch.jsàààààààààààààààààNeueàSuchfunktion
—ààààsearch-index.jsonàààààààààSearch-Datenbank
—ààààperformance.jsààààààààààààLazyàLoadingà&àPerformance
—ààààREADME.md,àUPGRADE_GUIDE.md,àetc.
—
à°à/cssà(NeueàStyle-Dateien)
—ààààquiz.cssààààààààààààààààààQuiz-spezifischeàStyles
—àààà[zukünftigeàCSS...]
—
à°à/jsà(NeueàJavaScript-Module)
—ààààquiz.jsàààààààààààààààààààInteraktivesàQuiz-System
—àààà[zukünftigeàJS...]
—
à°à/htmlà(AlleàHTML-ContentàSeiten)
—ààààquiz.htmlàààààààààààààààààNeueàQuiz-Seite
—àààà[weitereàSeiten...]
—
à°à/dataà(Datenbankenà&àConfig)
—ààààquiz-database.jsonààààààààQuiz-Fragenà(optional)
—àààà[weitereàDaten...]
—
à°à/imagesà(Bilder)
—ààààdiabetes-1.jpg
—ààààallergie-1.jpg
—àààà[weitereàBilder...]
—
à°à/docsà(Dokumentation)
—ààààUPGRADE_GUIDE.mdààààààààààFeatures-Dokumentation
—ààààSTRUKTUR.mdàààààààààààààààDieseàDatei
—àààà[weitereàDocs...]
—
à°à/MedTechGuideà(Optional:àFachspezifischeràOrdner)
—àààà[ZusätzlicheàRessourcen]
—
à.git/à(Git-Repository)
```

---

##à°àNEUEàFEATURESà(abàv2.1)

###à1—¯¸£àQuiz-System
-à**Datei**:à`/js/quiz.js`à(550+àZeilen)
-à**Styling**:à`/css/quiz.css`à(+300àZeilen)
-à**Seite**:à`/html/quiz.html`
-à**Kategorien**:à4à(Diagnostik,àTherapie,àForschung,àZukunft)
-à**FragenàproàKategorie**:à5àmultiple-choiceàFragen
-à**Features**:
àà-àScore-Tracking
àà-àDetaillierteàErgebnisse
àà-àKategorie-WahlàDialog
àà-àProgress-Bar
àà-àResponsiveàDesign

###à2—¯¸£àVerbesserteàOrdnerstruktur
-à**CSS-Separation**:àHauptà+àModuleà(quiz.css)
-à**JS-Modularisierung**:àEinzelneàFunktionalitäten
-à**Content-Organisation**:àHTML-Dateienàinà`/html`
-à**Daten-Zentral**:à`/data`àfüràJSON-Dateien

---

##à°àWIEàNUTZEN

###àQuizàaufrufen:
1.àNavigation:àKlickà"Quiz"àLinkà(obenàrechts)
2.àODERàdirektàaufrufen:à`../html/quiz.html`
3.àKategorieàwählen
4.àQuizàbeantworten
5.àErgebnisàsehen

###àSuchfunktion:
```
—berallàaufàderàWebsite:
-àSearchàBoxàobenàrechts
-àTippeàeinenàBegriff
-àKlickàaufàErgebnisàànavigiertà+àhighlighted
```

###àNeueàCSSàladen:
```html
<!--àInàindex.htmlàHEADàoderàvorà</head>à-->
<linkàrel="stylesheet"àhref="css/quiz.css">
```

###àNeueàJSàladen:
```html
<!--àVorà</body>à-->
<scriptàsrc="js/quiz.js"></script>
```

---

##à°àDatei-Zuordnungen

|àDateià|àFunktionà|àGrö—eà|
|-------|----------|-------|
|à`index.html`à|àStartseiteà|à~200àZeilenà|
|à`style.css`à|àHaupt-Stylingà|à~1700àZeilenà|
|à`script.js`à|àHaupt-Funktionenà|à~740àZeilenà|
|à`search.js`à|àGlobaleàSucheà|à~250àZeilenà|
|à`search-index.json`à|àSuch-Datenbankà|à150àEinträgeà|
|à`performance.js`à|àOptimierungenà|à~150àZeilenà|
|à**`css/quiz.css`**à|àQuiz-Stylesà|à~350àZeilenà|
|à**`js/quiz.js`**à|àQuiz-Logikà|à~600àZeilenà|
|à**`html/quiz.html`**à|àQuiz-Seiteà|à~120àZeilenà|

---

##à°¯àNächsteàSchritteà(Optional)

###àStrukturàweiteràoptimieren:
-à[à]àAdmin-PanelàfüràQuiz-Verwaltung
-à[à]àQuiz-Ergebnisseàexportierenà(PDF)
-à[à]àZusätzlicheàQuizzesàhinzufügen
-à[à]àLeaderboard-System

###àWeitereàModule:
-à[à]à`/js/admin.js`à-àAdmin-funktionen
-à[à]à`/js/export.js`à-àExport-funktionen
-à[à]à`/js/analytics.js`à-àStatistiken
-à[à]à`/css/admin.css`à-àAdmin-UI

###àContentàerweitern:
-à[à]àMehràQuiz-Fragen
-à[à]àVideo-Tutorials
-à[à]àInteraktiveàDemos
-à[à]àGlossar-App

---

##ààChecklisteàfüràVSàCodeàSetup

-à[x]àOrdnerstrukturàerstellenà(`/css`,à`/js`,à`/html`,à`/data`,à`/docs`)
-à[x]àQuiz-Systemàimplementiert
-à[x]àSearch-Funktionàfunktioniert
-à[x]àMobile-Navigationàarbeitet
-à[x]àAccessibility-Featuresàvorhanden
-à[x]àPerformanceàoptimiert
-à[x]àDokumentationàaktualisiert

---

##à°àProjekt-Statistiken

-à**ZeilenàCode**:à~4000+
-à**CSS-Selektoren**:à200+
-à**JavaScript-Funktionen**:à80+
-à**HTML-Dateien**:à11
-à**Quiz-Fragen**:à20à(4àKategorienà—à5)
-à**Search-Einträge**:à150+

---

##à°àWichtigeàLinks

-à**Hauptseite**:à`../index.html`
-à**Quiz**:à`../html/quiz.html`
-à**Dokumentation**:à`../docs/UPGRADE_GUIDE.md`
-à**Quellen**:à`../quellen.html`

---

##à°àNotizenàfüràEntwickler

1.à**CSSàModularity**:àJedeàFeatureàhatàihreàeigenenàStyles
2.à**JSàModularity**:àQuizàistàunabhängigàinitialisierbar
3.à**Responsive**:àAlleàKomponentenàmobil-optimiert
4.à**Accessibility**:àWCAGàAAAàStandards
5.à**NoàDependencies**:àVanillaàJS/CSS,àkeineàexternenàLibs

---

**LetztesàUpdate**:à24.02.2026àà
**Version**:à2.1à(Quiz-Release)àà
**Autor**:àAI-AssistedàDevelopment

