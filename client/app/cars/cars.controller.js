'use strict';

angular.module('rentAcarApp')
  .controller('CarsCtrl', ['$scope', '$http', 'Auth', function ($scope, $http, Auth) {
  	$scope.sortingAttribute = '';
  	$scope.sortingReverse = true;
  	$scope.isLoggedIn = false;
  	var originatorEv;

  	$scope.init = function(){
  		$scope.getCarsList();
  		$scope.checkUserStatus();
  	}

  	$scope.checkUserStatus = function() {
  		if(Auth.isLoggedIn()) {
  			$scope.isLoggedIn = true;
  			console.log('Is user logged in?' + $scope.isLoggedIn);
  		}
  	}

  	$scope.openSortingMenu = function($mdOpenMenu, event) {
  		originatorEv = event;
  		$mdOpenMenu(event);
  	}

  	$scope.sortingOrder = function(sortingAttribute) {
  		$scope.sortingReverse = ($scope.sortingAttribute === sortingAttribute) ? !$scope.sortingReverse : false;
  		$scope.sortingAttribute = sortingAttribute;
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

  	$scope.liftCard = function(event){
  		var target = event.target;

  		if($scope.isLoggedIn){
	  		$(target).closest(".car-card").velocity('stop', true).velocity(
				{
					'top': '-7px',
					'boxShadow': '0px 5px 20px #121212'
				},
				{
					duration: 400,
					easing: 'easeInOutQuart'
				}
	  		);
  		}
  	}

  	$scope.lowerCard = function(event){
  		var target = event.target;

  		if($scope.isLoggedIn){
	  		$(target).closest(".car-card").velocity('stop', true).velocity(
				{
					'top': 0,
					'box-shadow': '0px 5px 10px $darkGrey'
				},
				{
					duration: 400,
					easing: 'easeInOutQuart'
				}
	  		);
  		}
  	}

  	$scope.showDetails = function(event){
  		var target = event.target;

  		if($scope.isLoggedIn){
	  		$(target).closest(".car-card").find(".car-card-back").velocity(
		  		{
					'bottom': 0
				}, 
				{
					duration: 400,
					easing: 'easeInOutQuart'
				}
			);
  		}
  	}

  	$scope.hideDetails = function(event) {
  		var target = event.target;

		if($scope.isLoggedIn){
	  		$(target).closest(".car-card").find(".car-card-back").velocity(
		  		{
		  			'bottom': "-100%"
		  		},
		  		{
		  			duration: 400,
		  			easing: 'easeInOutQuart'
		  		}
	  		);
  		}
  	}

  	$scope.disableRenting = function() {
  		if(!Auth.isLoggedIn()){

  		}
  	}

  	$scope.init();
  }]);