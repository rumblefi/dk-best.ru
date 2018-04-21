$(function() {

	// Custom JS

    //выпадающие дропы в меню
    jQuery('ul.sf-menu').superfish({
        delay:       0,                            // one second delay on mouseout
        animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
        speed:       'fast',                          // faster animation speed
        autoArrows:  false                            // disable generation of arrow mark-up
    });

    //для первого
    $(".main-nav__list > li:not(':first-child')").on("mouseenter", function () {
       $(this).addClass('is-active');
    }).on("mouseleave", function () {
        $(this).removeClass('is-active');
    });

    //слайдер на главной
    $(".js-slider").slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots .row',
        customPaging : function(slider, i) {
            return '<a class="slider-dots__dot"></a>';
        },
        fade:true,
        pauseOnFocus:false,
        pauseOnHover:false,
    });


    //анимация на скролл
    new WOW().init();

    // паралакс
    $(window).stellar();


});
