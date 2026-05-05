/**
 * ===================================================================
 * 🔍 MEDTECHGUIDE - GLOBAL SEARCH SYSTEM (Refactored)
 * ===================================================================
 * Funktionen:
 * - Globale Suche über alle Seiten (via search-index.json)
 * - Live-Suche mit Debounce
 * - Dropdown mit Ergebnissen
 * - Anklickbare Links zu Seiten
 * - Highlight auf Zielseite
 * - Leere-Zustand-Anzeige
 */

// ===================================================================
// 📦 SEARCH INDEX - wird asynchron geladen
// ===================================================================

let SEARCH_INDEX = null;
let searchCache = {}; // Cache für häufige Suchen

/**
 * Lädt den Search Index aus search-index.json
 */
async function loadSearchIndex() {
  if (SEARCH_INDEX) return SEARCH_INDEX; // Cache

  const indexCandidates = [
    '../data/models/search-index.json',
    'data/models/search-index.json',
    'search-index.json'
  ];

  try {
    for (const candidate of indexCandidates) {
      const response = await fetch(candidate);
      if (!response.ok) continue;
      SEARCH_INDEX = await response.json();
      console.log('✅ Search Index geladen:', SEARCH_INDEX.pages.length, 'Seiten');
      return SEARCH_INDEX;
    }
    throw new Error('Search index not reachable from known paths');
  } catch (error) {
    console.warn('⚠️ Search Index konnte nicht geladen werden:', error);
    return null;
  }
}

// ===================================================================
// 🛠️ UTILITY FUNCTIONS
// ===================================================================

/**
 * Normalisiert Text für bessere Suche (lowercase, Umlaute etc)
 */
function normalizeSearchText(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss')
    .trim();
}

/**
 * Erstellt einen Text-Preview aus längeren Inhalten
 */
function createPreview(text, searchTerm = '', maxLength = 120) {
  if (!text) return '';
  
  const normalized = normalizeSearchText(text);
  const normalizedTerm = normalizeSearchText(searchTerm);
  
  let preview = text;
  
  // Versuche Kontext um den Suchbegriff zu finden
  const index = normalized.indexOf(normalizedTerm);
  if (index !== -1 && text.length > maxLength) {
    const start = Math.max(0, index - 40);
    const end = Math.min(text.length, start + maxLength);
    preview = (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
  } else if (preview.length > maxLength) {
    preview = preview.substring(0, maxLength) + '...';
  }
  
  return preview;
}

/**
 * Hervorhebung von Suchbegriffen im markierten Text
 */
function highlightSearchTerm(text, searchTerm) {
  if (!searchTerm || !text) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

// ===================================================================
// 🔎 SEARCH FUNCTION
// ===================================================================

/**
 * Führt Suche durch den Index durch
 * @param {string} query - Suchbegriff
 * @returns {Array} Ergebnisse mit Score
 */
function performSearch(query) {
  if (!SEARCH_INDEX) {
    console.warn('Search Index noch nicht geladen');
    return [];
  }

  if (!query || query.trim().length < 2) {
    return [];
  }

  const normalizedQuery = normalizeSearchText(query);
  const results = [];

  // Durchsuche alle Seiten
  SEARCH_INDEX.pages.forEach(page => {
    let score = 0;
    let matchedContent = '';

    // 1. Titel hat höchsten Score (4 Punkte)
    if (normalizeSearchText(page.title).includes(normalizedQuery)) {
      score += 4;
      matchedContent = page.title;
    }

    // 2. Description & Keywords (2 Punkte)
    if (normalizeSearchText(page.description).includes(normalizedQuery)) {
      score += 2;
      matchedContent = matchedContent || page.description;
    }

    if (page.keywords && page.keywords.some(kw => normalizeSearchText(kw).includes(normalizedQuery))) {
      score += 2;
    }

    // 3. Sections durchsuchen (1 Punkt pro Match)
    if (page.sections) {
      page.sections.forEach(section => {
        if (normalizeSearchText(section.heading).includes(normalizedQuery)) {
          score += 1.5;
        }
        if (normalizeSearchText(section.content).includes(normalizedQuery)) {
          score += 1;
          if (!matchedContent) {
            matchedContent = section.content;
          }
        }
      });
    }

    // Nur hinzufügen wenn mindestens ein Match
    if (score > 0) {
      results.push({
        page: page.title,
        url: page.url,
        description: page.description,
        preview: createPreview(matchedContent || page.description, query),
        score: score,
        id: page.id
      });
    }
  });

  // Nach Score sortieren (höchste zuerst)
  results.sort((a, b) => b.score - a.score);

  return results.slice(0, 10); // Max 10 Ergebnisse
}

// ===================================================================
// 🎨 UI RENDERING
// ===================================================================

/**
 * Rendert Suchergebnisse als Dropdown
 */
function renderSearchResults(results, searchTerm) {
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;

  // Leeren
  resultsContainer.innerHTML = '';

  // Keine Ergebnisse
  if (!results || results.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'search-empty-state';
    emptyState.innerHTML = `
      <div class="search-empty-icon">🔍</div>
      <p class="search-empty-text">Keine Ergebnisse für "${searchTerm}"</p>
      <p class="search-empty-hint">Versuche andere Begriffe oder durchsuche die Seite manuell</p>
    `;
    resultsContainer.appendChild(emptyState);
    return;
  }

  // Ergebnisse rendern
  const resultsList = document.createElement('div');
  resultsList.className = 'search-results-list';

  results.forEach((result, index) => {
    const resultItem = document.createElement('a');
    resultItem.href = result.url;
    resultItem.className = 'search-result-item';
    resultItem.setAttribute('data-search-result', result.id);
    
    // Speichiere Suchbegriff im Session Storage für später Highlighting
    resultItem.addEventListener('click', () => {
      sessionStorage.setItem('highlightTerm', searchTerm);
      sessionStorage.setItem('searchSource', result.url);
    });

    resultItem.innerHTML = `
      <div class="search-result-rank">${index + 1}</div>
      <div class="search-result-content">
        <div class="search-result-title">${highlightSearchTerm(result.page, searchTerm)}</div>
        <div class="search-result-preview">${result.preview}</div>
      </div>
      <div class="search-result-arrow">→</div>
    `;

    resultsList.appendChild(resultItem);
  });

  // Result Counter
  const counter = document.createElement('div');
  counter.className = 'search-results-counter';
  counter.textContent = `${results.length} ${results.length === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden`;

  resultsContainer.appendChild(counter);
  resultsContainer.appendChild(resultsList);
}

// ===================================================================
// ⏱️ DEBOUNCE SEARCH
// ===================================================================

let searchTimeout;

/**
 * Debounced Suche für bessere Performance
 */
function debouncedSearch(query) {
  clearTimeout(searchTimeout);

  if (!query || query.trim().length < 2) {
    document.getElementById('searchResults')?.innerHTML = '';
    return;
  }

  // Zeige Loading State
  const resultsContainer = document.getElementById('searchResults');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<div class="search-loading">🔄 Suche läuft...</div>';
  }

  searchTimeout = setTimeout(() => {
    const results = performSearch(query);
    renderSearchResults(results, query);
  }, 150); // 150ms Debounce
}

// ===================================================================
// 🎬 HIGHLIGHTING AUF ZIELSEITE
// ===================================================================

/**
 * Hervorhebung des Suchbegriffs auf der Zielseite durchführen
 */
function highlightOnPageIfNeeded() {
  const highlightTerm = sessionStorage.getItem('highlightTerm');
  const searchSource = sessionStorage.getItem('searchSource');

  if (!highlightTerm || searchSource !== window.location.pathname.split('/').pop()) {
    return;
  }

  // Cleanup Session Storage
  sessionStorage.removeItem('highlightTerm');
  sessionStorage.removeItem('searchSource');

  // Durchsuche alle Text-Elemente und highlight
  const searchableElements = document.querySelectorAll('h2, h3, p, li, td');
  const normalizedTerm = normalizeSearchText(highlightTerm);
  let firstMatch = null;

  searchableElements.forEach(el => {
    const text = el.textContent;
    if (normalizeSearchText(text).includes(normalizedTerm)) {
      const regex = new RegExp(`(${highlightTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      el.innerHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');

      if (!firstMatch) {
        firstMatch = el;
      }
    }
  });

  // Scroll zu erstem Match
  if (firstMatch) {
    setTimeout(() => {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  }
}

// ===================================================================
// 🚀 INITIALIZATION
// ===================================================================

function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearch');
  if (!searchInput) return;

  // Lade Index beim Seitenload
  loadSearchIndex();

  // Input Event Listener
  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
  });

  // Close dropdown bei Click außerhalb
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search')) {
      document.getElementById('searchResults')?.innerHTML = '';
    }
  });

  // Highlight wenn auf dieser Seite angekommen
  highlightOnPageIfNeeded();
}

// ===================================================================
// 📊 EXPORT für externe Nutzung (optional)
// ===================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initGlobalSearch,
    performSearch,
    loadSearchIndex
  };
}

// Initialisierung wenn DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGlobalSearch);
} else {
  initGlobalSearch();
}
