const mongoose = require('mongoose');

// Slider

const SliderModel = mongoose.model("Slider", new mongoose.Schema({
    imageURL: String,
    button: Boolean,
}));

module.exports = SliderModel