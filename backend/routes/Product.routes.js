const express = require('express');
const Product_router = express.Router()
const ProductController = require('../controllers/Product.controller')


//get Category All Products
Product_router.get('/category/:categoryID', ProductController.getCategoryAllProducts)

//get All Products
Product_router.get('/', ProductController.getAllProducts)

//get Product by ID
Product_router.get('/:id', ProductController.getByID)

//post Product
Product_router.post('/', ProductController.post)

//delete Productc
Product_router.delete('/:id', ProductController.delete)

//edit Category
Product_router.put('/:id', ProductController.edit)
module.exports = Product_router