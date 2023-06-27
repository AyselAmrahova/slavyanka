const mongoose = require('mongoose');

// About

const AboutModel = mongoose.model("About", new mongoose.Schema({
    title: String,
    desc: String,
    imageURL: String,
}));

module.exports = AboutModel