'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var carCtrlStub = {
  index: 'carCtrl.index',
  show: 'carCtrl.show',
  create: 'carCtrl.create',
  update: 'carCtrl.update',
  destroy: 'carCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var carIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './car.controller': carCtrlStub
});

describe('Car API Router:', function() {

  it('should return an express router instance', function() {
    carIndex.should.equal(routerStub);
  });

  describe('GET /api/cars', function() {

    it('should route to car.controller.index', function() {
      routerStub.get
        .withArgs('/', 'carCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cars/:id', function() {

    it('should route to car.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'carCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cars', function() {

    it('should route to car.controller.create', function() {
      routerStub.post
        .withArgs('/', 'carCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cars/:id', function() {

    it('should route to car.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'carCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cars/:id', function() {

    it('should route to car.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'carCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cars/:id', function() {

    it('should route to car.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'carCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
