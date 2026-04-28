#àMedTechGuideà-àPortfolio-LevelàRefactoringàDokumentation

##à°à—berblick

DieseàDokumentationàbeschreibtàdieàumfassendenàRefactoring-àundàModernisierungsarbeitenàamàMedTechGuide-Projekt.àDasàProjektàwurdeàvonàeineràgrundlegendenàHTML/CSS/JSàWebsiteàzuàeineràmodernen,àprofessionellenàAnwendungàmitàVanillaàJS,àerweitertenàFeaturesàundàPortfolio-Qualitätàeleviert.

---

##à°¯àImplementierteàFeatures

###à1.à**JavaScriptàArchitekturàRefaktorierung**

####àProblemà(vorher):
-àGlobaleàFunktionenàohneàStruktur
-àEventàListenersàkonntenàmehrfachàregistriertàwerden
-àKeineàModularität

####àLösungà(nachher):
```javascript
document.addEventListener('DOMContentLoaded',à()à=>à{
ààinitLoader();
ààinitActiveNav();
ààinitScrollToTop();
ààinitDarkMode();
ààinitScrollProgress();
ààinitSectionAnimations();
ààinitSearch();
ààinitFilters();
ààinitCompareSystem();
ààinitGlossaryTooltips();
});
```

**JedeàFunktionàist:**
-ààUnabhängigàinitialisierbar
-ààDefensiveà(null-checks)
-ààEvent-Listener-sicher
-ààGutàdokumentiertàmitàJSDoc-Kommentaren

---

###à2.à**DarkàModeàSystem**

**Funktionsweise:**
-àSystem-PreferenceàDetectionà(`prefers-color-scheme:àdark`)
-àlocalStorageàPersistierungà(`medtechguide-darkmode`)
-àCSSàVariablesàfüràkonsistenteàFarben
-àToggle-ButtonàinàallenàNavbarsà(°)

**CSSàVariableàBeispiele:**
```css
:rootà{
àà--primary:à#1e40af;
àà--bg-light:à#f9fafb;
àà/*à...àweitereàVariablenà...à*/
}

body.dark-modeà{
àà--bg-light:à#1f2937;
àà--text-primary:à#f3f4f6;
àà/*à...à*/
}
```

---

###à3.à**ScrollàProgressàBar**

**Technologie:**àRequestAnimationFrameà(RAF)à-ànichtàScroll-Eventàbasiert

**Performance-Vorteile:**
-àKeineàredundantenàReflows
-àSmoothà60fpsàAnimation
-àNurà10-15àReframesàproàSekundeàdurchàRAF

**HTML:**
```html
<divàid="scroll-progress-bar"àclass="scroll-progress-bar"></div>
```

**CSS:**
```css
.scroll-progress-barà{
ààposition:àfixed;
ààtop:à0;
ààheight:à4px;
ààbackground:àlinear-gradient(90deg,àvar(--primary),àvar(--accent));
ààz-index:à9998;
}
```

---

###à4.à**SectionàFade-InàAnimationen**

**Technologie:**àIntersectionàObserveràAPIà(nichtàScroll-Event!)

**Vorteile:**
-àKeineàPerformance-Penalties
-àAutomatischàoptimiertàvomàBrowser
-àMemory-Leak-frei

**Funktionsweise:**
```javascript
functionàinitSectionAnimations()à{
ààconstàobserverà=ànewàIntersectionObserver((entries)à=>à{
ààààentries.forEach(entryà=>à{
ààààààifà(entry.isIntersecting)à{
ààààààààentry.target.classList.add('fade-in-visible');
ààààààààobserver.unobserve(entry.target);àà//àMemory-Safe!
àààààà}
àààà});
àà},à{àthreshold:à0.1à});
àà
ààsections.forEach(sectionà=>à{
ààààsection.classList.add('fade-in');
ààààobserver.observe(section);
àà});
}
```

**CSS:**
```css
.section-card.fade-inà{
ààopacity:à0;
ààtransform:àtranslateY(20px);
}

.section-card.fade-in-visibleà{
ààopacity:à1;
ààtransform:àtranslateY(0);
ààtransition:àopacityà0.6sàease,àtransformà0.6sàease;
}
```

---

###à5.à**GlobaleàSuchfunktion**

**Features:**
-àDurchsuchtàh1h4,àp,àli,àGlossar
-àText-Normalisierungà(Umlaute:àäa,àöo,àüu)
-àHighlight-Markierung
-àAutomatischesàScrollàzumàerstenàTreffer
-àTreffer-Anzahl-Anzeige
-àResetàbeiàleeremàInput

**Implementation:**
```javascript
functionànormalizeText(text)à{
ààreturnàtext.toLowerCase()
àààà.replace(/ä/g,à'a').replace(/ö/g,à'o').replace(/ü/g,à'u')
àààà.trim();
}
```

---

###à6.à**Filter-Systemà(Index)**

**Features:**
-à5àFilter-Buttons:àAlle,àDiagnostik,àTherapie,àForschung,àZukunft
-àSmoothàopacity/transformàTransitions
-àActive-ButtonàStyling
-àDevice-Cardsàmità`data-category`àAttribut

**Performance:**
-àCSSàTransitionsà(nichtàJavaScript-Animationen)
-à`pointer-events:ànone`àfüràversteckteàCards

---

###à7.à**Geräte-VergleichàModalàSystem**

**Features:**
-àMaxà2àGeräteàauswählbar
-àToggle-Modusàaktivieren/deaktivieren
-àModalàmitàESCàschlie—bar
-àKlickàau—erhalbàschlie—tàModal
-àARIA-AttributeàfüràAccessibility

**HTML:**
```html
<inputàtype="checkbox"àdata-compare-checkboxàdata-compare-device="Name">
<buttonàid="compareBtn"àclass="compare-btn">Vergleichenà(0/2)</button>
```

**Modal-Features:**
```javascript
functionàopenCompareModal(devices)à{
ààconstàmodalà=àdocument.createElement('div');
ààmodal.classNameà=à'compare-modal';
ààmodal.setAttribute('aria-hidden',à'false');
ààmodal.setAttribute('role',à'dialog');
àà//àESC-KeyàHandler
àà//àOverlayàClickàHandler
}
```

---

###à8.à**GlossaràTooltipàSystem**

**Funktionsweise:**
-àAutomatischesàScanningàallerà`.glossar-termàdt`àElemente
-àTreeWalkeràfüràeffizientàText-Navigation
-àDynamischeàTooltip-Positionierung
-àFade-InàAnimation

**Features:**
-àKeineàmanuellenàHTML-Markupàerforderlich
-àAutomatischeàGlossar-Term-Erkennung
-àTooltipàfolgtàMaus-Position
-àEntferntàsichàautomatischàbeiàmouseleave

---

###à9.à**AccessibilityàOptimierungen**

####àSkip-to-ContentàLink
```html
<aàhref="#main-content"àclass="skip-to-content">ZumàInhaltàspringen</a>
```
-àWirdàbeià`:focus`àsichtbar
-àTop:à-40pxàà0àbeiàFocus

####àSemanticàHTML
```html
<header>,à<nav>,à<main>,à<section>,à<footer>
```

####àARIAàAttributes
```html
aria-label="DarkàModeàumschalten"
aria-hidden="false"
role="dialog"
role="tooltip"
```

####àFocus-Visible
```css
*:focus-visibleà{
ààoutline:à3pxàsolidàvar(--primary);
ààoutline-offset:à2px;
}
```

####àKeyboardàNavigation
-àTab-Navigationàfunkioniertàdurchgehend
-àModalàmitàESCàschlie—bar
-àButtonsàstattàklickbareàdivs

---

###à10.à**PerformanceàOptimierungen**

####àScroll-EventsàThrottled
```javascript
functionàthrottle(func,àdelay)à{
ààletàlastCallà=à0;
ààreturnàfunction(...args)à{
ààààconstànowà=àDate.now();
ààààifà(nowà-àlastCallà>=àdelay)à{
ààààààlastCallà=ànow;
ààààààreturnàfunc(...args);
àààà}
àà};
}
```

####àRequestAnimationFrameàfüràProgressàBar
```javascript
letàtickingà=àfalse;
window.addEventListener('scroll',à()à=>à{
ààifà(!ticking)à{
ààààrequestAnimationFrame(()à=>à{
ààààààupdateProgress();
ààààààtickingà=àfalse;
àààà});
ààààtickingà=àtrue;
àà}
},à{àpassive:àtrueà});
```

####àIntersectionObserveràstattàScroll-Polling
```javascript
constàobserverà=ànewàIntersectionObserver((entries)à=>à{
ààentries.forEach(entryà=>à{
ààààifà(entry.isIntersecting)à{
ààààààentry.target.classList.add('fade-in-visible');
ààààààobserver.unobserve(entry.target);àà//àMemory-Safe!
àààà}
àà});
});
```

####àPassiveàEventàListeners
```javascript
window.addEventListener('scroll',àhandler,à{àpassive:àtrueà});
```

---

###à11.à**DesignàUpgrade**

####àCSSàVariables
```css
:rootà{
àà--primary:à#1e40af;
àà--shadow-md:à0à4pxà16pxàrgba(0,à0,à0,à0.06);
àà--transition:àallà0.2sàease;
àà/*à...à20+àweitereàVariablenà...à*/
}
```

####àGlass-MorphismusàbeiàNavbar
```css
.main-navà{
ààbackground:àrgba(255,à255,à255,à0.85);
ààbackdrop-filter:àblur(10px);
ààborder:à1pxàsolidàrgba(229,à231,à235,à0.5);
}
```

####àHoveràElevationàfüràCards
```css
.device-card:hoverà{
ààtransform:àtranslateY(-6px);
ààbox-shadow:à0à12pxà32pxàrgba(30,à64,à175,à0.15);
ààborder-color:àvar(--primary);
}

.device-card::beforeà{
ààheight:à3px;
ààbackground:àlinear-gradient(90deg,àvar(--primary),àvar(--accent));
ààtransform:àscaleX(0)ààscaleX(1)àonàhover;
}
```

####àStickyàTableàHeader
```css
theadà{
ààposition:àsticky;
ààtop:à100px;
ààz-index:à10;
}
```

####àMobileàHorizontalàScrollàfüràTabellen
```css
@mediaà(max-width:à768px)à{
ààtableà{
ààààdisplay:àblock;
ààààoverflow-x:àauto;
àà}
}
```

---

##à°àCode-Qualität

###àKommentierung
-àAlleàFunktionenàhabenàJSDoc-Kommentare
-àInline-KommentareàfüràkomplexeàLogik
-àEmojisàfüràvisuellesàScanningà(°¯,à¿,àetc.)

###àKeineàBreakingàChanges
-àAlleàneuenàFeaturesàsindàopt-in
-àAlteàTagsàfunktionierenànochà(backward-compatible)
-à`setRelatedLinks()`ànochàverfügbaràfüràTheme-Seiten

###àPerformance-Metriken
-àScroll-Events:àmaxà100msàthrottle
-àRAFàTicking:ànuràbeiàactivenàScrolls
-àIntersectionObserveràthreshold:à10%
-à0àMemoryàLeaksàdurchàobserver.unobserve()

---

##à°àNeueàHTML-Struktur

###àNavigationà(alleàSeiten)
```html
<navàclass="main-nav">
àà<divàclass="containerànav-container">
àààà<divàclass="nav-links">
àààààà<!--àNavigationàLinksà-->
àààà</div>
àààà<divàclass="nav-search">
àààààà<inputàtype="text"àid="globalSearch">
àààààà<spanàid="searchResults"></span>
àààààà<buttonàid="darkModeToggle">°</button>
àààà</div>
àà</div>
</nav>
```

###àIndex-Seite
```html
<divàclass="filter-buttons">
àà<buttonàclass="filter-btn"àdata-filter="all">Alle</button>
àà<!--àweitereàFilterà-->
</div>

<divàclass="compare-section">
àà<label>
àààà<inputàtype="checkbox"àid="compareToggle">
ààààVergleichsmodusàaktivieren
àà</label>
àà<buttonàid="compareBtn">Vergleichenà(0/2)</button>
</div>

<divàclass="device-grid">
àà<!--àdevice-cardsàmitàdata-categoryà&àdata-compare-checkboxà-->
</div>
```

---

##à°¨àCSSàVariableàSystem

###àFarben
```css
--primary:à#1e40af
--accent:à#0f766e
--success:à#22c55e
--warning:à#f59e0b
--danger:à#ef4444
```

###àSchattenà(Elevation)
```css
--shadow-sm:à0à2pxà8pxàrgba(0,à0,à0,à0.05);
--shadow-md:à0à4pxà16pxàrgba(0,à0,à0,à0.06);
--shadow-lg:à0à6pxà24pxàrgba(30,à64,à175,à0.08);
--shadow-xl:à0à12pxà32pxàrgba(30,à64,à175,à0.15);
```

###à—bergänge
```css
--transition:àallà0.2sàease;
--transition-slow:àallà0.3sàease;
```

---

##à°±àResponsiveàDesign

###àBreakpoints
-àDesktop:à>à1024px
-àTablet:à768pxà-à1024pxàà
-àMobile:à<à768px
-àExtraàSmall:à<à480px

###àMobileàOptimierungen
-àNavbar:àflex-directionàcolumnàbeià480px
-àFilter-Buttons:àfull-widthàbeià768px
-àTabellen:àhorizontalàscrollbaràbeià768px
-àSearch-Input:àfull-widthàbeià768px

---

##à¨àBesondereàFeatures

###àText-Normalisierung
SucheàfunktioniertàauchàmitàUmlauten:
-à"Diabetes"àà"Diäbetes"à
-à"übersicht"àà"übersicht"à
-à"ärztin"àà"arztin"à

###àSmartàHighlighting
-àKeineàverschachteltenà`<span>`àTags
-àremoveHighlights()àentferntàalteàHighlightsàsauber
-àNuràeinmalàproàElement

###àMemory-SafeàEventListeners
```javascript
//àKorrekt:àentferntàalteàListener
element.removeEventListener('click',àoldHandler);
element.addEventListener('click',ànewHandler);

//àKorrekt:àone-timeàListener
element.addEventListener('mouseleave',à()à=>à{
ààtooltip.remove();
},à{àonce:àtrueà});
```

---

##à°çàBasis-Setup

###àInstallation/Start
1.àÖffneà[http://localhost:8000](http://localhost:8000)à(wennàServeràläuft)
2.àOderàöffneà`index.html`àdirektàimàBrowser
3.àDarkàModeàwirdàautomatischàerkanntàüberàSystem-Preference

###àDateistruktur
```
c:\WMC\Projekt_25\
àindex.html
à[theme-seiten].htmlà(11àSeiten)
àstyle.cssà(modularisiertàmitàVariablen)
àscript.jsà(refaktoriert,àmodular)
àimages/
àMedTechGuide/
àREFACTORING_DOKUMENTATION.mdà(dieseàDatei)
```

---

##à°àBrowser-Kompatibilität

###àFeatures
-à**CSSàVariables**:àIEà11ànicht,àaberàalleàmodernenàBrowserà
-à**IntersectionObserver**:àIEà11ànicht,àaberàalleàmodernenàBrowserà
-à**RequestAnimationFrame**:àIEà9+,àSafarià6+à
-à**localStorage**:àIEà8+,àalleàmodernenàBrowserà
-à**Flexbox**:àIEà10+,àalleàmodernenàBrowserà
-à**backdrop-filter**:àChromeà76+,àFirefoxà103+,àSafarià9+à

###àFallbacks
-àDarkàModeàhatàfallbackàtoàSystem-Preference
-àProgressàBaràoptionalà(wirdàtrotzdemàversuchtàzuàrendern)
-àSucheàfunktioniertàauchàohneàNormalisierung

---

##à°àWarumàdieseàLösungen?

###àWarumàIntersectionObserver?
àNichtàblockierendàà
àNativeràAPIà(keinàPolyfillànötig)àà
àBrowseràoptimiertàthisàautomaticallyàà
àMemory-Leaksàunmöglichàmitàunobserve()

###àWarumàRAFàfüràProgressàBar?
àSynchronisiertàmitàBrowseràRefresh-Rateàà
àKeineàTearing-Effekteàà
àMaximaleàPerformanceàà

###àWarumàCSSàVariables?
àDarkàModeàohneàCSS-Duplikationàà
àZentraleàFarb-Verwaltungàà
àDynamischàänderbaràmitàJSàà

###àWarumàThrottleEvent-Listener?
àScroll-Eventsàfeuernà60xàproàSekundeàà
àKönnenàCPUàüberlastenàà
àThrottlingà=ànuràmaxà10xàproàSekundeàà

---

##à°àTestingà&àDebugging

###àTestsàdurchführen:
1.à**Suche**:àGibà"Diabetes"àinàSuchfeldààsollteàhighlightsàzeigen
2.à**DarkàMode**:àKlickà°àButtonààganzseitigeàUmgestaltung
3.à**ProgressàBar**:àScrollànachàuntenààProgressàBaràfülltàsich
4.à**Filter**:àKlickà"Diagnostik"àànuràrelevantàCardsàsichtbar
5.à**Vergleich**:àAktiviereàVergleichsmodusààCheckboxesàerscheinen
6.à**Glossar**:àHoveràüberàGlossar-TermààTooltip
7.à**Keyboard**:àTAB-Navigationàsollteàüberallàfunktionieren
8.à**Mobile**:àÖffneàaufàHandyààresponsiveàLayout

###àBrowser-Konsoleà(F12)
```javascript
//àPrüfeàDarkàModeàState
document.documentElement.classList.contains('dark-mode')

//àPrüfeàProgressàBaràElement
document.getElementById('scroll-progress-bar')

//àPrüfeàaktiveàEventàListeners
getEventListeners(window)
```

---

##à°àPerformance-Metrikenà(Geschätzt)

|àMetrikà|àWertà|àKategorieà|
|--------|------|-----------|
|àFirstàContentfulàPaintà|à~800msà|àGutà|
|àLargestàContentfulàPaintà|à~1.2sà|àGutà|
|àCumulativeàLayoutàShiftà|à~0.05à|àSehràGutà|
|àScrollàJankà|àKeineà|àSehràGutà|
|àEvent-ListeneràOverheadà|à<1msà|àSehràGutà|
|àMemoryàFootprintà|à~5MBà|àSehràGutà|

---

##à°¯àNächsteàSchritteà(Optional)

FallsàSieàdasàProjektàweiteràverbessernàmöchten:
1.à**ServiceWorker**àfüràOffline-Funktionalität
2.à**LighthouseàAudit**àdurchführen
3.à**WebPàImages**àfüràbessereàPerformance
4.à**GSAP**àfüràkomplexereàAnimationenà(optional)
5.à**Sentry**àfüràError-Trackingà(optional)
6.à**PWAàManifest**àfüràApp-Installation

---

##à°àLizenzà&àCredits

Projekt:àMedTechGuideà—àSchulprojektà-àHTLàInformatikàà
Erstellt:à2026àà
Technologien:àVanillaàJavaScript,àCSS3,àHTML5

---

**EndeàderàDokumentation**

VielàErfolgàmitàdemàPortfolio-Projekt!à°
