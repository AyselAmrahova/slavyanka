const express = require('express');
const Product_router = express.Router()
const ProductController = require('../controllers/Product.controller')


//get Category All Products
Product_router.get('/:id', ProductController.getCategoryAllProducts)

//get All Products
Product_router.get('/', ProductController.getAllProducts)
//get Product by ID
Product_router.get('/:id', ProductController.getByID)

//post Product
Product_router.post('/', ProductController.post)

//delete Product
Product_router.delete('/:id', ProductController.delete)

module.exports = Product_router