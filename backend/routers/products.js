const router = require('express').Router();
const { createProduct, updateProducts, deleteProduct, getProducts, getProductById } = require('../controllers/products');

router.get('/:id', getProductById);
router.post('/create', createProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProduct);
router.get('/', getProducts);

module.exports = router;