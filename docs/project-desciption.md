# Projekt: MedTechGuide â Medizinische Geräte verständlich erklärt

## Projektidee

MedTechGuide ist eine interaktive Website, die **medizintechnische Geräte** übersichtlich, verständlich und ansprechend für Laien präsentiert. Von Blutzuckermessgeräten über EKG-Systeme bis hin zu Neurochips und KI-gestützten Diagnosewerkzeugen â das Projekt deckt ein breites Spektrum moderner Medizintechnik ab und erklärt Funktion, Einsatzgebiet sowie Vor- und Nachteile jedes Geräts.

## Projektstatus

Das Projekt ist weitgehend fertiggestellt. Alle geplanten Kernfunktionen sind implementiert.

## Umgesetzte Funktionen

### Kategorieseiten

Jede Kategorie hat eine eigene, vollständig ausgebaute HTML-Seite:

- **Diabetes** â Blutzuckermessgeräte, Insulinpumpen, CGM-Systeme
- **Allergie** â Allergie-Testgeräte und -Therapiehilfen
- **Herz-Kreislauf** â EKG, Blutdruckmessung, Herzschrittmacher
- **Bildgebung** â MRT, CT, Ultraschall, Röntgen
- **Genetik** â Gensequenzierung, DNA-Diagnostik
- **Neurochips** â Gehirn-Computer-Schnittstellen, neuronale Implantate
- **Exoskelette** â Rehabilitationsroboter und Bewegungsunterstützung
- **KI-Diagnose** â KI-gestützte Bildanalyse und Diagnostiksysteme
- **Zukunftstechnologien** â Nanobots, Smart Implants, digitale Zwillinge
- **Selbsttests** â Heim-Diagnosetests und Wearables

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
âââ index.html              # Startseite
âââ [kategorie].html        # Kategorieseiten (10 Stück)
âââ comparison.html         # Gerätevergleich
âââ quellen.html            # Quellenverzeichnis
âââ style.css               # Globales Stylesheet
âââ script.js               # Hauptlogik (Suche, Filter)
âââ search.js               # Suchmodul
âââ search-index.json       # Suchindex aller Geräte
âââ css/
â–   âââ comparison.css      # Styles für den Vergleichsmodus
âââ js/
â–   âââ comparison-module.js
â–   âââ comparison-ui.js
âââ docs/                   # Dokumentation
```

## Design

- Ruhiges, seriöses Farbschema (Blau/Wei–/Grau)
- Responsives Layout für Desktop und Mobile
- Klare Typografie für medizinisch-technische Inhalte

## Mögliche Erweiterungen

- Dark Mode
- Farbliche Markierung nach Risikoklasse (z.B. ISO 14971)
- Interaktives Glossar mit medizinischen Fachbegriffen
- Mehrsprachigkeit (Deutsch / Englisch)

## Fazit

MedTechGuide demonstriert den kompetenten Einsatz von HTML, CSS und JavaScript zur Erstellung einer strukturierten, informativen und interaktiven Website. Das Projekt zeigt nicht nur technisches Know-how, sondern auch die Fähigkeit, komplexe medizinische Themen verständlich aufzubereiten und nutzerfreundlich zu präsentieren.
