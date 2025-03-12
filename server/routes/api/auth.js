const express = require('express');
const { registerUser, loginUser } = require('../../controllers/auth.js');
const { authenticateUser } = require('../../middleware/auth.js');

const authRouter = express.Router();

authRouter.post('/register',registerUser);

authRouter.post('/login', authenticateUser, loginUser);

module.exports = { authRouter };