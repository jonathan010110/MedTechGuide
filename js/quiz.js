/**
 * ===================================================================
 * 🎯 MEDTECHGUIDE - QUIZ SYSTEM
 * ===================================================================
 * Interaktives Quiz mit Kategorien: Diagnostik, Therapie, Forschung, Zukunft
 * Multiple Choice, Score-Tracking, Ergebnis-Anzeige
 */

// ===================================================================
// 📚 QUIZ DATABASE
// ===================================================================

const QUIZ_DATABASE = {
  diagnostik: [
    {
      frage: "Welches Verfahren misst kontinuierlich den Blutzucker?",
      optionen: ["EKG", "CGM (Continuous Glucose Monitoring)", "Röntgen", "MRT"],
      antwort: 1,
      erklärung: "CGM misst die Glukose interstitiell alle 5 Minuten."
    },
    {
      frage: "Was ist ein Prick-Test?",
      optionen: ["Blutabnahme", "Allergie-Test mit Hautreaktion", "Atemtest", "Urintest"],
      antwort: 1,
      erklärung: "Ein Prick-Test kratzt die Haut mit Allergenen und beobachtet die Reaktion nach 15 Min."
    },
    {
      frage: "Welche Bildgebung nutzt Magnetfelder?",
      optionen: ["Röntgen", "CT", "MRT", "Ultraschall"],
      antwort: 2,
      erklärung: "MRT (Magnetresonanztomographie) nutzt starke Magnetfelder und Radiowellen."
    },
    {
      frage: "Was misst ein EKG?",
      optionen: ["Blutdruck", "Elektrische Herzaktivität", "Sauerstoff", "Temperatur"],
      antwort: 1,
      erklärung: "Das Elektrokardiogramm registriert die elektrischen Signale des Herzens."
    },
    {
      frage: "Wie heißt der Schnelltestindex für Allergie-Bluttest?",
      optionen: ["CAP-FEIA", "ELISA", "PCR", "Western Blot"],
      antwort: 0,
      erklärung: "CAP-FEIA ist der Standard für IgE-Bestimmung in Blutproben."
    }
  ],
  therapie: [
    {
      frage: "Was ist eine Insulinpumpe?",
      optionen: ["Ein Beatmungsgerät", "Ein tragbares Gerät für kontinuierliche Insulinabgabe", "Ein Dialysegerät", "Ein Infusionsständer"],
      antwort: 1,
      erklärung: "Eine Insulinpumpe gibt kontinuierlich Insulin ab über einen subcutanen Katheter."
    },
    {
      frage: "Was ist ein Hybrid-Closed-Loop System?",
      optionen: ["CGM + Pumpe + Algorithmus automatisch verbunden", "Zwei Insulinpumpen", "Ein altes System", "Ein manuelles System"],
      antwort: 0,
      erklärung: "Hybrid-Closed-Loop verbindet Sensor, Pumpe und Algorithmus für automatische Kontrolle."
    },
    {
      frage: "Was ist ein Exoskelett?",
      optionen: ["Eine äußere Stützstruktur für Bewegungen", "Ein implantierbares Gerät", "Ein Medikament", "Eine Prothese"],
      antwort: 0,
      erklärung: "Ein Exoskelett ist eine mechanische Struktur, die Bewegungen verstärkt oder unterstützt."
    },
    {
      frage: "Was ist Hyposensibilisierung?",
      optionen: ["Blockieren von Allergenen", "Schrittweise Gewöhnung des Immunsystems", "Medikament gegen Allergie", "Chirurgischer Eingriff"],
      antwort: 1,
      erklärung: "Hyposensibilisierung (Immuntherapie) gewöhnt das Immunsystem schrittweise an das Allergen."
    },
    {
      frage: "Was ist ein Schrittmacher?",
      optionen: ["Ein Medikament", "Ein implantierbares Herzgerät für Rhythmusstabilität", "Ein Sensor", "Eine Software"],
      antwort: 1,
      erklärung: "Ein Schrittmacher reguliert den Herzrhythmus durch elektrische Impulse."
    }
  ],
  forschung: [
    {
      frage: "Was ist CRISPR?",
      optionen: ["Eine Kamera", "Ein Geneditierungs-Tool", "Eine Krankheit", "Ein Protein"],
      antwort: 1,
      erklärung: "CRISPR ist ein molekulares Werkzeug zur präzisen DNA-Bearbeitung."
    },
    {
      frage: "Was ist ein Brain-Computer Interface (BCI)?",
      optionen: ["Ein Videospiel", "Eine Verbindung zwischen Gehirn und Computer", "Ein Hörgerät", "Eine Brille"],
      antwort: 1,
      erklärung: "Ein BCI verbindet das Gehirn direkt mit Computersystemen für Steuerung von Geräten."
    },
    {
      frage: "Wie schnell ist die DNA-Sequenzierung heute im Vergleich zu 2001?",
      optionen: ["Gleich schnell", "10x schneller", "Millionen mal schneller", "1000x schneller"],
      antwort: 2,
      erklärung: "Die DNA-Sequenzierung ist heute Millionen mal schneller und günstiger als 2001."
    },
    {
      frage: "Was ist tiefe Hirnstimulation?",
      optionen: ["Massage", "Elektrische Stimulation von Gehirnregionen", "Gedankenlesung", "Meditation"],
      antwort: 1,
      erklärung: "Tiefe Hirnstimulation (DBS) nutzt Elektroden um Gehirnfunktionen zu regulieren."
    },
    {
      frage: "Was ist die künstliche Bauchspeicheldrüse?",
      optionen: ["Ein Organ-Implantat", "Ein automatisiertes System für Insulinregulation", "Ein Medikament", "Ein Sensor"],
      antwort: 1,
      erklärung: "Die künstliche Bauchspeicheldrüse ist ein vollständig automatisiertes Insulin-Abgabesystem."
    }
  ],
  zukunft: [
    {
      frage: "Was ist Nanomedizin?",
      optionen: ["Homöopathie", "Sehr kleine Partikel für Medizin", "Eine alternative Medizin", "Ein altes Konzept"],
      antwort: 1,
      erklärung: "Nanomedizin nutzt Nanopartikel für gezielten Drug-Delivery und Biosensoren."
    },
    {
      frage: "Was ist ein Bio-Interface?",
      optionen: ["Ein Videospiel-Controller", "Eine Schnittstelle zwischen Biologie und Technologie", "Ein Medikament", "Eine Prothese"],
      antwort: 1,
      erklärung: "Bio-Interfaces verbinden biologische Systeme direkt mit technologischen Komponenten."
    },
    {
      frage: "Welches Problem soll nicht-invasive Glukosemessung lösen?",
      optionen: ["Zu hohe Kosten", "Zu viele Nadeln", "Zu langsam", "Zu unpräzise"],
      antwort: 1,
      erklärung: "Nicht-invasive CGM-Sensoren sollen ohne Nadeln über Schweiß/Tränen messen."
    },
    {
      frage: "Was ist präzisionsmedizin?",
      optionen: ["Allgemeine Behandlung", "Personalisierte Behandlung basierend auf Genetik", "Alte Medizin", "Naturheilkunde"],
      antwort: 1,
      erklärung: "Präzisionsmedizin nutzt genetische Daten für individualisierte Behandlungen."
    },
    {
      frage: "Was könnte bidirektionale Neural-Recording ermöglichen?",
      optionen: ["Bessere Hörgeräte", "Lesen UND Schreiben von Hirnsignalen", "Mehr Speicher", "Schnelleres Internet"],
      antwort: 1,
      erklärung: "Bidirektionale Neural-Recording würde Gedankenlesung und direkte Hirn-Stimulation ermöglichen."
    }
  ]
};

// ===================================================================
// 🎮 QUIZ STATE & LOGIC
// ===================================================================

let quizState = {
  aktiv: false,
  kategorie: null,
  aktuelleFrageIndex: 0,
  punkte: 0,
  antworten: [],
  maxPunkte: 0
};

/**
 * Startet ein neues Quiz
 */
function startQuiz(kategorie) {
  if (!QUIZ_DATABASE[kategorie]) {
    console.warn('Kategorie nicht gefunden:', kategorie);
    return;
  }

  quizState = {
    aktiv: true,
    kategorie: kategorie,
    aktuelleFrageIndex: 0,
    punkte: 0,
    antworten: [],
    maxPunkte: QUIZ_DATABASE[kategorie].length
  };

  showQuizUI();
  displayQuizFrage();
}

/**
 * Zeigt nächste Frage
 */
function nextQuizFrage(antwortIndex) {
  const db = QUIZ_DATABASE[quizState.kategorie];
  const aktuelleFrageIndex = quizState.aktuelleFrageIndex;
  
  // Speichere Antwort
  const isKorrekt = antwortIndex === db[aktuelleFrageIndex].antwort;
  quizState.antworten.push({
    frage: db[aktuelleFrageIndex].frage,
    selected: antwortIndex,
    korrekt: db[aktuelleFrageIndex].antwort,
    isKorrekt: isKorrekt
  });
  
  if (isKorrekt) {
    quizState.punkte++;
  }

  // Nächste Frage
  quizState.aktuelleFrageIndex++;
  
  if (quizState.aktuelleFrageIndex < db.length) {
    displayQuizFrage();
  } else {
    showQuizErgebnis();
  }
}

/**
 * Zeigt aktuelle Frage
 */
function displayQuizFrage() {
  const db = QUIZ_DATABASE[quizState.kategorie];
  const frage = db[quizState.aktuelleFrageIndex];
  const container = document.getElementById('quiz-container');

  if (!container) return;

  const progressProzent = ((quizState.aktuelleFrageIndex + 1) / db.length) * 100;

  let html = `
    <div class="quiz-question">
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progressProzent}%"></div>
        <div class="quiz-progress-text">
          Frage ${quizState.aktuelleFrageIndex + 1} von ${db.length}
        </div>
      </div>
      
      <h2>${frage.frage}</h2>
      
      <div class="quiz-optionen">
  `;

  frage.optionen.forEach((option, index) => {
    html += `
      <button class="quiz-option" onclick="nextQuizFrage(${index})">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
      </button>
    `;
  });

  html += `
      </div>
      
      <button class="quiz-close" onclick="closeQuiz()">✕ Quiz beenden</button>
    </div>
  `;

  container.innerHTML = html;
}

/**
 * Zeigt Quiz-Ergebnis
 */
function showQuizErgebnis() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const punkte = quizState.punkte;
  const maxPunkte = quizState.maxPunkte;
  const prozent = Math.round((punkte / maxPunkte) * 100);
  
  let bewertung = '';
  let emoji = '';
  if (prozent >= 90) {
    bewertung = 'Ausgezeichnet! 🌟';
    emoji = '🏆';
  } else if (prozent >= 80) {
    bewertung = 'Sehr gut! 👏';
    emoji = '🥇';
  } else if (prozent >= 70) {
    bewertung = 'Gut! 👍';
    emoji = '🥈';
  } else if (prozent >= 60) {
    bewertung = 'Bestanden! ✅';
    emoji = '🥉';
  } else {
    bewertung = 'Noch etwas Üben! 💪';
    emoji = '📚';
  }

  let detailsHtml = quizState.antworten.map((a, i) => `
    <div class="quiz-result-item ${a.isKorrekt ? 'korrekt' : 'falsch'}">
      <h4>Frage ${i + 1}: ${a.frage}</h4>
      <p class="status">${a.isKorrekt ? '✅ Korrekt' : '❌ Falsch'}</p>
      ${!a.isKorrekt ? `<p class="korrekt-answer">Richtige Antwort: ${QUIZ_DATABASE[quizState.kategorie][i].optionen[a.korrekt]}</p>` : ''}
    </div>
  `).join('');

  const html = `
    <div class="quiz-result">
      <div class="quiz-result-header">
        <div class="quiz-result-emoji">${emoji}</div>
        <h2>Quiz abgeschlossen!</h2>
        <p class="quiz-result-rating">${bewertung}</p>
      </div>
      
      <div class="quiz-result-score">
        <div class="score-circle">
          <div class="score-number">${punkte}/${maxPunkte}</div>
          <div class="score-percent">${prozent}%</div>
        </div>
      </div>
      
      <div class="quiz-result-details">
        <h3>Detailergebnisse:</h3>
        ${detailsHtml}
      </div>
      
      <div class="quiz-result-actions">
        <button class="btn btn-primary" onclick="startQuiz('${quizState.kategorie}')">
          Quiz wiederholen
        </button>
        <button class="btn btn-secondary" onclick="closeQuiz()">
          Beenden
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ===================================================================
// 🎨 UI MANAGEMENT
// ===================================================================

/**
 * Zeigt das Quiz-Interface
 */
function showQuizUI() {
  // Erstelle Quiz-Container wenn nicht vorhanden
  let container = document.getElementById('quiz-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'quiz-container';
    container.className = 'quiz-modal';
    document.body.appendChild(container);
  }
  
  container.classList.add('quiz-active');
}

/**
 * Schließt das Quiz
 */
function closeQuiz() {
  const container = document.getElementById('quiz-container');
  if (container) {
    container.classList.remove('quiz-active');
    quizState.aktiv = false;
  }
}

/**
 * Öffnet Quiz Modal mit Kategorie-Wahl
 */
function openQuizModal() {
  let modal = document.getElementById('quiz-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quiz-modal';
    modal.className = 'quiz-select-modal';
    document.body.appendChild(modal);
  }

  const kategorien = [
    { key: 'diagnostik', name: '🔍 Diagnostik', desc: 'Testverfahren und Mess-Instrumente' },
    { key: 'therapie', name: '💊 Therapie', desc: 'Behandlungs-Geräte und -Systeme' },
    { key: 'forschung', name: '🔬 Forschung', desc: 'Neue Technologien in Entwicklung' },
    { key: 'zukunft', name: '🚀 Zukunft', desc: 'Kommende Innovationen' }
  ];

  let html = `
    <div class="quiz-modal-overlay" onclick="closeQuizModal()"></div>
    <div class="quiz-modal-content">
      <button class="modal-close" onclick="closeQuizModal()">✕</button>
      <h2>Wähle eine Quiz-Kategorie</h2>
      <p class="quiz-modal-subtitle">Test dein Wissen über Medizintechnik</p>
      
      <div class="quiz-kategorien-grid">
  `;

  kategorien.forEach(kat => {
    html += `
      <button class="quiz-kategorie-btn" onclick="startQuiz('${kat.key}')">
        <div class="kategorie-icon">${kat.name.split(' ')[0]}</div>
        <div class="kategorie-name">${kat.name.split(' ').slice(1).join(' ')}</div>
        <div class="kategorie-desc">${kat.desc}</div>
        <div class="kategorie-fragen">${QUIZ_DATABASE[kat.key].length} Fragen</div>
      </button>
    `;
  });

  html += `
      </div>
    </div>
  `;

  modal.innerHTML = html;
  modal.classList.add('quiz-modal-active');
}

/**
 * Schließt Quiz Modal
 */
function closeQuizModal() {
  const modal = document.getElementById('quiz-modal');
  if (modal) {
    modal.classList.remove('quiz-modal-active');
  }
}

// ===================================================================
// 🚀 INITIALIZATION
// ===================================================================

function initQuizSystem() {
  console.log('✅ Quiz System initialisiert');
  
  // Optional: Add Quiz button to page if needed
  const quizBtn = document.querySelector('[data-quiz-button]');
  if (quizBtn) {
    quizBtn.addEventListener('click', openQuizModal);
  }
}

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuizSystem);
} else {
  initQuizSystem();
}

// Export für externe Nutzung
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    startQuiz,
    openQuizModal,
    closeQuiz,
    closeQuizModal,
    QUIZ_DATABASE
  };
}
