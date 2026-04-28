const fs = require('fs');
const path = require('path');

// Einfacherer Ansatz: Direkt die fehlerhaften Strings erkennen und ersetzen
const replacements = [
  // Umlaute
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['–ÂÂÂ–Â–ÂÂ¡', 'á'], ['–ÂÂÂ–Â–ÂÂ­', 'í'], ['–ÂÂÂ–Â–ÂÂ³', 'ó'],
  ['–ÂÂÂ–Â–ÂÂ¹', 'ù'], ['–ÂÂÂ–Â–ÂÂ¢', '–ÂÂÂ¢'], ['–ÂÂÂâÂÂÂÂ¢', '–ÂÂÂ'],
  ['–ÂÂÂâ', 'Ö'], ['–ÂÂÂâÂÂÂÂ', 'Ä'],
  
  // Bindestriche und Anführungszeichen
  ['â', 'â'], ['â', 'â'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', '"'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬\u009d', '"'],
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬âÂÂÂÂ¢', "'"], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', "'"],
  
  // Ellipsis und spezielle Zeichen
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¦', '...'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¹', '<'], ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂº', '>'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['–ÂÂÂ¢âÂÂÂÂ–Â–ÂÂ¢', 'TM'],
  
  // Emojis - diese mit Unicode-Escape-Sequenzen
  // Stattdessen: Die fehlerhaften Sequenzen direkt finden
  ['–Â°–ÂÂÂ¸–ÂÂ½–Â–ÂÂ¯', 'EMOJI_DARTBOARD'],
  ['–Â°–ÂÂÂ¸–Â–ÂÂ§ ', 'EMOJI_BRAIN'],
  ['–Â°–ÂÂÂ¸'–Â–ÂÂ¾', 'EMOJI_DISKETTE'],
  ['–Â°–ÂÂÂ¸"–ÂÂÂ ', 'EMOJI_CHART'],
  ['–Â°–ÂÂÂ¸–Â–Â©–Â–ÂÂº', 'EMOJI_STETHOSCOPE'],
  ['–Â°–ÂÂÂ¸"–Â–ÂÂ§', 'EMOJI_WRENCH'],
  ['–Â°–ÂÂÂ¸–Â–ÂÂ§–Â–ÂÂ¬', 'EMOJI_MICROSCOPE'],
  ['–Â°–ÂÂÂ¸–Â–ÂÂ¤â', 'EMOJI_ROBOT'],
  ['–Â°–ÂÂÂ¸'', 'EMOJI_LIGHTBULB'],
  ['–ÂÂÂ¢–ÂÂÂâ¦', 'CHECK'],
  ['–ÂÂÂ¢âÂÂÂÂº"', 'CROSS'],
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
