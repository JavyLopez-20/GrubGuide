const express = require('express');
const profileRouter = express.Router();
const { getProfile } = require('../../controllers/user')

profileRouter.get('/', getProfile);

module.exports = { profileRouter };