````md
# SPÖGL – Hybrid Smartwatch Schulprojekt

## Projektidee

SPÖGL ist eine analoge Hybrid-Smartwatch mit integrierten Gesundheits- und Sportfunktionen.  
Die Uhr kombiniert klassisches Uhrdesign mit moderner Sensorik und einer Webapplikation zur Datenanalyse.

Das Projekt verbindet:
- Hardwareentwicklung
- Webentwicklung
- MedTech
- IoT (Internet of Things)
- Datenanalyse

---

# Ziel des Projekts

Entwicklung einer funktionierenden Hybrid-Smartwatch mit:
- analogem Uhrdesign
- Live-Sensorik
- Sporttracking
- Schlaftracking
- Webdashboard
- Cloud-/Serveranbindung

---

# Hauptfunktionen

## Gesundheitsfunktionen
- Herzfrequenzmessung
- Schlaftracking
- Stressanalyse
- Recovery Score
- Health Score

## Sportfunktionen
- Schritte zählen
- Lauftracking
- Fahrradtracking
- Gym-/Workout-Modus
- Kalorienberechnung

## Webfunktionen
- Live-Dashboard
- Datenvisualisierung
- JSON-Server
- Cloud-Synchronisation
- Mock-Daten

---

# Hardware Blueprint

```txt
Sensoren
   ↓
ESP32 Mikrocontroller
   ↓
Bluetooth / WLAN
   ↓
JSON Server / Node.js
   ↓
Webapplikation
   ↓
Live Dashboard & Analyse
```

---

# Verwendete Hardware

## Mikrocontroller

### ESP32 Dev Board

Funktion:
- Hauptprozessor der Uhr
- Verarbeitung aller Sensordaten
- WLAN & Bluetooth Kommunikation

Eigenschaften:
- integriertes WLAN
- integriertes Bluetooth
- hohe Rechenleistung
- günstig und leicht programmierbar

Kosten:
ca. 8–15€

---

# Sensoren

## 1. MAX30102 – Pulssensor

Funktion:
- Herzfrequenz messen
- Sauerstoffsättigung messen
- Schlafanalyse unterstützen

Technologie:
PPG (Photoplethysmographie)

Funktionsweise:
- Grüne LEDs leuchten in die Haut
- Blut absorbiert Licht unterschiedlich
- Sensor erkennt Änderungen im Blutfluss
- Software berechnet Puls

Einsatz:
- Ruhepuls
- Sportpuls
- Stressanalyse
- Schlaftracking

Kosten:
ca. 5–10€

---

## 2. MPU6050 – Bewegungs- & Lagesensor

Funktion:
- Schritte erkennen
- Bewegung analysieren
- Sportarten erkennen
- Schlafbewegungen messen

Bestandteile:
- Beschleunigungssensor
- Gyroskop

Erkennt:
- Bewegungsrichtung
- Geschwindigkeit
- Armbewegungen
- Lageänderungen

Einsatz:
- Schrittzähler
- Lauftracking
- Fahrradtracking
- Workout-Erkennung

Kosten:
ca. 3–6€

---

## 3. Optional: GPS Modul

### NEO-6M GPS Modul

Funktion:
- Standort bestimmen
- Strecken messen
- Geschwindigkeit berechnen

Einsatz:
- Lauftracking
- Fahrradtracking
- Distanzmessung

Kosten:
ca. 10€

---

## 4. Optional: Höhenmesser

### BMP280 Sensor

Funktion:
- Höhenmeter messen
- Luftdruck messen
- Wetterdaten erfassen

Einsatz:
- Höhenanalyse
- Treppen zählen
- Wetterfunktionen

Kosten:
ca. 5€

---

# Display

## SSD1306 OLED Display

Funktion:
- Anzeige von:
  - Puls
  - Uhrzeit
  - Schritten
  - Statusmeldungen

Eigenschaften:
- kleines energiesparendes Display
- hohe Lesbarkeit
- kompakt

Kosten:
ca. 5€

---

# Analoges Uhrdesign

Die Uhr besitzt:
- echtes analoges Uhrwerk
- echte Zeiger
- klassisches Ziffernblatt

Smart-Funktionen werden im Gehäuse integriert.

Dadurch entsteht eine:
> Hybrid-Smartwatch

Inspiration:
- Withings
- Garmin Hybrid
- Citizen Smartwatch

---

# Gehäusebau

## Herstellungsmöglichkeiten

Mit:
- 3D-Drucker
- Lasercutter

können gefertigt werden:
- Gehäuse
- Sensorhalterungen
- Innenrahmen
- Uhrbandadapter

Materialien:
- PLA
- PETG
- Acryl

---

# Energieversorgung

## LiPo Akku

Funktion:
- Stromversorgung der Uhr

Zusätzlich:
- Ladecontroller
- USB-C Anschluss möglich

---

# Software Architektur

```txt
Sensoren → ESP32 → WLAN/Bluetooth → Server → Website
```

---

# Datenverarbeitung

## Ablauf

### 1. Datenerfassung
Sensoren oder Mock-Daten liefern:
- Puls
- Bewegung
- Schritte
- Schlafdaten

### 2. Verarbeitung
ESP32 verarbeitet Rohdaten.

### 3. Übertragung
Daten werden:
- per Bluetooth
ODER
- per WLAN

an den Server gesendet.

### 4. Speicherung
JSON-Server speichert Mock-Datenbanken:
- Pulsdaten
- Aktivitätsdaten
- Schlafdaten

### 5. Analyse
Algorithmen berechnen:
- Stresslevel
- Recovery Score
- Schlafqualität
- Kalorienverbrauch

### 6. Darstellung
Webdashboard zeigt:
- Diagramme
- Statistiken
- Mock-Live-Werte
- Trainingsdaten

---

# Webapplikation

## Technologien
- HTML
- CSS
- JavaScript
- JSON Server
- Fetch API

---

# Funktionen der Website

## Dashboard
Anzeige von:
- aktuellem Puls
- Schritten
- Schlafscore
- Stresslevel
- Recovery Score

---

## Sportanalyse
- Trainingsverlauf
- Pulszonen
- Kalorienverbrauch
- Aktivitätsdauer

---

## Schlafanalyse
- Schlafdauer
- Tiefschlaf
- Schlafqualität
- Schlafdiagramme

---

# Mögliche KI-/Analysefunktionen

## Fake-/Demo-KI möglich

Beispiele:
- „Ihre Regeneration ist optimal.“
- „Stresslevel erhöht.“
- „Schlafqualität verbessert sich.“

---

# Realistisch umsetzbare Funktionen

## Sehr gut machbar
✅ Pulsmessung  
✅ Schrittzähler  
✅ Bewegungserkennung  
✅ Schlaftracking basic  
✅ Webdashboard  
✅ WLAN/Bluetooth  
✅ Echtzeitdaten  
✅ Cloudsimulation  
✅ Sportmodi  

---

# Schwierige Funktionen

⚠ Wasserdichtes Schwimmtracking  
⚠ Medizinische Genauigkeit  
⚠ Miniaturisierung  
⚠ Hochpräzise Kalorienberechnung  

---

# Geschätzte Gesamtkosten

| Komponente | Preis |
|---|---|
| ESP32 | 10€ |
| MAX30102 | 8€ |
| MPU6050 | 5€ |
| OLED Display | 5€ |
| GPS Modul | 10€ |
| Akku + Ladeboard | 10€ |
| Uhrwerk | 10€ |
| 3D-Druck Material | 10€ |

## Gesamt:
ca. **50–80€**

---

# Besonderheiten des Projekts

Das Projekt kombiniert:
- Hardware
- Sensorik
- Programmierung
- Webentwicklung
- Medizintechnik
- Datenanalyse

Dadurch entsteht ein modernes IoT- und MedTech-System mit realer Funktionalität.

---

# Zusammenfassung

SPÖGL ist eine funktionierende Hybrid-Smartwatch mit:
- analogem Design
- digitaler Sensorik
- Sporttracking
- Gesundheitsanalyse
- Webdashboard

Das Projekt zeigt die Verbindung von:

> klassischer Technik + moderner Datenverarbeitung + Webtechnologie
````
