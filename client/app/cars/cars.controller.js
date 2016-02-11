'use strict';

angular.module('rentAcarApp')
  .controller('CarsCtrl', function ($scope, $http) {
  	$scope.sortingAttribute = '';

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

  	$scope.init();
  });
