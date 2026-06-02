# Contributing Guide - MedTechGuide

Danke, dass du zu MedTechGuide beitragen möchtest! 🙌

## Code-Style

### JavaScript
- Verwende 2-Space Indentation
- Nutze `const`/`let` (kein `var`)
- Verwende camelCase für Variablen/Funktionen
- Verwende arrow functions wo möglich
- Kommentiere komplexe Logik

```javascript
// ✅ Gut
const calculateScore = (answers, correctAnswers) => {
  return answers.filter((ans, i) => ans === correctAnswers[i]).length;
};

// ❌ Vermeiden
var calculateScore = function(answers, correctAnswers) {
  var correct = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] === correctAnswers[i]) {
      correct++;
    }
  }
  return correct;
};
```

### HTML/CSS
- Semantic HTML verwenden (`<section>`, `<article>`, `<nav>`)
- Accessibility Features nutzen (ARIA labels, alt-text)
- Responsive Design mit CSS Grid/Flexbox
- CSS-Variablen für Farben/Größen

### Dateistruktur
```
MedTechGuide/
├── css/           # Stylesheets
├── js/            # JavaScript Modules
├── html/          # HTML Pages (außer index.html)
├── images/        # Bilder
├── server/        # Backend (Node.js)
└── docs/          # Dokumentation
```

## Vor dem Commit

```bash
# Linting checken
npm run lint

# Code formatieren
npm run format

# Lokal testen
npm run dev
```

## Git Workflow

1. Fork das Repo
2. Create Feature Branch: `git checkout -b feature/new-feature`
3. Commit Changes: `git commit -m "Add new feature"`
4. Push: `git push origin feature/new-feature`
5. Open Pull Request

## Commit-Nachrichten

Verwende beschreibende Commit-Messages:
```
✅ Add: Global search functionality
🐛 Fix: Navigation links in quiz.html
🎨 Improve: CSS responsiveness
📚 Docs: Update deployment guide
♻️ Refactor: Modularize quiz.js
```

## Issue Reporting

Beschreibe:
- [ ] Was ist das Problem?
- [ ] Wie kann man es reproduzieren?
- [ ] Welches Verhalten wird erwartet?
- [ ] Screenshot/Error-Log

Beispiel:
```
**Problem:** Navigation funktioniert nicht auf Allergie-Seite

**Steps to Reproduce:**
1. Öffne html/allergie.html
2. Klick auf "Start" Link
3. Seite lädt nicht

**Expected:** Sollte zur index.html gehen
**Actual:** Error 404 - index.html nicht gefunden
```

## Kommunikation

- Nutze Diskussions-Tab für Fragen
- Sei respektvoll und konstruktiv
- Englisch und Deutsch sind ok
- Nimm Code-Reviews als konstruktives Feedback

## Lizenz

Durch das Beitragen stimmst du zu, dass dein Code unter der MIT-Lizenz veröffentlicht wird.

---

**Fragen?** → Öffne ein Issue oder schreib eine Diskussion!

Danke für deine Beiträge! ❤️
