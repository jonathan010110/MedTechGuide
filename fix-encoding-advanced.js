const fs = require('fs');
const path = require('path');

// Erweiterte Map von fehlerhaften UTF-8 Byte-Sequenzen
const replacements = [
  // Häufige Ersetzungen
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['–ÂÂÂ–Â–ÂÂ¡', 'á'], ['–ÂÂÂ–Â–ÂÂ­', 'í'], ['–ÂÂÂ–Â–ÂÂ³', 'ó'],
  ['–ÂÂÂ–Â–ÂÂ¹', 'ù'], ['–ÂÂÂ–Â–ÂÂ¢', '–ÂÂÂ¢'], ['–ÂÂÂâÂÂÂÂ¢', '–ÂÂÂ'],
  ['–ÂÂÂâ', 'Ö'], ['–ÂÂÂâÂÂÂÂ', 'Ä'],
  
  // En-Dash und Em-Dash
  ['â', 'â'], ['â', 'â'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', '"'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬\u009d', '"'],
  
  // Ellipsis und spezielle Zeichen
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¦', 'â¦'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¹', 'âÂÂÂÂ¹'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂº', 'âÂÂÂÂº'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['–ÂÂÂ¢âÂÂÂÂ–Â–ÂÂ¢', 'âÂÂÂÂ¢'],
  
  // Emojis (double-encoded)
  ['–Â°–ÂÂÂ¸–ÂÂ½–Â–ÂÂ¯', '–°ÂÂÂÂÂÂ¯'], ['–Â°–ÂÂÂ¸–Â–ÂÂ§ ', '–°ÂÂÂÂ§ÂÂ '], ['–ÂÂÂ¢–ÂÂÂ¡â–ÂÂÂ¯–Â–ÂÂ¸', 'âÂÂÂÂ–Â¯ÂÂ¸ÂÂ'], ['–Â°–ÂÂÂ¸"–ÂÂÂ ', '–°ÂÂÂÂÂÂ'],
  ['–Â°–ÂÂÂ¸–Â–Â©–Â–ÂÂº', '–°ÂÂÂ©ÂÂº'], ['–Â°–ÂÂÂ¸'–Â–ÂÂ¾', '–°ÂÂÂÂÂÂ¾'], ['–Â°–ÂÂÂ¸"–Â–ÂÂ§', '–°ÂÂÂÂÂÂ§'], ['–Â°–ÂÂÂ¸–Â–ÂÂ§–Â–ÂÂ¬', '–°ÂÂÂÂ§ÂÂ¬'],
  ['–Â°–ÂÂÂ¸–Â–ÂÂ§–Â–ÂÂ¿', '–°ÂÂÂÂ§ÂÂ¿'], ['–Â°–ÂÂÂ¸–Â–ÂÂ¤â', '–°ÂÂÂÂ¤ÂÂ'], ['–Â°–ÂÂÂ¸'', '–°ÂÂÂÂÂÂ¡'], ['–ÂÂÂ¢–ÂÂÂâ¦', 'âÂÂÂÂ'],
  ['–ÂÂÂ¢âÂÂÂÂº"', 'âÂÂÂÂ'], ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'], ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'], ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],
  
  // Weitere problematische Sequenzen
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬âÂÂÂÂ¢', '''], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', '''], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂª', ''], ['–ÂÂÂ¢âÂÂ–ÂÂ¬«', ''],
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
      console.log('âÂÂÂÂ Fixed: ' + path.relative(process.cwd(), filePath));
      return true;
    }
    return false;
  } catch (e) {
    console.error('âÂÂÂÂ Error in ' + filePath + ': ' + e.message);
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
console.log('\nâÂÂÂÂ Encoding-Reparatur abgeschlossen: ' + fixed + ' Dateien repariert');
