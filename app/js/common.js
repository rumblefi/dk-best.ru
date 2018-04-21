$(function() {

	// Custom JS

    //выпадающие дропы в меню
    jQuery('ul.sf-menu').superfish({
        delay:       0,                            // one second delay on mouseout
        animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
        speed:       'fast',                          // faster animation speed
        autoArrows:  false                            // disable generation of arrow mark-up
    });

    $(".main-nav__list > li:not(':first-child')").on("mouseenter", function () {
       $(this).addClass('is-active');
    }).on("mouseleave", function () {
        $(this).removeClass('is-active');
    });


});
