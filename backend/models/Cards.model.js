const mongoose = require('mongoose');

//CardsModel
const CardsModel = mongoose.model("Cards", new mongoose.Schema({
    title: String,
    desc: String,
    imageURL: String,
}));

module.exports = CardsModel