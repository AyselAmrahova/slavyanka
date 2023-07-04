const Joi = require('joi');

const CardsSchema = Joi.object().keys({
    title: Joi.string().min(2).max(30).required(),
    desc: Joi.string().min(2).max(30).required(),
    imageURL: Joi.string().required()
})

module.exports = CardsSchema