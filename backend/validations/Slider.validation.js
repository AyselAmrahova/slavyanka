const Joi = require('joi');

const SliderSchema = Joi.object().keys({
    imageURL: Joi.string().required(),
    button: Joi.string().required()
})

module.exports = SliderSchema