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



    var mixer = mixitup('.product__items');
});
// id="MixItUpAFD5FC"