#àProjekt:àMedTechGuideààMedizinischeàGeräteàverständlichàerklärt

##àProjektidee

MedTechGuideàistàeineàinteraktiveàWebsite,àdieà**medizintechnischeàGeräte**àübersichtlich,àverständlichàundàansprechendàfüràLaienàpräsentiert.àVonàBlutzuckermessgerätenàüberàEKG-SystemeàbisàhinàzuàNeurochipsàundàKI-gestütztenàDiagnosewerkzeugenààdasàProjektàdecktàeinàbreitesàSpektrumàmoderneràMedizintechnikàabàundàerklärtàFunktion,àEinsatzgebietàsowieàVor-àundàNachteileàjedesàGeräts.

##àProjektstatus

DasàProjektàistàweitgehendàfertiggestellt.àAlleàgeplantenàKernfunktionenàsindàimplementiert.

##àUmgesetzteàFunktionen

###àKategorieseiten

JedeàKategorieàhatàeineàeigene,àvollständigàausgebauteàHTML-Seite:

-à**Diabetes**ààBlutzuckermessgeräte,àInsulinpumpen,àCGM-Systeme
-à**Allergie**ààAllergie-Testgeräteàundà-Therapiehilfen
-à**Herz-Kreislauf**ààEKG,àBlutdruckmessung,àHerzschrittmacher
-à**Bildgebung**ààMRT,àCT,àUltraschall,àRöntgen
-à**Genetik**ààGensequenzierung,àDNA-Diagnostik
-à**Neurochips**ààGehirn-Computer-Schnittstellen,àneuronaleàImplantate
-à**Exoskelette**ààRehabilitationsroboteràundàBewegungsunterstützung
-à**KI-Diagnose**ààKI-gestützteàBildanalyseàundàDiagnostiksysteme
-à**Zukunftstechnologien**ààNanobots,àSmartàImplants,àdigitaleàZwillinge
-à**Selbsttests**ààHeim-DiagnosetestsàundàWearables

###àVergleichsmodusà(`comparison.html`)

InteraktiveràGeräte-Vergleichàmit:

-àSide-by-Side-AuswahlàvonàzweiàGeräten
-àBewertungsbalkenàfüràKennzahlenà(Genauigkeit,àKosten,àBenutzerfreundlichkeitàu.a.)
-àVisuelleàAmpeldarstellungàfüràEignungàinàverschiedenenàSzenarien
-àModularàaufgebautàviaà`comparison-module.js`àundà`comparison-ui.js`

###àSucheà&àFilter

-àVolltext-SuchfunktionàüberàalleàGeräteà(`search.js`,à`search-index.json`)
-àFilterungànachàKategorieàviaàJavaScriptà(`script.js`)

###àQuellenà&àGlossar

-àEigeneàQuellenseiteà(`quellen.html`)àmitàVerweisenàaufàoffizielleàHersteller-àundàGesundheitsportale

##àTechnologiestack

|àTechnologieàààààààààààààààààààààààààà|àEinsatzàààààààààààààààààààààààààààààààààààààààààààààà|
|à------------------------------------à|à----------------------------------------------------à|
|àHTML5àààààààààààààààààààààààààààààààà|àStrukturàalleràSeitenàààààààààààààààààààààààààààààààà|
|àCSS3à(`style.css`,à`comparison.css`)à|àLayout,àresponsivesàDesign,àmedizinischesàFarbschemaà|
|àJavaScriptà(ES6+)àààààààààààààààààààà|àSuche,àFilter,àVergleichslogik,àAnimationenàààààààààà|
|àJSONà(`search-index.json`)ààààààààààà|àSuchindexàfüràalleàGeräteàààààààààààààààààààààààààààà|

##àProjektstruktur

```
Projekt_25/
àindex.htmlàààààààààààààà#àStartseite
à[kategorie].htmlàààààààà#àKategorieseitenà(10àStück)
àcomparison.htmlààààààààà#àGerätevergleich
àquellen.htmlàààààààààààà#àQuellenverzeichnis
àstyle.cssààààààààààààààà#àGlobalesàStylesheet
àscript.jsààààààààààààààà#àHauptlogikà(Suche,àFilter)
àsearch.jsààààààààààààààà#àSuchmodul
àsearch-index.jsonààààààà#àSuchindexàalleràGeräte
àcss/
—ààààcomparison.cssàààààà#àStylesàfüràdenàVergleichsmodus
àjs/
—ààààcomparison-module.js
—ààààcomparison-ui.js
àdocs/ààààààààààààààààààà#àDokumentation
```

##àDesign

-àRuhiges,àseriösesàFarbschemaà(Blau/Wei—/Grau)
-àResponsivesàLayoutàfüràDesktopàundàMobile
-àKlareàTypografieàfüràmedizinisch-technischeàInhalte

##àMöglicheàErweiterungen

-àDarkàMode
-àFarblicheàMarkierungànachàRisikoklasseà(z.B.àISOà14971)
-àInteraktivesàGlossaràmitàmedizinischenàFachbegriffen
-àMehrsprachigkeità(Deutschà/àEnglisch)

##àFazit

MedTechGuideàdemonstriertàdenàkompetentenàEinsatzàvonàHTML,àCSSàundàJavaScriptàzuràErstellungàeineràstrukturierten,àinformativenàundàinteraktivenàWebsite.àDasàProjektàzeigtànichtànuràtechnischesàKnow-how,àsondernàauchàdieàFähigkeit,àkomplexeàmedizinischeàThemenàverständlichàaufzubereitenàundànutzerfreundlichàzuàpräsentieren.
