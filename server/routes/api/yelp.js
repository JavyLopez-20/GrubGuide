const express = require('express');
const yelpAPI = require('../../controllers/yelpAPI');
const yelpRouter = express.Router();

yelpRouter.get('/', yelpAPI);

module.exports = { yelpRouter };