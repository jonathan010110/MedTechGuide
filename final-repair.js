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
      { find: [0xC3, 0xBC], replace: 'ü' },  // ÃÂ¼
      { find: [0xC3, 0xB6], replace: 'ö' },  // ÃÂ¶
      { find: [0xC3, 0xA4], replace: 'ä' },  // ÃÂ¤
      { find: [0xC3, 0xA9], replace: 'é' },  // ÃÂ©
      { find: [0xC3, 0xA0], replace: 'à' },  // Ã 
      { find: [0xC3, 0xA7], replace: 'ç' },  // ÃÂ§
      { find: [0xC3, 0xA1], replace: 'á' },  // ÃÂ¡
      { find: [0xC3, 0xAD], replace: 'í' },  // ÃÂ­
      { find: [0xC3, 0xB3], replace: 'ó' },  // Ã
      { find: [0xC3, 0xB9], replace: 'ù' },  // ÃÂ¹
      { find: [0xC3, 0xB1], replace: 'ñ' },  // ÃÂ±
      { find: [0xC3, 0x84], replace: 'Ä' },  // Ãâ
      { find: [0xC3, 0x96], replace: 'Ö' },  // Ã–
      { find: [0xC3, 0x9C], replace: 'Ã' },  // Ãâ¢
      
      // Doppelt-kodierte Sonderzeichen (Ã¢... Sequenzen)
      { find: [0xC3, 0xA2], replace: 'Ã¢' },  // ÃÂ¢ -> Ã¢
      { find: [0xC2, 0xAB], replace: '«' },  // Ã«
      { find: [0xC2, 0xBB], replace: '»' },  // Ã»
      { find: [0xC2, 0xB0], replace: '°' },  // Ã°
      { find: [0xE2, 0x80, 0x93], replace: '–' },  // – (en-dash)
      { find: [0xE2, 0x80, 0x94], replace: '—' },  // — (em-dash)
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x98], replace: "'" },  // '
      { find: [0xE2, 0x80, 0x99], replace: "'" },  // '
      { find: [0xE2, 0x80, 0xA6], replace: '…' },  // …
      
      // Emoji-Sequenzen (doppelt kodiert wie Ã°Å¸...)
      { find: [0xF0, 0x9F], replace: '' },  // Remove first part of emoji if broken
      
      // Spezielle Sequenzen für Ã¢â¬ (which is E2 80)
      { find: [0xC3, 0xA2, 0xC2, 0x80], replace: '' },  // Ã¢â¬ ersetzt durch leer
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // Left quote
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // Right quote
    ];
    
    let str = buffer.toString('latin1');  // Lese als Latin1 um die fehlerhaften Bytes zu sehen
    
    // Ersetze String-basiert für komplexe Sequenzen
    const stringReplacements = [
      ['Ã¢â¬"', '–'],   // en-dash
      ['Ã¢â¬"', '—'],   // em-dash
      ['Ã¢â¬Å', '"'],   // left quote
      ['Ã¢â¬\u009d', '"'],  // right quote
      ['Ã¢â¬â¢', "'"],  // right single quote
      ['Ã¢â¬Ë', "'"],  // left single quote
      ['Ã¢â¬Â¢', '•'],  // bullet
      ['Ã¢â¬Â¦', '…'],  // ellipsis
      ['Ã°Å¸Å½Â¯', 'ð¯'],  // dart emoji
      ['Ã°Å¸Â§ ', 'ð§ '],  // brain emoji
      ['Ã°Å¸'Â¾', 'ð¾'],  // diskette emoji
      ['Ã°Å¸"Å ', 'ð'],  // chart emoji
      ['Ã°Å¸Â©Âº', 'ð©º'],  // stethoscope emoji
      ['Ã°Å¸"Â§', 'ð§'],  // wrench emoji
      ['Ã°Å¸Â§Â¬', 'ð§¬'],  // microscope emoji
      ['Ã°Å¸Â¤–', 'ð¤'],  // robot emoji
      ['Ã°Å¸'', 'ð¡'],  // lightbulb emoji
      ['Ã°Å¸"', 'ð'],  // chart up emoji
      ['Ã°Å¸"', 'ð'],  // chart down emoji
      ['Ã°Å¸"', 'ð'],  // clipboard emoji
      ['Ã¢Å¡–Ã¯Â¸', 'âï¸'],  // scale emoji
      ['Ã¢Å…', 'â'],  // check emoji
      ['Ã¢âº"', 'â'],  // cross emoji
      ['Ã«', '«'],
      ['Ã»', '»'],
      ['Ã°', '°'],
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
