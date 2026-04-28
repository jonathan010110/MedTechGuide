const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    let content = buf.toString('utf8');
    const original = content;
    
    // Wenn die Datei UTF-8 doppelt-kodiert ist, sieht man Muster wie:
    // c383 (UTF-8 für "Ã") = Byte C3 (UTF-8 Prefix für 2-Byte Zeichen)
    // c283 (UTF-8 für "Â") = Byte C2 (UTF-8 Prefix)
    
    // Versuche die häufigsten doppelkodierten Patterns zu finden und zu reparieren
    // Pattern: c383 + weiteres Byte = ü/ö/ä
    
    // Diese Replacements fixen die doppelt-kodierten UTF-8 Sequenzen
    content = content.split('\u00c3\u0083\u00c2\u00bc').join('ü');     // Ã…¼ -> ü
    content = content.split('\u00c3\u0083\u00c2\u00b6').join('ö');     // Ã…¶ -> ö
    content = content.split('\u00c3\u0083\u00c2\u00a4').join('ä');     // Ã…¤ -> ä
    
    // Allgemeiner Ansatz: Ersetze "C3 83" (which is UTF8 encoding of "Ã") mit "C3" (UTF8 for single byte char)
    // Das ist kompliziert, also nutze String-Patterns
    
    // Pattern wie "ÃÂÃÂ..." sind Zeichen, die mehrfach fehlerhaft kodiert sind
    // Versuche diese direkt zu erkennen
    const hexPatterns = [
      { hex: 'c383c283c382c283c383c282c382c2a2c383c2a2c383c282c382c282c383c282c382c2ac', text: '–' },
    ];
    
    // Simpler: Versuche alle Bytes c3 81/82/83/84/85/86... (doppelt-kodiert) zu fixen
    // c3 81 = Ã, c3 82 = Ã‚, usw.
    // Diese sind Marker für Doppelkodierung
    
    // Extrahiere Hex und versuche zu dekodieren
    const hexStr = buf.toString('hex');
    let newHex = hexStr;
    
    // Bekannte doppelt-kodierte Sequenzen (Hex)
    const hexReplacements = [
      // c383c283... Patterns (doppelt kodierte Umlaute)
      { from: 'c383c283c382bc', to: 'c3bc' },    // Ã…¼ -> ü
      { from: 'c383c283c282b6', to: 'c3b6' },    // ü
      { from: 'c383c283c282a4', to: 'c3a4' },    // ä
      // Andere doppelte Kodierungen
      { from: 'c383c283', to: 'c3' },            // Generisches Ã... -> einzelnes 3-Byte UTF8
    ];
    
    for (const rep of hexReplacements) {
      newHex = newHex.split(rep.from).join(rep.to);
    }
    
    if (newHex !== hexStr) {
      const newBuf = Buffer.from(newHex, 'hex');
      fs.writeFileSync(filePath, newBuf);
      console.log('Fixed: ' + path.relative('C:\\WMC\\Projekt_25', filePath));
      return true;
    }
  } catch (e) {
    console.error('Error: ' + filePath + ' - ' + e.message);
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
