'use strict';

angular.module('rentACarApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    $scope.isCollapsed = true;
  });
