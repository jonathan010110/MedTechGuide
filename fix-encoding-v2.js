const fs = require('fs');
const path = require('path');

// Einfacherer Ansatz: Direkt die fehlerhaften Strings erkennen und ersetzen
const replacements = [
  // Umlaute
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['ÃÂ¡', 'á'], ['ÃÂ­', 'í'], ['ÃÂ³', 'ó'],
  ['ÃÂ¹', 'ù'], ['ÃÂ¢', 'Ã¢'], ['Ãâ¢', 'Ã'],
  ['Ã–', 'Ö'], ['Ãâ', 'Ä'],
  
  // Bindestriche und Anführungszeichen
  ['–', '–'], ['–', '—'], ['Ã¢â¬Å', '"'], ['Ã¢â¬\u009d', '"'],
  ['Ã¢â¬â¢', "'"], ['Ã¢â¬Ë', "'"],
  
  // Ellipsis und spezielle Zeichen
  ['Ã¢â¬Â¦', '...'], ['Ã¢â¬Â¹', '<'], ['Ã¢â¬Âº', '>'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['Ã¢âÂ¢', 'TM'],
  
  // Emojis - diese mit Unicode-Escape-Sequenzen
  // Stattdessen: Die fehlerhaften Sequenzen direkt finden
  ['Ã°Å¸Å½Â¯', 'EMOJI_DARTBOARD'],
  ['Ã°Å¸Â§ ', 'EMOJI_BRAIN'],
  ['Ã°Å¸'Â¾', 'EMOJI_DISKETTE'],
  ['Ã°Å¸"Å ', 'EMOJI_CHART'],
  ['Ã°Å¸Â©Âº', 'EMOJI_STETHOSCOPE'],
  ['Ã°Å¸"Â§', 'EMOJI_WRENCH'],
  ['Ã°Å¸Â§Â¬', 'EMOJI_MICROSCOPE'],
  ['Ã°Å¸Â¤–', 'EMOJI_ROBOT'],
  ['Ã°Å¸'', 'EMOJI_LIGHTBULB'],
  ['Ã¢Å…', 'CHECK'],
  ['Ã¢âº"', 'CROSS'],
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const [wrong, correct] of replacements) {
      if (content.includes(wrong)) {
        content = content.split(wrong).join(correct);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed: ' + path.relative(process.cwd(), filePath));
      return true;
    }
    return false;
  } catch (e) {
    console.error('Error in ' + filePath + ': ' + e.message);
    return false;
  }
}

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
console.log('\nEncoding-Reparatur abgeschlossen: ' + fixed + ' Dateien repariert');
