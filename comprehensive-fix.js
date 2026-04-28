const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'latin1');
    const original = content;
    
    // Alle möglichen fehlerhaften UTF-8 Byte-Sequenzen (als Unicode-Escape)
    // Format: \uXXYY = UTF-8 Bytes XX YY wenn als Latin1 gelesen
    
    // Bindestriche und Anführungszeichen
    content = content.split('\u00e2\u0080\u0093').join('â');  // â (en-dash)
    content = content.split('\u00e2\u0080\u0094').join('â');  // â (em-dash)
    content = content.split('\u00e2\u0080\u009c').join('"');  // " (left quote)
    content = content.split('\u00e2\u0080\u009d').join('"');  // " (right quote)
    content = content.split('\u00e2\u0080\u0099').join("'");  // ' (right single)
    content = content.split('\u00e2\u0080\u0098').join("'");  // ' (left single)
    content = content.split('\u00e2\u0080\u00a2').join('â¢');  // â¢ (bullet)
    content = content.split('\u00e2\u0080\u00a6').join('â¦');  // â¦ (ellipsis)
    
    // Sonderzeichen
    content = content.split('\u00c2\u00ab').join('«');  // «
    content = content.split('\u00c2\u00bb').join('»');  // »
    content = content.split('\u00c2\u00b0').join('°');  // °
    content = content.split('\u00c2\u00a9').join('Â©');  // Â©
    content = content.split('\u00c2\u00ae').join('Â®');  // Â®
    content = content.split('\u00c2\u00bd').join('Â½');  // Â½
    
    // Umlaute und Akzente
    content = content.split('\u00c3\u00bc').join('ü');  // ü
    content = content.split('\u00c3\u00b6').join('ö');  // ö
    content = content.split('\u00c3\u00a4').join('ä');  // ä
    content = content.split('\u00c3\u009f').join('ß');  // ß
    content = content.split('\u00c3\u00a9').join('é');  // é
    content = content.split('\u00c3\u00a8').join('è');  // è
    content = content.split('\u00c3\u00aa').join('ê');  // ê
    content = content.split('\u00c3\u00ab').join('ë');  // ë
    content = content.split('\u00c3\u00a0').join('à');  // à
    content = content.split('\u00c3\u00a2').join('â');  // â
    content = content.split('\u00c3\u00a3').join('ã');  // ã
    content = content.split('\u00c3\u00a7').join('ç');  // ç
    content = content.split('\u00c3\u00a1').join('á');  // á
    content = content.split('\u00c3\u00ad').join('í');  // í
    content = content.split('\u00c3\u00b3').join('ó');  // ó
    content = content.split('\u00c3\u00ba').join('ú');  // ú
    content = content.split('\u00c3\u00b9').join('ù');  // ù
    content = content.split('\u00c3\u00b1').join('ñ');  // ñ
    
    // Großbuchstaben
    content = content.split('\u00c3\u0084').join('Ä');  // Ä
    content = content.split('\u00c3\u0096').join('Ö');  // Ö
    content = content.split('\u00c3\u009c').join('Ü');  // Ü
    content = content.split('\u00c3\u009f').join('ß');  // ß
    
    // Weitere häufige Fehler
    content = content.split('\u00c3\u00ad').join('í');
    content = content.split('\u00c3\u00ad').join('í');
    
    // Spezielle Unicode-Zeichen die falsch kodiert werden
    content = content.split('\u00e2\u0099\u00bf').join('â¿');  // â¿ wheelchair
    content = content.split('\u00e2\u009a\u0096').join('âï¸ïÂ¸Â');  // âï¸ïÂ¸Â scale
    
    // Spezielle "–ÂÂÂ¢äÂÂ¬" Sequenzen (3-Byte UTF-8 falsch gelesen)
    content = content.split('\u00c3\u00a2\u00e2\u0080').join('â');
    content = content.split('\u00c3\u00a2\u00e2\u0081').join('â');
    
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
