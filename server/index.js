require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
// const someRoute = require('./routes/someRoute');

// Set up middleware
app.use(express.json());

// Use routes
// app.use('/api/someRoute', someRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
