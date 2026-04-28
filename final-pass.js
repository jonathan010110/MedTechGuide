const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Präzise Replacements OHNE Emoji-Probleme
    const patterns = [
      // Wheelchair Icon
      ['♿', '♿'],
      
      // Ellipsis
      ['…', '…'],
      
      // Dangling characters (Fehler)
      ['–', '–'],  // En-dash
      ['–', '—'],  // Em-dash
      ['"', '"'],
      ['€\u009d', '"'],
      [''', "'"],
      [''', "'"],
      
      // Suchfeld
      ['Suche…', 'Suche…'],
      
      // Standalone error characters
      ['', ''],
      ['', ''],
    ];
    
    for (const [wrong, correct] of patterns) {
      if (content.indexOf(wrong) !== -1) {
        content = content.replace(new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correct);
      }
    }
    
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
console.log('Final pass: ' + fixed + ' files');
