$(function () {
    $('.partners__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrows/arrow-right.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.portfolio__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="portfolio-prev"><img src="images/arrows/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="portfolio-next"><img src="images/arrows/arrow-right.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.blog__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="portfolio-prev"><img src="images/arrows/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="portfolio-next"><img src="images/arrows/arrow-right.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 2000,
    });




});