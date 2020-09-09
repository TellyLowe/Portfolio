$(document).ready(function () {
    $('#slider').owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        lazyload: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
                margin: 10
            },
            1000: {
                items: 4,
                margin: 10
            }
        }
    });
});