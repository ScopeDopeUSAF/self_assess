const express = require('express');
const path = require('path');
const { connectToDatabase, closeDatabaseConnection } = require('./database');

const app = express();

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Route handler for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
  
  // Connect to the database
  connectToDatabase();
});

// Handle server shutdown
process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  
  // Close the database connection
  await closeDatabaseConnection();
  
  // Close the server
  server.close(() => {
    console.log('Server shut down.');
  });
});
