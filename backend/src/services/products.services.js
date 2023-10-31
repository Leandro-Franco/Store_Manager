const { productsModels } = require('../models');

const getAll = async () => {
  const products = await productsModels.getAll();
  return { status: 'SUCCESSFULL', products };
};

const findById = async (id) => {
  const data = await productsModels.findById(id);
  if (data === undefined) {
    return { data: { message: 'Product not found' }, status: 'NOT_FOUND' };
  }
  return { status: 'SUCCESSFULL', data };
};

const newProduct = async (name) => {
  const products = await productsModels.newProduct(name);
  return { status: 'CREATED', products };
};

const updateProduct = async (name, id) => {
  const checkID = await findById(id);
  if (checkID.status === 'SUCCESSFULL') {
    const products = await productsModels.updateProduct(name, id);
    return { status: 'CREATED', data: products };
  }
  return { data: { message: 'Product not found' }, status: 'NOT_FOUND' };
};

module.exports = {
  getAll,
  findById,
  newProduct,
  updateProduct,
};