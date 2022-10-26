const {productModel} = require("../models/product");

module.exports.createProduct = async (product) => {
    try {
        const document = new productModel(product);// create the product document
        return await document.save();// save the document in the database
    } catch (err) {
        console.log(err);
    }
}

module.exports.getProduct = async (id) => {
    try {
        return await productModel.findById(id);// get the product from the database
    } catch (err) {
        console.log(err);
    }
}

module.exports.updateProduct = async (product) => {
    try {
        return await productModel.findByIdAndUpdate(product.id, product);// update the product in the database
    } catch (err) {
        console.log(err);
    }
}

module.exports.deleteProduct = async (id) => {
    try {
        return await productModel.findByIdAndDelete(id);// delete the product from the database
    } catch (err) {
        console.log(err);
    }
}

module.exports.getProducts = async (skip, limit) => {
    try {
        return await productModel.find().skip(skip).limit(limit);// get the products from the database with the skip and limit
    } catch (err) {
        console.log(err);
    }
}
