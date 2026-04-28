# –°ÂÂÂÂÂÂ Quick Start - Neue Quiz & Ordner-Struktur

## âÂÂÂÂ Was wurde hinzugefügt?

### 1. –°ÂÂÂÂÂÂ¯ **Quiz-System**
- **20 interaktive Fragen** in 4 Kategorien
  - –°ÂÂÂÂÂÂ Diagnostik (5 Fragen)
  - –°ÂÂÂÂÂÂ Therapie (5 Fragen)
  - –°ÂÂÂÂÂÂ¬ Forschung (5 Fragen)
  - –°ÂÂÂÂÂÂ Zukunft (5 Fragen)
- **Scoring & Ergebnisse** mit detaillierter Auswertung
- **Responsive Design** für Mobile & Desktop

### 2. –°ÂÂÂÂÂÂ **Ordnerstruktur**
```
Projekt_25/
âÂÂÂÂâÂÂÂÂâÂÂÂÂ /css/              âÂÂÂÂ CSS-Module (quiz.css)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ /js/               âÂÂÂÂ JavaScript-Module (quiz.js)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ /html/             âÂÂÂÂ Content-Seiten (quiz.html + andere)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ /data/             âÂÂÂÂ Datenbanken & Config
âÂÂÂÂâÂÂÂÂâÂÂÂÂ /images/           âÂÂÂÂ Bilder (existiert schon)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ /docs/             âÂÂÂÂ Dokumentation (STRUKTUR.md)
```

### 3. –°ÂÂÂÂÂÂ **Verbesserte Suche**
- Funktioniert bereits vollständig
- Durchsucht alle 10 Seiten
- Auto-Highlighting auf Zielseite

---

## –°ÂÂÂÂÂÂ DATEIEN-–ÂÂÂBERSICHT

### Neue Dateien erstellt:
| Datei | Beschreibung |
|-------|-------------|
| `js/quiz.js` | Quiz-Engine (600+ Zeilen) |
| `css/quiz.css` | Quiz-Styling (350+ Zeilen) |
| `html/quiz.html` | Quiz-Landingpage |
| `docs/STRUKTUR.md` | Projekt-–ÂÂÂbersicht |
| `docs/QUICK_START.md` | Diese Datei |

### Aktualisierte Dateien:
| Datei | Änderung |
|-------|---------|
| `index.html` | +Quiz-Link, +CSS-Import, +Info-Box |
| `style.css` | âÂÂÂÂ Unverändert (alle Styles schon vorhanden) |
| `script.js` | âÂÂÂÂ Unverändert (Mobile-Nav schon enthalten) |

---

## –°ÂÂÂÂÂ® WIE NUTZEN

### Quiz aufrufen:

**Option 1: –ÂÂÂber Navigation**
- Oben in der Navbar: "–°ÂÂÂÂÂÂ¯ Quiz" Button (neu hinzugefügt)
- Klick âÂÂÂÂ öffnet `html/quiz.html`

**Option 2: Direkt-Link**
```
../html/quiz.html
```

**Option 3: Von Startseite**
- Blauer Button: "Quiz starten âÂÂÂÂ"

### Quiz spielen:
```
1. Kategorie wählen (Diagnostik / Therapie / Forschung / Zukunft)
2. 5 Multiple-Choice Fragen beantworten
3. Score sehen (0-100%)
4. Detaillierte Auswertung
5. Wiederholen oder andere Kategorie
```

---

## –°ÂÂÂÂÂÂ¨ STYLING HIGHLIGHTS

### Quiz-Komponenten:
- âÂÂÂÂ¨ **Modal-Dialoge** mit Blur-Backdrop
- –°ÂÂÂÂÂÂ **Progress-Bar** für Fortschritt
- –°ÂÂÂÂÂÂ¯ **Score-Circle** mit animiertem Bounce
- –°ÂÂÂÂÂÂ **Ergebnis-Anzeige** mit Emoji & Bewertung
- –°ÂÂÂÂÂÂ± **Vollständig responsive**

### CSS-Klassen:
```css
.quiz-modal              /* Main Quiz Container */
.quiz-question          /* Frage-Anzeige */
.quiz-option           /* Antwort-Buttons */
.quiz-result           /* Ergebnis-Seite */
.quiz-kategorie-btn    /* Kategorie-Buttons */
```

---

## –°ÂÂÂÂÂÂ§ TECHNISCHE DETAILS

### Quiz-Datenbank:
```javascript
QUIZ_DATABASE = {
  diagnostik: [
    {
      frage: "...",
      optionen: ["A", "B", "C", "D"],
      antwort: 1,  // Index der richtigen Antwort
      erklärung: "..."
    }
  ]
}
```

### Quiz-State:
```javascript
quizState = {
  aktiv: boolean,
  kategorie: string,
  aktuelleFrageIndex: number,
  punkte: number,
  antworten: Array,
  maxPunkte: number
}
```

### Haupt-Funktionen:
- `startQuiz(kategorie)` - Quiz starten
- `nextQuizFrage(antwortIndex)` - Nächste Frage
- `showQuizErgebnis()` - Ergebnis anzeigen
- `openQuizModal)` - Kategorie-Wahl
- `closeQuiz()` - Quiz beenden

---

## –°ÂÂÂÂÂÂ± RESPONSIVE BREAKPOINTS

- **Desktop** (>768px): Vollständige Layout
- **Tablet** (768px): Optimiert
- **Mobile** (<600px):
  - 2-spaltig Grid bei Kategorien
  - Kleinere Buttons
  - Gestaffelte Animationen

---

## –°ÂÂÂÂÂÂ DATENSCHUTZ

âÂÂÂÂ **Keine externe Daten-Speicherung**
- Quiz-Ergebnisse nur lokal im Browser
- Keine Cookies oder Tracking
- Keine Cloud-Verbindung
- 100% Datenschutz

---

## âÂÂÂÂ BEKANNTE LIMITATIONEN

- Quiz-Daten sind hardcoded (können aber in JSON ausgelagert werden)
- Keine Datenspeicherung zwischen Sessions
- Keine Quiz-Verwaltung im Frontend
- Keine Statistiken über mehrere Sessions

---

## âÂÂÂÂ¨ NÄCHSTE MÖGLICHE FEATURES

### Einfach zu implementieren:
- [ ] Quiz-Kategorien im HTML als Daten
- [ ] Ergebnisse in LocalStorage speichern
- [ ] Quiz-Statistiken-Dashboard
- [ ] Question Timer (30sec pro Frage)
- [ ] Shuffle Questions & Answers

### Mittelschwer:
- [ ] Admin-Panel für Quiz-Verwaltung
- [ ] Ergebnisse exportieren (PDF)
- [ ] Leaderboard-System
- [ ] Quiz-Creator (Fragen-Editor)

### Komplex:
- [ ] Backend Integration
- [ ] User-Accounts
- [ ] Social Features
- [ ] Mobile App

---

## –°ÂÂÂÂÂÂ INSTALLATION

### 1. Dateien kopieren:
```bash
cp -r js/ html/ css/ data/ docs/ /path/to/projekt
```

### 2. In HTML laden:
```html
<!-- In <head> -->
<link rel="stylesheet" href="css/quiz.css">

<!-- Vor </body> -->
<script src="js/quiz.js"></script>
```

### 3. Testen:
- Öffne `index.html`
- Klick auf "–°ÂÂÂÂÂÂ¯ Quiz" Button
- Wähle Kategorie
- Beantworte Fragen

---

## –°ÂÂÂÂÂÂ TROUBLESHOOTING

### Quiz lädt nicht?
```
1. Prüfe Browser Console (F12)
2. Stelle sicher js/quiz.js existiert
3. Prüfe CSS-Import in index.html
4. Cache leeren (Ctrl+Shift+Delete)
```

### Styling bricht?
```
1. Prüf dass css/quiz.css geladen wird
2. Inspect Element (F12) âÂÂÂÂ Console
3. Validiere CSS Syntax
```

### Fragen erscheinen nicht?
```
1. Prüf QUIZ_DATABASE in js/quiz.js
2. Validiere JSON Syntax
3. Prüf Browser Console auf Errors
```

---

## –°ÂÂÂÂÂÂ SUPPORT

Falls Fragen:
1. Lies STRUKTUR.md für –ÂÂÂberblick
2. Check js/quiz.js für Quellcode-Kommentare
3. Validiere mit VS Code Linter
4. Teste in Chrome DevTools

---

## –°ÂÂÂÂÂÂ LERN-RESSOURCEN

- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [CSS Grid Documentation](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Performance Best Practices](https://web.dev/performance/)

---

**Genie–ÂÂÂt das Quiz! –°ÂÂÂÂÂÂ¯**

Version: 2.1 | Release: 24.02.2026

