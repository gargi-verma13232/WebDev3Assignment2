const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const studentRoutes = require('./routes/studentRoutes');

// Enable JSON request parsing
app.use(express.json());

// Use custom logger middleware
app.use(logger);

// Mount student routes
app.use('/students', studentRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
