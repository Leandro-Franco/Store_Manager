const express = require('express');
const { salesControllers } = require('../controllers');
const { saleAuthen } = require('../middlewares');

const router = express.Router();

router.get('/', salesControllers.getAll);
router.get('/:id', salesControllers.findById);
router.post('/', saleAuthen.productCheck, saleAuthen.quantityCheck, salesControllers.newSale);

module.exports = router;
