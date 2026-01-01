// server.js
const express = require('express'); // Import Express framework
const app = express(); // Create an Express application

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(3000, () => { // Start the server on port 3000
  console.log('PWA running at http://localhost:3000'); // Log a message when the server starts
});
