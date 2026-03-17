import { App3D } from './modules/core/App3D.js';
import { setupUI } from './modules/ui/setupUI.js';

const canvas = document.getElementById('scene');
const loader = document.getElementById('loader');
const infoPanel = document.getElementById('infoPanel');
const infoText = document.getElementById('infoText');
const heartRateSlider = document.getElementById('heartRateSlider');
const heartRateValue = document.getElementById('heartRateValue');
const pressureFill = document.getElementById('pressureFill');
const bpResult = document.getElementById('bp-result');

const showLoaderMessage = (message) => {
  const textNode = loader?.querySelector('p');
  if (textNode) {
    textNode.textContent = message;
  }
};

if (window.location.protocol === 'file:') {
  showLoaderMessage('Bitte über lokalen Server öffnen: z. B. python -m http.server 8080 und dann /MedTechGuide/.');
}

if (window.location.protocol !== 'file:') {
  const app = new App3D({
    canvas,
    infoPanel,
    infoText,
    heartRateSlider,
    pressureFill,
    bpResult,
  });

  setupUI({
    app,
    loader,
    heartRateSlider,
    heartRateValue,
  });

  try {
    app.init();
  } catch (error) {
    console.error('MedTechGuide konnte nicht initialisiert werden:', error);
    showLoaderMessage('Startfehler: Prüfe Browser-Konsole und nutze einen lokalen HTTP-Server.');
  }
}
