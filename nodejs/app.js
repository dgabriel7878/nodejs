const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Main endpoint
app.get('/', (req, res) => {
  const response = {
    message: 'Hello from Convox!',
    environment: {
      app: process.env.APP || 'local',
      rack: process.env.RACK || 'local',
      build: process.env.BUILD || 'dev',
      release: process.env.RELEASE || 'dev',
      service: process.env.SERVICE || 'web'
    },
    timestamp: new Date().toISOString()
  };
  
  console.log(`Request received at ${response.timestamp}`);
  res.json(response);
});

// Example API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Convox Node.js Example',
    version: '1.0.0',
    node: process.version,
    memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
    uptime: `${Math.round(process.uptime())} seconds`
  });
});

// Example POST endpoint
app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found', 
    path: req.path 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`App: ${process.env.APP || 'local'}`);
  console.log(`Rack: ${process.env.RACK || 'local'}`);
});