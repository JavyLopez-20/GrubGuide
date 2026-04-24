const express = require('express');
const favoritesRouter = express.Router();
const { addFavorite, removeFavorite, checkFavorites, getProfile } = require('../../controllers/user.js');

favoritesRouter.get('/', getProfile);
favoritesRouter.post('/', addFavorite);
favoritesRouter.delete('/:id', removeFavorite);
favoritesRouter.get('/:id', checkFavorites);

module.exports = { favoritesRouter };