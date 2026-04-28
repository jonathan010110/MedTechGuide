# –°ÂÂÂÂÂÂ MedTechGuide Projekt-Struktur

## –ÂÂÂbersicht der Ordnerorganisation

```
c:\WMC\Projekt_25\
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ Startdateien (Root)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ index.html               âÂÂÂÂ HAUPT-Einstiegspunkt
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ style.css                âÂÂÂÂ Haupt-CSS (1700+Zeilen)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ script.js                âÂÂÂÂ Haupt-JavaScript
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ search.js                âÂÂÂÂ Neue Suchfunktion
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ search-index.json        âÂÂÂÂ Search-Datenbank
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ performance.js           âÂÂÂÂ Lazy Loading & Performance
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ README.md, UPGRADE_GUIDE.md, etc.
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /css (Neue Style-Dateien)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ quiz.css                 âÂÂÂÂ Quiz-spezifische Styles
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [zukünftige CSS...]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /js (Neue JavaScript-Module)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ quiz.js                  âÂÂÂÂ Interaktives Quiz-System
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [zukünftige JS...]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /html (Alle HTML-Content Seiten)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ quiz.html                âÂÂÂÂ Neue Quiz-Seite
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [weitere Seiten...]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /data (Datenbanken & Config)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ quiz-database.json       âÂÂÂÂ Quiz-Fragen (optional)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [weitere Daten...]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /images (Bilder)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ diabetes-1.jpg
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ allergie-1.jpg
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [weitere Bilder...]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /docs (Dokumentation)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ UPGRADE_GUIDE.md         âÂÂÂÂ Features-Dokumentation
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ STRUKTUR.md              âÂÂÂÂ Diese Datei
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [weitere Docs...]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ –°ÂÂÂÂÂÂ /MedTechGuide (Optional: Fachspezifischer Ordner)
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ [Zusätzliche Ressourcen]
âÂÂÂÂ–
âÂÂÂÂâÂÂÂÂâÂÂÂÂ .git/ (Git-Repository)
```

---

## –°ÂÂÂÂÂÂ NEUE FEATURES (ab v2.1)

### 1–Â¯ÂÂ¸ÂÂâÂÂÂÂ£ Quiz-System
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

### 2–Â¯ÂÂ¸ÂÂâÂÂÂÂ£ Verbesserte Ordnerstruktur
- **CSS-Separation**: Haupt + Module (quiz.css)
- **JS-Modularisierung**: Einzelne Funktionalitäten
- **Content-Organisation**: HTML-Dateien in `/html`
- **Daten-Zentral**: `/data` für JSON-Dateien

---

## –°ÂÂÂÂÂÂ WIE NUTZEN

### Quiz aufrufen:
1. Navigation: Klick "Quiz" Link (oben rechts)
2. ODER direkt aufrufen: `../html/quiz.html`
3. Kategorie wählen
4. Quiz beantworten
5. Ergebnis sehen

### Suchfunktion:
```
–ÂÂÂberall auf der Website:
- Search Box oben rechts
- Tippe einen Begriff
- Klick auf Ergebnis âÂÂÂÂ navigiert + highlighted
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

## –°ÂÂÂÂÂÂ Datei-Zuordnungen

| Datei | Funktion | Grö–ÂÂÂe |
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

## –°ÂÂÂÂÂÂ¯ Nächste Schritte (Optional)

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

## âÂÂÂÂ Checkliste für VS Code Setup

- [x] Ordnerstruktur erstellen (`/css`, `/js`, `/html`, `/data`, `/docs`)
- [x] Quiz-System implementiert
- [x] Search-Funktion funktioniert
- [x] Mobile-Navigation arbeitet
- [x] Accessibility-Features vorhanden
- [x] Performance optimiert
- [x] Dokumentation aktualisiert

---

## –°ÂÂÂÂÂÂ Projekt-Statistiken

- **Zeilen Code**: ~4000+
- **CSS-Selektoren**: 200+
- **JavaScript-Funktionen**: 80+
- **HTML-Dateien**: 11
- **Quiz-Fragen**: 20 (4 Kategorien –ÂÂÂ 5)
- **Search-Einträge**: 150+

---

## –°ÂÂÂÂÂÂ Wichtige Links

- **Hauptseite**: `../index.html`
- **Quiz**: `../html/quiz.html`
- **Dokumentation**: `../docs/UPGRADE_GUIDE.md`
- **Quellen**: `../quellen.html`

---

## –°ÂÂÂÂÂÂ Notizen für Entwickler

1. **CSS Modularity**: Jede Feature hat ihre eigenen Styles
2. **JS Modularity**: Quiz ist unabhängig initialisierbar
3. **Responsive**: Alle Komponenten mobil-optimiert
4. **Accessibility**: WCAG AAA Standards
5. **No Dependencies**: Vanilla JS/CSS, keine externen Libs

---

**Letztes Update**: 24.02.2026  
**Version**: 2.1 (Quiz-Release)  
**Autor**: AI-Assisted Development

