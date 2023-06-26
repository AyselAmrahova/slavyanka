const mongoose = require('mongoose');

// Slider
const SliderModel = mongoose.model("SLider", new mongoose.Schema({
    imageURL: String,
    button: Boolean,
}));

module.exports = SliderModel