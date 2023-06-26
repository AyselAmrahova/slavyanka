const express = require('express');
const Slider_router = express.Router()
const SliderController = require('../controllers/Slider.controller');

//get All 
Slider_router.get('/', SliderController.getAll)

//post 
Slider_router.post('/', SliderController.post)

//delete 
Slider_router.delete('/:id', SliderController.delete)

//edit 
Slider_router.put('/:id', SliderController.edit)


module.exports = Slider_router
