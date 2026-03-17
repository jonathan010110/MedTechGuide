# MedTechGuide – Technische Dokumentation

## 1) Überblick
MedTechGuide ist eine modulare Web-App mit Three.js, die drei medizinische Geräte als programmatisch erzeugte 3D-Simulatoren darstellt:
- Pulsoximeter
- EKG-Monitor
- Blutdruckmessgerät

Alle 3D-Modelle werden ausschließlich aus Geometrien (`BoxGeometry`, `CylinderGeometry`, `TorusGeometry`, `PlaneGeometry`, `SphereGeometry`) aufgebaut. Es werden keine externen 3D-Modelle geladen.

## 2) Projektstruktur
- `index.html`: App-Shell, Sidebar, Controls, Canvas
- `style.css`: Dark-Theme, Responsive Layout, UI-States
- `main.js`: Einstiegspunkt, Initialisierung
- `modules/core/App3D.js`: Three.js Core (Szene, Kamera, Licht, Loop, Raycasting, Gerätewechsel)
- `modules/core/SignalCanvases.js`: Canvas-Signalrenderer für Pulsoximeter und EKG
- `modules/devices/PulseOximeter.js`: 3D-Modell + Display-Animation + LED-Interaktion
- `modules/devices/EKGMonitor.js`: 3D-Modell + EKG-Screen + HF-abhängige Kurve
- `modules/devices/BloodPressureMonitor.js`: 3D-Modell + Starttaste + Mess-Trigger
- `modules/ui/setupUI.js`: Sidebar-Bedienung, Device-Switch, Loader

## 3) 3D-Aufbau der Geräte

### Pulsoximeter
Aufbau aus:
- Unter- und Oberteil des Clips (`BoxGeometry`)
- Scharnier (`CylinderGeometry`)
- Displayrahmen (`PlaneGeometry` + Material)
- LED im Inneren (`SphereGeometry`, emissives Material)
- Akzentring (`TorusGeometry`)

Animationen:
- LED-Glühen über `emissiveIntensity`
- Displaywerte (SpO₂ + Puls) und Pulswelle via Canvas-Textur

### EKG-Monitor
Aufbau aus:
- Monitorgehäuse (`BoxGeometry`)
- Bezel + Screen-Fläche (`BoxGeometry` + `PlaneGeometry`)
- Standfuß (`CylinderGeometry`)
- Kabelbogen (`TorusGeometry`)
- Interaktiver Drehknopf (`CylinderGeometry`)

Animationen:
- EKG-Kurve als Canvas-Signaltextur
- HF-Änderung über Slider beeinflusst zeitliche Dichte der Kurve in Echtzeit

### Blutdruckmessgerät
Aufbau aus:
- Hauptgerät (`BoxGeometry`)
- Displayrahmen + Display (`BoxGeometry` + `PlaneGeometry`)
- Starttaste (`CylinderGeometry`, emissiv)
- Schlauch (`TorusGeometry`)
- Manschette (`CylinderGeometry`, offen + innen)

Animationen:
- Starttaste pulsiert
- Messlogik: Druck steigt zunächst an, fällt dann kontrolliert ab, danach Ergebnisanzeige

## 4) Signalvisualisierung

### Pulsoximeter-Signal
- Canvas zeichnet numerische Werte (`SpO₂`, `bpm`)
- Pulswelle als vereinfachte sinusförmige Basis + periodischer Peak
- Canvas wird pro Frame aktualisiert und als `CanvasTexture` auf den Display-Plane gelegt

### EKG-Signal
- Canvas zeichnet Gitter + vereinfachte EKG-Form (P-Welle, QRS-Komplex, T-Welle)
- Herzfrequenz (`bpm`) skaliert die zeitliche Abfolge des Signals
- Darstellung mathematisch vereinfacht, aber visuell plausibel

## 5) Raycasting (Klick-Erkennung)
In `App3D` wird Raycasting so umgesetzt:
1. Maus-/Pointer-Position relativ zum Canvas erfassen
2. In Normalized Device Coordinates (NDC) umrechnen: Bereich `[-1, 1]`
3. `raycaster.setFromCamera(pointer, camera)` erzeugt den Klickstrahl
4. `intersectObjects` prüft Treffer auf interaktive Meshes
5. Bei Treffer wird anhand einer Lookup-Map (`mesh.uuid -> Aktion`) das passende Info-Panel aktualisiert und ggf. eine Aktion ausgelöst (z. B. Blutdruck-Messstart)

Vorteil:
- Exakte Bauteil-Interaktion ohne separate HTML-Hotspots
- Einfach erweiterbar durch zusätzliche interaktive Meshes

## 6) Gerätewechsel & Übergänge
Beim Wechseln zwischen Geräten:
- Vorheriges Gerät wird weich ausgeblendet/skaliert
- Neues Gerät wird eingeblendet/skaliert
- Übergang wird zeitbasiert im Animationsloop berechnet

Dadurch entstehen „Smooth Transitions“ ohne zusätzliche Bibliothek.

## 7) Bedienung
- Sidebar: Auswahl des aktiven Geräts
- EKG: Herzfrequenz-Slider (40–180 bpm)
- Blutdruck: Messung per Klick auf 3D-Starttaste
- 3D-Ansicht: OrbitControls (Drehen, Zoomen, Verschieben)

## 8) Browser-Start
Da ES-Module und Import-Map verwendet werden, sollte die App über einen lokalen Server gestartet werden.

Beispiel:
- `python -m http.server 8080`
- Aufruf: `http://localhost:8080/MedTechGuide/`

## 9) Erweiterungsideen
- Zusätzliche Messparameter (z. B. Perfusionsindex)
- Historie/Trenddiagramm im UI
- Geräusch-/Alarmzustände bei Grenzwertverletzung
- Weitere Geräte (z. B. Spirometer, Defibrillator)
- Optional GSAP für komplexere Kamerafahrten

## 10) Wartungshinweise
- Neue Geräte als eigenes Modul unter `modules/devices/` anlegen
- Interaktive Bauteile stets im `interactive`-Array des Gerätemoduls registrieren
- Signal-Rendering zentral in `SignalCanvases.js` halten, um Redundanz zu vermeiden
- UI-Logik in `setupUI.js` bündeln; Three.js-Logik in `App3D.js` belassen
