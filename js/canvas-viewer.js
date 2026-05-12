// Simple Canvas 3D Viewer - No External Dependencies
// Uses 2D Canvas with 3D projection

window.addEventListener('load', function() {
  const canvas = document.getElementById('modelCanvas-ct-scanner');
  if (!canvas) {
    console.log('[Canvas 3D] Canvas not found');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  let rotation = 0;
  
  function drawCTScanner() {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Clear canvas with gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#e0f2fe');
    gradient.addColorStop(1, '#dbeafe');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Save context
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);
    
    // Draw CT Scanner outline (simplified 2D view)
    ctx.strokeStyle = '#0f766e';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(15, 118, 110, 0.1)';
    
    // Main gantry circle
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    
    // Inner ring
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.stroke();
    
    // Patient table
    ctx.fillStyle = '#dce6f6';
    ctx.fillRect(-30, -15, 60, 8);
    ctx.strokeStyle = '#0f766e';
    ctx.strokeRect(-30, -15, 60, 8);
    
    // Base
    ctx.fillStyle = '#e6edf8';
    ctx.fillRect(-80, 70, 160, 15);
    ctx.strokeStyle = '#0f766e';
    ctx.strokeRect(-80, 70, 160, 15);
    
    // Add some text
    ctx.restore();
    ctx.fillStyle = '#0f766e';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CT-Scanner (3D Ansicht)', centerX, height - 20);
    
    // Update rotation
    rotation += 0.01;
    
    // Request next frame
    requestAnimationFrame(drawCTScanner);
  }
  
  drawCTScanner();
  console.log('[Canvas 3D] CT Scanner viewer started');
});

console.log('[Canvas 3D Viewer] Loaded');
