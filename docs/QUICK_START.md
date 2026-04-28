# –° Quick Start - Neue Quiz & Ordner-Struktur

## â Was wurde hinzugefügt?

### 1. –°¯ **Quiz-System**
- **20 interaktive Fragen** in 4 Kategorien
  - –° Diagnostik (5 Fragen)
  - –° Therapie (5 Fragen)
  - –°" Forschung (5 Fragen)
  - –° Zukunft (5 Fragen)
- **Scoring & Ergebnisse** mit detaillierter Auswertung
- **Responsive Design** für Mobile & Desktop

### 2. –° **Ordnerstruktur**
```
Projekt_25/
âââ /css/              â CSS-Module (quiz.css)
âââ /js/               â JavaScript-Module (quiz.js)
âââ /html/             â Content-Seiten (quiz.html + andere)
âââ /data/             â Datenbanken & Config
âââ /images/           â Bilder (existiert schon)
âââ /docs/             â Dokumentation (STRUKTUR.md)
```

### 3. –° **Verbesserte Suche**
- Funktioniert bereits vollständig
- Durchsucht alle 10 Seiten
- Auto-Highlighting auf Zielseite

---

## –° DATEIEN-–BERSICHT

### Neue Dateien erstellt:
| Datei | Beschreibung |
|-------|-------------|
| `js/quiz.js` | Quiz-Engine (600+ Zeilen) |
| `css/quiz.css` | Quiz-Styling (350+ Zeilen) |
| `html/quiz.html` | Quiz-Landingpage |
| `docs/STRUKTUR.md` | Projekt-–bersicht |
| `docs/QUICK_START.md` | Diese Datei |

### Aktualisierte Dateien:
| Datei | Änderung |
|-------|---------|
| `index.html` | +Quiz-Link, +CSS-Import, +Info-Box |
| `style.css` | â Unverändert (alle Styles schon vorhanden) |
| `script.js` | â Unverändert (Mobile-Nav schon enthalten) |

---

## –°Â® WIE NUTZEN

### Quiz aufrufen:

**Option 1: –ber Navigation**
- Oben in der Navbar: "–°¯ Quiz" Button (neu hinzugefügt)
- Klick â öffnet `html/quiz.html`

**Option 2: Direkt-Link**
```
../html/quiz.html
```

**Option 3: Von Startseite**
- Blauer Button: "Quiz starten â"

### Quiz spielen:
```
1. Kategorie wählen (Diagnostik / Therapie / Forschung / Zukunft)
2. 5 Multiple-Choice Fragen beantworten
3. Score sehen (0-100%)
4. Detaillierte Auswertung
5. Wiederholen oder andere Kategorie
```

---

## –°¨ STYLING HIGHLIGHTS

### Quiz-Komponenten:
- â¨ **Modal-Dialoge** mit Blur-Backdrop
- –° **Progress-Bar** für Fortschritt
- –°¯ **Score-Circle** mit animiertem Bounce
- –° **Ergebnis-Anzeige** mit Emoji & Bewertung
- –°± **Vollständig responsive**

### CSS-Klassen:
```css
.quiz-modal              /* Main Quiz Container */
.quiz-question          /* Frage-Anzeige */
.quiz-option           /* Antwort-Buttons */
.quiz-result           /* Ergebnis-Seite */
.quiz-kategorie-btn    /* Kategorie-Buttons */
```

---

## –°§ TECHNISCHE DETAILS

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

## –°± RESPONSIVE BREAKPOINTS

- **Desktop** (>768px): Vollständige Layout
- **Tablet** (768px): Optimiert
- **Mobile** (<600px):
  - 2-spaltig Grid bei Kategorien
  - Kleinere Buttons
  - Gestaffelte Animationen

---

## –° DATENSCHUTZ

â **Keine externe Daten-Speicherung**
- Quiz-Ergebnisse nur lokal im Browser
- Keine Cookies oder Tracking
- Keine Cloud-Verbindung
- 100% Datenschutz

---

## â BEKANNTE LIMITATIONEN

- Quiz-Daten sind hardcoded (können aber in JSON ausgelagert werden)
- Keine Datenspeicherung zwischen Sessions
- Keine Quiz-Verwaltung im Frontend
- Keine Statistiken über mehrere Sessions

---

## â¨ NÄCHSTE MÖGLICHE FEATURES

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

## –° INSTALLATION

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
- Klick auf "–°¯ Quiz" Button
- Wähle Kategorie
- Beantworte Fragen

---

## –° TROUBLESHOOTING

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
2. Inspect Element (F12) â Console
3. Validiere CSS Syntax
```

### Fragen erscheinen nicht?
```
1. Prüf QUIZ_DATABASE in js/quiz.js
2. Validiere JSON Syntax
3. Prüf Browser Console auf Errors
```

---

## –° SUPPORT

Falls Fragen:
1. Lies STRUKTUR.md für –berblick
2. Check js/quiz.js für Quellcode-Kommentare
3. Validiere mit VS Code Linter
4. Teste in Chrome DevTools

---

## –° LERN-RESSOURCEN

- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [CSS Grid Documentation](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Performance Best Practices](https://web.dev/performance/)

---

**Genie–t das Quiz! –°¯**

Version: 2.1 | Release: 24.02.2026

