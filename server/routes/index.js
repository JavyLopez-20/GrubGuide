const apiRoutes = require('./api/index');
const express = require('express');

const router = express.Router();

router.use('/api', apiRoutes);

module.exports = router;