#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'latin1');  // Lese als Latin1 um die Bytes korrekt zu sehen
    const original = content;
    
    // String-basierte Ersetzungen für ALLE fehlerhaften Sequenzen
    const replacements = [
      // Bindestriche und Anführungszeichen
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬"', 'â'],   // en-dash
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬"', 'â'],   // em-dash  
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', '"'],   // left quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬\u009d', '"'],  // right quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬âÂÂÂÂ¢', "'"],  // right single quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', "'"],  // left single quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¢', 'â¢'],  // bullet
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¦', 'â¦'],  // ellipsis
      
      // Sonderzeichen
      ['–ÂÂÂ–«', '«'],
      ['–ÂÂÂ–»', '»'],
      ['–ÂÂÂ–°', '°'],
      
      // Emojis - using their UTF-8 byte representation
      ['–Â°–ÂÂÂ¸–ÂÂ½–Â–ÂÂ¯', '–°ÂÂÂÂÂÂ¯'],
      ['–Â°–ÂÂÂ¸–Â–ÂÂ§ ', '–°ÂÂÂÂ§ÂÂ '],
      ['–Â°–ÂÂÂ¸'–Â–ÂÂ¾', '–°ÂÂÂÂÂÂ¾'],
      ['–Â°–ÂÂÂ¸"–ÂÂÂ ', '–°ÂÂÂÂÂÂ'],
      ['–Â°–ÂÂÂ¸–Â–Â©–Â–ÂÂº', '–°ÂÂÂ©ÂÂº'],
      ['–Â°–ÂÂÂ¸"–Â–ÂÂ§', '–°ÂÂÂÂÂÂ§'],
      ['–Â°–ÂÂÂ¸–Â–ÂÂ§–Â–ÂÂ¬', '–°ÂÂÂÂ§ÂÂ¬'],
      ['–Â°–ÂÂÂ¸–Â–ÂÂ¤â', '–°ÂÂÂÂ¤ÂÂ'],
      ['–Â°–ÂÂÂ¸'', '–°ÂÂÂÂÂÂ¡'],
      ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],
      ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],
      ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],
      ['–ÂÂÂ¢–ÂÂÂ¡â–ÂÂÂ¯–Â–ÂÂ¸', 'âÂÂÂÂ–Â¯ÂÂ¸ÂÂ'],
      ['–ÂÂÂ¢–ÂÂÂâ¦', 'âÂÂÂÂ'],
      ['–ÂÂÂ¢âÂÂÂÂº"', 'âÂÂÂÂ'],
      
      // Umlaute
      ['–ÂÂÂ–Â–ÂÂ¼', 'ü'],
      ['–ÂÂÂ–Â–ÂÂ¶', 'ö'],
      ['–ÂÂÂ–Â–ÂÂ¤', 'ä'],
      ['–ÂÂÂ–Â–Â©', 'é'],
      ['–ÂÂÂ ', 'à'],
      ['–ÂÂÂ–Â–ÂÂ§', 'ç'],
      ['–ÂÂÂ–Â–ÂÂ¡', 'á'],
      ['–ÂÂÂ–Â–ÂÂ­', 'í'],
      ['–ÂÂÂ–Â–ÂÂ³', 'ó'],
      ['–ÂÂÂ–Â–ÂÂ¹', 'ù'],
      ['–ÂÂÂ–Â–ÂÂ±', 'ñ'],
      ['–ÂÂÂâÂÂÂÂ', 'Ä'],
      ['–ÂÂÂâ', 'Ö'],
      ['–ÂÂÂâÂÂÂÂ¢', '–ÂÂÂ'],
    ];
    
    for (const [wrong, correct] of replacements) {
      while (content.indexOf(wrong) !== -1) {
        content = content.replace(wrong, correct);
      }
    }
    
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
console.log('Fixed ' + fixed + ' files');
