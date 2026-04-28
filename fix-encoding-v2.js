const fs = require('fs');
const path = require('path');

// Einfacherer Ansatz: Direkt die fehlerhaften Strings erkennen und ersetzen
const replacements = [
  // Umlaute
  ['ü', 'ü'], ['ö', 'ö'], ['ä', 'ä'],
  ['é', 'é'], ['à', 'à'], ['ç', 'ç'],
  ['–––¡', 'á'], ['–––­', 'í'], ['–––³', 'ó'],
  ['–––¹', 'ù'], ['–––•', '–•'], ['–â•', '–'],
  ['–â', 'Ö'], ['–â', 'Ä'],
  
  // Bindestriche und Anführungszeichen
  ['â', 'â'], ['â', 'â'], ['–•â–"–', '"'], ['–•â–"\u009d', '"'],
  ['–•â–"â•', "'"], ['–•â–"–', "'"],
  
  // Ellipsis und spezielle Zeichen
  ['–•â–"––¦', '...'], ['–•â–"––¹', '<'], ['–•â–"––º', '>'],
  
  // Guillemets
  ['«', '«'], ['»', '»'],
  
  // Degree und andere
  ['°', '°'], ['–•â––•', 'TM'],
  
  // Emojis - diese mit Unicode-Escape-Sequenzen
  // Stattdessen: Die fehlerhaften Sequenzen direkt finden
  ['–°–¸–Â½––¯', 'EMOJI_DARTBOARD'],
  ['–°–¸––§ ', 'EMOJI_BRAIN'],
  ['–°–¸'––¾', 'EMOJI_DISKETTE'],
  ['–°–¸"– ', 'EMOJI_CHART'],
  ['–°–¸––©––º', 'EMOJI_STETHOSCOPE'],
  ['–°–¸"––§', 'EMOJI_WRENCH'],
  ['–°–¸––§––"', 'EMOJI_MICROSCOPE'],
  ['–°–¸––¤â', 'EMOJI_ROBOT'],
  ['–°–¸'', 'EMOJI_LIGHTBULB'],
  ['–•–â¦', 'CHECK'],
  ['–•âº"', 'CROSS'],
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
