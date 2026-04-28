#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const replacements = [
  ['ü', 'ü'],
  ['ö', 'ö'],
  ['ä', 'ä'],
  ['é', 'é'],
  ['à', 'à'],
  ['ç', 'ç'],
  ['–', '–'],
  ['–', '—'],
  ['«', '«'],
  ['»', '»'],
  ['°', '°'],
];

let fixed = 0;

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      walkDir(fullPath);
    } else if (entry.isFile() && /\.(html|js|css|json)$/.test(entry.name)) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        for (const [wrong, correct] of replacements) {
          if (content.includes(wrong)) {
            content = content.split(wrong).join(correct);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log('Fixed: ' + path.relative('C:\\WMC\\Projekt_25', fullPath));
          fixed++;
        }
      } catch (e) {
        // ignore
      }
    }
  }
}

walkDir('C:\\WMC\\Projekt_25');
console.log('Total fixed: ' + fixed);
