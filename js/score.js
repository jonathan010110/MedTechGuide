/**
 * ===================================================================
 * 📊 MEDTECHGUIDE - YOUR SCORE PAGE
 * ===================================================================
 * Zeigt alle Quiz-Ergebnisse mit Filterung und Statistiken
 */

const QUIZ_API_BASE_URL = 'http://localhost:3001';
const QUIZ_RESULTS_ENDPOINT = `${QUIZ_API_BASE_URL}/quizResults`;

let allResults = [];
let filteredResults = [];

/**
 * Laden aller Ergebnisse vom JSON-Server
 */
async function loadAllResults() {
  const resultsSection = document.getElementById('results-section');
  resultsSection.innerHTML = '<div class="loading">Lade Quiz-Ergebnisse...</div>';

  try {
    const response = await fetch(QUIZ_RESULTS_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    allResults = Array.isArray(data) ? data : (data.value || []);
    filteredResults = [...allResults];

    renderResults();
    updateStats();
  } catch (error) {
    console.error('Fehler beim Laden:', error);
    showError('Fehler beim Laden der Ergebnisse. Ist der JSON-Server gestartet? (npm run start:api)');
    resultsSection.innerHTML = '';
  }
}

/**
 * Zeigt Fehlermeldung an
 */
function showError(message) {
  const errorDiv = document.getElementById('error-message');
  errorDiv.innerHTML = `<div class="error">⚠️ ${message}</div>`;
}

/**
 * Aktualisiert Statistiken
 */
function updateStats() {
  const statsSection = document.getElementById('stats-section');

  if (filteredResults.length === 0) {
    statsSection.innerHTML = '';
    return;
  }

  const totalQuizzes = filteredResults.length;
  const avgScore = Math.round(filteredResults.reduce((sum, r) => sum + (r.prozent || 0), 0) / totalQuizzes);
  const bestScore = Math.max(...filteredResults.map(r => r.prozent || 0));
  const worstScore = Math.min(...filteredResults.map(r => r.prozent || 0));

  statsSection.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${totalQuizzes}</div>
      <div class="stat-label">Quiz abgeschlossen</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${avgScore}%</div>
      <div class="stat-label">Durchschnitt</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${bestScore}%</div>
      <div class="stat-label">Beste Quote</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${worstScore}%</div>
      <div class="stat-label">Niedrigste Quote</div>
    </div>
  `;
}

/**
 * Rendert die Ergebnistabelle
 */
function renderResults() {
  const resultsSection = document.getElementById('results-section');

  if (filteredResults.length === 0) {
    resultsSection.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <div class="empty-state-text">Keine Ergebnisse gefunden</div>
        <div class="empty-state-hint">Spielen Sie ein Quiz, um Ergebnisse zu speichern.</div>
      </div>
    `;
    return;
  }

  const rows = filteredResults.map((result, index) => {
    const datum = new Date(result.datum).toLocaleString('de-DE');
    const percent = result.prozent || Math.round((result.punkte / result.maxPunkte) * 100);
    const scoreBadge = getScoreBadge(percent);
    const kategorieName = getCategoryName(result.kategorie);

    return `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHtml(result.name || 'Unbekannt')}</td>
        <td>${kategorieName}</td>
        <td>${result.punkte} / ${result.maxPunkte}</td>
        <td><span class="score-badge ${scoreBadge}">${percent}%</span></td>
        <td>${datum}</td>
      </tr>
    `;
  }).join('');

  resultsSection.innerHTML = `
    <table class="results-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Kategorie</th>
          <th>Punkte</th>
          <th>Prozent</th>
          <th>Datum</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

/**
 * Bestimmt die CSS-Klasse basierend auf Score
 */
function getScoreBadge(percent) {
  if (percent >= 90) return 'score-excellent';
  if (percent >= 80) return 'score-good';
  if (percent >= 60) return 'score-ok';
  return 'score-poor';
}

/**
 * Gibt lesbare Kategoriename zurück
 */
function getCategoryName(category) {
  const names = {
    diagnostik: '🔍 Diagnostik',
    therapie: '💊 Therapie',
    forschung: '🔬 Forschung',
    zukunft: '🚀 Zukunft',
    depression: '😔 Depression',
    adhs: '🧠 ADHS',
    persoenlichkeit: '🌟 Persönlichkeit'
  };
  return names[category] || category;
}

/**
 * Escaped HTML um XSS zu vermeiden
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Wendet Filter an
 */
function applyFilters() {
  const kategorie = document.getElementById('filter-kategorie').value;
  const name = document.getElementById('filter-name').value.toLowerCase();
  const minScore = parseInt(document.getElementById('filter-min-score').value) || 0;
  const dateFrom = document.getElementById('filter-date').value;

  filteredResults = allResults.filter(result => {
    const resultDate = new Date(result.datum);
    const filterDate = dateFrom ? new Date(dateFrom) : null;

    // Kategorie filtern
    if (kategorie && result.kategorie !== kategorie) {
      return false;
    }

    // Name filtern
    if (name && !result.name.toLowerCase().includes(name)) {
      return false;
    }

    // Minimum Score filtern
    const percent = result.prozent || Math.round((result.punkte / result.maxPunkte) * 100);
    if (percent < minScore) {
      return false;
    }

    // Datum filtern
    if (filterDate && resultDate < filterDate) {
      return false;
    }

    return true;
  });

  // Nach Datum absteigend sortieren
  filteredResults.sort((a, b) => new Date(b.datum) - new Date(a.datum));

  renderResults();
  updateStats();
}

/**
 * Setzt alle Filter zurück
 */
function resetFilters() {
  document.getElementById('filter-kategorie').value = '';
  document.getElementById('filter-name').value = '';
  document.getElementById('filter-min-score').value = '';
  document.getElementById('filter-date').value = '';

  filteredResults = [...allResults];
  filteredResults.sort((a, b) => new Date(b.datum) - new Date(a.datum));

  renderResults();
  updateStats();
}

/**
 * Initialisiert die Score-Seite
 */
function initScorePage() {
  loadAllResults();
}

// Auto-init wenn DOM geladen
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScorePage);
}
