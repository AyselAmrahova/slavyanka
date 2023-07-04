const ContactModel = require('../models/Contact.model');


const ContactController = {
    getAll: async (req, res) => {
        const contacts = await ContactModel.find();
        if (contacts === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: contacts,
                message: "Data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { address, phone, email, connect } = req.body;
        const newContact = new ContactModel({
            address: address,
            phone: phone,
            email: email,
            connect: connect,
        });
        await newContact.save();
        res.status(201).send("created");
    },
    getByID: async (req, res) => {
        const id = req.params.id;
        const contact = await ContactModel.findById(id);
        if (!contact) {
            res.status(204).send("contact not found!");
        } else {
            res.status(200).send({
                data: contact,
                message: "data get success!",
            });
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const contact = await ContactModel.findByIdAndDelete(id);
        await ContactModel.deleteMany({ contactID: id });
        if (contact === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: contact,
                message: "Data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { address, phone, email, connect } = req.body;
        const existedContact = await ContactModel.findByIdAndUpdate(id, {
            address: address,
            phone: phone,
            email: email,
            connect: connect,
        });
        if (existedContact == undefined) {
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = ContactController