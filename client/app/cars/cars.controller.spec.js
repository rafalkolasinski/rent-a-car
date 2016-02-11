'use strict';

describe('Controller: CarsCtrl', function () {

  // load the controller's module
  beforeEach(module('rentAcarApp'));

  var CarsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarsCtrl = $controller('CarsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
