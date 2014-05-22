angular.module( 'myApp', [] )
.controller( 'MultiplicationCtrl', function( $scope, $attrs ) {


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
	}


	// watch number limit for changes and update numbers (and thus table)
	$scope.$watch( 'numberLimit', function( limit ) {
		$scope.numbers = populateNumbers( limit );
	});


	// init
	$scope.numberLimit = $attrs.initialNumberLimit || 10;
});
