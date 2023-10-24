const { productsServices } = require('../services');
const httpStatus = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const { status, products } = await productsServices.getAll();
  return res.status(httpStatus(status)).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, products } = await productsServices.findById(id);
  return res.status(httpStatus(status)).json(products);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const { status, products } = await productsServices.newProduct(name);
  return res.status(httpStatus(status)).json(products);
};

module.exports = {
  getAll,
  findById,
  newProduct,
};