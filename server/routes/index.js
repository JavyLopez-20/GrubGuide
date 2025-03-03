const apiRoutes = require('./api/index.js');
const express = require('express');

const router = express.Router();

router.use('/api', apiRoutes);

module.exports = router;