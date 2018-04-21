$(function() {

	// Custom JS

	$(".main-nav__list").on('mouseenter', 'li', function(event) {
		$(this).addClass('is-active').siblings().not(':first-child').removeClass('is-active');	
	});

	$(".js-slider").slick({
		arrows:false,
		dots:true,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="slider-dot"></a>';
        },
		appendDots:'.slider-dots-wrapper',
	});

});
