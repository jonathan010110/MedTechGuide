# SPÖGL Installation & Quick Start

## ⚡ Schnellstart (3 Schritte)

### Schritt 1: Backend starten
```bash
cd server
npm install
npm start
```

Sollte zeigen:
```
✓ Server running on http://localhost:3000
✓ API Endpoint: http://localhost:3000/data
```

### Schritt 2: Website öffnen
Öffne in deinem Browser:
```
http://127.0.0.1:8000/spoegl.html
```

*(oder dein lokaler Server Port)*

### Schritt 3: Daten sehen!
✅ Dashboard aktualisiert sich automatisch
✅ Alle Animationen und Charts funktionieren
✅ Echtzeitdaten vom Backend

---

## 📋 Was wurde erstellt?

```
spoegl.html          ← Hauptseite mit allen Sektionen
css/spoegl.css       ← Dark Mode + Glassmorphism Design
js/spoegl.js         ← Vanilla JS + Daten-Fetching
server/server.js     ← Express.js Backend
server/db.json       ← Beispieldaten
server/package.json  ← NPM Dependencies
```

---

## 🎨 Sektionen

1. **Hero Section** - Produktpräsentation mit animierter Uhr
2. **Live Dashboard** - 6 Echtzeit-Metriken
3. **Technologie** - PPG-Sensoren, Bluetooth, Cloud
4. **Schlafanalyse** - Sleep Chart + KI Insights
5. **Sportmodi** - Laufen, Radfahren, Fitness
6. **Cloud & WebApp** - Datenfluss Diagramm
7. **Footer** - Links zurück zu MedTechGuide

---

## 🔄 Wie funktioniert's?

```
spoegl.js (Fetch API)
    ↓
http://localhost:3000/data
    ↓
Express Server (server.js)
    ↓
db.json (Mock-Daten)
    ↓
Seite aktualisiert mit animierten Countern
```

---

## 💡 Ohne Backend?

Wenn du keinen Backend starten möchtest:
- Öffne einfach `spoegl.html`
- JavaScript generiert automatisch Mock-Daten
- **Alles funktioniert** ohne Backend!

---

## 📊 Dashboard Metriken

| Metrik | Typ | Bereich |
|--------|-----|---------|
| Herzfrequenz | bpm | 60-100 |
| Schritte | Count | 0-10.000 |
| Schlaf | Stunden | 6-9 |
| Stress | % | 0-100 |
| Kalorien | kcal | 1000-2500 |
| Recovery | % | 0-100 |

---

## 🎯 Features

✅ 100% Responsive (Mobile, Tablet, Desktop)
✅ Dark Mode + Glassmorphism
✅ Animierte Counter & Progressbars
✅ Sleep Chart Canvas Rendering
✅ Heart Zone Visualization
✅ Watch Clock Animation
✅ Scroll Animations
✅ KI-Analyse Integration
✅ Express Backend mit CORS
✅ Fallback Mock Data

---

## 🚀 Nächste Schritte

1. Teste die Website auf Desktop & Mobile
2. Ändere Farben in `css/spoegl.css` (CSS Variables)
3. Passe Daten in `server/db.json` an
4. Integriere echte Sensor-Daten
5. Deploye auf echten Server

---

## 📱 Browser Support

Chrome, Firefox, Safari, Edge (alle modernen Versionen)

---

## 💬 Hilfe?

Siehe `server/README.md` für ausführliche Dokumentation!

---

Viel Spaß mit SPÖGL! 🌟
