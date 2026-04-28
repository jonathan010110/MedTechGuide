# –°ÂÂÂÂ§ÂÂ  Selbsttests â MedTechGuide

## –ÂÂÂberblick

Das Selbsttest-System bietet 7 wissenschaftlich strukturierte psychologische und gesundheitsbezogene Selbsttests mit insgesamt **280+ Fragen**.

## Verfügbare Tests

### 1. **Depressionstest** 
- **40 Fragen** | 4-stufige Skala
- **Struktur:** PHQ-9 erweitert
- **Themen:** Stimmung, Antrieb, Schlaf, Konzentration, Selbstwert, Hoffnungslosigkeit, Suizidgedanken, sozialer Rückzug, psychosomatische Symptome
- **Score:** 0-120 Punkte mit Interpretation
- **Hinweis:** Medizinischer Disclaimer obligatorisch

### 2. **ADHS-Test**
- **40 Fragen** | 5-stufige Skala (Nie bis Sehr häufig)
- **Struktur:** DSM-5 Symptomcluster
- **Subsores:**
  - Unaufmerksamkeit (8 Fragen)
  - Hyperaktivität (8 Fragen)
  - Impulsivität (8 Fragen)
  - Organisationsprobleme (8 Fragen)
  - Alltagsauswirkungen (8 Fragen)
- **Score:** 0-160 Punkte + Subscore-Auswertung
- **Hinweis:** Medizinischer Disclaimer obligatorisch

### 3. **Persönlichkeitstest (MBTI)**
- **40 Fragen** | 5-stufige Likert-Skala
- **Struktur:** 4 Dimensionen mit je 10 Fragen
  - **E/I:** Extraversion vs. Introversion
  - **S/N:** Sensing vs. Intuition
  - **T/F:** Thinking vs. Feeling
  - **J/P:** Judging vs. Perceiving
- **Ergebnis:** Automatische Typenberechnung (z.B. INTJ, ENFP)
- **Ausgabe:** 
  - Typbezeichnung (4-Buchstaben-Code)
  - Typbeschreibung
  - Stärken
  - Typische Herausforderungen
  - Passende Arbeitsumfelder
- **Hinweis:** KEIN medizinischer Disclaimer

### 4. **Angst-Selbsttest**
- **40 Fragen** | 4-stufige Skala
- **Themen:** Allgemeine Angst, Panik, körperliche Symptome, soziale Angst, Phobien, Besorgnis, Auswirkungen, kognitive Symptome
- **Score:** 0-120 Punkte mit Risikostufen
- **Hinweis:** Medizinischer Disclaimer obligatorisch

### 5. **Burnout-Selbsttest**
- **40 Fragen** | 4-stufige Skala
- **Dimensionen:** Emotionale Erschöpfung, Depersonalisierung, reduzierte Leistung, körperliche Symptome, Beziehungen, Selbstpflege
- **Score:** 0-120 Punkte mit Burnout-Risikobeurteilung
- **Hinweis:** Medizinischer Disclaimer obligatorisch

### 6. **Stressbelastungstest**
- **40 Fragen** | 4-stufige Skala
- **Themen:** Kontrollierbarkeit, Lebensveränderungen, beruflicher Stress, finanzielle Sorgen, zwischenmenschliche Konflikte, emotionale Reaktionen, körperliche Manifestationen, Bewältigungsmechanismen
- **Score:** 0-120 Punkte mit Stressbelastungs-Level
- **Hinweis:** Medizinischer Disclaimer obligatorisch

### 7. **Schlafqualitäts-Test**
- **40 Fragen** | 4-stufige Skala
- **Themen:** Einschlafstörungen, Durchschlafstörungen, frühes Aufwachen, Schlafqualität, Schlafmittel-Abhängigkeit, Tagesschläfrigkeit, Schlafhygiene, Schlafmuster
- **Score:** 0-120 Punkte mit Schlafqualitäts-Bewertung
- **Hinweis:** Medizinischer Disclaimer obligatorisch

## Technische Architektur

### Dateistruktur

```
self-tests/
âÂÂÂÂâÂÂÂÂâÂÂÂÂ self-tests.html              (Hauptdatei - Start-Screen + Test-Interface)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ css/
âÂÂÂÂ–   âÂÂÂÂâÂÂÂÂâÂÂÂÂ self-tests.css          (UI-Styling für alle Tests)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ js/
    âÂÂÂÂâÂÂÂÂâÂÂÂÂ test-depression.js      (Depression Test: 40 Fragen + Scoring)
    âÂÂÂÂâÂÂÂÂâÂÂÂÂ test-adhs.js           (ADHS Test: 40 Fragen + Subscores)
    âÂÂÂÂâÂÂÂÂâÂÂÂÂ test-personality.js     (MBTI Test: 40 Fragen + Typsystem)
    âÂÂÂÂâÂÂÂÂâÂÂÂÂ test-others.js         (Angst, Burnout, Stress, Schlaf: 160 Fragen gesamt)
    âÂÂÂÂâÂÂÂÂâÂÂÂÂ self-tests-controller.js (Master-Controller für alle Tests)
```

### Modul-Struktur

Jeder Test-Modul folgt dem gleichen Schema:

```javascript
const TestName = {
  testId: 'unique-id',
  testName: 'Angezeigter Name',
  testDescription: 'Kurzbeschreibung',
  
  // Antwortoptionen mit Werten und Farben
  answerOptions: [ ... ],
  
  // 40 Fragen mit Kategorien
  questions: [ ... ],
  
  // Score-Berechnung
  calculateScore(answers) { ... },
  
  // Interpretation der Score
  getInterpretation(score) { ... },
  
  // Medizinischer Hinweis
  medicalDisclaimer: '...'
};
```

### Controller-Logik

`SelfTestsController` orchestriert:
- Test-Auswahl
- Frage-Rendering
- Antwort-Speicherung
- Fortschrittsanzeige (Prozentbar)
- Score-Berechnung
- Ergebnis-Anzeige
- Test-Reset

## Features

### âÂÂÂÂ Benutzerfreundlichkeit
- **Start-Screen:** Alle 7 Tests auf Karten-Grid
- **Fortschrittsanzeige:** Prozentuelle Progress Bar + Frage-Zähler
- **Dezente Navigation:** Zurück/Weiter-Buttons
- **Automatische Speicherung:** Antworten werden lokal gespeichert
- **Vollständigkeits-Check:** Muss alle Fragen beantworten vor Submit

### âÂÂÂÂ Ergebnisanzeige
- **Score-Display:** Gro–ÂÂÂer, visueller Score mit Farbcodierung
- **Interpretation:** Klare Beschreibung der Score-Bedeutung
- **ADHS-Specifics:** Subscore-Tabelle für detaillierte Analyse
- **MBTI-Specifics:** Automatische Typ-Berechnung mit Profil
- **Medical Disclaimer:** Pflicht-Warnung für seriöse Tests
- **One-Click Reset:** Zurück zur Test-Selection

### âÂÂÂÂ Design & Accessibility
- **Mobil-optimiert:** Responsive Design für alle Bildschirmgrö–ÂÂÂen
- **Farb-kodiert:** Antwort-Optionen mit visueller Farbcodierung
- **Kontrast:** WCAG-konform Kontrast-Verhältnisse
- **Keyboard-Navigation:** Vollständig mit Tab/Enter navigierbar
- **Focus-Styling:** Klare Focus-Indikatoren für Accessibility

### âÂÂÂÂ Design-Konsistenz
- Integriert mit dem bestehenden MedTechGuide-CSS-System
- Verwendet gleiche Farb-Variablen und Theming
- Einheitliche Font-Familien und Abstände
- Konsistente Button-Stile und Animationen

## Verwendung

### Für Benutzer
1. Navigieren Sie zu `self-tests.html`
2. Wählen Sie einen Test aus
3. Beantworten Sie alle 40 Fragen
4. Erhalten Sie sofortige Ergebnisse und Interpretation
5. Wählen Sie einen anderen Test oder zurück zur Startseite

### Für Entwickler - Neuen Test Hinzufügen

1. **Erstellen Sie ein neues JS-Modul:**
```javascript
const MyTest = {
  testId: 'my-test',
  testName: 'Mein Test',
  testDescription: 'Beschreibung',
  answerOptions: [ ... ],
  questions: [ ... ],
  calculateScore(answers) { ... },
  getInterpretation(score) { ... },
  medicalDisclaimer: '...'
};
```

2. **Registrieren Sie es im Controller:**
```javascript
this.allTests = [
  // ... bestehende
  MyTest  // Neu hinzufügt
];
```

3. **Fügen Sie eine Test-Card in HTML hinzu:**
```html
<div class="test-card" data-test-id="my-test">
  <div class="test-card-icon">–°ÂÂÂÂÂÂ¯</div>
  <h2 class="test-card-title">Mein Test</h2>
  <p class="test-card-description">Beschreibung</p>
  <button class="test-card-button">Test starten âÂÂÂÂ</button>
</div>
```

## Score-Systeme

### Standard-Scores (Depression, Angst, etc.)
- **Nie:** 0 Punkte
- **An einzelnen Tagen:** 1 Punkt
- **An mehr als der Hälfte der Tage:** 2 Punkte
- **Fast täglich:** 3 Punkte
- **Max:** 40 Fragen –ÂÂÂ 3 = 120 Punkte

### ADHS-Scores
- **Nie:** 0 Punkte
- **Selten:** 1 Punkt
- **Manchmal:** 2 Punkte
- **Häufig:** 3 Punkte
- **Sehr häufig:** 4 Punkte
- **Max:** 40 Fragen –ÂÂÂ 4 = 160 Punkte

### MBTI-Scores
- **Likert-Skala:** -2 bis +2
- **Keine numerischer Score, nur Typ-Berechnung**
- **Resultat:** 4-Buchstaben-Code (z.B. INTJ)

## Wichtige Hinweise

### âÂÂÂÂ –Â¯ÂÂ¸ÂÂ Rechtliche/Ethische Aspekte
- **Alle medizinischen Tests zeigen Disclaimer** am Ende
- MBTI ist nicht medizinisch und hat keinen Disclaimer
- Tests ersetzen NICHT professionelle Diagnose
- Keine Datenspeicherung - Antworten sind lokal/temporär
- DSGVO-konform: Keine externe API-Aufrufe

### –°ÂÂÂÂÂÂ Frage-Qualität
- Alle 280+ Fragen sind wissenschaftlich recherchiert
- Orientierung an valdidierten Screening-Tools (PHQ-9, DSM-5, MBTI)
- Sensible Themen (Suizid) sind human formuliert
- Mehrersprachige Struktur (derzeit Deutsch)

## Weitere Entwicklungsmöglichkeiten

- [ ] Exportfunktion (PDF-Report)
- [ ] Vergleich von Test-Ergebnissen über Zeit
- [ ] Kategorie-basierte Filter/Anzeige
- [ ] Weitere Sprachen
- [ ] Mobile App Version
- [ ] Detaillierte Empfehlungen nach Test
- [ ] Verknüpfung mit Ressourcen/Hilfehotlines

## Kontakt & Support

Bei Fragen oder Verbesserungsvorschlägen wenden Sie sich bitte an das MedTechGuide-Team.

---

**Version:** 1.0 | **Datum:** Februar 2026 | **Status:** Productionsbereit
