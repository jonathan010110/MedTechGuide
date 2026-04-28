const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Entferne ALLE Fehl-Codes und ersetze sie mit leer
    // Das sind meist Überreste von fehlerhafter UTF-8
    
    // Häufige fehlerhafte Muster
    content = content.replace(/–/g, '–');           // – -> –
    content = content.replace(/–¬/g, '"');          // –¬ -> "
    content = content.replace(/–¢/g, '•');          // –¢ -> •
    content = content.replace(/•/g, '•');          // • -> •
    content = content.replace(/"/g, '"');          // " -> "
    content = content.replace(//g, '');             // Generisches  entfernen
    content = content.replace(/–/g, '–');           // – zu –
    content = content.replace(/–/g, '–');           // – zu –
    content = content.replace(/–/g, '–');           // – zu –
    content = content.replace(//g, '');            //  entfernen
    content = content.replace(//g, '');            //  entfernen
    
    // Title-spezifische Reparatur
    content = content.replace(
      /Vergleich von Medizintechnologien [^M]*MedTechGuide/,
      'Vergleich von Medizintechnologien – MedTechGuide'
    );
    content = content.replace(
      /Quiz [^M]*MedTechGuide/,
      'Quiz – MedTechGuide'
    );
    content = content.replace(
      /MedTechGuide [^S]*Schulprojekt/,
      'MedTechGuide – Schulprojekt'
    );
    
    if (content !== original) {
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
