const CategoryModel = require('../models/Category.model');
const ProductModel = require('../models/Product.model');

const CategoryController = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const categories = await CategoryModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: categories,
                message: "data get success!",
            });
        } else {
            res.status(200).send({
                data: categories.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                ),
                message: "data get success!",
            });
        }
    },
    getByID: async (req, res) => {
        const id = req.params.id;
        const category = await CategoryModel.findById(id);
        if (!category) {
            res.status(204).send("category not found!");
        } else {
            res.status(200).send({
                data: category,
                message: "data get success!",
            });
        }
    },
    post: async (req, res) => {
        const { name } = req.body;
        const newCategory = new CategoryModel({
            name: name,
        });
        await newCategory.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const category = await CategoryModel.findByIdAndDelete(id);
        await ProductModel.deleteMany({ categoryID: id });
        if (category === undefined) {
            res.status(404).send("category not found");
        } else {
            res.status(203).send({
                data: category,
                message: "category deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { name } = req.body;
        const existedCategory = await CategoryModel.findByIdAndUpdate(id, {
            name: name,
        });
        if (existedCategory == undefined) {
            res.status(404).send("category not found!");
        } else {
            res.status(200).send(`${name} updated successfully!`);
        }
    },
};

module.exports = CategoryController