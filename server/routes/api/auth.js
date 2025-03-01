const express = require('express');
const { registerUser, loginUser } = require('../../controllers/auth');
const validateRegister = require('../../middleware/validate');

const authRouter = express.Router();

authRouter.post('/register', validateRegister.validateUser,registerUser);

authRouter.post('/login', loginUser);

module.exports = { authRouter };