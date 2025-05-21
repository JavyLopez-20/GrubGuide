const express = require('express');
const favoritesRouter = express.Router();
const { getFavorites, addFavorite, removeFavorite, checkFavorites } = require('../../controllers/user.js');

favoritesRouter.get('/', getFavorites);
favoritesRouter.post('/', addFavorite);
favoritesRouter.delete('/:id', removeFavorite);
favoritesRouter.get('/:id', checkFavorites);

module.exports = { favoritesRouter };