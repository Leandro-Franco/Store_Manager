const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;

const productsModels = require('../../../src/models/products.models');
const connection = require('../../../src/models/connection');
const { AllProductsDB, productByID, newProductDB, updateProductDB } = require('../../mocks/model.products.test');

chai.use(sinonChai);

describe('testa models de products', function () {
  afterEach(function () { sinon.restore(); });

  it('testa getAll', async function () {
    sinon.stub(connection, 'execute').resolves(AllProductsDB);

    const result = await productsModels.getAll();

    expect(result).to.be.an('array');
  });

  it('testa findByID', async function () {
    sinon.stub(connection, 'execute').resolves(productByID);

    const result = await productsModels.findById(2);

    expect(result).to.be.an('object');
    expect(result.name).to.be.equal('Traje de encolhimento');
  });

  it('testa newProduct', async function () {
    sinon.stub(connection, 'execute').resolves(newProductDB);

    const result = await productsModels.newProduct('newproduct');

    expect(result).to.be.an('object');
    expect(result.name).to.be.equal('newproduct');
  });

  it('testa updateProduct', async function () {
    const stubFunc = sinon.stub(connection, 'execute').resolves(updateProductDB);

    const query = 'UPDATE products SET name = ? WHERE id = ?';
    const result = await productsModels.updateProduct('changedProduct', 3);

    expect(result).to.be.an('object');
    expect(result.id).to.be.equal(3);
    expect(stubFunc).to.be.calledWith(query, ['changedProduct', 3]);
  });
});

// TRIPLE A   ARRANGE, ACT, ASSERT;