const mongoose = require('mongoose');

//Category Model
const CategoryModel = mongoose.model("Categories", new mongoose.Schema({
    name: String,
}));

module.exports = CategoryModel