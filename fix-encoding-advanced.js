const fs = require('fs');
const path = require('path');

// Erweiterte Map von fehlerhaften UTF-8 Byte-Sequenzen
const replacements = [
  // Häufige Ersetzungen
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['ÃÂ¡', 'á'], ['ÃÂ­', 'í'], ['ÃÂ³', 'ó'],
  ['ÃÂ¹', 'ù'], ['ÃÂ¢', 'Ã¢'], ['Ãâ¢', 'Ã'],
  ['Ã–', 'Ö'], ['Ãâ', 'Ä'],
  
  // En-Dash und Em-Dash
  ['–', '–'], ['–', '—'], ['Ã¢â¬Å', '"'], ['Ã¢â¬\u009d', '"'],
  
  // Ellipsis und spezielle Zeichen
  ['Ã¢â¬Â¦', '…'], ['Ã¢â¬Â¹', 'â¹'], ['Ã¢â¬Âº', 'âº'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['Ã¢âÂ¢', 'â¢'],
  
  // Emojis (double-encoded)
  ['Ã°Å¸Å½Â¯', 'ð¯'], ['Ã°Å¸Â§ ', 'ð§ '], ['Ã¢Å¡–Ã¯Â¸', 'âï¸'], ['Ã°Å¸"Å ', 'ð'],
  ['Ã°Å¸Â©Âº', 'ð©º'], ['Ã°Å¸'Â¾', 'ð¾'], ['Ã°Å¸"Â§', 'ð§'], ['Ã°Å¸Â§Â¬', 'ð§¬'],
  ['Ã°Å¸Â§Â¿', 'ð§¿'], ['Ã°Å¸Â¤–', 'ð¤'], ['Ã°Å¸'', 'ð¡'], ['Ã¢Å…', 'â'],
  ['Ã¢âº"', 'â'], ['Ã°Å¸"', 'ð'], ['Ã°Å¸"', 'ð'], ['Ã°Å¸"', 'ð'],
  
  // Weitere problematische Sequenzen
  ['Ã¢â¬â¢', '''], ['Ã¢â¬Ë', '''], ['Ã¢â¬Âª', ''], ['Ã¢â¬«', ''],
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    let modified = false;
    
    for (const [wrong, correct] of replacements) {
      if (content.includes(wrong)) {
        content = content.split(wrong).join(correct);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('â Fixed: ' + path.relative(process.cwd(), filePath));
      return true;
    }
    return false;
  } catch (e) {
    console.error('â Error in ' + filePath + ': ' + e.message);
    return false;
  }
}

// Find all HTML, JS, and CSS files
function walk(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', '.git'].includes(entry.name)) {
      count += walk(full);
    } else if (entry.isFile() && /\.(html|js|css|json)$/i.test(entry.name)) {
      if (fixFile(full)) count++;
    }
  }
  return count;
}

const fixed = walk('.');
console.log('\nâ Encoding-Reparatur abgeschlossen: ' + fixed + ' Dateien repariert');
