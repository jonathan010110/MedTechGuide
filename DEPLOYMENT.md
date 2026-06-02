# Deployment Guide - MedTechGuide

## Lokale Entwicklung

### Einfacher Test (nur Frontend)
```bash
# Python 3 (Unix/macOS/Windows)
cd c:\Users\admin\Downloads\MedTechGuide-repo
python -m http.server 8000

# Dann öffne: http://localhost:8000
```

### Mit Backend (API + Frontend)
```bash
# Terminal 1: Frontend-Server (Port 8000)
cd c:\Users\admin\Downloads\MedTechGuide-repo
python -m http.server 8000

# Terminal 2: Backend-Server (Port 3001)
cd c:\Users\admin\Downloads\MedTechGuide-repo\server
npm install
npm start

# Zugriff:
# - Frontend: http://localhost:8000
# - SPÖGL App: http://localhost:8000/spoegl.html
# - API: http://localhost:3001
```

## Produktiv-Deployment

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)
```bash
# Die gesamte repo ist statisch - kein Build nötig
# Einfach den Root-Ordner hochladen
# Wichtig: 
# - index.html muss im Root sein
# - html/ und css/, js/, images/ Ordner müssen existieren
# - SPÖGL benötigt Backend (kann nicht auf reinem Static-Hosting laufen)
```

### Option 2: Node.js Server
```bash
# Installation
npm install

# Production starten
npm run start:web    # Frontend auf Port 8080
npm run start:api    # API auf Port 3001
```

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8000 3001
CMD ["npm", "run", "start:web"]
```

## Umgebungsvariablen

Erstelle `.env` im Root:
```
API_URL=http://localhost:3001
NODE_ENV=production
PORT=8000
```

In JavaScript nutzen (wenn Bundler vorhanden):
```javascript
const API_URL = process.env.API_URL || 'http://localhost:3001';
```

## Performance-Optimierungen

- [ ] CSS/JS minifizieren
- [ ] Images optimieren (WebP format)
- [ ] Service Worker hinzufügen (Offline-Support)
- [ ] Gzip/Brotli compression aktivieren
- [ ] CDN für statische Assets nutzen

## Monitoring & Logging

```javascript
// Error Tracking (z.B. mit Sentry)
if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: 'YOUR_SENTRY_DSN' });
}
```

## Häufige Probleme

| Problem | Lösung |
|---------|--------|
| Quiz-Daten fehlen | Backend muss laufen: `npm run start:api` |
| CORS-Fehler | Backend CORS-Header prüfen in `server.js` |
| Images laden nicht | Bildpfade relativ (z.B. `../images/allergie-1.jpg`) |
| Navigation funktioniert nicht | HTML-Links im `html/`-Ordner müssen `../index.html` verwenden |

---

**Last Updated:** 2026-06-02
