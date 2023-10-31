const express = require('express');
const products = require('./routes/products.router');
const sales = require('./routes/sales.router');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', products);
app.use('/sales', sales);

module.exports = app;

// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

// const { expect } = chai;

// chai.use(sinonChai);

// describe('', function () {
//   afterEach(function () {
//     sinon.restore();
//   });

//   it('', async function () {
//     sinon.stub(valor, '');
//   });
// });