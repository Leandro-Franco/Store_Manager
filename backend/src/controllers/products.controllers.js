const { productsServices } = require('../services');
const httpStatus = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const { status, products } = await productsServices.getAll();
  return res.status(httpStatus(status)).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsServices.findById(id);
  return res.status(httpStatus(status)).json(data);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const { status, products } = await productsServices.newProduct(name);
  return res.status(httpStatus(status)).json(products);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { status, data } = await productsServices.updateProduct(name, id);
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  getAll,
  findById,
  newProduct,
  updateProduct,
};