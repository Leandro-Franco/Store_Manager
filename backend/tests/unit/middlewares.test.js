const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

const { productAuthen, saleAuthen } = require('../../src/middlewares');

chai.use(sinonChai);

describe('testing middlewares validations', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('test newProduct validations', async function () {
    const response = {
      status: 400,
      json: {
        message: '"name" is required',
      },
    };
    const req = {
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await productAuthen(req, res, next);

    expect(res.status).to.have.been.calledWith(response.status);
    expect(res.json).to.have.been.calledWith(response.json);
  });

  it('test newSale validations product', async function () {
    const response = {
      status: 400,
      json: {
        message: 'Empty request body',
      },
    };
    const req = {
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await saleAuthen.productCheck(req, res, next);

    expect(res.status).to.have.been.calledWith(response.status);
    expect(res.json).to.have.been.calledWith(response.json);
  });

  it('test newSale validations quatity', async function () {
    const response = {
      status: 400,
      json: {
        message: 'Empty request body',
      },
    };
    const req = {
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await saleAuthen.quantityCheck(req, res, next);

    expect(res.status).to.have.been.calledWith(response.status);
    expect(res.json).to.have.been.calledWith(response.json);
  });
});
