angular.module( 'myApp', [] )


// ???
.controller( 'DisplayCtrl', function( $scope ) {
	$scope.$on( 'displayData', function( event, data ) {
		$scope.content = data;
	});
})


// create and manage multiplication table
.controller( 'MultiplicationCtrl', function( $scope, $attrs, $rootScope ) {
	'use strict';


	// private
	var activeFactors = {
		a: -1,
		b: -1
	};


	// setup array of factors for multiplication
	function populateNumbers( x ) {
		var numbers = [];
		for ( var i = 0; i < x; i++ ) {
			numbers[ i ] = i + 1; // 1-x
		}
		return numbers;
	}


	// compute multiplication (remove logic from view)
	$scope.compute = function( a, b ) {
		return a * b;
	};


	// set number on click
	$scope.setActiveNumber = function( n ) {
		$rootScope.$broadcast( 'displayData', n );
	};


	// set factors when mouse moves over table
	$scope.setActiveFactors = function( a, b ) {
		activeFactors.a = a;
		activeFactors.b = b;
	};

	$scope.cleaActiveFactors = function() {
		$scope.setActiveFactors( null, null );
	};

	// compare against active factors
	$scope.matchesFactor = function( a, b ) {
		return a === activeFactors.a || b === activeFactors.b;
	};


	// watch number limit for changes and update numbers (and thus table)
	$scope.$watch( 'numberLimit', function( limit ) {
		$scope.numbers = populateNumbers( limit );
	});


	// init
	$scope.numberLimit = $attrs.initialNumberLimit || 10;
});