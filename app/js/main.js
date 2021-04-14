$(function() {

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: "true"
    });
    $(".star-box").rateYo({
        starWidth: "24px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: "true"
    });



    $(".filter-price__input").ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });



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