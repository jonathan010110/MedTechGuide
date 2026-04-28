const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    const hexStr = buf.toString('hex');
    let newHex = hexStr;
    
    // Dekodiere alle doppelt-kodierten UTF-8 Sequenzen
    // Pattern: c3XX (UTF-8 für 2-Byte Zeichen) codiert als c383c2XX
    // Das bedeutet: c3 (0xC3) wurde als UTF-8 -> c383 (0xC3 0x83)
    //              XX wurde als UTF-8 -> c2XX (0xC2 0xXX)
    
    // Generischer Fix: Ersetze c383c2 Pattern mit c3
    newHex = newHex.split('c383c2').join('c3');
    
    // Auch andere häufige Patterns
    // c282 = UTF-8 für "Â" (0xC2 als 0xC2 0x82)
    // Sollte c2 sein (für 2-Byte UTF-8 Start)
    newHex = newHex.split('c282').join('c2');
    
    // c381 = UTF-8 für "–" (0xC3 als 0xC3 0x81)
    newHex = newHex.split('c381').join('c3');
    
    if (newHex !== hexStr) {
      const newBuf = Buffer.from(newHex, 'hex');
      fs.writeFileSync(filePath, newBuf);
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
