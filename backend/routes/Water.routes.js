const express = require('express');
const Water_router = express.Router()
const WaterController = require('../controllers/Water.controller');

//get All 
Water_router.get('/', WaterController.getAll)

//post 
Water_router.post('/', WaterController.post)

//delete 
Water_router.delete('/:id', WaterController.delete)

//edit 
Water_router.put('/:id', WaterController.edit)


module.exports = Water_router
