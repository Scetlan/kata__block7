const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 7,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        320: {
            enabled: true,
            loop: true,
            spaceBetween: 16,
            slidesPerView: 1.20,
        },
        576: {
            enabled: true,
            loop: true,
            spaceBetween: 16,
            slidesPerView: 2,
        },

        768: {
            enabled: false,
            loop: false,
            spaceBetween: 0,
            slidesPerView: "auto",
        },
    },

});
