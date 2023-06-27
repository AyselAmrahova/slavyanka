const ThreeCardsModel = require('../models/ThreeCards.model');

const ThreeCardsController = {
  getAll: async (req, res) => {
    const ThreeCards = await ThreeCardsModel.find();
    if (ThreeCards === undefined) {
      res.status(404).send("Data not found");
    } else {
      res.status(200).send({
        data: ThreeCards,
        message: "Data get success!",
      });
    }
  },

  post: async (req, res) => {
    const { title, desc, imageURL } = req.body;
    const newThreeCards = new ThreeCardsModel({
      title: title,
      desc: desc,
      imageURL: imageURL,
    });
    await newThreeCards.save();
    res.status(201).send("created");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const threeCard = await ThreeCardsModel.findByIdAndDelete(id);
    await ThreeCardsModel.deleteMany({ threeCardID: id });
    if (threeCard === undefined) {
      res.status(404).send("Data not found");
    } else {
      res.status(203).send({
        data: threeCard,
        message: "Data deleted successfully",
      });
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const { title, desc, imageURL } = req.body;
    const existedThreeCard = await ThreeCardsModel.findByIdAndUpdate(id, {
      title: title,
      desc: desc,
      imageURL: imageURL,
    });
    if (existedThreeCard == undefined) {
      res.status(404).send("Data not found!");
    } else {
      res.status(200).send('Data updated successfully!');
    }
  },
};

module.exports = ThreeCardsController