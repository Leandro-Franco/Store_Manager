const express = require('express');
const { productsControllers } = require('../controllers');
const { productAuthen } = require('../middlewares');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.findById);
router.post('/', productAuthen, productsControllers.newProduct);

module.exports = router;
