const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // PRÄZISE Liste von WIRKLICH fehlerhaften Patterns
    // Nur die, die definitiv falsch sind
    
    const patterns = [
      // Wheelchair Icon
      ['♿', '♿'],
      
      // Ellipsis
      ['…', '…'],
      ['…', '…'],
      
      // Sonderzeichen die nicht eigenständig vorkommen sollten
      ['Ÿ', ''],  // Fehler-Emoji-Start
      ['ŸŽ¯', '🎯'],
      ['Ÿ§ ', '🧠'],
      ['Ÿ'¾', '💾'],
      ['Ÿ"Š', '📊'],
      
      // Quotes (nur wenn Teil von fehlerhaften Sequenzen)
      ['–', '–'],  // En-dash
      ['–', '—'],  // Em-dash
      ['"', '"'],
      ['€\u009d', '"'],
      [''', "'"],
      [''', "'"],
      
      // Nur bekannte fehlerhafte Umlaute/Sonderzeichen
      // ABER: Nicht die normalen gültigen Zeichen
      
      // Dangling accent characters (sollten nicht vorkommen)
      ['', ''],  // Standalone '' ist immer Fehler
      ['›', ''],  // Standalone sollte nicht sein
      ['™', ''],  // Standalone sollte nicht sein
      ['š', ''],  // Standalone sollte nicht sein
    ];
    
    for (const [wrong, correct] of patterns) {
      if (content.indexOf(wrong) !== -1) {
        content = content.split(wrong).join(correct);
      }
    }
    
    // Spezifische häufige Fehler
    content = content.replace(/Suche…/g, 'Suche…');  // Suchfeld-Fehler
    
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
console.log('Precision fix: ' + fixed + ' files');
