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
      ['–•â–""', 'â'],   // en-dash
      ['–•â–""', 'â'],   // em-dash  
      ['–•â–"–', '"'],   // left quote
      ['–•â–"\u009d', '"'],  // right quote
      ['–•â–"â•', "'"],  // right single quote
      ['–•â–"–', "'"],  // left single quote
      ['–•â–"––•', 'â¢'],  // bullet
      ['–•â–"––¦', 'â¦'],  // ellipsis
      
      // Sonderzeichen
      ['––«', '«'],
      ['––»', '»'],
      ['––°', '°'],
      
      // Emojis - using their UTF-8 byte representation
      ['–°–¸–Â½––¯', '–°¯'],
      ['–°–¸––§ ', '–°§ '],
      ['–°–¸'––¾', '–°¾'],
      ['–°–¸"– ', '–°'],
      ['–°–¸––©––º', '–°Â©º'],
      ['–°–¸"––§', '–°§'],
      ['–°–¸––§––"', '–°§"'],
      ['–°–¸––¤â', '–°¤'],
      ['–°–¸'', '–°¡'],
      ['–°–¸"', '–°'],
      ['–°–¸"', '–°'],
      ['–°–¸"', '–°'],
      ['–•–¡â–¯––¸', 'â–¯¸'],
      ['–•–â¦', 'â'],
      ['–•âº"', 'â'],
      
      // Umlaute
      ['–––¼', 'ü'],
      ['–––¶', 'ö'],
      ['–––¤', 'ä'],
      ['–––©', 'é'],
      ['– ', 'à'],
      ['–––§', 'ç'],
      ['–––¡', 'á'],
      ['–––­', 'í'],
      ['–––³', 'ó'],
      ['–––¹', 'ù'],
      ['–––±', 'ñ'],
      ['–â', 'Ä'],
      ['–â', 'Ö'],
      ['–â•', '–'],
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
