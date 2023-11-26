import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.min.css";

const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 7,
        clickable: true,
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
