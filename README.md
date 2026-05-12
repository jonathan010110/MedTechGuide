# 🌟 MedTechGuide - Projekt Repository

**Modernes Bildungsprojekt über Medizintechnik, Innovation und Future Healthcare**

---

## 🚀 Quick Start

### Option 1: Website öffnen (einfach)
```bash
# Terminal im Projekt-Root
python -m http.server 8000
# Oder: npx http-server
```
Öffne: `http://localhost:8000`

### Option 2: Mit SPÖGL Backend
```bash
# Terminal 1: Frontend
python -m http.server 8000

# Terminal 2: Backend
cd server
npm install
npm start
```
Öffne: `http://localhost:8000/spoegl.html`

---

## 📁 Projektstruktur

```
ROOT/
├── 🎯 HTML Seiten
│   ├── index.html              (Startseite)
│   ├── spoegl.html             (SPÖGL Smartwatch)
│   └── html/*.html             (Inhaltsseiten)
│
├── 🎨 Styling
│   └── css/                    (Alle Stylesheets)
│
├── ⚙️  Logik
│   └── js/                     (Alle Scripts)
│
├── 🖼️  Assets
│   ├── images/                 (Bilder)
│   └── data/models/            (3D Modelle)
│
├── 🖥️  Backend
│   └── server/                 (Express API)
│
├── 📚 Dokumentation
│   ├── docs/                   (Projekt-Docs)
│   ├── STRUKTUR.md             (Diese Datei!)
│   └── README.md               (Sie lesen das gerade)
│
├── 🔐 Archiv
│   ├── _archive/               (Alte Fix-Dateien)
│   └── _backups/               (Backups)
│
└── ⚙️  Config
    ├── package.json
    ├── .gitignore
    └── (weitere Config)
```

👉 **Detaillierte Struktur:** siehe `STRUKTUR.md`

---

## 📖 Dokumentation

| Datei | Inhalt |
|-------|--------|
| `STRUKTUR.md` | **Komplette Projektstruktur** |
| `SPOEGL_QUICKSTART.md` | SPÖGL Installation |
| `SPOEGL_UEBERSICHT.md` | SPÖGL Features |
| `docs/*.md` | Weitere Dokumentation |

---

## 🎯 Main Pages

| Seite | URL | Inhalt |
|-------|-----|--------|
| Startseite | `/` | Übersicht aller Themen |
| SPÖGL | `/spoegl.html` | Premium Smartwatch |
| Diabetes | `/html/diabetes.html` | CGM & Insulinpumpen |
| Bildgebung | `/html/bildgebung.html` | CT, MRT, Ultraschall |
| Quiz | `/html/quiz.html` | Interaktives Quiz |
| Tests | `/html/self-tests.html` | Selbst-Tests |
| Quellen | `/html/quellen.html` | Quellenverzeichnis |

→ **Alle Seiten in `html/` Ordner**

---

## ⚡ Features

### 🌐 Frontend
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Dark Mode + moderne UI
- ✅ Interaktive Quiz & Tests
- ✅ 3D Bildgebungs-Viewer (Canvas)
- ✅ Smooth Animationen & Transitions
- ✅ Globale Suchfunktion

### 📊 SPÖGL Dashboard
- ✅ Echtzeit Health-Metriken
- ✅ Animierte Charts & Graphs
- ✅ Sleep Analysis
- ✅ Heart Rate Zones
- ✅ Sports Tracking
- ✅ Cloud Integration Erklärung

### 🖥️ Backend (SPÖGL)
- ✅ Express.js API Server
- ✅ REST Endpoints für Health-Daten
- ✅ CORS Support
- ✅ Mock-Datenbank (JSON)
- ✅ Error Handling

---

## 🔧 Technologie-Stack

### Frontend
```
HTML5 + CSS3 + JavaScript (Vanilla)
Canvas API für 3D Visualisierung
SVG für Icons & Graphics
Fetch API für Daten-Laden
```

### Backend (Optional)
```
Node.js + Express.js
CORS Middleware
JSON File Storage
```

### Tools & Deployment
```
Python SimpleHTTPServer oder npx http-server
Node.js für Backend
Git für Versionskontrolle
```

---

## 📊 Statistiken

```
HTML Dateien      ~15
CSS Dateien       ~5
JS Dateien        ~15+
Bilder            ~50+
3D Modelle        ~8 GLB Dateien
Dokumente         ~10 MD Dateien

Gesamtgröße       ~40-60 MB
Gzip komprimiert  ~10-15 MB
```

---

## 🎓 Inhalts-Themen

Projekt behandelt diese MedTech-Bereiche:

- 📊 **Diabetes Management** - CGM Sensoren, Insulinpumpen
- 💊 **Allergie Behandlung** - Diagnostik & Therapie
- ❤️ **Herz-Kreislauf** - EKG, Schrittmacher, ICD
- 🖼️ **Medizinische Bildgebung** - Röntgen, CT, MRT, Ultraschall
- 🧠 **Neurochips** - Brain-Computer Interfaces
- 🤖 **Exoskelette** - Tragbare Robotik
- 🧬 **Genetik** - CRISPR & DNA Sequenzierung
- 🤖 **KI in der Diagnose** - Machine Learning
- 🚀 **Zukunftsperspektiven** - Trends & Visionen

---

## 🚀 Deployment

### Lokal testen
```bash
python -m http.server 8000
# Öffne http://localhost:8000
```

### Production Deployment
```bash
# Frontend auf Web Server (Nginx, Apache, etc.)
scp -r index.html css/ js/ html/ images/ data/ user@server:/var/www/

# Backend auf Node Server
ssh user@server
cd /var/www/spoegl/server
npm install
pm2 start server.js
```

---

## 📝 Wichtige Dateien

### Muss editieren
```
index.html         ← Navigation & Startseite
html/*.html        ← Inhaltsseiten
css/style.css      ← Globale Styles
js/script.js       ← Globale Logik
```

### Nicht editieren
```
_archive/          ← Alte Fix-Dateien (Referenz)
_backups/          ← Backups (Sicherung)
node_modules/      ← Auto-generiert von npm
```

---

## 🆘 Troubleshooting

### Problem: "Cannot find index.html"
**Lösung:** Stelle sicher, dass http-server vom Root-Ordner läuft
```bash
cd /path/to/Projekt_25
python -m http.server 8000
```

### Problem: SPÖGL Daten werden nicht geladen
**Lösung:** Backend läuft nicht
```bash
cd server
npm install
npm start
```

### Problem: 3D Viewer wird nicht angezeigt
**Lösung:** Canvas Fallback funktioniert, aber überprüfe Browser Console (F12)

### Problem: Styles sehen merkwürdig aus
**Lösung:** 
1. Hard Refresh (Ctrl+Shift+R)
2. Cache löschen
3. Browser Zoom auf 100%

---

## 👥 Beiträge & Entwicklung

Die Projekt-Struktur ist jetzt optimiert für:
- ✅ Neue Features hinzufügen
- ✅ Inhalte erweitern
- ✅ Bugs fixen
- ✅ Performance optimieren

Siehe `STRUKTUR.md` für detaillierte Richtlinien.

---

## 📜 Lizenz

MIT License - Frei zu nutzen und modifizieren!

---

## 📞 Support

1. Siehe `docs/` für Dokumentation
2. Schau `STRUKTUR.md` für Übersicht
3. Check Browser Console (F12) für Errors
4. Lese die Kommentare im Code

---

## 🎯 Next Steps

- [ ] Neue Seite hinzufügen
- [ ] Backend erweitern
- [ ] Mobile App bauen
- [ ] SEO optimieren
- [ ] Analytics integrieren
- [ ] Benutzer Auth hinzufügen

---

**Made with ❤️ für MedTechGuide**

Versioniert: 2.0 | Struktur optimiert: Mai 2026
