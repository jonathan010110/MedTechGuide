export function createPulseDisplayCanvas(width = 512, height = 256) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  return {
    canvas,
    draw({ oxygen, pulse, time }) {
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, '#091325');
      bg.addColorStop(1, '#0f1e3a');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#8fe5ff';
      ctx.font = 'bold 44px Segoe UI';
      ctx.fillText(`${oxygen}% SpO₂`, 22, 58);

      ctx.fillStyle = '#bcd4ff';
      ctx.font = '28px Segoe UI';
      ctx.fillText(`${pulse} bpm`, 22, 98);

      ctx.save();
      ctx.translate(0, 180);
      ctx.strokeStyle = '#40f48c';
      ctx.lineWidth = 4;
      ctx.beginPath();

      const amp = 18;
      for (let x = 0; x < width; x++) {
        const n = (x + time * 180) / 46;
        const wave = Math.sin(n) * amp * 0.6;
        const spike = Math.exp(-Math.pow((x % 85) - 8, 2) / 70) * -36;
        const y = wave + spike;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = 'rgba(120,175,255,0.3)';
      ctx.strokeRect(5, 5, width - 10, height - 10);
    },
  };
}

export function createEKGCanvas(width = 1024, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  return {
    canvas,
    draw({ heartRate, time }) {
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, '#061020');
      bg.addColorStop(1, '#0b1730');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(100, 150, 220, 0.28)';
      ctx.lineWidth = 1;
      for (let y = 0; y <= height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      for (let x = 0; x <= width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      const baseline = height * 0.52;
      const bpmFactor = heartRate / 72;
      const speed = 240 * bpmFactor;

      ctx.strokeStyle = '#50ff8c';
      ctx.lineWidth = 5;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const phase = ((x + time * speed) % 220) / 220;

        let signal = 0;
        if (phase < 0.14) signal = Math.sin((phase / 0.14) * Math.PI) * 6;
        else if (phase < 0.22) signal = -3;
        else if (phase < 0.255) signal = -80 * Math.sin(((phase - 0.22) / 0.035) * Math.PI);
        else if (phase < 0.32) signal = 30 * Math.sin(((phase - 0.255) / 0.065) * Math.PI);
        else if (phase < 0.5) signal = 8 * Math.sin(((phase - 0.32) / 0.18) * Math.PI);

        const y = baseline + signal;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.fillStyle = '#9fd3ff';
      ctx.font = 'bold 42px Segoe UI';
      ctx.fillText(`HF ${heartRate} bpm`, 24, 54);
    },
  };
}
