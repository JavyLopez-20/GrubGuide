const express = require('express');
const { authRouter } = require("./auth");
const { favoritesRouter } = require("./favorites");
const { profileRouter } = require('./profile');
const yelpRouter = require('./yelp');
const { authenticateUser } = require('../../middleware/auth');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/favorites',authenticateUser, favoritesRouter);
router.use('/profile', authenticateUser, profileRouter);
router.use('/results', yelpRouter);

module.exports = router;