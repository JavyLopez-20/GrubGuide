const express = require('express');
const fourSquareAPI = require('../../controllers/yelpAPI');
const businessDetail = require('../../controllers/businessDetail');
const yelpRouter = express.Router();

yelpRouter.get('/', fourSquareAPI);
yelpRouter.get('/business/:id', businessDetail);

module.exports = yelpRouter;