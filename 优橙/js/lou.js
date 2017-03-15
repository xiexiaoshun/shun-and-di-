var myDiv = angular.module("myapp", ['ui.router']);
myDiv.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		//店铺
		.state("mystore", {
			url: 'mystore',
<<<<<<< HEAD
			views: {
				"main": {
					templateUrl: "mystore.html"
				}
			} 
		});
=======
//			views: {
//				"body": {
//					templateUrl: "myorder.html"
//				}
//			}
		templateUrl: "mystore.html"
		})
		//首页
		.state("index", {
			url: 'index',
			templateUrl: "index.html"
		})
		//优橙协助orange_help
		.state("orange_help", {
			url: 'orange_help',
			templateUrl: "orange_help.html"
		})
		//优橙协助
		.state("myorder", {
			url: 'myorder',
			templateUrl: "myorder.html"
		})
>>>>>>> b09618c1d091e382e70a982f6a568e2da13ee828
}]);
