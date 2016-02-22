'use strict';

angular.module('rentAcarApp')
  .controller('CarsCtrl', ['$scope', '$http', 'Auth', function ($scope, $http, Auth) {
  	$scope.sortingAttribute = '';
  	$scope.sortingReverse = true;
  	$scope.isLoggedIn = false;
  	$scope.userData = {};
  	$scope.datePicker = {
  		days: 0,
  		dateRange: {
  			startDate: null,
  			endDate: null
  		}
  	};
  	$scope.totalValue = 0;
  	$scope.discount = 0;
  	var originatorEv;

  	/* main initialization method
  	-----------------------------------------------------*/
  	$scope.init = function(){
  		$scope.getCarsList();
  		$scope.checkUserStatus();
  		if($scope.isLoggedIn){
  			$scope.userData = Auth.getCurrentUser();
  			console.log("Logged user data: " + JSON.stringify($scope.userData));
  		}
  	}

  	/* ux methods
  	-----------------------------------------------------*/
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

  	$scope.rentCar = function(event) {
  		var target = event.target;
  		var targetData = angular.element(event.target).scope().car;

  		console.log($scope.datePicker);
  		console.log("Is booked before locking: " + targetData.isBooked);
  		
  		if(!targetData.isBooked){
  			targetData.isBooked = true;
  			$(target).closest(".car-card").find(".car-card-ui").css("background-color", "#FDD835");
  			$(target).closest(".car-card").find(".car-card-ui").css("color", "#121212");
  			$(target).closest(".car-card").find(".car-card-availability-label").text("Booked");

  			
  			console.log("Is locked: " + targetData.isBooked);

  			setTimeout(function(){
  				targetData.isBooked = false;
  				$(target).closest(".car-card").find(".car-card-ui").css("background-color", "#FDD835");
	  			$(target).closest(".car-card").find(".car-card-ui").css("color", "#121212");
	  			$(target).closest(".car-card").find(".car-card-availability-label").text("Booked");
  				console.log("Is booked: " + targetData.isBooked);
  			}, 3000);
  		}
  	}

  	/* ui methods
  	-----------------------------------------------------*/
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
  		console.log("Selected car data: " + JSON.stringify(angular.element(target).scope().car));

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

			if($scope.userData.monthlyRentCounter >= 3){
				$scope.discount = .2;
			}
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

	/* watches
  	-----------------------------------------------------*/
  	$scope.$watch('datePicker.dateRange', function(newValue, oldValue){
  		if(newValue !== oldValue){
	  		$scope.datePicker.days = newValue.endDate.diff(newValue.startDate, 'days');

	  		if($scope.datePicker.days >= 7 && $scope.userData.monthlyRentCounter < 3) {
	  			$scope.discount = .1;
	  		} else {
	  			$scope.discount = 0;
	  		}
  		}
  	}, true);

	/* calling the initialization method
  	-----------------------------------------------------*/
  	$scope.init();
  }]);