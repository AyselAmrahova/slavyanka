const Joi = require('joi');

const ProductSchema = Joi.object().keys({
    name: Joi.string().min(2).required(),
    count: Joi.string().required(),
    price: Joi.string().required(),
    categoryName: Joi.string().required(),
    imageURL: Joi.string().min(2).required(),
    releaseDate: Joi.date().timestamp().required()
})

module.exports = ProductSchema