const express = require('express');
const { searchRestaurant } = require('../../controllers/restaurantSearch');

const restaurantRouter = express.Router();

restaurantRouter.get('/search', searchRestaurant);

module.exports = { restaurantRouter };