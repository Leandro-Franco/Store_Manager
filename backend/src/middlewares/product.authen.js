const httpStatus = require('../utils/httpStatus');

const newProduct = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(httpStatus('BAD_REQUEST')).json({ message: '"name" is required' });
  } if (name.length < 5) {
    return res.status(httpStatus('INVALID_VALUE'))
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = newProduct;