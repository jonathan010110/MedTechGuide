const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let buf = fs.readFileSync(filePath);
    let modified = false;
    
    // Replacement Character (U+FFFD) in UTF-8 ist: EF BF BD
    const replacementCharBuf = Buffer.from([0xEF, 0xBF, 0xBD]);
    
    // Ersetze alle Replacement Characters mit wahrscheinlichen Originals
    // Das ist ein Gamble, aber besser als nichts
    
    // Häufige Muster:
    // "Vergleich von Medizintechnologien [REPLACEMENT] MedTechGuide" -> das sollte "–" sein
    // "[REPLACEMENT] Schulprojekt" -> das sollte "–" sein
    
    const endashBuf = Buffer.from('–', 'utf8');  // U+2013 (–)
    
    let pos = 0;
    while ((pos = buf.indexOf(replacementCharBuf, pos)) !== -1) {
      buf = Buffer.concat([
        buf.slice(0, pos),
        endashBuf,
        buf.slice(pos + replacementCharBuf.length)
      ]);
      modified = true;
      pos += endashBuf.length;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, buf);
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
