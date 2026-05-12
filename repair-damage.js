const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Behebe die Beschädigungen von den vorherigen aggressiven Runs
    content = content.replace(/à/g, ' ');  // à -> Leerzeichen
    content = content.replace(/—Æ/g, '–');  // —Æ -> –
    content = content.replace(/—/g, '–');  // Normalisiere — zu –
    content = content.replace(/—/g, '–');  // Nochmal für Sicherheit
    content = content.replace(/"/g, '"');  // Normalisiere quotes
    content = content.replace(/–+/g, ' – ');  // Normalisiere multiple dashes
    
    // Spezifische Fixes
    content = content.replace(/Vergleich von Medizintechnologien – MedTechGuide/, 
                              'Vergleich von Medizintechnologien – MedTechGuide');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Repaired: ' + path.relative('C:\\WMC\\Projekt_25', filePath));
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
      } else if (entry.isFile() && /\.html$/.test(entry.name)) {
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
console.log('Repaired ' + fixed + ' HTML files');
