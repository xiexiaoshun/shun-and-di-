var myapp = angular.module("myapp", ['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
		//首次登陆
		.state("login", {
			url: 'login',
			templateUrl: "login.html"
		})
		//再次登陆
		.state("login1", {
			url: 'login1',
			templateUrl: "login1.html"
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
		//首页
		.state("index", {
			url: 'index',
//			views: {
//				"body": {
					templateUrl: "index.html"
//				}
//			}
		})
		//首页-签约说明
		.state("signed", {
			url: 'signed',
			templateUrl: "signed.html"
		})
		//首页-店铺名称
		.state("dataSave_shopname", {
			url: 'dataSave_shopname',
			templateUrl: "dataSave_shopname.html"
		})
		
		//更多
		.state("more", {
			url: 'more',
			templateUrl: "more.html"
		})
		//更多-意见反馈
		.state("feedback", {
			url: 'feedback',
			templateUrl: "feedback.html"
		})
		//更多-反馈成功
		.state("feedback_ok", {
			url: 'feedback_ok',
			templateUrl: "feedback_ok.html"
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
		
		//优橙协助orange_help
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
		//优橙协助-修改收货地址
		.state("save_address", {
			url: 'save_address',
			templateUrl: "save_address.html"
		})
		
		//订单状态myorder
		//商品订单
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
		//商品订单-订单详情
		.state("order1", {
			url: 'order1',
			templateUrl: "order1.html"
		})
		//优橙订单
		.state("myorange", {
			url: 'myorange',
			templateUrl: "myorange.html"
		})
		//优橙订单-订单详情
		.state("orange2", {
			url: 'orange2',
			templateUrl: "orange2.html"
		})
		
		//我的店铺mystore
		//我的店铺
		.state("mystore", {
			url: 'mystore',
			templateUrl: "mystore.html"
		})
		//店铺-店铺装修1
		.state("fitment1", {
			url: 'fitment1',
			templateUrl: "fitment1.html"
		})
		//店铺-店铺装修2
		.state("fitment2", {
			url: 'fitment2',
			templateUrl: "fitment2.html"
		})
		//店铺-预览店铺
		.state("preview", {
			url: 'preview',
			templateUrl: "preview.html"
		})
		//店铺-商品详情
		.state("shop_list", {
			url: 'shop_list',
			templateUrl: "shop_list.html"
		})
		//店铺-我的作品库
		.state("works", {
			url: 'works',
			templateUrl: "works.html"
		})
		//首页-店铺与个人信息
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
}]);
