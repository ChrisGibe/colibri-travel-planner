import Swiper from "swiper";
import { Pagination, Navigation, A11y } from 'swiper/modules';


export const initVerticalSwiper = () => {
    new Swiper(".mySwiperVertical", {
        modules: [Pagination, A11y, Navigation],
        direction: "vertical",
        slidesPerView: 1,
        draggable: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
}