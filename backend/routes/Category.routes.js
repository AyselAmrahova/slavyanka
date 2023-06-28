const express = require('express');
const Category_router = express.Router()
const CategoryController = require('../controllers/Category.controller');
const CategoryPostValidation = require('../middlewares/Category.middleware')

//get All Categories
Category_router.get('/', CategoryController.getAll)

//get Category by ID
Category_router.get('/:id', CategoryController.getByID)

//post Category
Category_router.post('/', CategoryPostValidation, CategoryController.post)

//delete Category
Category_router.delete('/:id', CategoryController.delete)

//edit Category
Category_router.put('/:id', CategoryController.edit)


module.exports = Category_router
