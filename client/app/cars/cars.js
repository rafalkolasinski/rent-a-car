'use strict';

angular.module('rentAcarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cars', {
        url: '/cars',
        templateUrl: 'app/cars/cars.html',
        controller: 'CarsCtrl'
      });
  });
