const fs = require('fs');
const path = require('path');

let fixed = 0;
let totalReplacements = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    let replacementCount = 0;
    
    // Comprehensive mapping of corrupted sequences to correct German characters
    // These are UTF-8 bytes that got mis-interpreted as Latin-1 and then re-encoded
    const corrections = [
      // German Umlaute (most common)
      ['Ã¼', 'ü'],  // ü
      ['Ã¶', 'ö'],  // ö
      ['Ã¤', 'ä'],  // ä
      ['Ã„', 'Ä'],  // Ä
      ['Ã–', 'Ö'],  // Ö
      ['Ã™', 'Ü'],  // Ü
      ['ÃŸ', 'ß'],  // ß
      ['Ã©', 'é'],  // é
      ['Ã ', 'à'],  // à
      ['Ã¡', 'á'],  // á
      ['Ã§', 'ç'],  // ç
      
      // Double-encoded special characters
      ['â€"', '–'],  // en dash
      ['â€"', '—'],  // em dash
      ['â€˜', '''],  // left single quote
      ['â€™', '''],  // right single quote
      ['â€œ', '"'],  // left double quote
      ['â€\u009d', '"'],  // right double quote
      ['â€¢', '•'],  // bullet
      ['â€¦', '…'],  // ellipsis
      
      // Fix double spaces around dashes (from previous repairs)
      ['  –  ', ' – '],
      ['  –  ', ' – '],
      
      // Remove any standalone problematic characters
      ['Â«', '«'],
      ['Â»', '»'],
      ['Â°', '°'],
      ['â¿', '♿'],
    ];
    
    for (const [wrong, correct] of corrections) {
      let count = 0;
      let temp = content;
      while (temp.includes(wrong)) {
        content = content.replace(wrong, correct);
        temp = temp.replace(wrong, '');
        count++;
        replacementCount++;
      }
    }
    
    // Ensure meta charset is correct
    if (filePath.endsWith('.html')) {
      // Check if charset meta tag exists and is correct
      if (!content.includes('charset="utf-8"') && !content.includes("charset='utf-8'")) {
        // Check if there's any charset declaration
        if (content.includes('charset=')) {
          content = content.replace(/charset=['"]([^'"]+)['"]/i, 'charset="utf-8"');
        } else if (content.includes('<meta') && !content.includes('charset')) {
          // Add charset if there's a meta tag but no charset
          content = content.replace(/<meta[^>]*>/i, (match) => {
            if (!match.includes('charset')) {
              return '<meta charset="utf-8" />' + match;
            }
            return match;
          });
        }
      }
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${path.relative('C:\\WMC\\Projekt_25', filePath)} (${replacementCount} replacements)`);
      totalReplacements += replacementCount;
      return true;
    }
  } catch (e) {
    console.error(`✗ Error in ${filePath}: ${e.message}`);
  }
  return false;
}

function walkDir(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !['node_modules', '.git', '.vscode'].includes(entry.name)) {
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

console.log('Starting comprehensive encoding fix...\n');
walkDir('C:\\WMC\\Projekt_25');
console.log(`\n✓ Summary: ${fixed} files fixed with ${totalReplacements} total character corrections`);
