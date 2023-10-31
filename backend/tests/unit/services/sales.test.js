const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

const salesModels = require('../../../src/models/sales.models');
const salesService = require('../../../src/services/sales.services');
const { salesGetAllDB, findByIdDB } = require('../../mocks/service.sales.test');

chai.use(sinonChai);

describe('test services functions in sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testing getAll function from sales', async function () {
    sinon.stub(salesModels, 'getAll').resolves(salesGetAllDB);

    const response = await salesService.getAll();

    expect(response).to.be.an('object');
  });

  it('testing findByID function from sales', async function () {
    sinon.stub(salesModels, 'findById').resolves(findByIdDB);

    const response = await salesService.findById(2);

    expect(response).to.be.an('object');
    expect(response.status).to.be.equal('SUCCESSFULL');
    expect(response.data[0].productId).to.be.equal(3);
  });

  it('testing findByID function from sales, with a wrong value', async function () {
    sinon.stub(salesModels, 'findById').resolves([]);

    const response = await salesService.findById(2);

    expect(response).to.be.an('object');
    expect(response.status).to.be.equal('NOT_FOUND');
    expect(response.data.message).to.be.equal('Sale not found');
  });
});