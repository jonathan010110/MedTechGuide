#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Definiere die fehlerhaften Byte-Sequenzen
// Zum Beispiel: "–––¼" ist eigentlich "C3 BC" (UTF-8 für "ü" fehlinterpretiert als Latin1)

let fixed = 0;

function fixFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    let modified = false;
    let newBuffer = buffer;
    
    // Liste von fehlerhaften Byte-Sequenzen
    const badSequences = [
      // Umlaute und Sonderzeichen die doppelt-kodiert sind
      { find: Buffer.from([0xC3, 0xBC]), replace: Buffer.from('ü', 'utf8') },  // –––¼ -> ü
      { find: Buffer.from([0xC3, 0xB6]), replace: Buffer.from('ö', 'utf8') },  // –––¶ -> ö
      { find: Buffer.from([0xC3, 0xA4]), replace: Buffer.from('ä', 'utf8') },  // –––¤ -> ä
      { find: Buffer.from([0xC3, 0xA9]), replace: Buffer.from('é', 'utf8') },  // –––© -> é
      { find: Buffer.from([0xC3, 0xA0]), replace: Buffer.from('à', 'utf8') },  // –  -> à
      { find: Buffer.from([0xC3, 0xA7]), replace: Buffer.from('ç', 'utf8') },  // –––§ -> ç
      // Bindestriche
      { find: Buffer.from([0xE2, 0x80, 0x93]), replace: Buffer.from('â', 'utf8') },  // â (en-dash)
      { find: Buffer.from([0xE2, 0x80, 0x94]), replace: Buffer.from('â', 'utf8') },  // â (em-dash)
      // Guillemets
      { find: Buffer.from([0xC2, 0xAB]), replace: Buffer.from('«', 'utf8') },  // « 
      { find: Buffer.from([0xC2, 0xBB]), replace: Buffer.from('»', 'utf8') },  // »
      { find: Buffer.from([0xC2, 0xB0]), replace: Buffer.from('°', 'utf8') },  // °
    ];
    
    for (const seq of badSequences) {
      let pos = 0;
      while ((pos = newBuffer.indexOf(seq.find, pos)) !== -1) {
        newBuffer = Buffer.concat([
          newBuffer.slice(0, pos),
          seq.replace,
          newBuffer.slice(pos + seq.find.length)
        ]);
        pos += seq.replace.length;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newBuffer);
      console.log('Fixed: ' + path.relative('C:\\WMC\\Projekt_25', filePath));
      return true;
    }
  } catch (e) {
    // ignore
  }
  return false;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
      walkDir(fullPath);
    } else if (entry.isFile() && /\.(html|js|css|json)$/.test(entry.name)) {
      if (fixFile(fullPath)) {
        fixed++;
      }
    }
  }
}

walkDir('C:\\WMC\\Projekt_25');
console.log('Total fixed: ' + fixed);
