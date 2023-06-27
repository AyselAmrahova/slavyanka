const mongoose = require('mongoose');

// Benefit

const BenefitModel = mongoose.model("Benefit", new mongoose.Schema({
    title: String,
    desc: String,
    imageURL: String,
}));

module.exports = BenefitModel