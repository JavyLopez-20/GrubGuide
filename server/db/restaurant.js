const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema()

const restaurantModel = mongoose.model("Restaurant", restaurantSchema)
