const fs = require('fs');
const path = require('path');

// Verwende Buffer und Hex um Encoding-Probleme zu vermeiden
const replacements = [
  // Format: [falsche_bytes_hex, richtige_utf8_string]
  ['c3bc', 'ü'], // ü
  ['c3b6', 'ö'], // ö
  ['c3a4', 'ä'], // ä
  ['c3a9', 'é'], // é
  ['c3a0', 'à'], // à
  ['c3a7', 'ç'], // ç
  ['c381', '–ÂÂÂ'], // –ÂÂÂ
  ['c38d', '–ÂÂÂ'], // –ÂÂÂ
  ['c393', '–ÂÂÂ'], // –ÂÂÂ
  ['c399', 'Ü'], // Ü
  ['c382', '–ÂÂÂ–'], // –ÂÂÂ–
  ['c399', '–ÂÂÂ'], // –ÂÂÂ
  ['c39c', 'Ö'], // Ö
  ['c384', 'Ä'], // Ä
  // Bindestriche
  ['e28093', 'â'], // en-dash
  ['e28094', 'â'], // em-dash
  ['e2809c', '"'], // left quote
  ['e2809d', '"'], // right quote
  ['e28099', "'"], // right single quote
  ['e28098', "'"], // left single quote
  ['e2809a', 'âÂÂÂÂ'], // single low quote
  ['e2809b', 'âÂÂÂÂ'], // single high quote
  // Ellipsis
  ['e28026', 'â¦'], // â¦
];

function fixFile(filePath) {
  try {
    let buf = fs.readFileSync(filePath);
    let modified = false;
    let content = buf.toString('utf8');
    
    // Einfache String-Replacements
    const simpleReplacements = [
      ['ü', 'ü'],
      ['ö', 'ö'],
      ['ä', 'ä'],
      ['â', 'â'],
      ['â', 'â'],
      ['«', '«'],
      ['»', '»'],
      ['°', '°'],
    ];
    
    for (const [wrong, correct] of simpleReplacements) {
      if (content.indexOf(wrong) !== -1) {
        content = content.split(wrong).join(correct);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed: ' + path.relative(process.cwd(), filePath));
      return true;
    }
  } catch (e) {
    // Fehler ignorieren
  }
  return false;
}

function walk(dir) {
  let count = 0;
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory() && !['node_modules', '.git'].includes(entry.name)) {
        count += walk(full);
      } else if (entry.isFile() && /\.(html|js|css|json)$/i.test(entry.name)) {
        if (fixFile(full)) count++;
      }
    }
  } catch (e) {
    // Fehler ignorieren
  }
  return count;
}

const fixed = walk('.');
console.log('Fixed ' + fixed + ' files');
