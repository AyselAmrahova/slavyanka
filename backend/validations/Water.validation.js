const Joi = require('joi');

const WaterSchema = Joi.object().keys({
    title: Joi.string().min(2).max().required(),
    desc: Joi.string().min(2).max().required(),
    imageURL: Joi.string().required()
})

module.exports = WaterSchema