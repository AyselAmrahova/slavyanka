const express = require('express');
const ThreeCards_router = express.Router()
const ThreeCardsController = require('../controllers/ThreeCards.controller');

//get All 
ThreeCards_router.get('/', ThreeCardsController.getAll)

//post 
ThreeCards_router.post('/', ThreeCardsController.post)

//delete 
ThreeCards_router.delete('/:id', ThreeCardsController.delete)

//edit 
ThreeCards_router.put('/:id', ThreeCardsController.edit)


module.exports = ThreeCards_router
