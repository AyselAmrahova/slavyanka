const SliderModel = require('../models/Slider.model');

const SLiderController = {
    getAll: async (req, res) => {
        const Sliders = await SliderModel.find();
        if (Sliders === undefined) {
            res.status(404).send("image not found");
        } else {
            res.status(200).send({
                data: Sliders,
                message: "data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { imageURL, button } = req.body;
        const newSlider = new SliderModel({
            imageURL: imageURL,
            button: button
        });
        await newSlider.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const Slider = await SliderModel.findByIdAndDelete(id);
        await SliderModel.deleteMany({ SLiderID: id });
        if (Slider === undefined) {
            res.status(404).send("data not found");
        } else {
            res.status(203).send({
                data: Slider,
                message: "data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { imageURL, button } = req.body;
        const existedSlider = await SliderModel.findByIdAndUpdate(id, {
            imageURL: imageURL,
            button: button
        });
        if (existedSlider == undefined) {
            res.status(404).send("data not found!");
        } else {
            res.status(200).send(`data updated successfully!`);
        }
    },
};

module.exports = SLiderController