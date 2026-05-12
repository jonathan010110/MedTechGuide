/**
 * ===================================================================
 * 🎯 MEDTECHGUIDE - ADVANCED QUIZ & ASSESSMENT SYSTEM v2.0
 * ===================================================================
 * Interaktives Quiz mit Medizintechnik + Professionelle psychologische Tests
 * Multiple Choice & Likert-Skalen, Randomisierung, Score-Tracking
 */

// ===================================================================
// 📚 QUIZ DATABASE WITH RANDOMIZATION
// ===================================================================

const QUIZ_DATABASE = {
  diagnostik: {
    type: 'multiple-choice',
    fragen: [
      { frage: "Welches Verfahren misst kontinuierlich den Blutzucker?", optionen: ["EKG", "CGM (Continuous Glucose Monitoring)", "Röntgen", "MRT"], antwort: 1, erklärung: "CGM misst die Glukose interstitiell alle 5 Minuten." },
      { frage: "Was ist ein Prick-Test?", optionen: ["Blutabnahme", "Allergie-Test mit Hautreaktion", "Atemtest", "Urintest"], antwort: 1, erklärung: "Ein Prick-Test kratzt die Haut mit Allergenen und beobachtet die Reaktion nach 15 Min." },
      { frage: "Welche Bildgebung nutzt Magnetfelder?", optionen: ["Röntgen", "CT", "MRT", "Ultraschall"], antwort: 2, erklärung: "MRT nutzt starke Magnetfelder und Radiowellen." },
      { frage: "Was misst ein EKG?", optionen: ["Blutdruck", "Elektrische Herzaktivität", "Sauerstoff", "Temperatur"], antwort: 1, erklärung: "Das Elektrokardiogramm registriert die elektrischen Signale des Herzens." },
      { frage: "Wie heißt der Schnelltestindex für Allergie-Bluttest?", optionen: ["CAP-FEIA", "ELISA", "PCR", "Western Blot"], antwort: 0, erklärung: "CAP-FEIA ist der Standard für IgE-Bestimmung." }
    ]
  },
  therapie: {
    type: 'multiple-choice',
    fragen: [
      { frage: "Was ist eine Insulinpumpe?", optionen: ["Ein Beatmungsgerät", "Ein tragbares Gerät für kontinuierliche Insulinabgabe", "Ein Dialysegerät", "Ein Infusionsständer"], antwort: 1, erklärung: "Eine Insulinpumpe gibt kontinuierlich Insulin ab über einen subcutanen Katheter." },
      { frage: "Was ist ein Hybrid-Closed-Loop System?", optionen: ["CGM + Pumpe + Algorithmus automatisch verbunden", "Zwei Insulinpumpen", "Ein altes System", "Ein manuelles System"], antwort: 0, erklärung: "Hybrid-Closed-Loop verbindet Sensor, Pumpe und Algorithmus für automatische Kontrolle." },
      { frage: "Was ist ein Exoskelett?", optionen: ["Eine äußere Stützstruktur für Bewegungen", "Ein implantierbares Gerät", "Ein Medikament", "Eine Prothese"], antwort: 0, erklärung: "Ein Exoskelett ist eine mechanische Struktur, die Bewegungen verstärkt oder unterstützt." },
      { frage: "Was ist Hyposensibilisierung?", optionen: ["Blockieren von Allergenen", "Schrittweise Gewöhnung des Immunsystems", "Medikament gegen Allergie", "Chirurgischer Eingriff"], antwort: 1, erklärung: "Hyposensibilisierung gewöhnt das Immunsystem schrittweise an das Allergen." },
      { frage: "Was ist ein Schrittmacher?", optionen: ["Ein Medikament", "Ein implantierbares Herzgerät für Rhythmusstabilität", "Ein Sensor", "Eine Software"], antwort: 1, erklärung: "Ein Schrittmacher reguliert den Herzrhythmus durch elektrische Impulse." }
    ]
  },
  forschung: {
    type: 'multiple-choice',
    fragen: [
      { frage: "Was ist CRISPR?", optionen: ["Eine Kamera", "Ein Geneditierungs-Tool", "Eine Krankheit", "Ein Protein"], antwort: 1, erklärung: "CRISPR ist ein molekulares Werkzeug zur präzisen DNA-Bearbeitung." },
      { frage: "Was ist ein Brain-Computer Interface (BCI)?", optionen: ["Ein Videospiel", "Eine Verbindung zwischen Gehirn und Computer", "Ein Hörgerät", "Eine Brille"], antwort: 1, erklärung: "Ein BCI verbindet das Gehirn direkt mit Computersystemen." },
      { frage: "Wie schnell ist die DNA-Sequenzierung heute vs. 2001?", optionen: ["Gleich schnell", "10x schneller", "Millionen mal schneller", "1000x schneller"], antwort: 2, erklärung: "Die DNA-Sequenzierung ist heute Millionen mal schneller." },
      { frage: "Was ist tiefe Hirnstimulation?", optionen: ["Massage", "Elektrische Stimulation von Gehirnregionen", "Gedankenlesung", "Meditation"], antwort: 1, erklärung: "Tiefe Hirnstimulation nutzt Elektroden um Gehirnfunktionen zu regulieren." },
      { frage: "Was ist die künstliche Bauchspeicheldrüse?", optionen: ["Ein Organ-Implantat", "Ein automatisiertes System für Insulinregulation", "Ein Medikament", "Ein Sensor"], antwort: 1, erklärung: "Die künstliche Bauchspeicheldrüse ist ein vollständig automatisiertes Insulin-System." }
    ]
  },
  zukunft: {
    type: 'multiple-choice',
    fragen: [
      { frage: "Was ist Nanomedizin?", optionen: ["Homöopathie", "Sehr kleine Partikel für Medizin", "Eine alternative Medizin", "Ein altes Konzept"], antwort: 1, erklärung: "Nanomedizin nutzt Nanopartikel für gezielten Drug-Delivery." },
      { frage: "Was ist ein Bio-Interface?", optionen: ["Ein Videospiel-Controller", "Eine Schnittstelle zwischen Biologie und Technologie", "Ein Medikament", "Eine Prothese"], antwort: 1, erklärung: "Bio-Interfaces verbinden biologische Systeme mit technologischen Komponenten." },
      { frage: "Welches Problem soll nicht-invasive Glukosemessung lösen?", optionen: ["Zu hohe Kosten", "Zu viele Nadeln", "Zu langsam", "Zu unpräzise"], antwort: 1, erklärung: "Nicht-invasive CGM-Sensoren sollen ohne Nadeln messen." },
      { frage: "Was ist Präzisionsmedizin?", optionen: ["Allgemeine Behandlung", "Personalisierte Behandlung basierend auf Genetik", "Alte Medizin", "Naturheilkunde"], antwort: 1, erklärung: "Präzisionsmedizin nutzt genetische Daten für individualisierte Behandlungen." },
      { frage: "Was könnte bidirektionale Neural-Recording ermöglichen?", optionen: ["Bessere Hörgeräte", "Lesen UND Schreiben von Hirnsignalen", "Mehr Speicher", "Schnelleres Internet"], antwort: 1, erklärung: "Bidirektionale Neural-Recording würde Gedankenlesung ermöglichen." }
    ]
  },

  depression: {
    type: 'likert',
    name: '😔 Depressions-Screening (PHQ-9)',
    beschreibung: 'Wissenschaftlich validierter Test zur Früherkennung',
    warnung: '⚠️ Ersatz nicht für ärztliche Diagnose. Konsultieren Sie bei Bedarf einen Arzt.',
    fragen: [
      { frage: "Wenig Interesse oder Freude an seinen Tätigkeiten", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Niedergeschlagenheit, Schwermut oder Hoffnungslosigkeit", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Schwierigkeiten ein- oder durchzuschlafen", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Müdigkeit oder Mangel an Energie", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Verminderter Appetit oder Überessen", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Negative Gefühle sich selbst gegenüber", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Schwierigkeiten sich zu konzentrieren", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Verlangsamt oder beschleunigt sich in Bewegungen", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] },
      { frage: "Gedanken, besser tot zu sein", skala: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"] }
    ],
    interpretation: {
      0: { label: "Keine Depression", description: "Ergebnisse deuten nicht auf Depression hin." },
      5: { label: "Leichte Depression", description: "Sie zeigen einige depressive Symptome." },
      10: { label: "Moderate Depression", description: "Fachberatung wird empfohlen." },
      15: { label: "Schwere Depression", description: "⚠️ Konsultieren Sie dringend einen Psychologen." }
    }
  },

  adhs: {
    type: 'likert',
    name: '🧠 ADHS-Screening (ASRS v1.1)',
    beschreibung: 'Professioneller ADHS-Screening-Test',
    warnung: '⚠️ Ersatz nicht für ärztliche Diagnose. Konsultieren Sie einen Spezialisten.',
    fragen: [
      { frage: "Wie oft vergessen Sie Termine oder Aufgaben?", skala: ["Nie/selten", "Manchmal", "Oft", "Sehr oft", "Immer"] },
      { frage: "Wie oft fällt es Ihnen schwer bei Details?", skala: ["Nie/selten", "Manchmal", "Oft", "Sehr oft", "Immer"] },
      { frage: "Wie oft fällt es Ihnen schwer sich zu konzentrieren?", skala: ["Nie/selten", "Manchmal", "Oft", "Sehr oft", "Immer"] },
      { frage: "Wie oft zappeln Sie herum?", skala: ["Nie/selten", "Manchmal", "Oft", "Sehr oft", "Immer"] },
      { frage: "Wie oft fällt es Ihnen schwer zu warten?", skala: ["Nie/selten", "Manchmal", "Oft", "Sehr oft", "Immer"] },
      { frage: "Wie oft unterbrechen oder stören Sie andere?", skala: ["Nie/selten", "Manchmal", "Oft", "Sehr oft", "Immer"] }
    ],
    interpretation: {
      0: { label: "Niedrige ADHS-Merkmale", description: "Keine signifikanten Anzeichen erkannt." },
      10: { label: "Mögliche ADHS", description: "Weitere Evaluation empfohlen." },
      15: { label: "Wahrscheinlich ADHS", description: "⚠️ Fachliche Bewertung wird empfohlen." }
    }
  },

  persoenlichkeit: {
    type: 'bigfive',
    name: '🌟 Big-Five Persönlichkeitstest (ENTF)',
    beschreibung: 'Wissenschaftlich validierter Test der fünf Persönlichkeitsfaktoren',
    dimensionen: {
      O: "Offenheit - Kreativität & Neugier",
      C: "Gewissenhaftigkeit - Ordnung & Pünktlichkeit",
      E: "Extraversion - Geselligkeit & Aktivität",
      A: "Verträglichkeit - Kooperation & Empathie",
      N: "Neurotizismus - Emotionale Stabilität"
    },
    fragen: [
      { frage: "Ich bin das Leben der Gruppe", dimension: "E" },
      { frage: "Ich bin geordnet und pünktlich", dimension: "C" },
      { frage: "Ich interessiere mich für abstrakte Ideen", dimension: "O" },
      { frage: "Ich bin einfühlsam und interessiere mich für andere", dimension: "A" },
      { frage: "Ich mache mir oft Sorgen über verschiedene Dinge", dimension: "N" },
      { frage: "Ich bin spontan und kontaktfreudig", dimension: "E" },
      { frage: "Ich achte auf die Ordnung in meinem Umfeld", dimension: "C" },
      { frage: "Ich bin offen für neue und ungewöhnliche Erfahrungen", dimension: "O" },
      { frage: "Ich beschäftige mich gerne mit anderen Menschen", dimension: "A" },
      { frage: "Ich bin eher reizbar und gestresst", dimension: "N" },
      { frage: "Ich bin eine dynamische und energische Person", dimension: "E" },
      { frage: "Ich bin sorgfältig in meiner Arbeit", dimension: "C" },
      { frage: "Ich habe viele kreative Ideen", dimension: "O" },
      { frage: "Ich versuche, harmonisch mit anderen auszukommen", dimension: "A" },
      { frage: "Ich bin leicht angespannt oder nervös", dimension: "N" },
      { frage: "Ich spreche gerne mit vielen verschiedenen Menschen", dimension: "E" },
      { frage: "Ich bin gründlich bei meinen Aufgaben", dimension: "C" },
      { frage: "Ich denke gerne über Philosophie und Bedeutung nach", dimension: "O" },
      { frage: "Ich bin verständnisvoll und nachsichtig", dimension: "A" },
      { frage: "Ich bin empfindlich gegenüber Kritik", dimension: "N" }
    ]
  }
};

const QUIZ_API_BASE_URL = 'http://localhost:3001';
const QUIZ_RESULTS_ENDPOINT = `${QUIZ_API_BASE_URL}/quizResults`;
let lastScoreSummary = null;

function sanitizePlayerName(rawName) {
  const trimmed = (rawName || '').trim();
  return trimmed.length > 0 ? trimmed.slice(0, 50) : 'Gast';
}

async function saveQuizResultToServer({ name, punkte, maxPunkte, kategorie, testType }) {
  const payload = {
    name: sanitizePlayerName(name),
    punkte,
    datum: new Date().toISOString(),
    maxPunkte,
    prozent: Math.round((punkte / maxPunkte) * 100),
    kategorie,
    testType
  };

  const response = await fetch(QUIZ_RESULTS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Speichern fehlgeschlagen: HTTP ${response.status}`);
  }

  return response.json();
}

async function saveQuizResultFromUI(kategorie, punkte, maxPunkte, testType) {
  const nameInput = document.getElementById('quiz-player-name');
  const saveStatus = document.getElementById('quiz-save-status');
  const saveButton = document.getElementById('quiz-save-button');

  if (!saveStatus || !saveButton) return;

  const playerName = sanitizePlayerName(nameInput ? nameInput.value : '');
  localStorage.setItem('quizPlayerName', playerName);

  saveButton.disabled = true;
  saveStatus.textContent = 'Speichere Ergebnis...';

  try {
    await saveQuizResultToServer({
      name: playerName,
      punkte,
      maxPunkte,
      kategorie,
      testType
    });
    saveStatus.textContent = 'Ergebnis gespeichert.';
  } catch (error) {
    console.error(error);
    saveStatus.textContent = 'Speichern fehlgeschlagen. Ist der JSON-Server gestartet?';
  } finally {
    saveButton.disabled = false;
  }
}

function openScoreWindow() {
  // Navigiere zur Score-Seite
  window.location.href = 'score.html';
}

// ===================================================================
// 🎮 UTILITY FUNCTIONS
// ===================================================================

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getRandomizedQuestions(kategorie) {
  const data = QUIZ_DATABASE[kategorie];
  if (data.type === 'multiple-choice') {
    return shuffleArray(data.fragen).map(f => ({
      ...f,
      optionen: shuffleArray([...f.optionen])
    }));
  }
  return data.fragen;
}

// ===================================================================
// 🎮 QUIZ STATE & LOGIC
// ===================================================================

let quizState = {
  aktiv: false,
  kategorie: null,
  testType: null,
  aktuelleFrageIndex: 0,
  punkte: 0,
  antworten: [],
  maxPunkte: 0,
  scores: {}
};

function startQuiz(kategorie) {
  if (!QUIZ_DATABASE[kategorie]) {
    console.warn('Kategorie nicht gefunden:', kategorie);
    return;
  }

  const dbEntry = QUIZ_DATABASE[kategorie];
  quizState = {
    aktiv: true,
    kategorie: kategorie,
    testType: dbEntry.type,
    aktuelleFrageIndex: 0,
    punkte: 0,
    antworten: [],
    maxPunkte: dbEntry.fragen.length,
    scores: dbEntry.type === 'bigfive' ? { O: 0, C: 0, E: 0, A: 0, N: 0 } : {}
  };

  showQuizUI();
  displayQuizFrage();
}

function nextQuizFrage(antwortIndex) {
  const kategorie = quizState.kategorie;
  const dbEntry = QUIZ_DATABASE[kategorie];
  const fragen = dbEntry.fragen;
  const aktuelleFrage = fragen[quizState.aktuelleFrageIndex];

  if (dbEntry.type === 'multiple-choice') {
    const isKorrekt = antwortIndex === aktuelleFrage.antwort;
    quizState.antworten.push({
      frage: aktuelleFrage.frage,
      selected: antwortIndex,
      korrekt: aktuelleFrage.antwort,
      isKorrekt: isKorrekt
    });
    if (isKorrekt) quizState.punkte++;
  } else if (dbEntry.type === 'likert') {
    quizState.antworten.push({
      frage: aktuelleFrage.frage,
      score: antwortIndex
    });
    quizState.punkte += antwortIndex;
  } else if (dbEntry.type === 'bigfive') {
    const dimension = aktuelleFrage.dimension;
    quizState.scores[dimension] += antwortIndex;
    quizState.antworten.push({
      frage: aktuelleFrage.frage,
      dimension: dimension,
      score: antwortIndex
    });
  }

  quizState.aktuelleFrageIndex++;

  if (quizState.aktuelleFrageIndex < fragen.length) {
    displayQuizFrage();
  } else {
    showQuizErgebnis();
  }
}

function displayQuizFrage() {
  const kategorie = quizState.kategorie;
  const dbEntry = QUIZ_DATABASE[kategorie];
  const fragen = dbEntry.fragen;
  const frage = fragen[quizState.aktuelleFrageIndex];
  const container = document.getElementById('quiz-container');

  if (!container) return;

  const progressProzent = ((quizState.aktuelleFrageIndex + 1) / fragen.length) * 100;

  let html = `
    <div class="quiz-question">
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progressProzent}%"></div>
        <div class="quiz-progress-text">
          Frage ${quizState.aktuelleFrageIndex + 1} von ${fragen.length}
        </div>
      </div>
      
      <h2>${frage.frage}</h2>
  `;

  if (dbEntry.type === 'multiple-choice') {
    html += `<div class="quiz-optionen">`;
    frage.optionen.forEach((option, index) => {
      html += `
        <button class="quiz-option" onclick="nextQuizFrage(${index})">
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${option}</span>
        </button>
      `;
    });
    html += `</div>`;
  } else if (dbEntry.type === 'likert') {
    html += `<div class="likert-scale">`;
    frage.skala.forEach((label, index) => {
      html += `
        <button class="likert-option" onclick="nextQuizFrage(${index})" title="${label}">
          <span class="likert-label">${label}</span>
        </button>
      `;
    });
    html += `</div>`;
  } else if (dbEntry.type === 'bigfive') {
    html += `<div class="likert-scale bigfive-scale">`;
    const labels = ["Stimme gar nicht zu", "Stimme wenig zu", "Neutral", "Stimme zu", "Stimme sehr zu"];
    labels.forEach((label, index) => {
      html += `
        <button class="likert-option" onclick="nextQuizFrage(${index})" title="${label}">
          <span class="likert-number">${index + 1}</span>
        </button>
      `;
    });
    html += `</div>`;
  }

  html += `
      <button class="quiz-close" onclick="closeQuiz()">✕ Quiz beenden</button>
    </div>
  `;

  container.innerHTML = html;
}

function showQuizErgebnis() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const kategorie = quizState.kategorie;
  const dbEntry = QUIZ_DATABASE[kategorie];
  const testType = dbEntry.type;

  let html = `<div class="quiz-result">`;

  if (testType === 'multiple-choice') {
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
      </div>
    `).join('');

    const gespeicherterName = localStorage.getItem('quizPlayerName') || '';
    lastScoreSummary = {
      kategorie,
      punkte,
      maxPunkte,
      prozent,
      bewertung,
      datumISO: new Date().toISOString()
    };

    html += `
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

      <div class="quiz-result-save" style="margin: 1rem 0; padding: 1rem; border: 1px solid rgba(30, 64, 175, 0.2); border-radius: 12px;">
        <h3>Ergebnis speichern</h3>
        <label for="quiz-player-name" style="display:block; margin-bottom: 0.4rem;">Name</label>
        <input id="quiz-player-name" type="text" maxlength="50" placeholder="Dein Name" value="${gespeicherterName}" style="width:100%; padding: 0.6rem; border-radius: 8px; border: 1px solid #d1d5db;" />
        <button id="quiz-save-button" class="btn btn-primary" style="margin-top: 0.8rem;" onclick="saveQuizResultFromUI('${kategorie}', ${punkte}, ${maxPunkte}, '${testType}')">Ergebnis an Server senden</button>
        <p id="quiz-save-status" style="margin-top: 0.6rem; font-size: 0.95rem;"></p>
      </div>
      
      <div class="quiz-result-actions">
        <button class="btn btn-primary" onclick="startQuiz('${kategorie}')">Quiz wiederholen</button>
        <button class="btn btn-secondary" onclick="openScoreWindow()">Your score</button>
        <button class="btn btn-secondary" onclick="closeQuiz()">Beenden</button>
      </div>
    `;
  } else if (testType === 'likert') {
    const totalScore = quizState.punkte;
    const maxScore = quizState.maxPunkte * 3;
    let interpretation = dbEntry.interpretation[0];
    
    const scoreKeys = Object.keys(dbEntry.interpretation).sort((a, b) => b - a);
    for (const key of scoreKeys) {
      if (totalScore >= parseInt(key)) {
        interpretation = dbEntry.interpretation[key];
        break;
      }
    }

    html += `
      <div class="quiz-result-header">
        <div class="quiz-result-emoji">📊</div>
        <h2>Test abgeschlossen!</h2>
        <p class="quiz-result-rating">${interpretation.label}</p>
      </div>
      
      <div class="likert-result">
        <div class="result-score-bar">
          <div class="result-score-fill" style="width: ${(totalScore / maxScore) * 100}%"></div>
        </div>
        <p class="result-score-num">Gesamtscore: ${totalScore} / ${maxScore}</p>
      </div>
      
      <div class="result-interpretation">
        <p>${interpretation.description}</p>
      </div>

      <div class="test-warnung">
        ${dbEntry.warnung}
      </div>
      
      <div class="quiz-result-actions">
        <button class="btn btn-primary" onclick="startQuiz('${kategorie}')">Test wiederholen</button>
        <button class="btn btn-secondary" onclick="closeQuiz()">Beenden</button>
      </div>
    `;
  } else if (testType === 'bigfive') {
    const dimensionen = { O: "Offenheit", C: "Gewissenhaftigkeit", E: "Extraversion", A: "Verträglichkeit", N: "Neurotizismus" };
    const maxPerDimension = 20 * 5;

    let resultsHtml = '';
    for (const [dim, name] of Object.entries(dimensionen)) {
      const score = quizState.scores[dim];
      const percent = (score / maxPerDimension) * 100;
      resultsHtml += `
        <div class="bigfive-result-item">
          <div class="bigfive-label">${dim}: ${name}</div>
          <div class="bigfive-bar">
            <div class="bigfive-fill" style="width: ${percent}%"></div>
          </div>
          <div class="bigfive-score">${score} / ${maxPerDimension}</div>
        </div>
      `;
    }

    html += `
      <div class="quiz-result-header">
        <div class="quiz-result-emoji">🌟</div>
        <h2>Persönlichkeitsprofil</h2>
        <p class="quiz-result-rating">Deine Big-Five Ergebnisse</p>
      </div>
      
      <div class="bigfive-results">
        ${resultsHtml}
      </div>
      
      <div class="bigfive-info">
        <p><strong>Offenheit:</strong> Kreativität, Neugier, Interesse an neuen Ideen</p>
        <p><strong>Gewissenhaftigkeit:</strong> Organisiert, pünktlich, zuverlässig</p>
        <p><strong>Extraversion:</strong> Gesellig, energisch, durchsetzungsstark</p>
        <p><strong>Verträglichkeit:</strong> Kooperativ, verständnisvoll, einfühlsam</p>
        <p><strong>Neurotizismus:</strong> Emotionale Stabilität oder Anfälligkeit für Stress</p>
      </div>
      
      <div class="quiz-result-actions">
        <button class="btn btn-primary" onclick="startQuiz('${kategorie}')">Test wiederholen</button>
        <button class="btn btn-secondary" onclick="closeQuiz()">Beenden</button>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// ===================================================================
// 🎨 UI MANAGEMENT
// ===================================================================

function showQuizUI() {
  let container = document.getElementById('quiz-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'quiz-container';
    container.className = 'quiz-modal';
    document.body.appendChild(container);
  }
  
  container.classList.add('quiz-active');
}

function closeQuiz() {
  const container = document.getElementById('quiz-container');
  if (container) {
    container.classList.remove('quiz-active');
    quizState.aktiv = false;
  }
}

function openQuizModal() {
  let modal = document.getElementById('quiz-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quiz-modal';
    modal.className = 'quiz-select-modal';
    document.body.appendChild(modal);
  }

  const kategorien = [
    { key: 'diagnostik', name: '🔍 Diagnostik', desc: 'Testverfahren und Mess-Instrumente', type: 'medical' },
    { key: 'therapie', name: '💊 Therapie', desc: 'Behandlungs-Geräte', type: 'medical' },
    { key: 'forschung', name: '🔬 Forschung', desc: 'Neue Technologien', type: 'medical' },
    { key: 'zukunft', name: '🚀 Zukunft', desc: 'Kommende Innovationen', type: 'medical' },
    { key: 'depression', name: '😔 Depression', desc: 'PHQ-9 Screening', type: 'psychology' },
    { key: 'adhs', name: '🧠 ADHS', desc: 'ASRS Screening', type: 'psychology' },
    { key: 'persoenlichkeit', name: '🌟 Persönlichkeit', desc: 'Big-Five Test', type: 'psychology' }
  ];

  let html = `
    <div class="quiz-modal-overlay" onclick="closeQuizModal()"></div>
    <div class="quiz-modal-content">
      <button class="modal-close" onclick="closeQuizModal()">✕</button>
      <h2>Wähle einen Test</h2>
      <p class="quiz-modal-subtitle">Medizintechnik Quiz oder psychologische Tests</p>
      
      <div class="quiz-kategorie-gruppe">
        <h3 class="kategorie-gruppe-titel">📚 Medizintechnik</h3>
        <div class="quiz-kategorien-grid">
  `;

  kategorien.filter(k => k.type === 'medical').forEach(kat => {
    const dbEntry = QUIZ_DATABASE[kat.key];
    html += `
      <button class="quiz-kategorie-btn" onclick="startQuiz('${kat.key}')">
        <div class="kategorie-icon">${kat.name.split(' ')[0]}</div>
        <div class="kategorie-name">${kat.name.split(' ').slice(1).join(' ')}</div>
        <div class="kategorie-desc">${kat.desc}</div>
        <div class="kategorie-fragen">${dbEntry.fragen.length} Fragen</div>
      </button>
    `;
  });

  html += `
        </div>
      </div>

      <div class="quiz-kategorie-gruppe">
        <h3 class="kategorie-gruppe-titel">🧠 Psychologische Tests</h3>
        <div class="quiz-kategorien-grid">
  `;

  kategorien.filter(k => k.type === 'psychology').forEach(kat => {
    const dbEntry = QUIZ_DATABASE[kat.key];
    const name = dbEntry.name || kat.name;
    html += `
      <button class="quiz-kategorie-btn psychology" onclick="startQuiz('${kat.key}')">
        <div class="kategorie-icon">${kat.name.split(' ')[0]}</div>
        <div class="kategorie-name">${name}</div>
        <div class="kategorie-desc">${kat.desc}</div>
        <div class="kategorie-fragen">${dbEntry.fragen.length} Fragen</div>
      </button>
    `;
  });

  html += `
        </div>
      </div>
    </div>
  `;

  modal.innerHTML = html;
  modal.classList.add('quiz-modal-active');
}

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
  console.log('✅ Quiz System v2.0 initialisiert (mit psychologischen Tests)');
  
  const quizBtn = document.querySelector('[data-quiz-button]');
  if (quizBtn) {
    quizBtn.addEventListener('click', openQuizModal);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuizSystem);
} else {
  initQuizSystem();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    startQuiz,
    openQuizModal,
    closeQuiz,
    closeQuizModal,
    QUIZ_DATABASE,
    getRandomizedQuestions,
    saveQuizResultToServer,
    openScoreWindow
  };
}
