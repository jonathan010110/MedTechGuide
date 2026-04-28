const fs = require('fs');
const path = require('path');

// Einfacherer Ansatz: Direkt die fehlerhaften Strings erkennen und ersetzen
const replacements = [
  // Umlaute
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['Ã¡', 'á'], ['Ã­', 'í'], ['Ã³', 'ó'],
  ['Ã¹', 'ù'], ['Ã¢', 'â'], ['Ã™', 'Ü'],
  ['Ã–', 'Ö'], ['Ã„', 'Ä'],
  
  // Bindestriche und Anführungszeichen
  ['–', '–'], ['–', '—'], ['â€œ', '"'], ['â€\u009d', '"'],
  ['â€™', "'"], ['â€˜', "'"],
  
  // Ellipsis und spezielle Zeichen
  ['â€¦', '...'], ['â€¹', '<'], ['â€º', '>'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['â„¢', 'TM'],
  
  // Emojis - diese mit Unicode-Escape-Sequenzen
  // Stattdessen: Die fehlerhaften Sequenzen direkt finden
  ['ðŸŽ¯', 'EMOJI_DARTBOARD'],
  ['ðŸ§ ', 'EMOJI_BRAIN'],
  ['ðŸ'¾', 'EMOJI_DISKETTE'],
  ['ðŸ"Š', 'EMOJI_CHART'],
  ['ðŸ©º', 'EMOJI_STETHOSCOPE'],
  ['ðŸ"§', 'EMOJI_WRENCH'],
  ['ðŸ§¬', 'EMOJI_MICROSCOPE'],
  ['ðŸ¤–', 'EMOJI_ROBOT'],
  ['ðŸ'', 'EMOJI_LIGHTBULB'],
  ['âœ…', 'CHECK'],
  ['â›"', 'CROSS'],
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
