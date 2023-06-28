const mongoose = require('mongoose');

//Product Model
const ProductModel = mongoose.model(
    "Products",
    new mongoose.Schema({
        name: String,
        title: String,
        count: Number,
        price: Number,
        imageURL: String,
        releaseDate: Date,
        categoryName: String,
        categoryID: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
    })
);

module.exports = ProductModel