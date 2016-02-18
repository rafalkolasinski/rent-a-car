'use strict';

angular.module('rentAcarApp')
  .controller('CarsCtrl', ['$scope', '$http', function ($scope, $http) {
  	$scope.sortingAttribute = '';
  	$scope.sortingReverse = true;

  	$scope.init = function(){
  		$scope.getCarsList();
  	}

  	$scope.getCarsList = function(){
	    $http.get('/api/cars')
	    .success(function(data){
	    	$scope.cars = data;
	    	console.log($scope.cars);
	    })
	    .error(function(err){
	    	console.log("Error. Couldn't get data from DB.");
	    });
  	}

  	$scope.sortingOrder = function(sortingAttribute) {
  		$scope.sortingReverse = ($scope.sortingAttribute === sortingAttribute) ? !$scope.sortingReverse : false;
  		$scope.sortingAttribute = sortingAttribute;
  	}

  	$scope.init();
  }]);