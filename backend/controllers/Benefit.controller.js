const BenefitModel = require('../models/Benefit.model');

const BenefitController = {
    getAll: async (req, res) => {
        const Benefits = await BenefitModel.find();
        if (Benefits === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: Benefits,
                message: "Data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { title, desc, imageURL } = req.body;
        const newBenefit = new BenefitModel({
            title: title,
            desc: desc,
            imageURL: imageURL,
        });
        await newBenefit.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const Benefit = await BenefitModel.findByIdAndDelete(id);
        await BenefitModel.deleteMany({ BenefitID: id });
        if (Benefit === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: Benefit,
                message: "Data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { title, desc, imageURL } = req.body;
        const existedBenefit = await BenefitModel.findByIdAndUpdate(id, {
            title: title,
            desc: desc,
            imageURL: imageURL,
        });
        if (existedBenefit == undefined) {
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = BenefitController