/**
 * SPÖGL - JSON Backend Server
 * Simple Express.js server with CORS support
 * 
 * Start: node server.js
 * API: http://localhost:3000/data
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from project root so GET / returns the frontend (index.html)
app.use(express.static(path.join(__dirname, '..')));

// Load database
let db = {};
const dbPath = path.join(__dirname, 'db.json');

try {
    const rawData = fs.readFileSync(dbPath);
    db = JSON.parse(rawData);
    console.log('✓ Database loaded successfully');
} catch (error) {
    console.error('Error loading database:', error.message);
}

// ========================================
// API ENDPOINTS
// ========================================

/**
 * GET /data - Get all health data
 */
app.get('/data', (req, res) => {
    try {
        // Simulate real-time data variation
        const data = JSON.parse(JSON.stringify(db.data));
        
        // Add slight variation to make it feel "live"
        if (data.heartRate) {
            data.heartRate += Math.floor(Math.random() * 10 - 5);
        }
        if (data.steps) {
            data.steps += Math.floor(Math.random() * 50 - 25);
        }
        if (data.stressLevel) {
            data.stressLevel += Math.floor(Math.random() * 8 - 4);
        }
        
        res.json(data);
        console.log(`[${new Date().toISOString()}] GET /data`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /data/:field - Get specific field
 */
app.get('/data/:field', (req, res) => {
    try {
        const field = req.params.field;
        const value = db.data[field];
        
        if (value === undefined) {
            return res.status(404).json({ error: `Field "${field}" not found` });
        }
        
        res.json({ [field]: value });
        console.log(`[${new Date().toISOString()}] GET /data/${field}`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT /data/:field - Update specific field
 */
app.put('/data/:field', (req, res) => {
    try {
        const field = req.params.field;
        const newValue = req.body.value;
        
        if (newValue === undefined) {
            return res.status(400).json({ error: 'Value is required' });
        }
        
        db.data[field] = newValue;
        
        // Save to file
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        
        res.json({ 
            message: `Field "${field}" updated successfully`,
            [field]: newValue 
        });
        console.log(`[${new Date().toISOString()}] PUT /data/${field} = ${newValue}`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * POST /data/sync - Sync all data
 */
app.post('/data/sync', (req, res) => {
    try {
        const newData = req.body;
        db.data = { ...db.data, ...newData };
        
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        
        res.json({ 
            message: 'Data synced successfully',
            data: db.data 
        });
        console.log(`[${new Date().toISOString()}] POST /data/sync`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /device - Get device info
 */
app.get('/device', (req, res) => {
    try {
        res.json(db.data.deviceInfo);
        console.log(`[${new Date().toISOString()}] GET /device`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /user - Get user profile
 */
app.get('/user', (req, res) => {
    try {
        res.json(db.data.userProfile);
        console.log(`[${new Date().toISOString()}] GET /user`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /recommendations - Get health recommendations
 */
app.get('/recommendations', (req, res) => {
    try {
        res.json(db.data.recommendations);
        console.log(`[${new Date().toISOString()}] GET /recommendations`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /health - Server health check
 */
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// ========================================
// ERROR HANDLING
// ========================================

/**
 * 404 Handler
 */
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Not Found',
        message: `Endpoint ${req.method} ${req.path} not found`,
        availableEndpoints: [
            'GET /data',
            'GET /data/:field',
            'PUT /data/:field',
            'POST /data/sync',
            'GET /device',
            'GET /user',
            'GET /recommendations',
            'GET /health'
        ]
    });
});

// ========================================
// SERVER START
// ========================================

app.listen(PORT, () => {
    console.log('\n╔════════════════════════════════════════╗');
    console.log('║     SPÖGL - Backend Server Started      ║');
    console.log('╚════════════════════════════════════════╝\n');
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ API Endpoint: http://localhost:${PORT}/data`);
    console.log(`✓ Health Check: http://localhost:${PORT}/health`);
    console.log(`✓ CORS enabled\n`);
    console.log('Available endpoints:');
    console.log('  GET /data              - Get all health data');
    console.log('  GET /data/:field       - Get specific field');
    console.log('  PUT /data/:field       - Update field');
    console.log('  POST /data/sync        - Sync all data');
    console.log('  GET /device            - Device information');
    console.log('  GET /user              - User profile');
    console.log('  GET /recommendations   - Health recommendations');
    console.log('  GET /health            - Server health check\n');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n✓ Server shutting down gracefully...');
    process.exit(0);
});
