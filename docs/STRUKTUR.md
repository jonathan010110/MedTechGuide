# 📁 MedTechGuide Projekt-Struktur

## Übersicht der Ordnerorganisation

```
c:\WMC\Projekt_25\
│
├── 📄 Startdateien (Root)
│   ├── index.html               ← HAUPT-Einstiegspunkt
│   ├── style.css                ← Haupt-CSS (1700+Zeilen)
│   ├── script.js                ← Haupt-JavaScript
│   ├── search.js                ← Neue Suchfunktion
│   ├── search-index.json        ← Search-Datenbank
│   ├── performance.js           ← Lazy Loading & Performance
│   └── README.md, UPGRADE_GUIDE.md, etc.
│
├── 📁 /css (Neue Style-Dateien)
│   ├── quiz.css                 ← Quiz-spezifische Styles
│   └── [zukünftige CSS...]
│
├── 📁 /js (Neue JavaScript-Module)
│   ├── quiz.js                  ← Interaktives Quiz-System
│   └── [zukünftige JS...]
│
├── 📁 /html (Alle HTML-Content Seiten)
│   ├── quiz.html                ← Neue Quiz-Seite
│   └── [weitere Seiten...]
│
├── 📁 /data (Datenbanken & Config)
│   ├── quiz-database.json       ← Quiz-Fragen (optional)
│   └── [weitere Daten...]
│
├── 📁 /images (Bilder)
│   ├── diabetes-1.jpg
│   ├── allergie-1.jpg
│   └── [weitere Bilder...]
│
├── 📁 /docs (Dokumentation)
│   ├── UPGRADE_GUIDE.md         ← Features-Dokumentation
│   ├── STRUKTUR.md              ← Diese Datei
│   └── [weitere Docs...]
│
├── 📁 /MedTechGuide (Optional: Fachspezifischer Ordner)
│   └── [Zusätzliche Ressourcen]
│
└── .git/ (Git-Repository)
```

---

## 🆕 NEUE FEATURES (ab v2.1)

### 1️⃣ Quiz-System
- **Datei**: `/js/quiz.js` (550+ Zeilen)
- **Styling**: `/css/quiz.css` (+300 Zeilen)
- **Seite**: `/html/quiz.html`
- **Kategorien**: 4 (Diagnostik, Therapie, Forschung, Zukunft)
- **Fragen pro Kategorie**: 5 multiple-choice Fragen
- **Features**:
  - Score-Tracking
  - Detaillierte Ergebnisse
  - Kategorie-Wahl Dialog
  - Progress-Bar
  - Responsive Design

### 2️⃣ Verbesserte Ordnerstruktur
- **CSS-Separation**: Haupt + Module (quiz.css)
- **JS-Modularisierung**: Einzelne Funktionalitäten
- **Content-Organisation**: HTML-Dateien in `/html`
- **Daten-Zentral**: `/data` für JSON-Dateien

---

## 🚀 WIE NUTZEN

### Quiz aufrufen:
1. Navigation: Klick "Quiz" Link (oben rechts)
2. ODER direkt aufrufen: `../html/quiz.html`
3. Kategorie wählen
4. Quiz beantworten
5. Ergebnis sehen

### Suchfunktion:
```
Überall auf der Website:
- Search Box oben rechts
- Tippe einen Begriff
- Klick auf Ergebnis → navigiert + highlighted
```

### Neue CSS laden:
```html
<!-- In index.html HEAD oder vor </head> -->
<link rel="stylesheet" href="css/quiz.css">
```

### Neue JS laden:
```html
<!-- Vor </body> -->
<script src="js/quiz.js"></script>
```

---

## 📁 Datei-Zuordnungen

| Datei | Funktion | Größe |
|-------|----------|-------|
| `index.html` | Startseite | ~200 Zeilen |
| `style.css` | Haupt-Styling | ~1700 Zeilen |
| `script.js` | Haupt-Funktionen | ~740 Zeilen |
| `search.js` | Globale Suche | ~250 Zeilen |
| `search-index.json` | Such-Datenbank | 150 Einträge |
| `performance.js` | Optimierungen | ~150 Zeilen |
| **`css/quiz.css`** | Quiz-Styles | ~350 Zeilen |
| **`js/quiz.js`** | Quiz-Logik | ~600 Zeilen |
| **`html/quiz.html`** | Quiz-Seite | ~120 Zeilen |

---

## 🎯 Nächste Schritte (Optional)

### Struktur weiter optimieren:
- [ ] Admin-Panel für Quiz-Verwaltung
- [ ] Quiz-Ergebnisse exportieren (PDF)
- [ ] Zusätzliche Quizzes hinzufügen
- [ ] Leaderboard-System

### Weitere Module:
- [ ] `/js/admin.js` - Admin-funktionen
- [ ] `/js/export.js` - Export-funktionen
- [ ] `/js/analytics.js` - Statistiken
- [ ] `/css/admin.css` - Admin-UI

### Content erweitern:
- [ ] Mehr Quiz-Fragen
- [ ] Video-Tutorials
- [ ] Interaktive Demos
- [ ] Glossar-App

---

## ✅ Checkliste für VS Code Setup

- [x] Ordnerstruktur erstellen (`/css`, `/js`, `/html`, `/data`, `/docs`)
- [x] Quiz-System implementiert
- [x] Search-Funktion funktioniert
- [x] Mobile-Navigation arbeitet
- [x] Accessibility-Features vorhanden
- [x] Performance optimiert
- [x] Dokumentation aktualisiert

---

## 📊 Projekt-Statistiken

- **Zeilen Code**: ~4000+
- **CSS-Selektoren**: 200+
- **JavaScript-Funktionen**: 80+
- **HTML-Dateien**: 11
- **Quiz-Fragen**: 20 (4 Kategorien × 5)
- **Search-Einträge**: 150+

---

## 🔗 Wichtige Links

- **Hauptseite**: `../index.html`
- **Quiz**: `../html/quiz.html`
- **Dokumentation**: `../docs/UPGRADE_GUIDE.md`
- **Quellen**: `../quellen.html`

---

## 📝 Notizen für Entwickler

1. **CSS Modularity**: Jede Feature hat ihre eigenen Styles
2. **JS Modularity**: Quiz ist unabhängig initialisierbar
3. **Responsive**: Alle Komponenten mobil-optimiert
4. **Accessibility**: WCAG AAA Standards
5. **No Dependencies**: Vanilla JS/CSS, keine externen Libs

---

**Letztes Update**: 24.02.2026  
**Version**: 2.1 (Quiz-Release)  
**Autor**: AI-Assisted Development

