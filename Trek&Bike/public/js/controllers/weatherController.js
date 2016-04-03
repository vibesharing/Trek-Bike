// MAIN CONTROLLER
function weatherController($scope, $http, weatherService) {

	$scope.searchweather = function(){
		weatherService.geta($scope.city).then(function(res){
			$scope.weather = res.data;
			console.log($scope.weather);
		});

	};
	$scope.searchforecast = function(){
		weatherService.getb($scope.city).then(function(res){
			$scope.weathera = res.data;
			console.log($scope.weathera);
		});

	};


}
