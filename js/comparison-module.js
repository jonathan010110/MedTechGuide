/**
 * =====================================================
 * COMPARISON MODULE - Medizintechnik Vergleich
 * Seitenweise Vergleich mit Visualisierungen
 * =====================================================
 */

class ComparisonModule {
  constructor() {
    this.device1 = null;
    this.device2 = null;
    this.comparisonActive = false;
    this.modalElement = null;

    this.initializeUI();
    this.attachEventListeners();
  }

  /**
   * Erstelle das Vergleichs-Modal Element
   */
  initializeUI() {
    const modal = document.createElement('div');
    modal.id = 'comparison-modal';
    modal.classList.add('comparison-modal');
    modal.innerHTML = `
      <div class="comparison-overlay"></div>
      <div class="comparison-container">
        <div class="comparison-header">
          <h2>Medizintechnik Vergleich</h2>
          <button class="comparison-close">&times;</button>
        </div>
        <div class="comparison-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
    this.modalElement = modal;

    // Close Handler
    modal.querySelector('.comparison-close').addEventListener('click', () => {
      this.closeComparison();
    });
    modal.querySelector('.comparison-overlay').addEventListener('click', () => {
      this.closeComparison();
    });
  }

  /**
   * Event Listener für Geräte-Auswahl
   */
  attachEventListeners() {
    // Device Card Click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('device-card-select')) {
        this.selectDevice(e.target.dataset.deviceId);
      }
    });

    // Vergleichs-Button
    document.getElementById('compareBtn')?.addEventListener('click', () => {
      if (this.device1 && this.device2) {
        this.displayComparison();
      }
    });

    // Vergleichsmodus Toggle
    document.getElementById('compareToggle')?.addEventListener('change', (e) => {
      this.toggleComparisonMode(e.target.checked);
    });
  }

  /**
   * Gerät für Vergleich auswählen
   */
  selectDevice(deviceId) {
    const device = MedicalDevicesDatabase.getDeviceById(deviceId);
    if (!device) return;

    if (!this.device1) {
      this.device1 = device;
      this.updateCompareState();
    } else if (!this.device2 && device.id !== this.device1.id) {
      this.device2 = device;
      this.updateCompareState();
    } else {
      alert('Maximal 2 Geräte für Vergleich. Bitte vorherige Auswahl clearing.');
    }
  }

  /**
   * Update UI nach Auswahl
   */
  updateCompareState() {
    const count = (this.device1 ? 1 : 0) + (this.device2 ? 1 : 0);
    const btn = document.getElementById('compareBtn');
    if (btn) {
      btn.textContent = `Vergleichen (${count}/2)`;
      btn.disabled = count < 2;
    }
  }

  /**
   * Vergleichsmodus Toggle
   */
  toggleComparisonMode(enabled) {
    const checkboxes = document.querySelectorAll('[data-compare-checkbox]');
    checkboxes.forEach(cb => {
      cb.style.display = enabled ? 'block' : 'none';
    });

    if (!enabled) {
      this.device1 = null;
      this.device2 = null;
      this.updateCompareState();
      checkboxes.forEach(cb => cb.checked = false);
    }
  }

  /**
   * Zeige Vergleichs-Modal
   */
  displayComparison() {
    const body = this.modalElement.querySelector('.comparison-body');
    
    body.innerHTML = `
      <div class="comparison-grid">
        ${this.renderDeviceColumn(this.device1)}
        ${this.renderDeviceColumn(this.device2)}
      </div>
      <div class="comparison-metrics">
        ${this.renderMetricsComparison()}
      </div>
      <div class="comparison-suitability">
        ${this.renderSuitabilityComparison()}
      </div>
      <div class="comparison-details">
        ${this.renderDetailsComparison()}
      </div>
    `;

    this.modalElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Render einzelne Gerät-Spalte
   */
  renderDeviceColumn(device) {
    return `
      <div class="comparison-device-column">
        <div class="device-column-header">
          <div class="device-icon">${device.icon}</div>
          <h3>${device.name}</h3>
          <p class="device-category">${device.category}</p>
        </div>
        
        <div class="device-description">
          <p>${device.description}</p>
        </div>
        
        <div class="device-applications">
          <h4>Anwendungen:</h4>
          <ul>
            ${device.applications.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>
        
        <div class="device-highlights">
          <div class="highlight-section">
            <h4>✅ Vorteile:</h4>
            <ul>
              ${device.advantages.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
          <div class="highlight-section">
            <h4>⚠️ Nachteile:</h4>
            <ul>
              ${device.disadvantages.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render Kennzahlen-Vergleich
   */
  renderMetricsComparison() {
    return `
      <div class="metrics-section">
        <h3>Technische Kennzahlen</h3>
        
        <div class="metric-row">
          <div class="metric-label">Genauigkeit</div>
          ${this.renderMetricBars('accuracy')}
        </div>
        
        <div class="metric-row">
          <div class="metric-label">Kosten (Rel.)</div>
          ${this.renderMetricBars('cost')}
        </div>
        
        <div class="metric-row">
          <div class="metric-label">Risiko</div>
          ${this.renderMetricBars('risk')}
        </div>
        
        <div class="metric-row">
          <div class="metric-label">Bedienbarkeit</div>
          ${this.renderMetricBars('usability')}
        </div>
        
        <div class="metric-row">
          <div class="metric-label">Effektivität</div>
          ${this.renderMetricBars('effectiveness')}
        </div>
      </div>
    `;
  }

  /**
   * Render Metric-Balken für beide Geräte
   */
  renderMetricBars(metricKey) {
    const value1 = this.device1.metrics[metricKey];
    const value2 = this.device2.metrics[metricKey];

    return `
      <div class="metric-bars">
        <div class="metric-bar">
          <div class="bar-name">${this.device1.name.substring(0, 15)}</div>
          <div class="bar-container">
            <div class="bar-fill" style="width: ${value1}%;" data-value="${value1}"></div>
            <span class="bar-value">${value1}%</span>
          </div>
        </div>
        
        <div class="metric-bar">
          <div class="bar-name">${this.device2.name.substring(0, 15)}</div>
          <div class="bar-container">
            <div class="bar-fill" style="width: ${value2}%;" data-value="${value2}"></div>
            <span class="bar-value">${value2}%</span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render Eignung-Vergleich (Ampelsystem)
   */
  renderSuitabilityComparison() {
    const categories = [
      { key: 'forChildren', label: 'Für Kinder geeignet' },
      { key: 'forElderly', label: 'Für Senioren geeignet' },
      { key: 'forPregnant', label: 'In Schwangerschaft sicher' },
      { key: 'forHospital', label: 'Im Krankenhaus' },
      { key: 'forHome', label: 'Zuhause verwendbar' }
    ];

    return `
      <div class="suitability-section">
        <h3>🚦 Eignung & Indikationen</h3>
        
        <div class="suitability-grid">
          ${categories.map(cat => `
            <div class="suitability-row">
              <div class="suitability-label">${cat.label}</div>
              <div class="suitability-indicators">
                ${this.renderTrafficLight(this.device1.suitability[cat.key])}
                ${this.renderTrafficLight(this.device2.suitability[cat.key])}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Render Ampel-Symbol (Rot/Gelb/Grün)
   */
  renderTrafficLight(isApplicable) {
    if (isApplicable === undefined) return '⚪';
    return isApplicable ? '🟢' : '🔴';
  }

  /**
   * Render Details-Vergleich
   */
  renderDetailsComparison() {
    return `
      <div class="details-section">
        <h3>📊 Technische Details</h3>
        
        <div class="details-grid">
          <div class="detail-column">
            <h4>${this.device1.name}</h4>
            ${this.renderDetailsTable(this.device1.details)}
            <div class="meta-info">
              <p><strong>Zuverlässigkeit:</strong> ${this.device1.reliability}%</p>
              <p><strong>Wartung:</strong> ${this.device1.maintenance}</p>
            </div>
          </div>
          
          <div class="detail-column">
            <h4>${this.device2.name}</h4>
            ${this.renderDetailsTable(this.device2.details)}
            <div class="meta-info">
              <p><strong>Zuverlässigkeit:</strong> ${this.device2.reliability}%</p>
              <p><strong>Wartung:</strong> ${this.device2.maintenance}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Hilfsfunction für Details-Tabelle
   */
  renderDetailsTable(details) {
    return `
      <table class="details-table">
        ${Object.entries(details).map(([key, value]) => `
          <tr>
            <td class="detail-key">${this.humanizeKey(key)}</td>
            <td class="detail-value">${value}</td>
          </tr>
        `).join('')}
      </table>
    `;
  }

  /**
   * Konvertiere Schlüssel in lesbares Format
   */
  humanizeKey(key) {
    return key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }

  /**
   * Schließe Vergleichs-Modal
   */
  closeComparison() {
    this.modalElement.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  /**
   * Reset Vergleich
   */
  resetComparison() {
    this.device1 = null;
    this.device2 = null;
    this.updateCompareState();
  }
}

// Initialize wenn DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ComparisonModule();
});
