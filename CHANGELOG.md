# Changelog

Alle bemerkenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [2.0.1] - 2026-06-02

### ✅ Hinzugefügt
- `.editorconfig` für konsistente Codingstile
- `.eslintrc.json` für JavaScript Linting
- `tsconfig.json` für TypeScript Support
- `.prettierrc.json` für Code-Formatierung
- `DEPLOYMENT.md` mit Produktiv-Deployment Guide
- `CONTRIBUTING.md` mit Beitrag-Richtlinien
- `LICENSE` (MIT) Datei
- ESLint und Prettier in package.json

### 🐛 Behoben
- ✓ Duplizierte Datei `allergie - Kopie.html` gelöscht
- ✓ Navigation-Links in allen HTML-Dateien repariert (relative Pfade)
- ✓ `Start`-Link zeigt jetzt `../index.html` statt `index.html`
- ✓ Active-States in Navigation konsistent gesetzt

### 📚 Dokumentation
- Verbessertes `package.json` mit besserer Metadaten
- Neue Scripts: `lint`, `lint:fix`, `format`, `dev`
- Bessere Projekt-Struktur mit `.gitignore`

### ⚠️ Deprecated
- Inline `onclick` Handler (sollten durch Event-Listener ersetzt werden)

---

## [2.0.0] - 2026-05-XX

### Features
- Interaktives Quiz mit 4 Kategorien
- Self-Tests für psychologische Assessments
- Vergleichs-Tool für Medizintechnologien
- SPÖGL Integration (Wearable Data)
- Globale Suchfunktion
- Responsive Design

---

## Geplante Verbesserungen

- [ ] Service Worker für Offline-Support
- [ ] CSS/JS Minification & Bundling
- [ ] Image Optimization (WebP)
- [ ] Unit-Tests hinzufügen
- [ ] Accessibility Audit & Verbesserungen
- [ ] Performance Monitoring
- [ ] Dark-Mode Support
- [ ] Mehrsprachige UI (i18n)
