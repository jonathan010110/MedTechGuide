# 📁 Projektstruktur - MedTechGuide

## 🗂️ Übersicht

```
Projekt_25/
├── 📄 Dokumentation & Konfiguration
├── 🎯 Hauptseiten
├── 📁 css/              - Stylesheets
├── 📁 js/               - JavaScript
├── 📁 html/             - Einzelne Seiten
├── 📁 images/           - Bilder & Assets
├── 📁 data/             - Datenbank & Config
├── 📁 docs/             - Projektdokumentation
├── 📁 server/           - Backend (SPÖGL)
├── 📁 MedTechGuide/     - Externe Module
├── 📁 _archive/         - ARCHIV (alte Fix-Dateien)
└── 📁 _backups/         - BACKUPS (HTML Backups)
```

---

## 📄 Root-Level Dateien

### Hauptdateien
```
index.html              ← Startseite
spoegl.html            ← SPÖGL Produktseite
SPOEGL_QUICKSTART.md   ← Installation SPÖGL
SPOEGL_UEBERSICHT.md   ← Features SPÖGL
```

### Konfiguration
```
package.json           ← NPM Konfiguration
.gitignore             ← Git Ignore Rules
```

### Datenbank
```
db.json                ← Globale Datenbank (nicht mehr verwendet)
```

---

## 🎯 HTML Seiten (`/html/`)

Alle Inhalts-Seiten:

```
html/
├── bildgebung.html         ← Medizinische Bildgebung (mit 3D Viewer)
├── diabetes.html           ← Diabetes-Management
├── allergie.html           ← Allergie-Management
├── herz.html               ← Herz-Kreislauf
├── neurochips.html         ← Neurochips & BCIs
├── exoskelette.html        ← Exoskelette
├── genetik.html            ← Genetik & CRISPR
├── ki-diagnose.html        ← KI in der Diagnose
├── quellen.html            ← Quellenverzeichnis
├── quiz.html               ← Quiz (interaktiv)
├── self-tests.html         ← Selbst-Tests
├── zukunft.html            ← Zukünftige Technologien
├── score.html              ← Quiz Score/Ergebnisse
├── comparison.html         ← Vergleichstabellen
└── (Backups sind in _backups/html-backups/ archiviert)
```

---

## 🎨 CSS (`/css/`)

Stylesheets für jede Seite:

```
css/
├── style.css               ← Hauptstylesheet (für alle Seiten)
├── spoegl.css             ← SPÖGL Website Styling
├── quiz.css               ← Quiz Styling
├── self-tests.css         ← Self-Tests Styling
└── comparison.css         ← Comparison Styling
```

---

## ⚙️ JavaScript (`/js/`)

Funktionalität & Logik:

```
js/
├── script.js               ← Haupt-Script (alle Seiten)
├── spoegl.js              ← SPÖGL Dashboard (Fetch API, Animationen)
├── quiz.js                ← Quiz Logik
├── score.js               ← Score Berechnung
├── search.js              ← Globale Suchfunktion
├── self-tests-controller.js ← Self-Tests Verwaltung
│
├── 🎓 Spezielle Module
├── comparison-ui.js       ← Vergleichs-UI
├── comparison-module.js   ← Vergleichs-Logik
├── devices-database.js    ← Geräte-Datenbank
├── performance.js         ← Performance Tracking
│
├── 🧠 Test-Module
├── test-adhs.js           ← ADHS Test
├── test-depression.js     ← Depression Test
├── test-personality.js    ← Persönlichkeit Test
├── test-others.js         ← Weitere Tests
│
├── 🎬 3D-Visualisierung
├── bildgebung-3d.js       ← 3D Modelle Verwaltung
├── topic-3d-viewer.js     ← Three.js 3D Viewer (ES6 Module)
├── canvas-viewer.js       ← Fallback 2D Canvas Viewer
└── three-viewer-fallback.js ← Alternative Viewer
```

---

## 🖼️ Bilder (`/images/`)

Assets & Ressourcen:

```
images/
├── [optimierte Bilder für Inhalte]
├── [Icons & Grafiken]
└── [Produktfotos]
```

---

## 📊 Daten (`/data/`)

Konfiguration & Modelle:

```
data/
├── models/
│   ├── manifest.json       ← 3D-Modelle Konfiguration
│   ├── *.glb              ← 3D-Modelle (Binary)
│   ├── search-index.json  ← Suchindex
│   └── README.md          ← Modelle Doku
```

---

## 📚 Dokumentation (`/docs/`)

Projekt-Dokumentation:

```
docs/
├── QUICK_START.md              ← Schnellstart
├── project-description.md      ← Projektbeschreibung
├── STRUKTUR.md                 ← Diese Datei!
├── REFACTORING_DOKUMENTATION.md ← Refactoring Details
├── SELF_TESTS_DOKUMENTATION.md  ← Self-Tests Info
├── QUIZ_V2_CHANGELOG.md        ← Quiz Changelog
├── UPDATE_SUMMARY_V2.md        ← Update Zusammenfassung
├── V2_IMPLEMENTATION_COMPLETE.md ← V2 Status
└── UPGRADE_GUIDE.md            ← Upgrade Anleitung
```

---

## 🖥️ Backend Server (`/server/`)

Node.js + Express API für SPÖGL:

```
server/
├── server.js           ← Express.js API Server
├── db.json             ← Mock Health-Daten
├── package.json        ← NPM Dependencies
└── README.md           ← Backend Dokumentation
```

**Start:**
```bash
cd server
npm install
npm start
# → http://localhost:3000/data
```

---

## 🔐 Archive (`/_archive/`)

Alte/veraltete Dateien (nicht löschen, für Referenz):

```
_archive/
└── fix-scripts/
    ├── aggressive-fix.js
    ├── binary-fix.js
    ├── comprehensive-encoding-fix.js
    ├── comprehensive-fix.js
    ├── content-fix.js
    ├── deep-fix.js
    ├── final-pass.js
    ├── final-repair.js
    ├── fix-all.js
    ├── fix-encoding-advanced.js
    ├── fix-encoding-v2.js
    ├── fix-encoding-v3.js
    ├── fix-encoding.js
    ├── hex-fix.js
    ├── latin1-fix.js
    ├── master-fix.js
    ├── precision-fix.js
    ├── repair.js
    ├── repair-bytes.js
    ├── repair-damage.js
    ├── replacement-char-fix.js
    ├── surgical-fix.js
    ├── ultimate-repair.js
    └── test-3d-debug.html
```

**Grund:** Ursprüngliche Encoding-Fixes während Entwicklung

---

## 💾 Backups (`/_backups/`)

Automatische Backups von wichtigen Dateien:

```
_backups/
└── html-backups/
    ├── index.html.bak-encoding-1777373706673
    ├── index.html.bak-ps-1777381160,67831
    └── index.html.bak-ps-1777381178,2558
```

**Grund:** Sicherungen vor Encoding-Fixes

---

## 🔗 Externe Module (`/MedTechGuide/`)

Integration weiterer Systeme:

```
MedTechGuide/
├── [Externe Integrationen]
└── [Plugin-Module]
```

---

## 🚀 Wie funktioniert's?

### User navigiert zu:
```
http://localhost:8000/
    ↓
index.html (Startseite)
    ↓
Navigiert zu /html/*.html Seiten
    ↓
Lädt relevante CSS aus /css/
    ↓
Lädt relevante JS aus /js/
    ↓
Zeigt Inhalte & Interaktivität
```

### SPÖGL Backend Flow:
```
http://localhost:8000/spoegl.html
    ↓
js/spoegl.js (Fetch API)
    ↓
http://localhost:3000/data (Express Server)
    ↓
server/db.json (Mock-Daten)
    ↓
Animierte Dashboard Anzeige
```

---

## 📋 Dateigrößen-Übersicht

```
HTML         ~200 KB
CSS          ~150 KB
JavaScript   ~400 KB
Images       ~2-5 MB
Data/Models  ~20-50 MB
Server       ~30 KB

TOTAL        ~24-57 MB
```

---

## ✅ Struktur Best Practices

✅ **Organisiert nach Typ**
- css/ → Alle Styles
- js/ → Alle Scripts
- html/ → Alle Seiten
- images/ → Alle Assets

✅ **Klare Namenskonvention**
- `quiz.js` + `quiz.css` → Quiz Funktionalität
- `self-tests-controller.js` + `self-tests.css` → Tests
- `bildgebung-3d.js` → Bildgebung 3D

✅ **Archive & Backups getrennt**
- `_archive/` → Für Referenz (nicht im aktiven Code)
- `_backups/` → Für Notfallwiederherstellung

✅ **Server getrennt**
- `/server/` → Backend API
- Root → Frontend

---

## 🔍 Git & .gitignore

### Was wird committed:
```
✅ index.html, spoegl.html
✅ Alle /css/ Dateien
✅ Alle /js/ Dateien  (außer Test-Dateien)
✅ Alle /html/ Seiten
✅ /data/ (außer Backups)
✅ /docs/
✅ /server/
```

### Was wird NICHT committed:
```
❌ node_modules/
❌ _archive/        (alt)
❌ _backups/        (Backups)
❌ *.bak            (Temporär)
❌ .env             (Secrets)
❌ .DS_Store        (OS Files)
```

---

## 📝 Schnelle Navigation

| Was | Wo |
|-----|----|
| Startseite ändern | `index.html` |
| SPÖGL Seite | `spoegl.html` |
| Globale Styles | `css/style.css` |
| Globale Logik | `js/script.js` |
| Einzelne Seite (z.B. Diabetes) | `html/diabetes.html` |
| Diabetes Styles | `css/quiz.css` (shared) |
| Quiz Logik | `js/quiz.js` |
| 3D Modelle | `data/models/` |
| Backend API | `server/server.js` |
| Alle Dokumentation | `docs/` |

---

## 🛠️ Häufige Aufgaben

### Neue Seite hinzufügen
1. Erstelle `html/neue-seite.html`
2. Nutze CSS aus `css/style.css` (or neue spezifische CSS)
3. Nutze JS aus `js/script.js` (or neue spezifische JS)
4. Füge Link in `index.html` Navigation ein

### Neue 3D Modelle
1. Speichere `.glb` Datei in `data/models/`
2. Aktualisiere `data/models/manifest.json`
3. Nutze `js/bildgebung-3d.js` um zu laden

### Backend ändern
1. Bearbeite `server/server.js`
2. Aktualisiere `server/db.json` Mock-Daten
3. Restart: `npm start` in `/server`

---

## 💡 Wichtige Hinweise

⚠️ **Backups nicht löschen** - Sind für Notfallwiederherstellung wichtig
⚠️ **Archive studieren** - Zeigt alte Fixes für Referenz
⚠️ **node_modules nicht committen** - `npm install` reinstalliert
⚠️ **Server läuft auf Port 3000** - Frontend auf 8000
⚠️ **.gitignore respektieren** - Um Repo klein zu halten

---

## 🎉 Zusammenfassung

Die Struktur ist jetzt:
- ✅ **Organisiert** - Klare Separierung von Concerns
- ✅ **Skalierbar** - Leicht neue Seiten/Features hinzufügen
- ✅ **Wartbar** - Einfach zu finden und zu ändern
- ✅ **Git-Freundlich** - Nur relevante Dateien committen
- ✅ **Dokumentiert** - Diese Datei erklärt alles

**Viel Spaß mit der neuen Struktur!** 🚀
