const express = require('express');
const { authRouter } = require("./auth");
const { favoritesRouter } = require("./favorites");
const { profileRouter } = require('./profile');
const { yelpRouter } = require('./yelp');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/favorites',favoritesRouter);
router.use('/profile', profileRouter);
router.use('/yelp', yelpRouter);

module.exports = router;