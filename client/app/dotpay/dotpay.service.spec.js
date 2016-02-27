'use strict';

describe('Service: dotpay', function () {

  // load the service's module
  beforeEach(module('rentAcarApp'));

  // instantiate service
  var dotpay;
  beforeEach(inject(function (_dotpay_) {
    dotpay = _dotpay_;
  }));

  it('should do something', function () {
    expect(!!dotpay).toBe(true);
  });

});
