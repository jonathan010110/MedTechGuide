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
      ['â€"', '–'],   // en-dash
      ['â€"', '—'],   // em-dash  
      ['â€œ', '"'],   // left quote
      ['â€\u009d', '"'],  // right quote
      ['â€™', "'"],  // right single quote
      ['â€˜', "'"],  // left single quote
      ['â€¢', '•'],  // bullet
      ['â€¦', '…'],  // ellipsis
      
      // Sonderzeichen
      ['Â«', '«'],
      ['Â»', '»'],
      ['Â°', '°'],
      
      // Emojis - using their UTF-8 byte representation
      ['ðŸŽ¯', '🎯'],
      ['ðŸ§ ', '🧠'],
      ['ðŸ'¾', '💾'],
      ['ðŸ"Š', '📊'],
      ['ðŸ©º', '🩺'],
      ['ðŸ"§', '🔧'],
      ['ðŸ§¬', '🧬'],
      ['ðŸ¤–', '🤖'],
      ['ðŸ'', '💡'],
      ['ðŸ"', '📈'],
      ['ðŸ"', '📉'],
      ['ðŸ"', '📋'],
      ['âš–ï¸', '⚖️'],
      ['âœ…', '✅'],
      ['â›"', '❌'],
      
      // Umlaute
      ['Ã¼', 'ü'],
      ['Ã¶', 'ö'],
      ['Ã¤', 'ä'],
      ['Ã©', 'é'],
      ['Ã ', 'à'],
      ['Ã§', 'ç'],
      ['Ã¡', 'á'],
      ['Ã­', 'í'],
      ['Ã³', 'ó'],
      ['Ã¹', 'ù'],
      ['Ã±', 'ñ'],
      ['Ã„', 'Ä'],
      ['Ã–', 'Ö'],
      ['Ã™', 'Ü'],
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
