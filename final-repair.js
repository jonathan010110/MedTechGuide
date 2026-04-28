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
      { find: [0xC3, 0xBC], replace: 'ü' },  // –––¼
      { find: [0xC3, 0xB6], replace: 'ö' },  // –––¶
      { find: [0xC3, 0xA4], replace: 'ä' },  // –––¤
      { find: [0xC3, 0xA9], replace: 'é' },  // –––©
      { find: [0xC3, 0xA0], replace: 'à' },  // – 
      { find: [0xC3, 0xA7], replace: 'ç' },  // –––§
      { find: [0xC3, 0xA1], replace: 'á' },  // –––¡
      { find: [0xC3, 0xAD], replace: 'í' },  // –––­
      { find: [0xC3, 0xB3], replace: 'ó' },  // –
      { find: [0xC3, 0xB9], replace: 'ù' },  // –––¹
      { find: [0xC3, 0xB1], replace: 'ñ' },  // –––±
      { find: [0xC3, 0x84], replace: 'Ä' },  // –â
      { find: [0xC3, 0x96], replace: 'Ö' },  // –â
      { find: [0xC3, 0x9C], replace: '–' },  // –â•
      
      // Doppelt-kodierte Sonderzeichen (–•... Sequenzen)
      { find: [0xC3, 0xA2], replace: '–•' },  // –––• -> –•
      { find: [0xC2, 0xAB], replace: '«' },  // ––«
      { find: [0xC2, 0xBB], replace: '»' },  // ––»
      { find: [0xC2, 0xB0], replace: '°' },  // ––°
      { find: [0xE2, 0x80, 0x93], replace: 'â' },  // â (en-dash)
      { find: [0xE2, 0x80, 0x94], replace: 'â' },  // â (em-dash)
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // "
      { find: [0xE2, 0x80, 0x98], replace: "'" },  // '
      { find: [0xE2, 0x80, 0x99], replace: "'" },  // '
      { find: [0xE2, 0x80, 0xA6], replace: 'â¦' },  // â¦
      
      // Emoji-Sequenzen (doppelt kodiert wie –°–¸...)
      { find: [0xF0, 0x9F], replace: '' },  // Remove first part of emoji if broken
      
      // Spezielle Sequenzen für –•â–" (which is E2 80)
      { find: [0xC3, 0xA2, 0xC2, 0x80], replace: '' },  // –•â–" ersetzt durch leer
      { find: [0xE2, 0x80, 0x9C], replace: '"' },  // Left quote
      { find: [0xE2, 0x80, 0x9D], replace: '"' },  // Right quote
    ];
    
    let str = buffer.toString('latin1');  // Lese als Latin1 um die fehlerhaften Bytes zu sehen
    
    // Ersetze String-basiert für komplexe Sequenzen
    const stringReplacements = [
      ['–•â–""', 'â'],   // en-dash
      ['–•â–""', 'â'],   // em-dash
      ['–•â–"–', '"'],   // left quote
      ['–•â–"\u009d', '"'],  // right quote
      ['–•â–"â•', "'"],  // right single quote
      ['–•â–"–', "'"],  // left single quote
      ['–•â–"––•', 'â¢'],  // bullet
      ['–•â–"––¦', 'â¦'],  // ellipsis
      ['–°–¸–Â½––¯', '–°¯'],  // dart emoji
      ['–°–¸––§ ', '–°§ '],  // brain emoji
      ['–°–¸'––¾', '–°¾'],  // diskette emoji
      ['–°–¸"– ', '–°'],  // chart emoji
      ['–°–¸––©––º', '–°Â©º'],  // stethoscope emoji
      ['–°–¸"––§', '–°§'],  // wrench emoji
      ['–°–¸––§––"', '–°§"'],  // microscope emoji
      ['–°–¸––¤â', '–°¤'],  // robot emoji
      ['–°–¸'', '–°¡'],  // lightbulb emoji
      ['–°–¸"', '–°'],  // chart up emoji
      ['–°–¸"', '–°'],  // chart down emoji
      ['–°–¸"', '–°'],  // clipboard emoji
      ['–•–¡â–¯––¸', 'â–¯¸'],  // scale emoji
      ['–•–â¦', 'â'],  // check emoji
      ['–•âº"', 'â'],  // cross emoji
      ['––«', '«'],
      ['––»', '»'],
      ['––°', '°'],
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
