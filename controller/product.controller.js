const {createProduct, getProduct, updateProduct, deleteProduct, getProducts} = require("../service/product.service");
const {uploadImage, deleteImage} = require("../utils/imageOperations");

module.exports.addProduct = async (req, res) => {
    try {
        const {name, price, description, quantity, image} = req.body;// get the required fields from the request body
        let image_url = '', image_id = '';// initialize the image_url and image_id
        if (image) {
            [image_url, image_id] = await uploadImage(image);// upload the image to cloudinary and get the image_url and image_id
        }
        const document = await createProduct({name, price, description, quantity, image_url, image_id});// create the product entry in the database
        res.status(201).send(document);// send the response
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

module.exports.updateProduct = async (req, res) => {
    try {
        const {name, price, description, quantity, image, id} = req.body;//get the new values from the request body
        let image_url = '', image_id = '';// initialize the image_url and image_id
        let document = await getProduct(id);// get the product from the database
        if (document && document.image_id !== '') {// if the product has an image
            await deleteImage(document.image_id);// delete the image from cloudinary
        }
        if (image) {
            [image_url, image_id] = await uploadImage(image);// upload the new image to cloudinary and get the image_url and image_id
        }
        const product = {name, price, description, quantity, image_url, image_id, id};// create the product object
        await updateProduct(product);// update the product in the database
        res.status(201).send(product);// send the response
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;// get the id from the request params
        let document = await getProduct(id);// get the product from the database
        if (document && document.image_id !== '') {// if the product has an image
            await deleteImage(document.image_id);// delete the image from cloudinary
        }
        await deleteProduct(id);// delete the product from the database
        res.status(200).send("done");// send the response
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

module.exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;// get the id from the request params
        const document = await getProduct(id);// get the product from the database
        res.status(200).send(document);// send the response
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

module.exports.getProducts = async (req, res) => {
    try {
        const skip = parseInt(req.query?.skip) || 0;// get the skip value from the request query
        const limit = parseInt(req.query?.limit) || 10;// get the limit value from the request query
        const document = await getProducts(skip, limit);// get the products from the database
        res.status(200).send(document);// send the response
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}
