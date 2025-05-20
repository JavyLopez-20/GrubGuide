const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{
        businessId: { type: String, required: true },
        name: { type: String, required: true },
        image_url: String,
    }],
});

module.exports = mongoose.model("User", userSchema);