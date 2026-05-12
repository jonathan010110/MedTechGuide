/**
 * SPÖGL - Premium Smartwatch Website
 * Vanilla JavaScript - Fetch API Integration
 * Loads health data from JSON backend
 */

// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
    API_URL: 'http://localhost:3000/data',
    UPDATE_INTERVAL: 5000, // 5 seconds
    ANIMATION_DURATION: 800,
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Format number with animation
 */
function animateCounter(element, target, duration = 800) {
    const start = parseInt(element.textContent) || 0;
    const range = target - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

/**
 * Animate progress bar
 */
function animateProgressBar(element, target) {
    const currentWidth = parseFloat(element.style.width) || 0;
    const step = (target - currentWidth) / 60;
    let current = currentWidth;

    const animate = () => {
        current += step;
        if ((step > 0 && current >= target) || (step < 0 && current <= target)) {
            element.style.width = target + '%';
        } else {
            element.style.width = current + '%';
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

/**
 * Get heart rate status
 */
function getHeartRateStatus(bpm) {
    if (bpm < 60) return 'Niedrig';
    if (bpm < 100) return 'Normal';
    if (bpm < 130) return 'Erhöht';
    return 'Hohe Belastung';
}

/**
 * Get sleep status
 */
function getSleepStatus(hours) {
    if (hours < 6) return 'Unzureichend';
    if (hours < 7) return 'Gut';
    if (hours <= 9) return 'Sehr gut';
    return 'Zu viel';
}

/**
 * Get stress status
 */
function getStressStatus(level) {
    if (level < 30) return 'Niedrig';
    if (level < 60) return 'Moderat';
    return 'Hoch';
}

// ========================================
// DATA FETCHING
// ========================================

/**
 * Fetch health data from backend
 */
async function fetchHealthData() {
    try {
        // Try to fetch from backend
        const response = await fetch(CONFIG.API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn('Backend not available, using mock data:', error.message);
        return generateMockData();
    }
}

/**
 * Generate mock data (fallback)
 */
function generateMockData() {
    return {
        heartRate: Math.floor(Math.random() * 40 + 60),
        steps: Math.floor(Math.random() * 8000 + 2000),
        sleepDuration: (Math.random() * 3 + 6).toFixed(1),
        stressLevel: Math.floor(Math.random() * 50 + 15),
        calories: Math.floor(Math.random() * 1500 + 1000),
        recoveryScore: Math.floor(Math.random() * 20 + 70),
        sleepPhases: {
            awake: Math.floor(Math.random() * 30 + 10),
            light: Math.floor(Math.random() * 100 + 80),
            deep: Math.floor(Math.random() * 80 + 60),
            rem: Math.floor(Math.random() * 70 + 50)
        },
        sleepScore: Math.floor(Math.random() * 25 + 75),
        fallAsleepTime: Math.floor(Math.random() * 10 + 5),
        sports: {
            running: {
                distance: (Math.random() * 5 + 5).toFixed(1),
                pace: (Math.random() * 4 + 5).toFixed(1),
                avgHR: Math.floor(Math.random() * 30 + 130),
                calories: Math.floor(Math.random() * 300 + 400)
            },
            cycling: {
                distance: (Math.random() * 20 + 10).toFixed(1),
                speed: (Math.random() * 10 + 20).toFixed(1),
                elevation: Math.floor(Math.random() * 200 + 50),
                duration: Math.floor(Math.random() * 30 + 45)
            },
            fitness: {
                type: 'Kraft & Ausdauer',
                duration: Math.floor(Math.random() * 20 + 30),
                avgHR: Math.floor(Math.random() * 30 + 120),
                calories: Math.floor(Math.random() * 250 + 250)
            }
        },
        heartZones: {
            zone1: Math.floor(Math.random() * 20 + 10),
            zone2: Math.floor(Math.random() * 30 + 40),
            zone3: Math.floor(Math.random() * 25 + 20),
            zone4: Math.floor(Math.random() * 15 + 10),
            zone5: Math.floor(Math.random() * 10 + 5)
        }
    };
}

// ========================================
// UPDATE DASHBOARD
// ========================================

/**
 * Update dashboard with data
 */
async function updateDashboard() {
    const data = await fetchHealthData();

    // Heart Rate
    const heartRateEl = document.getElementById('heartRate');
    if (heartRateEl) {
        animateCounter(heartRateEl, data.heartRate);
        document.getElementById('heartStatus').textContent = getHeartRateStatus(data.heartRate);
    }

    // Steps
    const stepsEl = document.getElementById('stepsCount');
    if (stepsEl) {
        animateCounter(stepsEl, data.steps);
        const stepsProgress = Math.min((data.steps / 10000) * 100, 100);
        animateProgressBar(document.getElementById('stepsProgress'), stepsProgress);
        document.getElementById('stepsStatus').textContent = `${Math.round(stepsProgress)}% des Ziels`;
    }

    // Sleep
    const sleepEl = document.getElementById('sleepDuration');
    if (sleepEl) {
        sleepEl.textContent = data.sleepDuration;
        document.getElementById('sleepStatus').textContent = getSleepStatus(parseFloat(data.sleepDuration));
    }

    // Stress Level
    const stressEl = document.getElementById('stressLevel');
    if (stressEl) {
        animateCounter(stressEl, data.stressLevel);
        animateProgressBar(document.getElementById('stressProgress'), data.stressLevel);
        document.getElementById('stressStatus').textContent = getStressStatus(data.stressLevel);
    }

    // Calories
    const caloriesEl = document.getElementById('calories');
    if (caloriesEl) {
        animateCounter(caloriesEl, data.calories);
        const caloriesProgress = Math.min((data.calories / 2500) * 100, 100);
        animateProgressBar(document.getElementById('caloriesProgress'), caloriesProgress);
        document.getElementById('caloriesStatus').textContent = `${Math.round(caloriesProgress)}% des Ziels`;
    }

    // Recovery Score
    const recoveryEl = document.getElementById('recoveryScore');
    if (recoveryEl) {
        animateCounter(recoveryEl, data.recoveryScore);
        animateProgressBar(document.getElementById('recoveryProgress'), data.recoveryScore);
    }

    // AI Analysis
    updateAIAnalysis(data);

    // Sleep Data
    updateSleepData(data);

    // Sports Data
    updateSportsData(data);

    // Heart Zones
    updateHeartZones(data);
}

/**
 * Update AI Analysis
 */
function updateAIAnalysis(data) {
    const analyses = [];

    if (data.recoveryScore > 80) {
        analyses.push('Ihre Regeneration ist optimal.');
    } else if (data.recoveryScore > 60) {
        analyses.push('Ihre Regeneration ist gut. Etwas mehr Ruhe könnte hilfreich sein.');
    } else {
        analyses.push('Sie sollten mehr auf Ihre Erholung achten. Mehr Schlaf empfohlen.');
    }

    if (data.sleepDuration >= 7) {
        analyses.push('Sie haben ausreichend Schlaf bekommen.');
    } else {
        analyses.push('Versuchen Sie, mehr Schlaf zu bekommen.');
    }

    if (data.stressLevel < 40) {
        analyses.push('Ihr Stresslevel ist niedrig - entspannen Sie sich.');
    } else if (data.stressLevel > 70) {
        analyses.push('Ihr Stresslevel ist erhöht. Versuchen Sie zu entspannen.');
    }

    const analysisEl = document.getElementById('aiAnalysis');
    if (analysisEl) {
        analysisEl.textContent = analyses.join(' ');
    }
}

/**
 * Update Sleep Data
 */
function updateSleepData(data) {
    const phases = data.sleepPhases;
    
    document.getElementById('awakeTime').textContent = phases.awake + ' min';
    document.getElementById('lightSleep').textContent = phases.light + ' min';
    document.getElementById('deepSleep').textContent = phases.deep + ' min';
    document.getElementById('remSleep').textContent = phases.rem + ' min';
    
    document.getElementById('sleepScore').textContent = data.sleepScore + '/100';
    document.getElementById('fallAsleepTime').textContent = data.fallAsleepTime + ' Min';
    document.getElementById('recommendedBedtime').textContent = (23 - (data.sleepDuration / 2)) + ':00 Uhr';

    // Draw sleep chart
    drawSleepChart(phases);
}

/**
 * Draw sleep phases chart
 */
function drawSleepChart(phases) {
    const canvas = document.getElementById('sleepChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartHeight = height - padding * 2;
    const chartWidth = width - padding * 2;

    const total = phases.awake + phases.light + phases.deep + phases.rem;
    const values = [phases.awake, phases.light, phases.deep, phases.rem];
    const colors = ['#60a5fa', '#34d399', '#7c3aed', '#ff006e'];
    const labels = ['Wach', 'Leicht', 'Tief', 'REM'];

    // Background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(padding, padding, chartWidth, chartHeight);

    // Draw bars
    const barWidth = chartWidth / values.length;
    values.forEach((value, index) => {
        const barHeight = (value / total) * chartHeight;
        const x = padding + index * barWidth + barWidth * 0.1;
        const y = padding + chartHeight - barHeight;

        // Bar
        ctx.fillStyle = colors[index];
        ctx.fillRect(x, y, barWidth * 0.8, barHeight);

        // Label
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + barWidth * 0.4, padding + chartHeight + 20);

        // Value
        ctx.fillStyle = colors[index];
        ctx.font = 'bold 14px Arial';
        ctx.fillText(Math.round(value), x + barWidth * 0.4, y - 10);
    });
}

/**
 * Update Sports Data
 */
function updateSportsData(data) {
    const running = data.sports.running;
    const cycling = data.sports.cycling;
    const fitness = data.sports.fitness;

    // Running
    document.getElementById('runDistance').textContent = running.distance + ' km';
    document.getElementById('runPace').textContent = running.pace + ' min/km';
    document.getElementById('runHR').textContent = running.avgHR + ' bpm';
    document.getElementById('runCalories').textContent = running.calories + ' kcal';

    // Cycling
    document.getElementById('bikeDistance').textContent = cycling.distance + ' km';
    document.getElementById('bikeSpeed').textContent = cycling.speed + ' km/h';
    document.getElementById('bikeElevation').textContent = cycling.elevation + ' m';
    document.getElementById('bikeDuration').textContent = cycling.duration + ' min';

    // Fitness
    document.getElementById('fitnesType').textContent = fitness.type;
    document.getElementById('fitnessDuration').textContent = fitness.duration + ' min';
    document.getElementById('fitnessHR').textContent = fitness.avgHR + ' bpm';
    document.getElementById('fitnessCalories').textContent = fitness.calories + ' kcal';
}

/**
 * Update Heart Zones
 */
function updateHeartZones(data) {
    const zones = data.heartZones;
    document.getElementById('zone1Time').textContent = zones.zone1 + ' min';
    document.getElementById('zone2Time').textContent = zones.zone2 + ' min';
    document.getElementById('zone3Time').textContent = zones.zone3 + ' min';
    document.getElementById('zone4Time').textContent = zones.zone4 + ' min';
    document.getElementById('zone5Time').textContent = zones.zone5 + ' min';
}

// ========================================
// CLOCK ANIMATION
// ========================================

/**
 * Update watch clock hands
 */
function updateWatchClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const secondDegrees = ((seconds + milliseconds / 1000) / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    // Update SVG hands (if they exist)
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    if (minuteHand && hourHand) {
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    requestAnimationFrame(updateWatchClock);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Fade in elements on scroll
 */
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.glass-card, .tech-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// LIVE CLOCK WIDGET (Optional)
// ========================================

/**
 * Update live time display (if element exists)
 */
function updateLiveTime() {
    const timeElements = document.querySelectorAll('[data-live-time]');
    timeElements.forEach(el => {
        const now = new Date();
        el.textContent = now.toLocaleTimeString('de-DE');
    });
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize SPÖGL website
 */
async function initSPOGL() {
    console.log('Initializing SPÖGL...');

    // Update dashboard on page load
    await updateDashboard();

    // Update every 5 seconds
    setInterval(updateDashboard, CONFIG.UPDATE_INTERVAL);

    // Update watch clock
    updateWatchClock();

    // Observe elements for scroll animations
    observeElements();

    // Update live time if elements exist
    setInterval(updateLiveTime, 1000);

    console.log('✓ SPÖGL initialized successfully');
}

// ========================================
// DOM READY
// ========================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSPOGL);
} else {
    initSPOGL();
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
    // Refresh data with 'R' key
    if (e.key === 'r' || e.key === 'R') {
        updateDashboard();
        console.log('Dashboard refreshed');
    }
});
