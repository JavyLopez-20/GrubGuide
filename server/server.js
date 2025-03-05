const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

mongoose.connect(process.env.ATLASURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.use(routes);
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));