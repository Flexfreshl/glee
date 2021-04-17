$(function() {

    $('.product-tabs__top-link').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
        $(this).addClass('product-tabs__top-link--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: "true",
        starSvg: '<?xml version="1.0" encoding="UTF-8"?><svg xmlns = "http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink"width = "16pt"height = "15pt"viewBox = "0 0 16 15"version = "1.1" ><g id = "surface1" ><path style = " stroke:none;fill-rule:nonzero;fill-opacity:1;"d = "M 7.203125 0.523438 L 5.390625 4.398438 L 1.332031 5.023438 C 0.601562 5.136719 0.3125 6.082031 0.839844 6.625 L 3.773438 9.640625 L 3.082031 13.90625 C 2.957031 14.675781 3.726562 15.25 4.371094 14.890625 L 8 12.878906 L 11.628906 14.890625 C 12.273438 15.25 13.042969 14.675781 12.917969 13.90625 L 12.226562 9.640625 L 15.160156 6.625 C 15.6875 6.082031 15.398438 5.136719 14.667969 5.023438 L 10.609375 4.398438 L 8.796875 0.523438 C 8.472656 -0.171875 7.53125 -0.179688 7.203125 0.523438 Z M 7.203125 0.523438"/></g></svg>',
    });

    $(".star-box").rateYo({
        starWidth: "24px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: "true",
        starSvg: '<?xml version="1.0" encoding="UTF-8"?><svg xmlns = "http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink"width = "16pt"height = "15pt"viewBox = "0 0 16 15"version = "1.1" ><g id = "surface1" ><path style = " stroke:none;fill-rule:nonzero;fill-opacity:1;"d = "M 7.203125 0.523438 L 5.390625 4.398438 L 1.332031 5.023438 C 0.601562 5.136719 0.3125 6.082031 0.839844 6.625 L 3.773438 9.640625 L 3.082031 13.90625 C 2.957031 14.675781 3.726562 15.25 4.371094 14.890625 L 8 12.878906 L 11.628906 14.890625 C 12.273438 15.25 13.042969 14.675781 12.917969 13.90625 L 12.226562 9.640625 L 15.160156 6.625 C 15.6875 6.082031 15.398438 5.136719 14.667969 5.023438 L 10.609375 4.398438 L 8.796875 0.523438 C 8.472656 -0.171875 7.53125 -0.179688 7.203125 0.523438 Z M 7.203125 0.523438"/></g></svg>',
    });


    $('.product-one__input').styler({});


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

    $('.product-slide__min').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__min',
        draggable: false,
        arrows: false,
        fade: true
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000,
    });
    $('.product-one__slider-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
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