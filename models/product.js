const mongoose = require('../utils/mongoose.util');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true // name is required
    },
    description: {
        type: String,
        minLength: 100, // description should be at least 100 characters long
        maxLength: 200, //  description should be at most 200 characters long
        required: true,// description is required
    },
    price: {
        type: Number,
        required: true, // price is required
    },
    image_url: String,
    image_id: String,
    quantity: Number,
});

const productModel = mongoose.model('Product', productSchema);
module.exports = {productModel, productSchema};
