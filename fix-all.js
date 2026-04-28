const fs = require('fs');
const path = require('path');

let fixed = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'latin1');
    const original = content;
    
    // Manuell: Ersetze die problematischen Sequenzen
    // En-dash
    content = content.split('\u00e2\u0080\u0093').join('â');
    // Em-dash  
    content = content.split('\u00e2\u0080\u0094').join('â');
    // Left quote
    content = content.split('\u00e2\u0080\u009c').join('"');
    // Right quote
    content = content.split('\u00e2\u0080\u009d').join('"');
    // Right single quote
    content = content.split('\u00e2\u0080\u0099').join("'");
    // Left single quote
    content = content.split('\u00e2\u0080\u0098').join("'");
    // Bullet
    content = content.split('\u00e2\u0080\u00a2').join('â¢');
    // Ellipsis
    content = content.split('\u00e2\u0080\u00a6').join('â¦');
    
    // Sonderzeichen
    content = content.split('\u00c2\u00ab').join('«');
    content = content.split('\u00c2\u00bb').join('»');
    content = content.split('\u00c2\u00b0').join('°');
    
    // Umlaute
    content = content.split('\u00c3\u00bc').join('ü');
    content = content.split('\u00c3\u00b6').join('ö');
    content = content.split('\u00c3\u00a4').join('ä');
    content = content.split('\u00c3\u00a9').join('é');
    content = content.split('\u00c3\u00a0').join('à');
    content = content.split('\u00c3\u00a7').join('ç');
    content = content.split('\u00c3\u00a1').join('á');
    content = content.split('\u00c3\u00ad').join('í');
    content = content.split('\u00c3\u00b3').join('ó');
    content = content.split('\u00c3\u00b9').join('ù');
    content = content.split('\u00c3\u00b1').join('ñ');
    content = content.split('\u00c3\u0084').join('Ä');
    content = content.split('\u00c3\u0096').join('Ö');
    content = content.split('\u00c3\u0099').join('–ÂÂÂ');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed: ' + path.relative('C:\\WMC\\Projekt_25', filePath));
      return true;
    }
  } catch (e) {
    console.log('Skip: ' + filePath);
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
