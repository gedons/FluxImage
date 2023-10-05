const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors()); // Enable CORS for your Vue.js frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const imagesRoutes = require('./route/images');
app.use('/api/images', imagesRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
