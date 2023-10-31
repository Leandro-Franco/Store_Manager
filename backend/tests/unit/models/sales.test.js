const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const salesModels = require('../../../src/models/sales.models');
const { getAllDB, findByIdDB } = require('../../mocks/model.sales.test');

chai.use(sinonChai);

describe('test models in sales', function () {
  afterEach(function () { sinon.restore(); });

  it('testing getAll function', async function () {
    sinon.stub(connection, 'execute').resolves(getAllDB);

    const result = await salesModels.getAll();

    expect(result).to.be.an('array');
  });

  it('testing findById function', async function () {
    sinon.stub(connection, 'execute').resolves(findByIdDB);

    const result = await salesModels.findById(2);

    expect(result).to.be.an('array');
    expect(result[0].productId).to.be.equal(3);
  });

  // it('testing newsale function', async function () {
  //   sinon.stub(connection, 'execute').resolves();

  //   const result = await salesModels.newSale();

  //   expect(result).to.be.an('array');
  // });
});