const { productsServices } = require('../services');
const httpStatus = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const data = await productsServices.getAll();
  const { status, products } = data;
  return res.status(httpStatus(status)).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await productsServices.findById(id);
  const { status, data } = result;
  return res.status(httpStatus(status)).json(data);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const data = await productsServices.newProduct(name);
  console.log(data);
  const { status, products } = data;
  return res.status(httpStatus(status)).json(products);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const result = await productsServices.updateProduct(name, id);
  console.log(result);
  const { status, data } = result;
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  getAll,
  findById,
  newProduct,
  updateProduct,
};