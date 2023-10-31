const getAllProductsDB = {
  status: 'SUCCESSFULL',
  products: [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
  ],
};

const findByIdProductsDB = {
  status: 'SUCCESSFULL',
  data: { id: 3, name: 'Escudo do Capitão América' },
};

const newProductDB = { status: 'CREATED', products: { id: 4, name: 'ProdutoX' } };

const updateDB = { status: 'SUCCESSFULL', data: { id: 1, name: 'ProdutoX' } };

module.exports = { getAllProductsDB, findByIdProductsDB, newProductDB, updateDB };