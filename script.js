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
// 📱 MOBILE NAVIGATION - Hamburger Menu
// ================================================================

function initMobileNav() {
  // Create hamburger toggle if not exists
  const navContainer = document.querySelector('.nav-container');
  if (!navContainer) return;

  // Check if toggle already exists
  let navToggle = document.querySelector('.nav-toggle');
  if (!navToggle) {
    navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.setAttribute('aria-label', 'Navigation expandieren');
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    navContainer.insertBefore(navToggle, document.querySelector('.nav-search'));
  }

  // Get nav-links
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks || !navToggle) return;

  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('mobile-visible');
  });

  // Close menu when clicking on a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('mobile-visible');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('mobile-visible');
    }
  });
}

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
  const navbar = document.querySelector('.main-nav');
  if (!scrollBtn) return;
  
  // Wichtig: Scroll-Event geführt mit throttle um Performance zu sparen
  const handleScroll = throttle(() => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
    
    // Add shadow to navbar when scrolled
    if (navbar && window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else if (navbar) {
      navbar.classList.remove('scrolled');
    }
  }, 100);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Click Handler für Button
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



// ================================================================
// ✨ 5. SECTION FADE-IN ANIMATIONS mit IntersectionObserver
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
// 🔍 6. GLOBAL SEARCH FUNCTION
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
// 🎨 7. FILTER SYSTEM (für device-cards auf index.html)
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
// ⚖️ 8. DEVICE COMPARISON MODAL SYSTEM
// ================================================================

function initCompareSystem() {
  const compareToggle = document.getElementById('compareToggle');
  const compareCheckboxes = document.querySelectorAll('[data-compare-checkbox]');
  const compareBtn = document.getElementById('compareBtn');
  
  if (!compareCheckboxes.length) return;
  
  // State tracking
  let selectedDevices = [];
  const MAX_COMPARE = 2;
  let compareModeActive = false;
  
  // Toggle Compare Mode
  if (compareToggle) {
    compareToggle.addEventListener('change', (e) => {
      compareModeActive = e.target.checked;
      
      compareCheckboxes.forEach(checkbox => {
        checkbox.style.display = compareModeActive ? 'block' : 'none';
      });
      
      if (!compareModeActive) {
        // Reset checkboxes wenn mode ausgeschaltet
        compareCheckboxes.forEach(cb => cb.checked = false);
        selectedDevices = [];
        if (compareBtn) compareBtn.disabled = true;
      }
    });
  }
  
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
 * Device Datenbank für Vergleiche
 */
const DEVICE_DATABASE = {
  'Diabetes-Technologien': {
    kategorie: 'Therapie & Monitoring',
    beschreibung: 'Sensoren, CGM-Systeme, Insulinpumpen',
    anwendung: 'Diabetes-Management',
    verfügbarkeit: 'Weit verbreitet',
    kosten: 'Moderat bis Hoch',
    zukunft: 'Künstliche Bauchspeicheldrüse'
  },
  'Allergiediagnostik': {
    kategorie: 'Diagnostik',
    beschreibung: 'Prick-Tests, IgE-Bestimmung, Molekulardiagnostik',
    anwendung: 'Allergie-Erkennung',
    verfügbarkeit: 'Standard in Kliniken',
    kosten: 'Niedrig bis Mittel',
    zukunft: 'Epikutantests & Component-Diagnostik'
  },
  'Herz-Kreislauf': {
    kategorie: 'Diagnostik & Therapie',
    beschreibung: 'EKG, Blutdruckmessung, Schrittmacher',
    anwendung: 'Herz-Kreislauf-Monitoring',
    verfügbarkeit: 'Sehr verbreitet',
    kosten: 'Variabel (niedrig bis sehr hoch)',
    zukunft: 'Drahtlose Implantate'
  },
  'Bildgebung': {
    kategorie: 'Diagnostik',
    beschreibung: 'Röntgen, CT, MRT, Ultraschall',
    anwendung: 'Bildgebendes Verfahren',
    verfügbarkeit: 'In allen Kliniken',
    kosten: 'Hoch (MRT/CT)',
    zukunft: 'Hochauflösungs-KI-Analyse'
  },
  'Neurochips': {
    kategorie: 'Forschung & Therapie',
    beschreibung: 'Brain-Computer Interfaces, tiefe Hirnstimulation',
    anwendung: 'Neuromodulation',
    verfügbarkeit: 'Experimental / Begrenzt',
    kosten: 'Sehr Hoch',
    zukunft: 'Bidirektionale Neural-Recording'
  },
  'Exoskelette': {
    kategorie: 'Therapie & Rehabilitation',
    beschreibung: 'Roboterassistenz in Bewegung',
    anwendung: 'Rehabilitation, Industrie',
    verfügbarkeit: 'Zunehmend in Kliniken',
    kosten: 'Hoch',
    zukunft: 'Brain-gesteuerte Exoskelette'
  },
  'Genetik': {
    kategorie: 'Forschung & Therapie',
    beschreibung: 'CRISPR, DNA-Sequenzierung',
    anwendung: 'Genanalyse & Gentherapie',
    verfügbarkeit: 'Begrenzt auf spezialisierte Zentren',
    kosten: 'Sinkend (Sequenzierung)',
    zukunft: 'In-vivo CRISPR-Therapien'
  },
  'KI-Diagnose': {
    kategorie: 'Zukunftstechnologie',
    beschreibung: 'Künstliche Intelligenz für Analyse',
    anwendung: 'Bildanalyse, Diagnostik',
    verfügbarkeit: 'Zunehmend in Radiologie',
    kosten: 'Variable',
    zukunft: 'Vollautomatisierte Diagnose'
  },
  'Zukunftstechnologien': {
    kategorie: 'Forschung',
    beschreibung: 'Nano-Medizin, Bio-Interfaces',
    anwendung: 'Experimentell',
    verfügbarkeit: 'Nicht i.d.R. verfügbar',
    kosten: 'R&D Phase',
    zukunft: 'Körpereigene Nanotechnik'
  }
};

/**
 * Öffnet Modal mit Vergleich zweier Geräte
 * @param {Array} devices - zwei zu vergleichende Geräte
 */
function openCompareModal(devices) {
  // Stelle sicher dass beide Geräte existieren
  const device1 = DEVICE_DATABASE[devices[0]];
  const device2 = DEVICE_DATABASE[devices[1]];
  
  if (!device1 || !device2) {
    console.warn('Ein oder beide Geräte nicht in Datenbank gefunden');
    return;
  }
  
  // Erstelle Vergleichstabelle
  const tableHTML = `
    <table class="device-comparison-table">
      <thead>
        <tr>
          <th>Eigenschaft</th>
          <th>${devices[0]}</th>
          <th>${devices[1]}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Kategorie</strong></td>
          <td>${device1.kategorie}</td>
          <td>${device2.kategorie}</td>
        </tr>
        <tr>
          <td><strong>Beschreibung</strong></td>
          <td>${device1.beschreibung}</td>
          <td>${device2.beschreibung}</td>
        </tr>
        <tr>
          <td><strong>Anwendungsgebiet</strong></td>
          <td>${device1.anwendung}</td>
          <td>${device2.anwendung}</td>
        </tr>
        <tr>
          <td><strong>Verfügbarkeit</strong></td>
          <td>${device1.verfügbarkeit}</td>
          <td>${device2.verfügbarkeit}</td>
        </tr>
        <tr>
          <td><strong>Kostenbereich</strong></td>
          <td>${device1.kosten}</td>
          <td>${device2.kosten}</td>
        </tr>
        <tr>
          <td><strong>Zukunftsperspektive</strong></td>
          <td>${device1.zukunft}</td>
          <td>${device2.zukunft}</td>
        </tr>
      </tbody>
    </table>
  `;
  
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
        ${tableHTML}
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
// 🧠 9. GLOSSARY TOOLTIP SYSTEM (Automatisch)
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

// Related Links Data (für Themenseiten)
const relatedLinksData = {
  diabetes: [
    ["International Diabetes Federation", "https://idf.org/"],
    ["Deutsche Diabetes Gesellschaft", "https://www.deutsche-diabetes-gesellschaft.de/"],
    ["American Diabetes Association", "https://www.diabetes.org/"],
    ["WHO - Diabetes", "https://www.who.int/health-topics/diabetes"],
    ["CDC - Diabetes", "https://www.cdc.gov/diabetes/"],
    ["NIH - Diabetes Research", "https://www.niddk.nih.gov/"]
  ],
  allergie: [
    ["Österreichische Gesellschaft für Allergologie", "https://www.oegaai.at/"],
    ["Deutsche Gesellschaft für Allergologie und klinische Immunologie", "https://www.dgaki.de/"],
    ["American Academy of Allergy, Asthma & Immunology", "https://www.aaaai.org/"],
    ["WHO - Allergies", "https://www.who.int/"],
    ["Pollenwarndienst Europa", "https://www.pollenwarndienst.at/"],
    ["Allergy & Asthma Network", "https://www.allergyasthmanetwork.org/"]
  ],
  herz: [
    ["Deutsche Herzstiftung", "https://www.herzstiftung.de/"],
    ["American Heart Association", "https://www.heart.org/"],
    ["European Heart Rhythm Association", "https://www.ehra.org/"],
    ["British Heart Foundation", "https://www.bhf.org.uk/"],
    ["Mayo Clinic - Heart Diseases", "https://www.mayoclinic.org/diseases-conditions/heart-disease/"],
    ["NIH - Heart Institute", "https://www.nhlbi.nih.gov/"]
  ],
  bildgebung: [
    ["Radiopaedia - Medical Imaging", "https://radiopaedia.org/"],
    ["European Society of Radiology", "https://www.myesr.org/"],
    ["American College of Radiology", "https://www.acr.org/"],
    ["MRI Explained", "https://mriexplained.com/"],
    ["FDA - Medical Imaging", "https://www.fda.gov/radiation-emitting-products/"],
    ["Nature - Medical Imaging Research", "https://www.nature.com/"]
  ],
  neurochips: [
    ["BCI Society", "https://www.bci-info.org/"],
    ["Neuralink Public Information", "https://neuralink.com/"],
    ["Brain-Computer Interfaces - TU Graz", "https://bci.tugraz.at/"],
    ["Frontiers in Neuroscience", "https://www.frontiersin.org/journals/neuroscience/"],
    ["NINDS - Brain Research", "https://www.ninds.nih.gov/"],
    ["Nature Neuroscience", "https://www.nature.com/articles/s41593-021-00928-z"]
  ],
  exoskelette: [
    ["Exoskeleton Report", "https://exoskeletonreport.com/"],
    ["ReWalk Robotics", "https://rewalk.com/"],
    ["Ekso Bionics", "https://eksobionics.com/"],
    ["ScienceDirect - Exoskeletons", "https://www.sciencedirect.com/topics/engineering/exoskeleton"],
    ["IEEE - Robotics & Automation", "https://www.ieee.org/"],
    ["Wearable Robotics - Research", "https://www.frontiersin.org/"]
  ],
  genetik: [
    ["Genome.gov - NIH", "https://www.genome.gov/"],
    ["Learn Genetics - University of Utah", "https://learn.genetics.utah.edu/"],
    ["YourGenome - Wellcome Sanger Institute", "https://www.yourgenome.org/"],
    ["Nature Genetics", "https://www.nature.com/subjects/genetics"],
    ["CRISPR Gene Editing Database", "https://www.ebi.ac.uk/"],
    ["American Society of Human Genetics", "https://www.ashg.org/"]
  ],
  ki: [
    ["AI in Healthcare - Stanford", "https://aihealth.stanford.edu/"],
    ["WHO - AI Guidelines for Health", "https://www.who.int/publications/i/item/9789240029200"],
    ["Nature Machine Intelligence", "https://www.nature.com/subjects/machine-learning"],
    ["OpenAI - Research on AI Safety", "https://openai.com/research/"],
    ["MIT - AI for Healthcare", "https://dspace.mit.edu/"],
    ["IEEE Xplore - AI in Medicine", "https://ieeexplore.ieee.org/"]
  ],
  zukunft: [
    ["MIT Technology Review - Healthcare", "https://www.technologyreview.com/topic/health/"],
    ["WHO - Digital Health", "https://www.who.int/health-topics/digital-health"],
    ["Nature - Medical Research", "https://www.nature.com/subjects/medical-research"],
    ["NIH - Medical Research", "https://www.nih.gov/"],
    ["EU Digital Health Policy", "https://ec.europa.eu/health/"],
    ["Sciencedaily - Medical News", "https://www.sciencedaily.com/"]
  ]
};

/**
 * Setter für Related Links (für Themenseiten)
 * @param {string} topic - Topic Key (z.B. 'diabetes')
 */
function setRelatedLinks(topic) {
  const links = relatedLinksData[topic];
  const relatedLinksContainer = document.getElementById('related-links');
  
  if (!links || !relatedLinksContainer) return;
  
  relatedLinksContainer.innerHTML = '';
  
  links.forEach(([title, url]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = title;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    li.appendChild(a);
    relatedLinksContainer.appendChild(li);
  });
}

/**
 * Backward Compatibility Alias für alte Code
 */
function setActiveNavLink() {
  initActiveNav();
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialisiere alle Module der Reihe nach
  initLoader();        // Loader verstecken
  initMobileNav();     // Mobile Menü
  initActiveNav();     // Navigation highlighting
  initScrollToTop();   // Scroll to Top Button
  initSectionAnimations(); // Fade-In Animations
  initSearch();        // Globale Suche
  initFilters();       // Filter System
  initCompareSystem(); // Vergleich Modal
  initGlossaryTooltips(); // Glossar Tooltips
});
