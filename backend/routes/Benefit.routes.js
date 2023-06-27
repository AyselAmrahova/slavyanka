const express = require('express');
const Benefit_router = express.Router()
const BenefitController = require('../controllers/Benefit.controller');

//get All 
Benefit_router.get('/', BenefitController.getAll)

//post 
Benefit_router.post('/', BenefitController.post)

//delete 
Benefit_router.delete('/:id', BenefitController.delete)

//edit 
Benefit_router.put('/:id', BenefitController.edit)


module.exports = Benefit_router
