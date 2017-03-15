var myDiv = angular.module("myapp", ['ui.router']);
myDiv.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		//店铺
		.state("dian", {
			url: 'dian',
			views: {
				"main": {
					templateUrl: "myorder.html"
				}
			}
		});
		//
}]);
