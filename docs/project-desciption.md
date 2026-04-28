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
âÂÂÂÂâÂÂÂÂâÂÂÂÂ index.html              # Startseite
âÂÂÂÂâÂÂÂÂâÂÂÂÂ [kategorie].html        # Kategorieseiten (10 Stück)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ comparison.html         # Gerätevergleich
âÂÂÂÂâÂÂÂÂâÂÂÂÂ quellen.html            # Quellenverzeichnis
âÂÂÂÂâÂÂÂÂâÂÂÂÂ style.css               # Globales Stylesheet
âÂÂÂÂâÂÂÂÂâÂÂÂÂ script.js               # Hauptlogik (Suche, Filter)
âÂÂÂÂâÂÂÂÂâÂÂÂÂ search.js               # Suchmodul
âÂÂÂÂâÂÂÂÂâÂÂÂÂ search-index.json       # Suchindex aller Geräte
âÂÂÂÂâÂÂÂÂâÂÂÂÂ css/
âÂÂÂÂ�   âÂÂÂÂâÂÂÂÂâÂÂÂÂ comparison.css      # Styles für den Vergleichsmodus
âÂÂÂÂâÂÂÂÂâÂÂÂÂ js/
âÂÂÂÂ�   âÂÂÂÂâÂÂÂÂâÂÂÂÂ comparison-module.js
âÂÂÂÂ�   âÂÂÂÂâÂÂÂÂâÂÂÂÂ comparison-ui.js
âÂÂÂÂâÂÂÂÂâÂÂÂÂ docs/                   # Dokumentation
```

## Design

- Ruhiges, seriöses Farbschema (Blau/Wei�ÂÂÂ/Grau)
- Responsives Layout für Desktop und Mobile
- Klare Typografie für medizinisch-technische Inhalte

## Mögliche Erweiterungen

- Dark Mode
- Farbliche Markierung nach Risikoklasse (z.B. ISO 14971)
- Interaktives Glossar mit medizinischen Fachbegriffen
- Mehrsprachigkeit (Deutsch / Englisch)

## Fazit

MedTechGuide demonstriert den kompetenten Einsatz von HTML, CSS und JavaScript zur Erstellung einer strukturierten, informativen und interaktiven Website. Das Projekt zeigt nicht nur technisches Know-how, sondern auch die Fähigkeit, komplexe medizinische Themen verständlich aufzubereiten und nutzerfreundlich zu präsentieren.
