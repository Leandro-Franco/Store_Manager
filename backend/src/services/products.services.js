const { productsModels } = require('../models');

const getAll = async () => {
  const products = await productsModels.getAll();
  return { status: 'SUCCESSFULL', products };
};

const findById = async (id) => {
  const products = await productsModels.findById(id);
  if (!products) {
    return { data: { message: 'Product not found' }, status: 'NOT_FOUND' };
  }
  return { status: 'SUCCESSFULL', products };
};

const newProduct = async (name) => {
  const products = await productsModels.newProduct(name);
  return { status: 'CREATED', products };
};

module.exports = {
  getAll,
  findById,
  newProduct,
};