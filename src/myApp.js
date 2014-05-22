angular.module( 'myApp', [] )
.controller( 'MultiplicationCtrl', function( $scope, $attrs ) {
	function populateNumbers( x ) {
		var numbers = [];
		for ( var i = 0; i < x; i++ ) {
			numbers[ i ] = i + 1; // 1-x
		}
		return numbers;
	}

	$scope.numberLimit = $attrs.initialNumberLimit || 10;
	$scope.numbers = populateNumbers( $scope.numberLimit );
	$scope.compute = function( a, b ) {
		return a * b;
	}
});
