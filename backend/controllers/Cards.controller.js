const CardsModel = require('../models/Cards.model');

const CardsController = {
  getAll: async (req, res) => {
    const Cards = await CardsModel.find();
    if (Cards === undefined) {
      res.status(404).send("Data not found");
    } else {
      res.status(200).send({
        data: Cards,
        message: "Data get success!",
      });
    }
  },
  getByID: async (req, res) => {
    const id = req.params.id;
    const card = await CardsModel.findById(id);
    if (!card) {
      res.status(204).send("Data not found!");
    } else {
      res.status(200).send({
        data: card,
        message: "data get success!",
      });
    }
  },
  post: async (req, res) => {
    const { title, desc, imageURL } = req.body;
    const newCards = new CardsModel({
      title: title,
      desc: desc,
      imageURL: imageURL,
    });
    await newCards.save();
    res.status(201).send("created");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const Card = await CardsModel.findByIdAndDelete(id);
    await CardsModel.deleteMany({ CardID: id });
    if (Card === undefined) {
      res.status(404).send("Data not found");
    } else {
      res.status(203).send({
        data: Card,
        message: "Data deleted successfully",
      });
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const { title, desc, imageURL } = req.body;
    const existedCard = await CardsModel.findByIdAndUpdate(id, {
      title: title,
      desc: desc,
      imageURL: imageURL,
    });
    if (existedCard == undefined) {
      res.status(404).send("Data not found!");
    } else {
      res.status(200).send('Data updated successfully!');
    }
  },
};

module.exports = CardsController