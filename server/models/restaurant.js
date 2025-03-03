const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    yelpId: { type: String, required: true, unique: true},

    name: { type: String, required: true},
    cuisine: { type: String, required: true},
        location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
    coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    },
    },
    rating: { type: Number, required: true },
    pricing: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
module.exports = RestaurantModel;
