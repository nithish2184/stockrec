// app.js

const express = require('express');
const app = express();
const db = require('./config/db.config'); // Import the database connection

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.use('/', userRoutes);

// Check database connection
db.promise().query('SELECT 1')
  .then(([rows, fields]) => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
