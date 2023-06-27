const WaterModel = require('../models/Water.model');

const WaterController = {
    getAll: async (req, res) => {
        const Water = await WaterModel.find();
        if (Water === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: Water,
                message: "Data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { title, desc, imageURL } = req.body;
        const newWater = new WaterModel({
            title: title,
            desc: desc,
            imageURL: imageURL,
        });
        await newWater.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const Water = await WaterModel.findByIdAndDelete(id);
        await WaterModel.deleteMany({ WaterID: id });
        if (Water === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: Water,
                message: "Data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { title, desc, imageURL } = req.body;
        const existedWater = await WaterModel.findByIdAndUpdate(id, {
            title: title,
            desc: desc,
            imageURL: imageURL,
        });
        if (existedWater == undefined) {
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = WaterController