const express = require('express');
const { authRouter } = require("./auth");
const { favoritesRouter } = require("./favorites");
const { profileRouter } = require('./profile');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/favorites', favoritesRouter);
router.use('/profile', profileRouter)

module.exports = router;