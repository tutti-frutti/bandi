$(document).ready(function () {
    $('.h-slider').owlCarousel({
        items: 1,
        loop: true,
        nav:false,
        dots: true,
    });
    $('.features__slider').owlCarousel({
        items: 3,
        loop: true,
        nav:false,
        dots: true,
    });
    // for last word in h2
    $('.h-slider__h2').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    })
});