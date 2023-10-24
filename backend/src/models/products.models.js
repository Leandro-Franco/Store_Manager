const connection = require('./connection');

const getAll = async () => {
  const [data] = await connection.execute(
    'SELECT * FROM products',
  );
  return data;
};

const findById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return product;
};

const newProduct = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return { id: product.insertId, name };
};

module.exports = {
  getAll,
  findById,
  newProduct,
};