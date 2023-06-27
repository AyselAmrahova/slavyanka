const express = require('express');
const Contact_router = express.Router()
const ContactController = require('../controllers/Contact.controller');

//get All 
Contact_router.get('/', ContactController.getAll)

//post 
Contact_router.post('/', ContactController.post)

//delete 
Contact_router.delete('/:id', ContactController.delete)

//edit 
Contact_router.put('/:id', ContactController.edit)


module.exports = Contact_router
