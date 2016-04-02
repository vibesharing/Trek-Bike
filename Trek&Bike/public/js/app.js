function config($routeProvider) {
	$routeProvider
		.when('/homepage', {
			templateUrl: 'views/homepage.html'
		})
		// .when('/trek', {
		// 	templateUrl: 'views/trek.html',
		// 	controller: trekController
		// })
		// .when('/weather', {
		// 	templateUrl: 'views/trek.html',
		// 	controller: weatherController
		// })
		// .when('/user', {
		// 	templateUrl: 'views/user.html',
		// 	controller: userController
		// })
		.otherwise({
			redirectTo: '/homepage'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
		// .controller('weatherController', weatherController)
		// .controller('trekController', trekController)
		// .controller('userController', userController)
    // .service('weatherService', weatherService)
		// .service('trekService', trekService)
		// .service('userService', userService)


    /*.factory('', )*/
    .run(run);
