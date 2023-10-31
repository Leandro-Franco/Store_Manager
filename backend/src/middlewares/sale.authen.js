const httpStatus = require('../utils/httpStatus');
const { productsModels } = require('../models');

const productCheck = async (req, res, next) => {
  const sale = req.body;
  if (typeof sale === 'undefined' || Object.keys(sale).length === 0) {
    return res.status(400).json({ message: 'Empty request body' });
  }
  const products = await productsModels.getAll()
    .then((result) =>
      result.map((product) => product.id));

  const saleId = sale.map(({ productId }) => productId);

  const checkId = saleId.every((id) => products.includes(id));

  if (saleId.some((id) => !id)) {
    return res.status(httpStatus('BAD_REQUEST'))
      .json({ message: '"productId" is required' });
  }
  if (!checkId) {
    return res.status(httpStatus('NOT_FOUND')).json({ message: 'Product not found' });
  }
  next();
};

const quantityCheck = (req, res, next) => {
  const sale = req.body;
  if (typeof sale === 'undefined' || Object.keys(sale).length === 0) {
    return res.status(400).json({ message: 'Empty request body' });
  }
  const saleQuantity = sale.map(({ quantity }) => quantity);

  if (saleQuantity.some((quant) => quant < 1)) {
    return res.status(httpStatus('INVALID_VALUE'))
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (saleQuantity.some((quant) => !quant)) {
    return res.status(httpStatus('BAD_REQUEST'))
      .json({ message: '"quantity" is required' });
  }
  next();
};

module.exports = { productCheck, quantityCheck };