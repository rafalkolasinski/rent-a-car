'use strict';

angular.module('rentAcarApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').then(function(response) {
      $scope.awesomeThings = response.data;
    });

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
