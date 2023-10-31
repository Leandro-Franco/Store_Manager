const connection = require('./connection');

const getAll = async () => {
  const [sale] = await connection.execute(
    `SELECT
    sp.sale_id AS saleId,
    sl.date,
    sp.product_id AS productId,
    sp.quantity
    FROM
    StoreManager.sales_products AS sp
    JOIN
    StoreManager.sales AS sl 
    ON sp.sale_id = sl.id
    ORDER BY saleId, productId;`,
  );
  return sale;
};

const findById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT 
    sp.sale_id AS saleId,
    sl.date,
    sp.product_id AS productId,
    sp.quantity
    FROM
    StoreManager.sales_products AS sp
    JOIN
    StoreManager.sales AS sl 
    ON sp.sale_id = sl.id
    WHERE id = ?
    ORDER BY saleId, productId;`,
    [id],
  );
  return sale;
};

const newSale = async (obj) => {
  const [sale] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  const saleProductData = obj.map(async ({ productId, quantity }) => {
    await connection
      .execute(
        'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)',
        [sale.insertId, productId, quantity],
      ); 
  });
  Promise.all(saleProductData);
  console.log(saleProductData);
  return { id: sale.insertId, intemsSold: obj };
};

module.exports = {
  getAll,
  findById,
  newSale,
};