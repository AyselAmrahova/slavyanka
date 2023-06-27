const mongoose = require('mongoose');

// Contact

const ContactModel = mongoose.model("Contact", new mongoose.Schema({
    address: String,
    phone: String,
    email: String,
    connect:String
}));

module.exports = ContactModel