const mongoose = require('mongoose');

//ThreeCardsModel
const ThreeCardsModel = mongoose.model("ThreeCards", new mongoose.Schema({
    title: String,
    desc: String,
    imageURL: String,
}));

module.exports = ThreeCardsModel