# Projekt: MedTechGuide – Medizinische Geräte verständlich erklärt

## Projektidee

MedTechGuide ist eine interaktive Website, die **medizintechnische Geräte** übersichtlich, verständlich und ansprechend für Laien präsentiert. Von Blutzuckermessgeräten über EKG-Systeme bis hin zu Neurochips und KI-gestützten Diagnosewerkzeugen – das Projekt deckt ein breites Spektrum moderner Medizintechnik ab und erklärt Funktion, Einsatzgebiet sowie Vor- und Nachteile jedes Geräts.

## Projektstatus

Das Projekt ist weitgehend fertiggestellt. Alle geplanten Kernfunktionen sind implementiert.

## Umgesetzte Funktionen

### Kategorieseiten

Jede Kategorie hat eine eigene, vollständig ausgebaute HTML-Seite:

- **Diabetes** – Blutzuckermessgeräte, Insulinpumpen, CGM-Systeme
- **Allergie** – Allergie-Testgeräte und -Therapiehilfen
- **Herz-Kreislauf** – EKG, Blutdruckmessung, Herzschrittmacher
- **Bildgebung** – MRT, CT, Ultraschall, Röntgen
- **Genetik** – Gensequenzierung, DNA-Diagnostik
- **Neurochips** – Gehirn-Computer-Schnittstellen, neuronale Implantate
- **Exoskelette** – Rehabilitationsroboter und Bewegungsunterstützung
- **KI-Diagnose** – KI-gestützte Bildanalyse und Diagnostiksysteme
- **Zukunftstechnologien** – Nanobots, Smart Implants, digitale Zwillinge
- **Selbsttests** – Heim-Diagnosetests und Wearables

### Vergleichsmodus (`comparison.html`)

Interaktiver Geräte-Vergleich mit:

- Side-by-Side-Auswahl von zwei Geräten
- Bewertungsbalken für Kennzahlen (Genauigkeit, Kosten, Benutzerfreundlichkeit u.a.)
- Visuelle Ampeldarstellung für Eignung in verschiedenen Szenarien
- Modular aufgebaut via `comparison-module.js` und `comparison-ui.js`

### Suche & Filter

- Volltext-Suchfunktion über alle Geräte (`search.js`, `search-index.json`)
- Filterung nach Kategorie via JavaScript (`script.js`)

### Quellen & Glossar

- Eigene Quellenseite (`quellen.html`) mit Verweisen auf offizielle Hersteller- und Gesundheitsportale

## Technologiestack

| Technologie                          | Einsatz                                              |
| ------------------------------------ | ---------------------------------------------------- |
| HTML5                                | Struktur aller Seiten                                |
| CSS3 (`style.css`, `comparison.css`) | Layout, responsives Design, medizinisches Farbschema |
| JavaScript (ES6+)                    | Suche, Filter, Vergleichslogik, Animationen          |
| JSON (`search-index.json`)           | Suchindex für alle Geräte                            |

## Projektstruktur

```
Projekt_25/
├── index.html              # Startseite
├── [kategorie].html        # Kategorieseiten (10 Stück)
├── comparison.html         # Gerätevergleich
├── quellen.html            # Quellenverzeichnis
├── style.css               # Globales Stylesheet
├── script.js               # Hauptlogik (Suche, Filter)
├── search.js               # Suchmodul
├── search-index.json       # Suchindex aller Geräte
├── css/
│   └── comparison.css      # Styles für den Vergleichsmodus
├── js/
│   ├── comparison-module.js
│   └── comparison-ui.js
└── docs/                   # Dokumentation
```

## Design

- Ruhiges, seriöses Farbschema (Blau/Weiß/Grau)
- Responsives Layout für Desktop und Mobile
- Klare Typografie für medizinisch-technische Inhalte

## Mögliche Erweiterungen

- Dark Mode
- Farbliche Markierung nach Risikoklasse (z.B. ISO 14971)
- Interaktives Glossar mit medizinischen Fachbegriffen
- Mehrsprachigkeit (Deutsch / Englisch)

## Fazit

MedTechGuide demonstriert den kompetenten Einsatz von HTML, CSS und JavaScript zur Erstellung einer strukturierten, informativen und interaktiven Website. Das Projekt zeigt nicht nur technisches Know-how, sondern auch die Fähigkeit, komplexe medizinische Themen verständlich aufzubereiten und nutzerfreundlich zu präsentieren.
