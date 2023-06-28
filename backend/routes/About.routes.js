const express = require('express');
const About_router = express.Router()
const AboutController = require('../controllers/About.controller');
// const AboutPostValidation = require('../middlewares/About.middleware')
//get All 
About_router.get('/', AboutController.getAll)

//post 
About_router.post('/', AboutController.post)

//delete 
About_router.delete('/:id', AboutController.delete)

//edit 
About_router.put('/:id', AboutController.edit)


module.exports = About_router
