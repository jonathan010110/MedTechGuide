# ð Quiz v2.0 - Update Summary

**Datum:** 24.02.2026  
**Version:** 2.0.0 Release  

## â¨ Was ist neu?

### ð **Randomisierte Fragen**
Fragen und Antworten werden jetzt bei jedem Test zufällig sortiert!
- Fisher-Yates Shuffle Algorithmus
- Jeder Test ist unterschiedlich
- Kein "Auswendiglernen" möglich

### ð§  **3 Professionelle Psychologische Tests**

#### ð **Depression-Screening (PHQ-9)**
- Basis: Patient Health Questionnaire
- 9 Fragen zu depressiven Symptomen
- Wissenschaftlich validiert
- â ï¸ Kein Ersatz für Arztbesuch

#### ð§  **ADHS-Screening (ASRS v1.1)**
- Basis: Adult ADHD Self-Report Scale
- 6 Fragen zu ADHS-Symptomen
- Von der WHO entwickelt
- â ï¸ Weitere Evaluierung empfohlen

#### ð **Big-Five Persönlichkeitstest**
- 5 Persönlichkeitsdimensionen (ENTF):
  - **O**ffenheit - Neugier & Kreativität
  - **E**xtraversion - Geselligkeit & Energie
  - **N**eurotizismus - Emotionale Stabilität
  - **F**reundlichkeit - Kooperation & Empathie
  - **C**onscientious - Ordnung & Gewissenhaftigkeit
- 20 Fragen
- Detailliertes Persönlichkeitsprofil

### ð± **Mobile Hochformat-Optimierung**
- â Perfekt optimiert für Smartphones
- â Breakpoints: 480px, 768px
- â Touch-friendly Buttons (44px+)
- â Landscape & Portrait Support
- â Schneller & Responsive

### ð¨ **Neue UI für Fragebögen**
- Likert-Skalen (für Depression & ADHS)
- Big-Five Dimension-Visualisierung
- Farbcodierte Ergebnisse
- Animierte Fortschrittsbalken
- Detaillierte Interpretationen

---

## ð¯ Wie benutzen?

### Im Browser
```
1. Öffne index.html
2. Klick auf "ð¯ Quiz" Button in Navigation
3. NEUE OPTION: Wähle einen psychologischen Test
4. Beantworte alle Fragen
5. Schau die Ergebnisse an (mit Interpretationen)
```

### Tests verfügbar

**Medizintechnik (Multiple Choice):**
- ð Diagnostik (5 Fragen, randomisiert)
- ð Therapie (5 Fragen, randomisiert)
- ð¬ Forschung (5 Fragen, randomisiert)
- ð Zukunft (5 Fragen, randomisiert)

**Psychologie (Fragebögen):**  â­ NEU
- ð Depression-Screening
- ð§  ADHS-Screening
- ð Big-Five Persönlichkeitstest

---

## ð Dateiänderungen

### Aktualisiert
- â `js/quiz.js` (v2.0 - 1000+ Zeilen)
  - Neue QUIZ_DATABASE Struktur mit 3 Tests
  - Randomisierungs-Funktionen
  - Likert-Skalen Support
  - Big-Five Scoring

- â `css/quiz.css` (v2.0 - 750+ Zeilen)
  - Mobile Hochformat-Optimierung
  - Likert-Skalen Styling
  - Big-Five Visualisierung
  - Landscape Mode Support

### Neu erstellt
- â `docs/QUIZ_V2_CHANGELOG.md` (ausführliche Dokumentation)

### Unverändert
- â `index.html` (funktioniert weiterhin)
- â `html/quiz.html` (funktioniert weiterhin)
- â Alle anderen Dateien

---

## ð Datenschutz & Sicherheit

â 100% Local Processing:
- Keine externe Datenübertragung
- Keine Server-Speicherung
- Keine Cookies
- Keine Tracking-Pixel
- **Vollständig privat!**

---

## â ï¸ Psychologische Tests - Wichtig!

### Diese Tests sind:
â **KEINE** ärztliche Diagnose  
â **NICHT** als vollständige Evaluierung  
â **NICHT** für Selbstmedikation  

### Diese Tests sind:
â Grundlegendes Screening  
â Selbst-Bewusstseinsfindung  
â Zum Arztbesuch vorbereiten  
â Informativ & Eduaktiv  

### Bei ernsthafte Bedenken:
ð¥ **Konsultiere einen Psychologen**  
ð **Rufe einen Arzt an**  
ð **Kontaktiere Krisenhotline**  

---

## ð§ª Testing Suggestions

### Multiple Choice (Diagnostik)
```
â Öffne "ð Diagnostik"
â Beantworte 5 Fragen
â Fragen sollten unterschiedlich sein jedesmal
â Antworten A/B/C/D sollten variieren
```

### Likert Scale (Depression)
```
â Öffne "ð Depression-Screening"
â Beantworte 9 Fragen mit Skala
â Schau Gesamtscore & Interpretation an
â Lese Warnung sorgfältig!
```

### Big Five (Persönlichkeit)
```
â Öffne "ð Persönlichkeit"
â Beantworte 20 Fragen (1-5 Skala)
â Schau Profil mit 5 Dimensionen an
â Lese Interpretationen für jede Dimension
```

---

## ð± Mobile Test

### Auf iPhone/Android testen:
1. Öffne http://localhost:8000 (oder deine URL)
2. Klick "Quiz"
3. Wähle Test
4. **Sollte im Hochformat perfekt sein!**
5. Versuche auch Landscape

---

## ð Troubleshooting

### â Quiz lädt nicht
**Lösung:**
1. Konsole öffnen: F12
2. Prüfe ob Fehler sichtbar ist
3. Cache leeren: Ctrl+Shift+Delete
4. Seite neuladen

### â Styling bricht
**Lösung:**
1. Prüfe ob quiz.css in head geladen ist
2. Prüfe ob quiz.js vor body-close ist
3. Cache leeren
4. Browser neu starten

### â Fragen erscheinen nicht
**Lösung:**
1. Öffne Konsole (F12)
2. Prüfe auf JavaScript Fehler
3. Prüfe ob QUIZ_DATABASE voll ist
4. Versuche anderen Browser

---

## â Checkliste

- [x] quiz.js v2.0 installiert
- [x] quiz.css v2.0 installiert
- [x] Depression-Test funktioniert
- [x] ADHS-Test funktioniert
- [x] Big-Five-Test funktioniert
- [x] Randomisierung funktioniert
- [x] Mobile Hochformat optimiert
- [x] Dokumentation erstellt

---

## ð Weitere Infos

Detaillierte technische Dokumentation:
â Siehe: `docs/QUIZ_V2_CHANGELOG.md`

---

**Gratuliere zum Update! ð**

Das System ist nun professioneller, responsiver und mit echten psychologischen Tests.

Version: 2.0.0  
Released: 24.02.2026
