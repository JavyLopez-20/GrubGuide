const express = require('express');
const { authRouter } = require("./auth");
const { restaurantRouter } = require("./restaurantSearch");
const { userRouter } = require("./user");

const router = express.Router();

router.use('/auth', authRouter);
router.use('/restaurantSearch', restaurantRouter);
router.use('/user', userRouter);

module.exports = router;