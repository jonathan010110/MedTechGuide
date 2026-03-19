# GLB Modelle fuer den 3D-Viewer

Lege deine `.glb` Dateien direkt in diesen Ordner.

Beispiel:

- `data/models/ct-scanner.glb`
- `data/models/mrt-geraet.glb`
- `data/models/ultraschall-sonde.glb`
- `data/models/insulinpumpe.glb`
- `data/models/herz.glb`
- `data/models/neurochip.glb`
- `data/models/bmw.glb`

Im Projekt sind bereits drei vorbereitete Manifest-Eintraege vorhanden. Wenn du die Dateien mit diesen Namen in diesen Ordner legst, erscheinen sie automatisch im Viewer:

- `data/models/ct-scanner.glb`
- `data/models/mrt-geraet.glb`
- `data/models/ultraschall-sonde.glb`

Du kannst die Liste in `data/models/manifest.json` jederzeit erweitern oder anpassen.

Trage danach jedes weitere Modell in `data/models/manifest.json` ein.

Beispiel:

```json
{
  "models": [
    {
      "id": "ct-scanner-glb",
      "label": "CT-Scanner Realistisch",
      "path": "data/models/ct-scanner.glb"
    },
    {
      "id": "mrt-geraet-glb",
      "label": "MRT-Geraet Realistisch",
      "path": "data/models/mrt-geraet.glb"
    }
  ]
}
```

Der Viewer auf `bildgebung.html` liest diese Datei automatisch ein und zeigt die Modelle im Dropdown an.

Hinweis:

- Wenn du die HTML-Datei nur per Doppelklick (`file://`) oeffnest, kann `fetch()` fuer das Manifest blockiert werden.
- Fuer Three.js + GLB ist ein lokaler Webserver empfohlen.
- Wenn kein GLB im Manifest steht, bleiben die programmierten Three.js-Modelle als Fallback aktiv.
