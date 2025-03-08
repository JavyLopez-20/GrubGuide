const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    yelpId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, required: true },
    imageUrl: { type: String },
});
module.exports = mongoose.model('Restaurant', restaurantSchema);