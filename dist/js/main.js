$(function () {
    $('.partners__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrows/arrow-right.svg" alt=""></button>',
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.portfolio__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="portfolio-prev"><img src="images/arrows/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="portfolio-next"><img src="images/arrows/arrow-right.svg" alt=""></button>',
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    $('.blog__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="portfolio-prev"><img src="images/arrows/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="portfolio-next"><img src="images/arrows/arrow-right.svg" alt=""></button>',
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__btn-line').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
        $('body').toggleClass('lock');
    });
    $('.menu__link').on('click', function () {
        $('.menu__btn-line').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
        $('body').removeClass('lock');
    });


});