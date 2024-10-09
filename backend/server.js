// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection (local or use a cloud MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Simple API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

// Backend listens on port 28080
app.listen(28080, () => {
  console.log('Backend running on port 28080');
});
