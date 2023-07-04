const express = require('express');
const Cards_router = express.Router()
const CardsController = require('../controllers/Cards.controller');

//get All 
Cards_router.get('/', CardsController.getAll)

// get İD
Cards_router.get('/:id', CardsController.getByID)

//post 
Cards_router.post('/', CardsController.post)

//delete 
Cards_router.delete('/:id', CardsController.delete)

//edit 
Cards_router.put('/:id', CardsController.edit)

module.exports = Cards_router
