const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

const productsModels = require('../../../src/models/products.models');
const servicesFunc = require('../../../src/services/products.services');
const { getAllDB, findByIdDB, newProductDB, updateProdutctDB } = require('../../mocks/service.products.test');

chai.use(sinonChai);

describe('test functions in service products', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('testing getAll function from products', async function () {
    sinon.stub(productsModels, 'getAll').resolves(getAllDB);

    const response = await servicesFunc.getAll();

    expect(response).to.be.an('object');
  });

  it('testing findByID function from products', async function () {
    sinon.stub(productsModels, 'findById').resolves(findByIdDB);
  
    const response = await servicesFunc.findById(2);
  
    expect(response).to.be.an('object');
    expect(response.status).to.be.equal('SUCCESSFULL');
    expect(response.data[0].name).to.be.equal('Traje de encolhimento');
  });

  it('testing newProduct function from products', async function () {
    sinon.stub(productsModels, 'newProduct').resolves(newProductDB);
  
    const response = await servicesFunc.newProduct();
  
    expect(response).to.be.an('object');
    expect(response.status).to.be.equal('CREATED');
    expect(response.products.name).to.be.equal('ProdutoX');
  });

  it('testing updateProduct function from products', async function () {
    sinon.stub(productsModels, 'updateProduct').resolves(updateProdutctDB);
    sinon.stub(servicesFunc, 'findById').resolves({ status: 'SUCCESSFULL' });
  
    const response = await servicesFunc.updateProduct('ProdutoX', 2);
  
    expect(response).to.be.an('object');
    expect(response.status).to.be.equal('CREATED');
    expect(response.data.name).to.be.equal('ProdutoX');
    expect(response.data.id).to.be.equal(2);
  });
});
