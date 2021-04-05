$(function() {
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000,
    });

    $('.product__item').hover(function(event) {
        $(this).find('.product__images').show();
    }, function() {
        $(this).find('.product__images').hide();
    });



    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
    // var mixer = mixitup('.product__items');
});
// id="MixItUpAFD5FC"