const express = require('express');
const { searchRestaurant } = require('../../controllers/restaurantSearch');
const router = express.Router();

router.get('/search', searchRestaurant);

export { router as restaurantRouter };