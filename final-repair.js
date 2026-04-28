#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let fixed = 0;

// Diese Funktion behandelt alle möglichen doppelt-kodierten UTF-8 Sequenzen
function fixFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    let modified = false;
    let newBuffer = buffer;
    
    // Liste von ALLEN fehlerhaften Byte-Sequenzen
    const badSequences = [
      // Doppelt-kodierte Umlaute (UTF-8 als Latin1 interpretiert)
      { find: [0xC3, 0xBC], replace: 'ü' },  // –ÂÂÂ–Â–ÂÂ¼
      { find: [0xC3, 0xB6], replace: 'ö' },  // –ÂÂÂ–Â–ÂÂ¶
      { find: [0xC3, 0xA4], replace: 'ä' },  // –ÂÂÂ–Â–ÂÂ¤
      { find: [0xC3, 0xA9], replace: 'é' },  // –ÂÂÂ–Â–Â©
      { find: [0xC3, 0xA0], replace: 'à' },  // –ÂÂÂ 
      { find: [0xC3, 0xA7], replace: 'ç' },  // –ÂÂÂ–Â–ÂÂ§
      { find: [0xC3, 0xA1], replace: 'á' },  // –ÂÂÂ–Â–ÂÂ¡
      { find: [0xC3, 0xAD], replace: 'í' },  // –ÂÂÂ–Â–ÂÂ­
      { find: [0xC3, 0xB3], replace: 'ó' },  // –ÂÂÂ
      { find: [0xC3, 0xB9], replace: 'ù' },  // –ÂÂÂ–Â–ÂÂ¹
      { find: [0xC3, 0xB1], replace: 'ñ' },  // –ÂÂÂ–Â–ÂÂ±
      { find: [0xC3, 0x84], replace: 'Ä' },  // –ÂÂÂâÂÂÂÂ
      { find: [0xC3, 0x96], replace: 'Ö' },  // –ÂÂÂâ
      { find: [0xC3, 0x9C], replace: '–ÂÂÂ' },  // –ÂÂÂâÂÂÂÂ¢
      
      // Doppelt-kodierte Sonderzeichen (–ÂÂÂ¢... Sequenzen)
      { find: [0xC3, 0xA2], replace: '–ÂÂÂ¢' },  // –ÂÂÂ–Â–ÂÂ¢ -> –ÂÂÂ¢
      { find: [0xC2, 0xAB], replace: '«' },  // –ÂÂÂ–«
      { find: [0xC2, 0xBB], replace: '»' },  // –ÂÂÂ–»
      { find: [0xC2, 0xB0], replace: '°' },  // –ÂÂÂ–°
      { find: [0xE2, 0x80, 0x93], replace: 'â' },  // â (en-dash)
      { find: [0xE2, 0x80, 0x94], replace: 'â' },  // â (em-dash)
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x98], replace: "'" },  // '
      { find: [0xE2, 0x80, 0x99], replace: "'" },  // '
      { find: [0xE2, 0x80, 0xA6], replace: 'â¦' },  // â¦
      
      // Emoji-Sequenzen (doppelt kodiert wie –Â°–ÂÂÂ¸...)
      { find: [0xF0, 0x9F], replace: '' },  // Remove first part of emoji if broken
      
      // Spezielle Sequenzen für –ÂÂÂ¢âÂÂ–ÂÂ¬ (which is E2 80)
      { find: [0xC3, 0xA2, 0xC2, 0x80], replace: '' },  // –ÂÂÂ¢âÂÂ–ÂÂ¬ ersetzt durch leer
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // Left quote
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // Right quote
    ];
    
    let str = buffer.toString('latin1');  // Lese als Latin1 um die fehlerhaften Bytes zu sehen
    
    // Ersetze String-basiert für komplexe Sequenzen
    const stringReplacements = [
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬"', 'â'],   // en-dash
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬"', 'â'],   // em-dash
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', '"'],   // left quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬\u009d', '"'],  // right quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬âÂÂÂÂ¢', "'"],  // right single quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–ÂÂÂ', "'"],  // left single quote
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¢', 'â¢'],  // bullet
      ['–ÂÂÂ¢âÂÂ–ÂÂ¬–Â–ÂÂ¦', 'â¦'],  // ellipsis
      ['–Â°–ÂÂÂ¸–ÂÂ½–Â–ÂÂ¯', '–°ÂÂÂÂÂÂ¯'],  // dart emoji
      ['–Â°–ÂÂÂ¸–Â–ÂÂ§ ', '–°ÂÂÂÂ§ÂÂ '],  // brain emoji
      ['–Â°–ÂÂÂ¸'–Â–ÂÂ¾', '–°ÂÂÂÂÂÂ¾'],  // diskette emoji
      ['–Â°–ÂÂÂ¸"–ÂÂÂ ', '–°ÂÂÂÂÂÂ'],  // chart emoji
      ['–Â°–ÂÂÂ¸–Â–Â©–Â–ÂÂº', '–°ÂÂÂ©ÂÂº'],  // stethoscope emoji
      ['–Â°–ÂÂÂ¸"–Â–ÂÂ§', '–°ÂÂÂÂÂÂ§'],  // wrench emoji
      ['–Â°–ÂÂÂ¸–Â–ÂÂ§–Â–ÂÂ¬', '–°ÂÂÂÂ§ÂÂ¬'],  // microscope emoji
      ['–Â°–ÂÂÂ¸–Â–ÂÂ¤â', '–°ÂÂÂÂ¤ÂÂ'],  // robot emoji
      ['–Â°–ÂÂÂ¸'', '–°ÂÂÂÂÂÂ¡'],  // lightbulb emoji
      ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],  // chart up emoji
      ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],  // chart down emoji
      ['–Â°–ÂÂÂ¸"', '–°ÂÂÂÂÂÂ'],  // clipboard emoji
      ['–ÂÂÂ¢–ÂÂÂ¡â–ÂÂÂ¯–Â–ÂÂ¸', 'âÂÂÂÂ–Â¯ÂÂ¸ÂÂ'],  // scale emoji
      ['–ÂÂÂ¢–ÂÂÂâ¦', 'âÂÂÂÂ'],  // check emoji
      ['–ÂÂÂ¢âÂÂÂÂº"', 'âÂÂÂÂ'],  // cross emoji
      ['–ÂÂÂ–«', '«'],
      ['–ÂÂÂ–»', '»'],
      ['–ÂÂÂ–°', '°'],
    ];
    
    for (const [wrong, correct] of stringReplacements) {
      if (str.includes(wrong)) {
        str = str.split(wrong).join(correct);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, str, 'utf8');
      console.log('Fixed: ' + path.relative('C:\\WMC\\Projekt_25', filePath));
      return true;
    }
  } catch (e) {
    console.error('Error in ' + filePath + ': ' + e.message);
  }
  return false;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !['node_modules', '.git', 'MedTechGuide'].includes(entry.name)) {
      walkDir(fullPath);
    } else if (entry.isFile() && /\.(html|js|css|json|md)$/.test(entry.name)) {
      if (fixFile(fullPath)) {
        fixed++;
      }
    }
  }
}

walkDir('C:\\WMC\\Projekt_25');
console.log('\nTotal files fixed: ' + fixed);
