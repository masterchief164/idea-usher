const express = require('express');
const productRoute = require('./product.route');

const router = express.Router();

router.use('/product', productRoute);

module.exports = router;
