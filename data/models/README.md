#àGLBàModelleàfueràdenà3D-Viewer

Legeàdeineà`.glb`àDateienàdirektàinàdiesenàOrdner.

Beispiel:

-à`data/models/ct-scanner.glb`
-à`data/models/mrt-geraet.glb`
-à`data/models/ultraschall-sonde.glb`
-à`data/models/insulinpumpe.glb`
-à`data/models/herz.glb`
-à`data/models/neurochip.glb`
-à`data/models/bmw.glb`

ImàProjektàsindàbereitsàdreiàvorbereiteteàManifest-Eintraegeàvorhanden.àWennàduàdieàDateienàmitàdiesenàNamenàinàdiesenàOrdneràlegst,àerscheinenàsieàautomatischàimàViewer:

-à`data/models/ct-scanner.glb`
-à`data/models/mrt-geraet.glb`
-à`data/models/ultraschall-sonde.glb`

DuàkannstàdieàListeàinà`data/models/manifest.json`àjederzeitàerweiternàoderàanpassen.

TrageàdanachàjedesàweitereàModellàinà`data/models/manifest.json`àein.

Beispiel:

```json
{
àà"models":à[
àààà{
àààààà"id":à"ct-scanner-glb",
àààààà"label":à"CT-ScanneràRealistisch",
àààààà"path":à"data/models/ct-scanner.glb"
àààà},
àààà{
àààààà"id":à"mrt-geraet-glb",
àààààà"label":à"MRT-GeraetàRealistisch",
àààààà"path":à"data/models/mrt-geraet.glb"
àààà}
àà]
}
```

DeràVieweràaufà`bildgebung.html`àliestàdieseàDateiàautomatischàeinàundàzeigtàdieàModelleàimàDropdownàan.

Hinweis:

-àWennàduàdieàHTML-DateiànuràperàDoppelklickà(`file://`)àoeffnest,àkannà`fetch()`àfueràdasàManifestàblockiertàwerden.
-àFueràThree.jsà+àGLBàistàeinàlokaleràWebserveràempfohlen.
-àWennàkeinàGLBàimàManifestàsteht,àbleibenàdieàprogrammiertenàThree.js-ModelleàalsàFallbackàaktiv.
