/**
 * MEDTECHGUIDE - REFACTORED JAVASCRIPT ARCHITECTURE
 * Modular, Vanilla JS. Kein Framework. Sauber strukturiert.
 * Jede Funktion ist unabhängig initialisierbar.
 */

// ================================================================
// 💾 UTILITY FUNCTIONS
// ================================================================

/**
 * Debounce/Throttle für Performance-optimierte Events
 * @param {Function} func - Zu throttleinde Funktion
 * @param {number} delay - ms Verzögerung
 * @returns {Function} Throttled Funktion
 */
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
  };
}

/**
 * Normalisiert Text für Suche (lowercase, Umlaute, etc.)
 * @param {string} text - Text zum normalisieren
 * @returns {string} Normalisierter Text
 */
function normalizeText(text) {
  return text.toLowerCase()
    .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
    .replace(/ß/g, 'ss').trim();
}

/**
 * Entfernt alte Highlights sicher
 * @param {HTMLElement} container - Container mit Highlights
 */
function removeHighlights(container) {
  if (!container) return;
  const highlights = container.querySelectorAll('span.highlight');
  highlights.forEach(span => {
    const parent = span.parentNode;
    if (parent) {
      while (span.firstChild) {
        parent.insertBefore(span.firstChild, span);
      }
      parent.removeChild(span);
    }
  });
}

// ================================================================
// 🔄 1. LOADER - HIDDEN ON PAGE LOAD (with fallback)
// ================================================================

function initLoader() {
  // Fallback: Loader per DOMContentLoaded verstecken
  // (wird auch in HTML mit inline script gemacht)
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });
}

// ================================================================
// 🧭 2. ACTIVE NAVIGATION LINK - Automatisch highlight current page
// ================================================================

function initActiveNav() {
  // Defensive checks
  const navLinks = document.querySelectorAll('.main-nav a');
  if (!navLinks.length) return;
  
  // Get aktuellen Page basierend auf pathname
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Exakte oder relative Matching
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ================================================================
// ⬆️ 3. SCROLL TO TOP BUTTON - Performance optimiert
// ================================================================

function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (!scrollBtn) return;
  
  // Wichtig: Scroll-Event geführt mit throttle um Performance zu sparen
  const handleScroll = throttle(() => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  }, 100);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Click Handler für Button
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================================================
// 🌙 4. DARK MODE TOGGLE
// ================================================================

function initDarkMode() {
  const html = document.documentElement;
  const STORAGE_KEY = 'medtechguide-darkmode';
  
  // Prüfe gespeicherte Preference oder System Preference
  const savedMode = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = savedMode === 'dark' || (savedMode === null && prefersDark);
  
  // Apply initial state
  if (isDarkMode) {
    html.classList.add('dark-mode');
  }
  
  // Optional: Dark Mode Toggle Button Listener (wenn Button vorhanden)
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      html.classList.toggle('dark-mode');
      const isNowDark = html.classList.contains('dark-mode');
      localStorage.setItem(STORAGE_KEY, isNowDark ? 'dark' : 'light');
    });
  }
}

// ================================================================
// 📊 5. SCROLL PROGRESS BAR - Performance mit requestAnimationFrame
// ================================================================

function initScrollProgress() {
  // Erstelle Progress Bar Element wenn nicht existiert
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'scroll-progress-bar';
    document.body.insertBefore(progressBar, document.body.firstChild);
  }
  
  // Update progress mit requestAnimationFrame (keine Performance Penalty)
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.max(0, Math.min(100, progress)) + '%';
  };
  
  // RAF Event Listener (smooth, performant)
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  
  // Initial call
  updateProgress();
}

// ================================================================
// ✨ 6. SECTION FADE-IN ANIMATIONS mit IntersectionObserver
// ================================================================

function initSectionAnimations() {
  const sections = document.querySelectorAll('.section-card');
  if (!sections.length) return;
  
  // IntersectionObserver ist performance-optimiert
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Fade in beim Sichtbarwerden
        entry.target.classList.add('fade-in-visible');
        // Wichtig: Observer entfernen nach Animation (memory leak prevention)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Triggert wenn 10% sichtbar
    rootMargin: '0px 0px -50px 0px' // Etwas früher triggern
  });
  
  sections.forEach(section => {
    // Initial state: invisible
    section.classList.add('fade-in');
    observer.observe(section);
  });
}

// ================================================================
// 🔍 7. GLOBAL SEARCH FUNCTION
// ================================================================

function initSearch() {
  // Element check
  const searchInput = document.getElementById('globalSearch');
  if (!searchInput) return;
  
  const searchResults = document.getElementById('searchResults');
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    // Reset wenn empty
    if (!query) {
      if (searchResults) searchResults.innerHTML = '';
      removeHighlights(document.body);
      return;
    }
    
    const normalizedQuery = normalizeText(query);
    const searchable = document.querySelectorAll('h1, h2, h3, h4, p, li');
    
    let hitCount = 0;
    let firstHit = null;
    
    // Durchsuche alle Elemente
    searchable.forEach(element => {
      const text = element.textContent;
      const normalizedText = normalizeText(text);
      
      if (normalizedText.includes(normalizedQuery)) {
        // Importante: Nur EINMAL pro Element machen
        removeHighlights(element);
        
        if (!firstHit) firstHit = element;
        hitCount++;
        
        // Highlight hinzufügen (safe)
        const regex = new RegExp(`(${query})`, 'gi');
        element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
      } else {
        removeHighlights(element);
      }
    });
    
    // Scroll zum ersten Hit
    if (firstHit) {
      firstHit.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Show Hit Count
    if (searchResults) {
      searchResults.textContent = hitCount > 0 
        ? `${hitCount} Treffer gefunden` 
        : 'Keine Treffer gefunden';
    }
  });
}

// ================================================================
// 🎨 8. FILTER SYSTEM (für device-cards auf index.html)
// ================================================================

function initFilters() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const deviceCards = document.querySelectorAll('.device-card');
  
  if (!filterBtns.length || !deviceCards.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter cards smooth
      deviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || cardCategory === filterValue;
        
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = shouldShow ? '1' : '0.3';
        card.style.pointerEvents = shouldShow ? 'auto' : 'none';
      });
    });
  });
}

// ================================================================
// ⚖️ 9. DEVICE COMPARISON MODAL SYSTEM
// ================================================================

function initCompareSystem() {
  const compareCheckboxes = document.querySelectorAll('[data-compare-checkbox]');
  const compareBtn = document.getElementById('compareBtn');
  
  if (!compareCheckboxes.length) return;
  
  // State tracking
  let selectedDevices = [];
  const MAX_COMPARE = 2;
  
  compareCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const deviceName = e.target.getAttribute('data-compare-device');
      
      if (e.target.checked) {
        // Limit to 2
        if (selectedDevices.length >= MAX_COMPARE) {
          e.target.checked = false;
          alert('Maximal 2 Geräte zum Vergleichen auswählbar');
          return;
        }
        selectedDevices.push(deviceName);
      } else {
        selectedDevices = selectedDevices.filter(d => d !== deviceName);
      }
      
      // Update Button
      if (compareBtn) {
        compareBtn.disabled = selectedDevices.length < 2;
        compareBtn.textContent = selectedDevices.length === 2 
          ? 'Vergleichen' 
          : `Vergleichen (${selectedDevices.length}/2)`;
      }
    });
  });
  
  // Compare Button Handler
  if (compareBtn) {
    compareBtn.addEventListener('click', () => {
      if (selectedDevices.length === 2) {
        openCompareModal(selectedDevices);
      }
    });
  }
}

/**
 * Öffnet Modal mit Vergleich
 * @param {Array} devices - zwei zu vergleichende Geräte
 */
function openCompareModal(devices) {
  // Erstelle Modal
  const modal = document.createElement('div');
  modal.className = 'compare-modal';
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('role', 'dialog');
  
  modal.innerHTML = `
    <div class="compare-modal-overlay"></div>
    <div class="compare-modal-content">
      <button class="modal-close" aria-label="Modal schließen">✕</button>
      <h2>Vergleich: ${devices[0]} vs ${devices[1]}</h2>
      <div class="compare-table">
        <p>Vergleich-Details würden hier angezeigt</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close Handler
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.compare-modal-overlay');
  
  const closeModal = () => {
    modal.classList.add('fade-out');
    setTimeout(() => modal.remove(), 300);
  };
  
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
  // ESC key zum Schließen
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
}

// ================================================================
// 🧠 10. GLOSSARY TOOLTIP SYSTEM (Automatisch)
// ================================================================

function initGlossaryTooltips() {
  const glossaryTerms = document.querySelectorAll('.glossar-term dt');
  if (!glossaryTerms.length) return;
  
  // Sammle alle Glossar-Begriffe
  const glossaryData = {};
  glossaryTerms.forEach(dt => {
    const term = dt.textContent.trim();
    const definition = dt.nextElementSibling?.textContent?.trim() || '';
    glossaryData[term] = definition;
  });
  
  // Durchsuche Seite nach Glossar-Begriffen
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const nodesToReplace = [];
  let node;
  
  while (node = walker.nextNode()) {
    nodesToReplace.push(node);
  }
  
  nodesToReplace.forEach(textNode => {
    let content = textNode.textContent;
    let hasMatch = false;
    
    Object.keys(glossaryData).forEach(term => {
      if (content.toLowerCase().includes(term.toLowerCase())) {
        hasMatch = true;
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        content = content.replace(regex, `<span class="glossary-link" data-term="${term}">$&</span>`);
      }
    });
    
    if (hasMatch) {
      const span = document.createElement('span');
      span.innerHTML = content;
      textNode.parentNode.replaceChild(span, textNode);
    }
  });
  
  // Event Handler für Tooltips
  document.addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains('glossary-link')) {
      const term = e.target.getAttribute('data-term');
      const definition = glossaryData[term];
      
      showGlossaryTooltip(e.target, definition);
    }
  }, true);
}

/**
 * Zeigt Glossar-Tooltip an
 * @param {Element} element - Element mit Tooltip
 * @param {string} definition - Definition zum Anzeigen
 */
function showGlossaryTooltip(element, definition) {
  // Old Tooltip entfernen
  const oldTooltip = document.querySelector('.glossary-tooltip');
  if (oldTooltip) oldTooltip.remove();
  
  const tooltip = document.createElement('div');
  tooltip.className = 'glossary-tooltip';
  tooltip.textContent = definition;
  tooltip.setAttribute('role', 'tooltip');
  
  document.body.appendChild(tooltip);
  
  // Position Tooltip
  const rect = element.getBoundingClientRect();
  tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
  tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
  
  // Remove on mouseleave
  element.addEventListener('mouseleave', () => {
    tooltip.remove();
  }, { once: true });
}

// ================================================================
// 🚀 INITIALIZATION - Document Ready Event
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialisiere alle Module der Reihe nach
  initLoader();        // Loader verstecken
  initActiveNav();     // Navigation highlighting
  initScrollToTop();   // Scroll to Top Button
  initDarkMode();      // Dark Mode Preference
  initScrollProgress(); // Progress Bar
  initSectionAnimations(); // Fade-In Animations
  initSearch();        // Globale Suche
  initFilters();       // Filter System
  initCompareSystem(); // Vergleich Modal
  initGlossaryTooltips(); // Glossar Tooltips
});
