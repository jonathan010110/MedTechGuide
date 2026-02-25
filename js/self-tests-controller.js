/**
 * =====================================================
 * SELF-TESTS CONTROLLER - Haupt-Modul
 * Koordiniert alle Tests und steuert die UI
 * =====================================================
 */

class SelfTestsController {
  constructor() {
    this.allTests = [
      DepressionTest,
      ADHSTest,
      PersonalityTest,
      AnxietyTest,
      BurnoutTest,
      StressTest,
      SleepQualityTest
    ];

    this.currentTest = null;
    this.currentQuestion = 0;
    this.answers = {};
    this.testStarted = false;

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Test Karten Click Handler
    document.querySelectorAll('.test-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const testId = card.dataset.testId;
        const test = this.allTests.find(t => t.testId === testId);
        if (test) {
          this.startTest(test);
        }
      });
    });

    // Navigation Buttons
    document.getElementById('btnBack')?.addEventListener('click', () => this.previousQuestion());
    document.getElementById('btnNext')?.addEventListener('click', () => this.nextQuestion());
    document.getElementById('btnSubmit')?.addEventListener('click', () => this.submitTest());
    document.getElementById('btnReset')?.addEventListener('click', () => this.resetTest());
  }

  /**
   * Startet einen Test
   */
  startTest(test) {
    this.currentTest = test;
    this.currentQuestion = 0;
    this.answers = {};
    this.testStarted = true;

    // Hide test cards, show interface
    document.querySelectorAll('.test-card').forEach(card => {
      card.style.display = 'none';
    });

    document.querySelector('.tests-header').style.display = 'none';
    document.querySelector('.test-interface').classList.add('active');
    document.querySelector('.results-section').classList.remove('active');

    this.renderQuestion();
  }

  /**
   * Rendert die aktuelle Frage
   */
  renderQuestion() {
    const question = this.currentTest.questions[this.currentQuestion];
    if (!question) return;

    const testInterface = document.querySelector('.test-interface');

    // Update Title
    document.querySelector('.test-title').textContent = this.currentTest.testName;

    // Update Progress
    const progress = ((this.currentQuestion) / this.currentTest.questions.length) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
    document.querySelector('.progress-text').textContent = 
      `${this.currentQuestion}/${this.currentTest.questions.length}`;

    // Render Question
    const questionSection = document.querySelector('.test-question-section');
    questionSection.innerHTML = `
      <div class="question-number">Frage ${this.currentQuestion + 1} von ${this.currentTest.questions.length}</div>
      ${question.category ? `<div class="question-category">${question.category}</div>` : ''}
      <div class="question-text">${question.question}</div>
    `;

    // Render Answer Options
    const answerSection = document.querySelector('.answer-options');
    answerSection.innerHTML = '';

    this.currentTest.answerOptions.forEach((option, index) => {
      const isChecked = this.answers[question.id] === option.value;
      const optionHTML = `
        <label class="answer-option">
          <input 
            type="radio" 
            name="answer-${question.id}" 
            value="${option.value}" 
            ${isChecked ? 'checked' : ''}
            data-question-id="${question.id}"
          />
          <span class="answer-color-indicator" style="background-color: ${option.color};"></span>
          <span class="answer-label">${option.label}</span>
        </label>
      `;
      answerSection.innerHTML += optionHTML;
    });

    // Add change listener
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.answers[e.target.dataset.questionId] = parseInt(e.target.value);
      });
    });

    // Update Button States
    document.getElementById('btnBack').disabled = this.currentQuestion === 0;
    document.getElementById('btnNext').style.display = 
      this.currentQuestion < this.currentTest.questions.length - 1 ? 'block' : 'none';
    document.getElementById('btnSubmit').style.display = 
      this.currentQuestion === this.currentTest.questions.length - 1 ? 'block' : 'none';
  }

  /**
   * Nächste Frage
   */
  nextQuestion() {
    if (this.currentQuestion < this.currentTest.questions.length - 1) {
      this.currentQuestion++;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Vorherige Frage
   */
  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Test absenden und Ergebnisse anzeigen
   */
  submitTest() {
    if (Object.keys(this.answers).length < this.currentTest.questions.length) {
      alert('Bitte beantworten Sie alle Fragen bevor Sie absenden.');
      return;
    }

    document.querySelector('.test-interface').classList.remove('active');
    this.renderResults();
  }

  /**
   * Rendert die Ergebnisse basierend auf Testtyp
   */
  renderResults() {
    const resultsSection = document.querySelector('.results-section');
    resultsSection.classList.add('active');

    let resultsHTML = `
      <div class="result-header">
        <h2 class="result-title">${this.currentTest.testName} - Ergebnisse</h2>
      </div>
    `;

    // Generischer Score für alle Tests
    const score = this.currentTest.calculateScore(this.answers);
    const interpretation = this.currentTest.getInterpretation(score);

    resultsHTML += `
      <div class="result-score-box">
        <div class="result-score">${score}</div>
        <div class="result-max">von ${this.currentTest.questions.length * 3} Punkten</div>
        <div class="result-level-badge" style="background-color: ${interpretation.color};">
          ${interpretation.level}
        </div>
        <div style="font-weight: 600; color: #374151; margin-top: 1rem;">
          ${interpretation.description}
        </div>
      </div>
    `;

    resultsHTML += `
      <div class="result-interpretation">
        <h3>Ihre Ergebnisse:</h3>
        <p>${interpretation.text}</p>
      </div>
    `;

    // ADHS: Subscores anzeigen
    if (this.currentTest.testId === 'adhs') {
      const subscores = this.currentTest.calculateSubscores(this.answers);
      resultsHTML += `<div class="subscore-grid">`;
      for (const [category, value] of Object.entries(subscores)) {
        const percentage = (value / (8 * 4)) * 100;
        resultsHTML += `
          <div class="subscore-item">
            <div class="subscore-label">${category}</div>
            <div class="subscore-value">${value}</div>
            <div class="subscore-bar">
              <div class="subscore-fill" style="width: ${percentage}%;"></div>
            </div>
          </div>
        `;
      }
      resultsHTML += `</div>`;
    }

    // MBTI: Typ anzeigen
    if (this.currentTest.testId === 'personality') {
      const type = this.currentTest.calculateType(this.answers);
      const typeInfo = this.currentTest.getTypeInfo(type);

      resultsHTML += `
        <div class="personality-type-display">
          <div class="type-acronym">${type}</div>
          <div class="type-name">${typeInfo.name}</div>
          <div class="type-description">${typeInfo.description}</div>
        </div>

        <div class="trait-section">
          <div class="trait-title">💪 Stärken</div>
          <div class="trait-list strengths">
            <div class="trait-item">
              <span>${typeInfo.strength}</span>
            </div>
          </div>
        </div>

        <div class="trait-section">
          <div class="trait-title">⚠️ Herausforderungen</div>
          <div class="trait-list challenges">
            <div class="trait-item">
              <span>${typeInfo.challenges}</span>
            </div>
          </div>
        </div>

        <div class="trait-section">
          <div class="trait-title">🎯 Passende Arbeitsumfelder</div>
          <div class="trait-list">
            <div class="trait-item">
              <span>${typeInfo.workplace}</span>
            </div>
          </div>
        </div>
      `;
    }

    // Medizinischer Hint (außer MBTI)
    if (this.currentTest.medicalDisclaimer) {
      resultsHTML += this.currentTest.medicalDisclaimer;
    }

    // Reset Button
    resultsHTML += `
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn-reset">← Einen anderen Test machen</button>
      </div>
    `;

    resultsSection.innerHTML = resultsHTML;

    // Reset Button Handler
    document.querySelector('.btn-reset').addEventListener('click', () => this.resetTest());

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Test zurücksetzen
   */
  resetTest() {
    this.currentTest = null;
    this.currentQuestion = 0;
    this.answers = {};
    this.testStarted = false;

    // Show test cards again
    document.querySelectorAll('.test-card').forEach(card => {
      card.style.display = 'block';
    });

    document.querySelector('.tests-header').style.display = 'block';
    document.querySelector('.test-interface').classList.remove('active');
    document.querySelector('.results-section').classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SelfTestsController();
});
