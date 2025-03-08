const express = require('express');
const { homeRoute } = require('../../controllers/home');

const home = express.Router();

home.use('/', homeRoute);

module.exports = { home };