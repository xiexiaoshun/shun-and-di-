var myDiv = angular.module("myapp", ['ui.router']);
myDiv.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		//店铺
		.state("mystore", {
			url: 'mystore',
//			views: {
//				"body": {
					templateUrl: "mystore.html"
//				}
//			}
//		templateUrl: "mystore.html"
		})
		//首页
		.state("index", {
			url: 'index',
//			views: {
//				"body": {
					templateUrl: "index.html"
//				}
//			}
		})
		//更多
		.state("more", {
			url: 'more',
			templateUrl: "more.html"
		})
		//登陆
		.state("login", {
			url: 'login',
			templateUrl: "login.html"
		})
		//注册
		.state("register", {
			url: 'register',
			templateUrl: "register.html"
		})
		//重置密码
		.state("pwd_reset", {
			url: 'pwd_reset',
			templateUrl: "pwd_reset.html"
		})
		//优橙协助orange_help
		.state("orange_help", {
			url: 'orange_help',
			templateUrl: "orange_help.html"
		})
		//我的订单
		.state("myorder", {
			url: 'myorder',
			templateUrl: "myorder.html"
		})
		//优橙协助-修改收货地址
		.state("save_address", {
			url: 'save_address',
			templateUrl: "save_address.html"
		})
		//首页-店铺信息
		.state("info", {
			url: 'info',
			templateUrl: "info.html"
		})
		//店铺信息-修改性别
		.state("dataSave_sex", {
			url: 'dataSave_sex',
			templateUrl: "dataSave_sex.html"
		})
		//店铺信息-修改星座
		.state("dataSave_star", {
			url: 'dataSave_star',
			templateUrl: "dataSave_star.html"
		})
		//店铺信息-修改手机号
		.state("dataSave_tel", {
			url: 'dataSave_tel',
			templateUrl: "dataSave_tel.html"
		})
		//店铺信息-新手机号
		.state("dataSave_newtel", {
			url: 'dataSave_newtel',
			templateUrl: "dataSave_newtel.html"
		})
		//店铺信息-修改收货地址
		.state("dataSave_address", {
			url: 'dataSave_address',
			templateUrl: "dataSave_address.html"
		})
		//首页-消息通知
		.state("notice", {
			url: 'notice',
			templateUrl: "notice.html"
		})
		//首页-粉丝
		.state("fans", {
			url: 'fans',
			templateUrl: "fans.html"
		})
		//首页-上架商品
		.state("fitment1", {
			url: 'fitment1',
			templateUrl: "fitment1.html"
		})
		//首页-评论管理
		.state("reviews", {
			url: 'reviews',
			templateUrl: "reviews.html"
		})
		//首页-财务管理
		.state("money", {
			url: 'money',
			templateUrl: "money.html"
		})
		//财务管理-查询更多
		.state("query", {
			url: 'query',
			templateUrl: "query.html"
		})
		//财务管理-提现-绑定支付宝
		.state("alipay", {
			url: 'alipay',
			templateUrl: "alipay.html"
		})
		//财务管理-提现-金额
		.state("apply", {
			url: 'apply',
			templateUrl: "apply.html"
		})
		//财务管理-充值
		.state("recharge", {
			url: 'recharge',
			templateUrl: "recharge.html"
		})
		//财务管理-充值提交
		.state("recharge2", {
			url: 'recharge2',
			templateUrl: "recharge2.html"
		})
		//财务管理-业务明细
		.state("business", {
			url: 'business',
			templateUrl: "business.html"
		})
}]);
