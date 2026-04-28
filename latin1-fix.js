const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    // Lese als Latin1 (ISO-8859-1) um die fehlerhaft kodierten UTF-8 Bytes als Zeichen zu bekommen
    const buf = fs.readFileSync(filePath);
    const asLatin1 = buf.toString('latin1');
    
    // Versuche jetzt zurück in UTF-8 zu enkodieren
    // Dies nimmt die Latin1-Bytes und interpretiert sie als korrekte UTF-8 Bytes
    const correctBytes = Buffer.from(asLatin1, 'latin1');
    const asUTF8 = correctBytes.toString('utf8');
    
    // Wenn das Ergebnis besser aussieht (weniger fehlerhafte Zeichen), schreib es zurück
    const errorChars = (asUTF8.match(/[âðŸ«»°©®½¤\ufffd]/g) || []).length;
    const originalErrors = (asLatin1.match(/[âðŸ«»°©®½¤\ufffd]/g) || []).length;
    
    if (errorChars < originalErrors || (errorChars === 0 && originalErrors > 0)) {
      fs.writeFileSync(filePath, asUTF8, 'utf8');
      console.log('Fixed: ' + path.relative('C:\\WMC\\Projekt_25', filePath));
      return true;
    }
  } catch (e) {
    // ignore
  }
  return false;
}

function walkDir(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !['node_modules', '.git'].includes(entry.name)) {
        walkDir(fullPath);
      } else if (entry.isFile() && /\.(html|js|css|json|md)$/.test(entry.name)) {
        if (fixFile(fullPath)) {
          fixed++;
        }
      }
    }
  } catch (e) {
    // ignore
  }
}

walkDir('C:\\WMC\\Projekt_25');
console.log('Fixed ' + fixed + ' files');
