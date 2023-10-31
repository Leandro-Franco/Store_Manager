const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

const productsServices = require('../../../src/services/products.services');
// const http = require('../../../src/utils/httpStatus');
const productscontroller = require('../../../src/controllers/products.controllers');
const { getAllProductsDB, findByIdProductsDB, newProductDB, updateDB } = require('../../mocks/controller.products.test');

chai.use(sinonChai);

describe('test controllers functions in products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testing getAll function from products', async function () {
    sinon.stub(productsServices, 'getAll').resolves(getAllProductsDB);

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await productscontroller.getAll(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(getAllProductsDB.products);
  });

  it('testing findById function from products', async function () {
    sinon.stub(productsServices, 'findById').resolves(findByIdProductsDB);

    const req = { params: { id: 3 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await productscontroller.findById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(findByIdProductsDB.data);
  });

  it('testing newProduct function from products', async function () {
    sinon.stub(productsServices, 'newProduct').resolves(newProductDB);

    const req = { body: { name: 'ProdutoX' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await productscontroller.newProduct(req, res);
    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.calledWith(newProductDB.products);
  });

  it('testing updateProduct function from products', async function () {
    sinon.stub(productsServices, 'updateProduct').resolves(updateDB);

    const req = { 
      body: { name: 'ProdutoX' },
      params: { id: 3 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await productscontroller.updateProduct(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(updateDB.data);
  });
});