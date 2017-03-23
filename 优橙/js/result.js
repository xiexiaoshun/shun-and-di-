		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 4,
	        paginationClickable: true,
	        freeMode: true
	  	});
		$(function(){
			// 导航遮罩
			$('.pull img').click(function(){
				$('.shade_big').css("display","block");
				$('.shade_small').css("display","block");
			});
			$('.shade_small .order_option img').click(function(){
				$('.shade_big').css("display","none");
				$('.shade_small').css("display","none");
			});
			// 切换内容
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
			
		});