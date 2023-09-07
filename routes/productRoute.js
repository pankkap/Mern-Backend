const express = require('express');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')
const router = express.Router();

// Fetch Products
router.get('/', getProducts);
router.get('/:id', getProduct);

// Create Product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);


module.exports = router;