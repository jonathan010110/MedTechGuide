const fs = require('fs');
const path = require('path');

// Erweiterte Map von fehlerhaften UTF-8 Byte-Sequenzen
const replacements = [
  // Häufige Ersetzungen
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['–––¡', 'á'], ['–––­', 'í'], ['–––³', 'ó'],
  ['–––¹', 'ù'], ['–––•', '–•'], ['–â•', '–'],
  ['–â', 'Ö'], ['–â', 'Ä'],
  
  // En-Dash und Em-Dash
  ['â', 'â'], ['â', 'â'], ['–•â–"–', '"'], ['–•â–"\u009d', '"'],
  
  // Ellipsis und spezielle Zeichen
  ['–•â–"––¦', 'â¦'], ['–•â–"––¹', 'â¹'], ['–•â–"––º', 'âº'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['–•â––•', 'â•'],
  
  // Emojis (double-encoded)
  ['–°–¸–Â½––¯', '–°¯'], ['–°–¸––§ ', '–°§ '], ['–•–¡â–¯––¸', 'â–¯¸'], ['–°–¸"– ', '–°'],
  ['–°–¸––©––º', '–°Â©º'], ['–°–¸'––¾', '–°¾'], ['–°–¸"––§', '–°§'], ['–°–¸––§––"', '–°§"'],
  ['–°–¸––§––¿', '–°§¿'], ['–°–¸––¤â', '–°¤'], ['–°–¸'', '–°¡'], ['–•–â¦', 'â'],
  ['–•âº"', 'â'], ['–°–¸"', '–°'], ['–°–¸"', '–°'], ['–°–¸"', '–°'],
  
  // Weitere problematische Sequenzen
  ['–•â–"â•', '''], ['–•â–"–', '''], ['–•â–"––ª', ''], ['–•â–"«', ''],
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
