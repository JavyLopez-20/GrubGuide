const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLASURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));