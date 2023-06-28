const ProductModel = require('../models/Product.model');

const ProductController = {
    getCategoryAllProducts: async (req, res) => {
        const id = req.params.id;
        const products = await ProductModel.find({ categoryID: id });
        if (products == undefined) {
            res.status(404).send("Products not found!");
        } else {
            res.status(200).send(products);
        }
    },
    getAllProducts: async (req, res) => {
        const products = await ProductModel.find();
        if (products == undefined) {
            res.status(404).send("Products not found!");
        } else {
            res.status(200).send(products);
        }
    },
    getByID: async (req, res) => {
        const id = req.params.id;
        const product = await ProductModel.findById(id);
        console.log("product found: ", product);
        if (!product) {
            res.status(204).send("product not found!");
        } else {
            res.status(200).send({
                data: product,
                message: "data get success!",
            });
        }
    },
    post: async (req, res) => {
        const { name, title, count, price, imageURL, releaseDate, categoryName, categoryID } = req.body;

        const product = new ProductModel({
            name: name,
            title: title,
            count: count,
            price: price,
            imageURL: imageURL,
            releaseDate: releaseDate,
            categoryName: categoryName,
            categoryID: categoryID,
        });
        await product.save();
        res.status(201).send("Product created successfully");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            res.status(404).send("Product not found!");
        } else {
            res
                .status(203)
                .send({ data: deletedProduct, message: "Product deleted successfully!" });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { name, title, count, price, imageURL, releaseDate, categoryName, categoryID } = req.body;
        const existedProduct = await ProductModel.findByIdAndUpdate(id, {
            name: name,
            title: title,
            count: count,
            price: price,
            imageURL: imageURL,
            releaseDate: releaseDate,
            categoryName: categoryName,
            categoryID: categoryID,
        });
        if (existedProduct == undefined) {
            res.status(404).send("Product not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    },
};

module.exports = ProductController