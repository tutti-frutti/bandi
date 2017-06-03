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
    $('.iso-nav ul li').click(function () {
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.main-iso').isotope({
            filter: selector
        });
        return false;
    });



    new WOW().init();

    $(function () {
        var blockTop = $('.numbs').offset().top;
        var CountUpFlag = 0;
        var $window = $(window);
        $window.on('load scroll', function () {
            var top = $window.scrollTop();
            var height = $window.height();
            if (top + height >= blockTop && CountUpFlag == 0) {
                CountUp();
                CountUpFlag = 1;
            }
        });

        function CountUp() {
            $('.numbs').addClass('show');
            if ($('.numbs').hasClass('show')) {
                $('.counter').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        delay: 5000,
                        duration: 10000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
            }
        }
    });

});