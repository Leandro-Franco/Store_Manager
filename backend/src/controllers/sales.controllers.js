const { salesServices } = require('../services');
const httpStatus = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const { status, sales } = await salesServices.getAll();
  return res.status(httpStatus(status)).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesServices.findById(id);
  return res.status(httpStatus(status)).json(data);
};

const newSale = async (req, res) => {
  const obj = req.body;
  const { status, sales } = await salesServices.newSale(obj);
  return res.status(httpStatus(status)).json(sales);
};

module.exports = {
  getAll,
  findById,
  newSale,
};