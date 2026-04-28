# –° MedTechGuide Projekt-Struktur

## –bersicht der Ordnerorganisation

```
c:\WMC\Projekt_25\
â–
âââ –° Startdateien (Root)
â–   âââ index.html               â HAUPT-Einstiegspunkt
â–   âââ style.css                â Haupt-CSS (1700+Zeilen)
â–   âââ script.js                â Haupt-JavaScript
â–   âââ search.js                â Neue Suchfunktion
â–   âââ search-index.json        â Search-Datenbank
â–   âââ performance.js           â Lazy Loading & Performance
â–   âââ README.md, UPGRADE_GUIDE.md, etc.
â–
âââ –° /css (Neue Style-Dateien)
â–   âââ quiz.css                 â Quiz-spezifische Styles
â–   âââ [zukünftige CSS...]
â–
âââ –° /js (Neue JavaScript-Module)
â–   âââ quiz.js                  â Interaktives Quiz-System
â–   âââ [zukünftige JS...]
â–
âââ –° /html (Alle HTML-Content Seiten)
â–   âââ quiz.html                â Neue Quiz-Seite
â–   âââ [weitere Seiten...]
â–
âââ –° /data (Datenbanken & Config)
â–   âââ quiz-database.json       â Quiz-Fragen (optional)
â–   âââ [weitere Daten...]
â–
âââ –° /images (Bilder)
â–   âââ diabetes-1.jpg
â–   âââ allergie-1.jpg
â–   âââ [weitere Bilder...]
â–
âââ –° /docs (Dokumentation)
â–   âââ UPGRADE_GUIDE.md         â Features-Dokumentation
â–   âââ STRUKTUR.md              â Diese Datei
â–   âââ [weitere Docs...]
â–
âââ –° /MedTechGuide (Optional: Fachspezifischer Ordner)
â–   âââ [Zusätzliche Ressourcen]
â–
âââ .git/ (Git-Repository)
```

---

## –° NEUE FEATURES (ab v2.1)

### 1–¯¸â£ Quiz-System
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

### 2–¯¸â£ Verbesserte Ordnerstruktur
- **CSS-Separation**: Haupt + Module (quiz.css)
- **JS-Modularisierung**: Einzelne Funktionalitäten
- **Content-Organisation**: HTML-Dateien in `/html`
- **Daten-Zentral**: `/data` für JSON-Dateien

---

## –° WIE NUTZEN

### Quiz aufrufen:
1. Navigation: Klick "Quiz" Link (oben rechts)
2. ODER direkt aufrufen: `../html/quiz.html`
3. Kategorie wählen
4. Quiz beantworten
5. Ergebnis sehen

### Suchfunktion:
```
–berall auf der Website:
- Search Box oben rechts
- Tippe einen Begriff
- Klick auf Ergebnis â navigiert + highlighted
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

## –° Datei-Zuordnungen

| Datei | Funktion | Grö–e |
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

## –°¯ Nächste Schritte (Optional)

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

## â Checkliste für VS Code Setup

- [x] Ordnerstruktur erstellen (`/css`, `/js`, `/html`, `/data`, `/docs`)
- [x] Quiz-System implementiert
- [x] Search-Funktion funktioniert
- [x] Mobile-Navigation arbeitet
- [x] Accessibility-Features vorhanden
- [x] Performance optimiert
- [x] Dokumentation aktualisiert

---

## –° Projekt-Statistiken

- **Zeilen Code**: ~4000+
- **CSS-Selektoren**: 200+
- **JavaScript-Funktionen**: 80+
- **HTML-Dateien**: 11
- **Quiz-Fragen**: 20 (4 Kategorien – 5)
- **Search-Einträge**: 150+

---

## –° Wichtige Links

- **Hauptseite**: `../index.html`
- **Quiz**: `../html/quiz.html`
- **Dokumentation**: `../docs/UPGRADE_GUIDE.md`
- **Quellen**: `../quellen.html`

---

## –° Notizen für Entwickler

1. **CSS Modularity**: Jede Feature hat ihre eigenen Styles
2. **JS Modularity**: Quiz ist unabhängig initialisierbar
3. **Responsive**: Alle Komponenten mobil-optimiert
4. **Accessibility**: WCAG AAA Standards
5. **No Dependencies**: Vanilla JS/CSS, keine externen Libs

---

**Letztes Update**: 24.02.2026  
**Version**: 2.1 (Quiz-Release)  
**Autor**: AI-Assisted Development

