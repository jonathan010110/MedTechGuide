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
      { find: [0xC3, 0xBC], replace: 'ü' },  // Ã¼
      { find: [0xC3, 0xB6], replace: 'ö' },  // Ã¶
      { find: [0xC3, 0xA4], replace: 'ä' },  // Ã¤
      { find: [0xC3, 0xA9], replace: 'é' },  // Ã©
      { find: [0xC3, 0xA0], replace: 'à' },  // Ã 
      { find: [0xC3, 0xA7], replace: 'ç' },  // Ã§
      { find: [0xC3, 0xA1], replace: 'á' },  // Ã¡
      { find: [0xC3, 0xAD], replace: 'í' },  // Ã­
      { find: [0xC3, 0xB3], replace: 'ó' },  // Ó
      { find: [0xC3, 0xB9], replace: 'ù' },  // Ã¹
      { find: [0xC3, 0xB1], replace: 'ñ' },  // Ã±
      { find: [0xC3, 0x84], replace: 'Ä' },  // Ã„
      { find: [0xC3, 0x96], replace: 'Ö' },  // Ã–
      { find: [0xC3, 0x9C], replace: 'Ü' },  // Ã™
      
      // Doppelt-kodierte Sonderzeichen (â... Sequenzen)
      { find: [0xC3, 0xA2], replace: 'â' },  // Ã¢ -> â
      { find: [0xC2, 0xAB], replace: '«' },  // Â«
      { find: [0xC2, 0xBB], replace: '»' },  // Â»
      { find: [0xC2, 0xB0], replace: '°' },  // Â°
      { find: [0xE2, 0x80, 0x93], replace: '–' },  // – (en-dash)
      { find: [0xE2, 0x80, 0x94], replace: '—' },  // — (em-dash)
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x98], replace: "'" },  // '
      { find: [0xE2, 0x80, 0x99], replace: "'" },  // '
      { find: [0xE2, 0x80, 0xA6], replace: '…' },  // …
      
      // Emoji-Sequenzen (doppelt kodiert wie ðŸ...)
      { find: [0xF0, 0x9F], replace: '' },  // Remove first part of emoji if broken
      
      // Spezielle Sequenzen für â€ (which is E2 80)
      { find: [0xC3, 0xA2, 0xC2, 0x80], replace: '' },  // â€ ersetzt durch leer
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // Left quote
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // Right quote
    ];
    
    let str = buffer.toString('latin1');  // Lese als Latin1 um die fehlerhaften Bytes zu sehen
    
    // Ersetze String-basiert für komplexe Sequenzen
    const stringReplacements = [
      ['â€"', '–'],   // en-dash
      ['â€"', '—'],   // em-dash
      ['â€œ', '"'],   // left quote
      ['â€\u009d', '"'],  // right quote
      ['â€™', "'"],  // right single quote
      ['â€˜', "'"],  // left single quote
      ['â€¢', '•'],  // bullet
      ['â€¦', '…'],  // ellipsis
      ['ðŸŽ¯', '🎯'],  // dart emoji
      ['ðŸ§ ', '🧠'],  // brain emoji
      ['ðŸ'¾', '💾'],  // diskette emoji
      ['ðŸ"Š', '📊'],  // chart emoji
      ['ðŸ©º', '🩺'],  // stethoscope emoji
      ['ðŸ"§', '🔧'],  // wrench emoji
      ['ðŸ§¬', '🧬'],  // microscope emoji
      ['ðŸ¤–', '🤖'],  // robot emoji
      ['ðŸ'', '💡'],  // lightbulb emoji
      ['ðŸ"', '📈'],  // chart up emoji
      ['ðŸ"', '📉'],  // chart down emoji
      ['ðŸ"', '📋'],  // clipboard emoji
      ['âš–ï¸', '⚖️'],  // scale emoji
      ['âœ…', '✅'],  // check emoji
      ['â›"', '❌'],  // cross emoji
      ['Â«', '«'],
      ['Â»', '»'],
      ['Â°', '°'],
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
