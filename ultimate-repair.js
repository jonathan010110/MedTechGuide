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
      ['Ã¢â¬"', '–'],   // en-dash
      ['Ã¢â¬"', '—'],   // em-dash  
      ['Ã¢â¬Å', '"'],   // left quote
      ['Ã¢â¬\u009d', '"'],  // right quote
      ['Ã¢â¬â¢', "'"],  // right single quote
      ['Ã¢â¬Ë', "'"],  // left single quote
      ['Ã¢â¬Â¢', '•'],  // bullet
      ['Ã¢â¬Â¦', '…'],  // ellipsis
      
      // Sonderzeichen
      ['Ã«', '«'],
      ['Ã»', '»'],
      ['Ã°', '°'],
      
      // Emojis - using their UTF-8 byte representation
      ['Ã°Å¸Å½Â¯', 'ð¯'],
      ['Ã°Å¸Â§ ', 'ð§ '],
      ['Ã°Å¸'Â¾', 'ð¾'],
      ['Ã°Å¸"Å ', 'ð'],
      ['Ã°Å¸Â©Âº', 'ð©º'],
      ['Ã°Å¸"Â§', 'ð§'],
      ['Ã°Å¸Â§Â¬', 'ð§¬'],
      ['Ã°Å¸Â¤–', 'ð¤'],
      ['Ã°Å¸'', 'ð¡'],
      ['Ã°Å¸"', 'ð'],
      ['Ã°Å¸"', 'ð'],
      ['Ã°Å¸"', 'ð'],
      ['Ã¢Å¡–Ã¯Â¸', 'âï¸'],
      ['Ã¢Å…', 'â'],
      ['Ã¢âº"', 'â'],
      
      // Umlaute
      ['ÃÂ¼', 'ü'],
      ['ÃÂ¶', 'ö'],
      ['ÃÂ¤', 'ä'],
      ['ÃÂ©', 'é'],
      ['Ã ', 'à'],
      ['ÃÂ§', 'ç'],
      ['ÃÂ¡', 'á'],
      ['ÃÂ­', 'í'],
      ['ÃÂ³', 'ó'],
      ['ÃÂ¹', 'ù'],
      ['ÃÂ±', 'ñ'],
      ['Ãâ', 'Ä'],
      ['Ã–', 'Ö'],
      ['Ãâ¢', 'Ã'],
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
