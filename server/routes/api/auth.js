const express = require('express');
const { registerUser, loginUser } = require('../../controllers/auth');
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

export { router as authRouter };