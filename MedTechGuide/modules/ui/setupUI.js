export function setupUI({ app, loader, heartRateSlider, heartRateValue }) {
  const deviceButtons = [...document.querySelectorAll('.device-btn')];
  const ekgControls = document.getElementById('ekg-controls');
  const bloodControls = document.getElementById('blood-controls');

  const setControlVisibility = (deviceId) => {
    ekgControls.hidden = deviceId !== 'ekg';
    bloodControls.hidden = deviceId !== 'blood';
  };

  deviceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.device;
      if (!target) return;

      deviceButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      setControlVisibility(target);
      app.setDevice(target);
    });
  });

  heartRateSlider.addEventListener('input', () => {
    heartRateValue.textContent = heartRateSlider.value;
  });

  setControlVisibility('pulse');

  window.setTimeout(() => {
    loader.classList.add('hidden');
  }, 850);
}
