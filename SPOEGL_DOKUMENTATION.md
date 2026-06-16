# SPÖGL – Hybrid-Smartwatch Projektdokumentation

## Die Idee

SPÖGL ist im Prinzip einfach: Eine normale Uhr. Keine Screens, keine Ablenkung. Aber mit Sensoren.

Warum? Weil Smartwatches mit großen Bildschirmen nerven. Mit SPÖGL trägst du eine klassische Uhr – und deine Gesundheitsdaten siehst du online.

Die Sensoren:
- Ein Puls-Sensor (unter der Uhr)
- Ein Bewegungssensor (misst Schritte)
- Ein Mini-Chip (der ESP32)
- Bluetooth (sendet die Daten)

Das wars. Keine Revolution, aber praktisch.

---

## Was SPÖGL misst

**Gesundheit:**
- Herzschlag (in bpm)
- Schlaf (wie lange, welche Phasen)
- Stress-Level
- Recovery (wie gut regenerierst du)

**Bewegung:**
- Schritte pro Tag
- Laufen, Radfahren, Training
- Kalorien
- Höhenmeter

**Daten:**
- Alles lädt auf die Cloud
- Du siehst es online auf einem Dashboard
- Die Software lernt mit der Zeit

---

## Hardware

### Hauptchip: ESP32
- Billig (~10€)
- Macht den Job
- Hat WLAN & Bluetooth built-in
- Genau richtig für das Projekt

### Sensoren
1. **MAX30102** (Pulssensor) – misst dein Herz
2. **MPU6050** (Bewegungssensor) – misst deine Bewegung
3. **Optional: DS3231** (Echtzeituhr) – weil eine Uhr Zeit braucht

Alle zusammen kosten unter 30€. Keine teuren Komponenten.

---

## Die Web-Seite

Die SPÖGL Website zeigt deine Live-Daten:
- Dashboard mit aktuellen Werten
- Schlaf-Charts (was war letzte Nacht los?)
- Sport-Statistiken
- Trends über Zeit

Backend: Node.js + Express
Frontend: Vanilla JavaScript (kein React, kein Vue)
Styling: Modern Dark Mode + Glasmorphism

---

## Hardware Blueprint

```
┌─────────────────┐
│  Sensoren       │  ← MAX30102, MPU6050, etc.
└────────┬────────┘
         │
┌────────▼────────┐
│ ESP32 Board     │  ← Sammelt Daten, sendet via Bluetooth
└────────┬────────┘
         │
┌────────▼────────┐
│ Smartphone App  │  ← Empfängt Daten via BT
└────────┬────────┘
         │
┌────────▼────────┐
│ Cloud Server    │  ← Speichert alles
└────────┬────────┘
         │
┌────────▼────────┐
│ Web Dashboard   │  ← Du siehst alles hier
└─────────────────┘
```

---

## Software Stack

- **Hardware:** C++ (Arduino IDE)
- **Backend:** Node.js + Express.js
- **Frontend:** HTML + CSS + Vanilla JavaScript
- **Datenspeicher:** JSON (einfach, effizient)
- **Kommunikation:** Bluetooth + WLAN

Alles Open Source. Keine teuren Lizenzen.

---

## Die größten Herausforderungen

1. **Sensor-Kalibrierung:** Puls-Sensoren sind knifflig. Müssen genau positioniert sein.
2. **Akkuverbrauch:** ESP32 verbraucht Strom. Muss batterieschonend programmiert werden.
3. **Datengenauigkeit:** Messdaten sind nie 100% genau. Ungenaue Werte müssen gefiltert werden.
4. **Benutzererfahrung:** Die Web-App muss schnell sein und einfach zu verstehen.

---

## Timeline

| Phase | Dauer | Status |
|-------|-------|--------|
| Hardware-Setup | 1 Woche | ✓ Fertig |
| Sensor-Programmierung | 2 Wochen | ✓ Fertig |
| Bluetooth-Kommunikation | 1 Woche | ✓ Fertig |
| Web-Backend | 1 Woche | ✓ Fertig |
| Web-Frontend | 1 Woche | ✓ Fertig |
| Testing & Debugging | 1 Woche | In Arbeit |

---

## Kosten (ungefähr)

| Komponente | Kosten |
|-----------|--------|
| ESP32 Dev Board | 10€ |
| Sensoren (3 Stück) | 15€ |
| Batterie + Gehäuse | 10€ |
| Diverse Komponenten | 10€ |
| **Gesamt Hardware** | **~45€** |
| Web-Hosting | 0-10€/Monat |

---

## Das Projekt zeigt

- ✅ Wie man Sensordaten misst
- ✅ Wie man Daten über Bluetooth sendet
- ✅ Wie man ein API baut
- ✅ Wie man ein modernes Web-Dashboard macht
- ✅ Dass man keine teuren Tools braucht

Einfach. Praktisch. Funktioniert.

---

## Nächste Schritte

1. Hardware zusammenbauen
2. Sensoren kalibrieren
3. Daten in die Cloud schieben
4. Dashboard verbessern
5. Real-world Testing

Klingt einfach. Ist es auch (meistens).
