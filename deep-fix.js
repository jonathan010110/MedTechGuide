const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    // Lese als Binary um die rohen Bytes zu bekommen
    let buf = fs.readFileSync(filePath);
    const original = buf.toString();
    
    // Konvertiere zu String - versuche UTF-8
    let content = buf.toString('utf8');
    
    // Wenn es noch Fehler hat, lese als Latin1 und konvertiere
    if (content.includes('–') || content.includes('Â')) {
      content = buf.toString('latin1');
    }
    
    const originalContent = content;
    
    // ALLE möglichen Kombinationen von Fehler-Sequenzen
    // Diese sind UTF-8 Bytes, die als Latin1 oder ISO-8859-1 interpretiert wurden
    
    // 3-Byte UTF-8 als 2x Latin1 (–Â... Sequenzen)
    content = content.split('–ÂÂ¢âÂÂÂ¬').join('â');  // En-dash doppelt falsch
    content = content.split('–ÂÂ¢âÂÂÂ­').join('â');  // Em-dash doppelt falsch
    content = content.split('–ÂÂ¢âÂÂ').join('');     // Basis-Fehler
    content = content.split('âÂÂ').join('');        // Weitere Basis-Fehler
    content = content.split('–Â').join('');         // Generisches – Â Präfix
    
    // Standard-Fehler (wenn nur 1x falsch kodiert)
    content = content.split('–Â¼').join('ü');
    content = content.split('–Â¶').join('ö');
    content = content.split('–Â¤').join('ä');
    content = content.split('ââ–¬"').join('â');
    content = content.split('ââ–¬"').join('â');
    content = content.split('Â«').join('«');
    content = content.split('Â»').join('»');
    content = content.split('Â°').join('°');
    
    // Spezielle HTML-Entities
    content = content.split('–').join('â');
    content = content.split('—').join('â');
    content = content.split('–').join('â');
    content = content.split('—').join('â');
    content = content.split('«').join('«');
    content = content.split('»').join('»');
    content = content.split('°').join('°');
    
    // Wheelchair icon Fehler
    content = content.split('âÂÂÂ¿').join('â¿');
    content = content.split('ââ¢Â¿').join('â¿');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
