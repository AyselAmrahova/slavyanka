const mongoose = require('mongoose');

// Water

const WaterModel = mongoose.model("Water", new mongoose.Schema({
    title: String,
    desc: String,
    imageURL: String,
}));

module.exports = WaterModel