const express = require('express');
const controller = require('../controller/product.controller');

const router = express.Router();
/*
    * endpoint is /api/product/add
    * method is POST
    * body is {name, price, description, image, quantity}
    * returns the product object
 */
router.post('/add', controller.addProduct);// add a product

/*
    * endpoint is /api/product/update
    * method is PUT
    * body is {name, price, description, image, quantity, id}
    * returns the product object
    * id is the id of the product to be updated
 */
router.put('/update', controller.updateProduct); // update a product

/*
    * endpoint is /api/product/delete/:id
    * method is DELETE
    * params is {id}
    * returns "done"
    * id is the id of the product to be deleted
 */
router.delete('/delete/:id', controller.deleteProduct);// delete a product

/*
    * endpoint is /api/product/:id
    * method is GET
    * params is {id}
    * returns the product object
    * id is the id of the product to be fetched
 */
router.get('/get/:id', controller.getProduct);// get a product

/*
    * endpoint is /api/product/
    * method is GET
    * returns the list of products
    * skip and limit are optional query parameters
    * skip is the number of products to be skipped
    * limit is the number of products to be fetched
    * if skip and limit are not provided, the first 10 products will be fetched
    * if skip is provided and limit is not provided, the next 10 products from skip will be fetched
    * if skip is not provided and limit is provided, the first limit products will be fetched
 */
router.get('/get', controller.getProducts);// get all products with pagination

module.exports = router;
