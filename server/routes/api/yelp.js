const express = require('express');
const yelpAPI = require('../../controllers/yelpAPI');
const businessDetail = require('../../controllers/businessDetail');
const yelpRouter = express.Router();

yelpRouter.get('/', yelpAPI);
yelpRouter.get('/business/:id', businessDetail);

module.exports = { yelpRouter };