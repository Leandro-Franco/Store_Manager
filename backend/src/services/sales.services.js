const { salesModels } = require('../models');

const getAll = async () => {
  const sales = await salesModels.getAll();
  return { status: 'SUCCESSFULL', sales };
};

const findById = async (id) => {
  const sales = await salesModels.findById(id);
  if (!sales || sales.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESSFULL', sales };
};

const newSale = async (obj) => {
  const sales = await salesModels.newSale(obj);
  return { status: 'CREATED', sales };
};

module.exports = {
    getAll,
    findById,
    newSale,
};