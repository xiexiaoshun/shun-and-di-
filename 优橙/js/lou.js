var myapp = angular.module("myapp", ['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
		//首页  
		.state("index", {
			url: 'index',
			views:{
				"box":{
					templateUrl: "index.html"	
				}
			}
		})
		//优橙协助
		.state("orange_help", {
			url: 'orange_help',
			views:{
				"box":{
					templateUrl: "orange_help.html"	
				}
			}
		})
		//订单状态
		.state("myorder", {
			url: 'myorder',
			views:{
				"box":{
					templateUrl: "myorder.html"	
				}
			}
		})
		//我的店铺
		.state("mystore", {
			url: 'mystore',
			views:{
				"box":{
					templateUrl: "mystore.html"	
				}
			}
		})
}]);
