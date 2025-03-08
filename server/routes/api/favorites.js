const express = require('express');
const favoritesRouter = express.Router();
const { getFavorites, addFavorite, removeFavorite } = require('../../controllers/user.js');

favoritesRouter.get('/', getFavorites);
favoritesRouter.post('/add', addFavorite);
favoritesRouter.post('/remove', removeFavorite);

module.exports = { favoritesRouter };