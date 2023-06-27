const AboutModel = require('../models/About.model');

const AboutController = {
    getAll: async (req, res) => {
        const aboutCards = await AboutModel.find();
        if (aboutCards === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: aboutCards,
                message: "Data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { title, desc, imageURL } = req.body;
        const newAboutCard = new AboutModel({
            title: title,
            desc: desc,
            imageURL: imageURL,
        });
        await newAboutCard.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const aboutCard = await AboutModel.findByIdAndDelete(id);
        await AboutModel.deleteMany({ aboutCardID: id });
        if (aboutCard === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: aboutCard,
                message: "Data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { title, desc, imageURL } = req.body;
        const existedAboutCard = await AboutModel.findByIdAndUpdate(id, {
            title: title,
            desc: desc,
            imageURL: imageURL,
        });
        if (existedAboutCard == undefined) {
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = AboutController