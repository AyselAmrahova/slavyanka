const Joi = require('joi');

const ContactSchema = Joi.object().keys({
    address: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    connect: Joi.string().required()
})

module.exports = ContactSchema