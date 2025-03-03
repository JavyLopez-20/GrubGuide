const express = require('express');
const { registerUser, loginUser } = require('../../controllers/auth.js');
const validateRegister = require('../../middleware/validate.js');

const authRouter = express.Router();

authRouter.post('/register', validateRegister.validateUser, registerUser)

authRouter.get('/login', loginUser);

module.exports = { authRouter };