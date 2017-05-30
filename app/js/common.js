$(document).ready(function () {
    $('.h-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
    });
    $('.features__slider').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: true,
    });
     $('.team__slider').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: true,
    });
    // for last word in h2
    $('.h-slider__h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

    $('.main-iso').isotope({
        itemSelector: '.iso-item',
        layoutMode: 'fitRows'
    });
    // Isotope click function
    $('.iso-nav ul li').click(function(){
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.main-iso').isotope({
            filter: selector
        });
        return false;
    });

});