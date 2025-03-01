const express = require('express');
const { getFavorites, addFavorite, removeFavorite } = require('../../controllers/user');
const authMiddleware = require('../../middleware/auth');

const userRouter = express.Router();

userRouter.use(authMiddleware);

userRouter.get('/favorites', getFavorites);
userRouter.post('/favorites', addFavorite);
userRouter.delete('/favorites/:restaurantID', removeFavorite);

module.exports = { userRouter };