const express = require('express');
const { getFavorites, addFavorite, removeFavorite } = require('../../controllers/user');
const authMiddleware = require('../middleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/favorites', getFavorites);
router.post('/favorites', addFavorite);
router.delete('favorites/:restaurantID', removeFavorite);

export { router as userRouter };