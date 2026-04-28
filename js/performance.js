/**
 * ===================================================================
 * â¡ MEDTECHGUIDE - PERFORMANCE OPTIMIZATIONS
 * ===================================================================
 * Features:
 * - Lazy Loading für Bilder
 * - Deferred Search Index Loading
 * - Progressive Enhancement
 * - Resource Prioritization
 */

// ===================================================================
// –°¼–¯¸ LAZY LOADING FOR IMAGES
// ===================================================================

/**
 * Initialisiert Lazy Loading für Bilder (native, mit fallback)
 */
function initLazyLoading() {
  // Moderne Browser nutzen native loading="lazy"
  const lazyImages = document.querySelectorAll'img[loading="lazy"]');
  
  if (!lazyImages.length) {
    // Fallback: alle img-tags hinzufügen
    document.querySelectorAll'img').forEach(img => {
      // Skip wenn aria-hidden
      if (img.closest('.skip-to-content, .loader, .spinner')) return;
      
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
      
      // Fallback für alte Browser: IntersectionObserver
      if ('IntersectionObserver' in window) {
        initIntersectionObserver(img);
      }
    });
  }
  
  console.log('â Lazy Loading initialisiert');
}

/**
 * Fallback IntersectionObserver für alte Browser
 */
function initIntersectionObserver(img) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        // Load image wenn sichtbar
        if (image.src || image.dataset.src) {
          image.src = image.dataset.src || image.src;
          image.removeAttribute('data-src');
          imageObserver.unobserve(image);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  imageObserver.observe(img);
}

// ===================================================================
// –° PERFORMANCE MONITORING (optional)
// ===================================================================

/**
 * Loggt wichtige Performance Metriken (nur in Development)
 */
function logPerformanceMetrics() {
  if (document.readyState === 'loading') {
    return;
  }

  // Nutze Performance API wenn verfügbar
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const metrics = {
      'DOM Interactive': timing.domInteractive - timing.navigationStart,
      'DOM Complete': timing.domComplete - timing.navigationStart,
      'Page Load (onload)': timing.loadEventEnd - timing.navigationStart,
      'TTI (Est.)': timing.domInteractive - timing.navigationStart
    };
    
    // Log nur wenn nicht in production
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.group('–° Performance Metrics');
      Object.entries(metrics).forEach(([label, ms]) => {
        console.log(`${label}: ${ms}ms`);
      });
      console.groupEnd();
    }
  }

  // Cumulative Layout Shift (CLS) - neuere API
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('CLS Entry:', entry.value);
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // API not available
    }
  }
}

// ===================================================================
// –°± SERVICE WORKER REGISTRATION (optional, für offline support)
// ===================================================================

/**
 * Registriert ServiceWorker für offline Funktionalität
 * Hinweis: Benötigt service-worker.js Datei
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('â Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('â –¯¸ Service Worker registration failed:', error);
      });
  }
}

// ===================================================================
// â¡ RESOURCE PRIORITIZATION
// ===================================================================

/**
 * Preload wichtige Ressourcen
 */
function addResourceHints() {
  const head = document.head;
  
  // DNS Prefetch für externe Ressourcen (wenn vorhanden)
  const links = [
    // Beispiel: { rel: 'dns-prefetch', href: 'https://example.com' }
  ];
  
  links.forEach(link => {
    const linkEl = document.createElement('link');
    linkEl.rel = link.rel;
    linkEl.href = link.href;
    head.appendChild(linkEl);
  });
}

// ===================================================================
// –° INITIALIZATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLazyLoading();
  logPerformanceMetrics();
  addResourceHints();
  
  // Deferred ServiceWorker registration (nicht blocking)
  if (document.readyState === 'complete') {
    // registerServiceWorker(); // Uncomment wenn service-worker.js exists
  } else {
    window.addEventListener('load', () => {
      // registerServiceWorker();
    });
  }
});

// Oder früher laden wenn möglich
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoading);
} else {
  initLazyLoading();
}

// ===================================================================
// –° EXPORT
// ===================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initLazyLoading,
    logPerformanceMetrics
  };
}
