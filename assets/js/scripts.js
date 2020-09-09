$(document).ready(function () {
    $('#slider').owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        margin: 10,
        lazyload: true,
        animateOut: 'fadeOut',
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
});
$(document).ready(function () {
    $('#slider2').owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        margin: 10,
        lazyload: true,
        animateOut: 'fadeOut',
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });
});