var myDiv = angular.module("myapp", ['ui.router']);
myDiv.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		//店铺
		.state("mystore", {
			url: 'mystore',
			views: {
				"main": {
					templateUrl: "mystore.html"
				}
			} 
		});
}]);
