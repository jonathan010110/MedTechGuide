const fs = require('fs');
const path = require('path');

// Map of wrong UTF-8 byte sequences to correct characters
const replacements = [
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', '\"'],  // left quote
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬\u009d', '\"'],  // right quote
  ['â', 'â'],   // en dash
  ['â', 'â'],   // em dash
  ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¦', 'â¦'],   // ellipsis
  ['ü', 'ü'],    // ü
  ['ö', 'ö'],    // ö
  ['ä', 'ä'],    // ä
  ['é', 'é'],    // é
  ['à', 'à'],    // à
  ['ç', 'ç'],    // ç
  ['–ÂÂÂ¢âÂÂÂÂ¢–Â–ÂÂ¿', 'âÂÂÂÂ¿'],  // wheelchair
  ['–ÂÂÂ¢âÂÂÂÂ–Â–ÂÂ¢', 'âÂÂÂÂ¢'],   // trademark
  ['«', '«'],    // guillemet left
  ['»', '»'],    // guillemet right
  ['°', '°'],    // degree
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const [wrong, correct] of replacements) {
    if (content.includes(wrong)) {
      content = content.replace(new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correct);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed: ' + path.relative(process.cwd(), filePath));
  }
}

// Find all HTML files
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) fixFile(full);
  }
}

walk('.');
console.log('âÂÂÂÂ Encoding-Reparatur abgeschlossen');
