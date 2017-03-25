		
		$(function(){
			// 订单状态-导航遮罩
			$('.pull img').click(function(){
				$('.shade_big').css("display","block");
				$('.shade_small').css("display","block");
			});
			$('.shade_small .order_option img').click(function(){
				$('.shade_big').css("display","none");
				$('.shade_small').css("display","none");
			});
			// 订单状态-切换内容
			$('nav .swiper-wrapper>div').click(function(){
				$index = $(this).index();
				$('nav .swiper-wrapper>div').css("color","black").eq($index).css("color","#ff7f1c");
				$('nav .swiper-wrapper>div>span').css("display","none").eq($index).css("display","block");
				$('nav .shade_small li').css("color","black").eq($index).css("color","#ff7f1c");
				$('nav .shade_small li>span').css("display","none").eq($index).css("display","block");
				$('section>div').css("display","none").eq($index).css("display","block");
			});
			$('nav .shade_small .order_type li').click(function(){
				$index = $(this).index();
				$('nav .shade_small').hide();
				$('nav .shade_big').hide();
				$('nav .shade_small li').css("color","black").eq($index).css("color","#ff7f1c");
				$('nav .shade_small li>span').css("display","none").eq($index).css("display","block");
				$('nav .swiper-wrapper>div').css("color","black").eq($index).css("color","#ff7f1c");
				$('nav .swiper-wrapper>div>span').css("display","none").eq($index).css("display","block");
				$('section>div').css("display","none").eq($index).css("display","block");
			});
			$('header span').click(function(){
				$first = $(this).index();
				$('header span').removeClass('first').eq($first).addClass('first');
			});
			
			// 优橙协助-收货人信息-遮罩
			$('#wrap .header_left').click(function(){
				$('#wrap .zhe_1').css("display","block");
				$('#wrap .con').css("display","block");
			});
			$('#wrap .con .cs .f').click(function(){
				$('#wrap .zhe_1').css("display","none");
				$('#wrap .con').css("display","none");
			});
			//首页-评论管理
			$('.boss_reviews .reply>span').click(function(){
				$('.boss_reviews .shade_big').css("display","block");
				$('.boss_reviews .shade_small').css("display","block");
			});
			$('.boss_reviews .shade_big').click(function(){
				$('.boss_reviews .shade_big').hide();
				$('.boss_reviews .shade_small').hide();
			});
			$('.boss_reviews .shade_small span').click(function(){
				$('.boss_reviews .shade_big').hide();
				$('.boss_reviews .shade_small').hide();
			});
			//首页-财务管理-查询更多
			$("#wrap_query .n_1").click(function(){
				var index=$(this).index();
				$(".n_1").removeClass("col").eq(index).addClass("col");
				var $img = $(".img1").attr("src","img/2_03.jpg");
				var $img1 = $(".img2").attr("src","img/2_03.jpg");
				if(index==1){
					var $img = $(".img1").attr("src","img/3_03.jpg");
					var $img1 = $(".img2").attr("src","img/2_03.jpg");
				}
				if(index==2){
					var $img = $(".img1").attr("src","img/2_03.jpg");
					var $img1 = $(".img2").attr("src","img/3_03.jpg");
				}
				$(".div2>.ul1").css("display","none");
				$(".div3>.ul1").css("display","none");
			})
			$("#wrap_query .span1").click(function(event){
				$(".div2>.ul1").slideToggle("fast");
				var $img = $(".img1").attr("src","img/3_03.jpg");
				var $img1 = $(".img2").attr("src","img/2_03.jpg");
				$(".div3>.ul1").css("display","none");
				$(".n_1").removeClass("col").eq(1).addClass("col");
				event.stopPropagation(); 
			})
			$("#wrap_query .span2").click(function(event){
				$(".div2>.ul1").css("display","none");
				$(".div3>.ul1").slideToggle("fast");
				var $img = $(".img1").attr("src","img/2_03.jpg");
				var $img1 = $(".img2").attr("src","img/3_03.jpg");
				$(".n_1").removeClass("col").eq(2).addClass("col");
				event.stopPropagation(); 
			})
			$("#wrap_query .div2>.ul1>li").click(function(event){
				$(".div2>.ul1").css("display","block");
				var index=$(this).index();
				event.stopPropagation(); 
				$(".div2>.ul1>li").removeClass("li2").eq(index).addClass("li2");
			})
			$("#wrap_query .div3>.ul1>li").click(function(event){
				$(".div3>.ul1").css("display","block");
				var index=$(this).index();
				event.stopPropagation(); 
				$(".div3>.ul1>li").removeClass("li2").eq(index).addClass("li2");
				
			})
			//我的店铺-店铺与个人信息-修改头像
			$("#wrap_info .img2").click(function(){
				$(".main7").css("display","block");
				$(".main8").css("display","block");
			})
			$("#wrap_info .mainb").click(function(){
				$(".main7").css("display","none");
				$(".main8").css("display","none");
			})
			//我的店铺-店铺装修-上下架遮罩
			$('.boss_fitment1 footer ul li:first').click(function(){
				$('.shade_big').css("display","block");
				$('.shade_small').css("display","block");
			});
			$('.boss_fitment1 section .shade_small span').click(function(){
				$('.shade_big').css("display","none");
				$('.shade_small').css("display","none");
			});
		});