// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.ATLASURI,)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
// app.get('/api/restaurants', (req, res) => {
//   res.json([{ name: 'Taco Haven', cuisine: 'Mexican' }]);
// });

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));