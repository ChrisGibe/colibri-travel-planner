import Swiper from "swiper";
import { Pagination, A11y } from 'swiper/modules';


export const initVerticalSwiper = () => {
    new Swiper(".mySwiper", {
        modules: [Pagination, A11y],
        direction: "vertical",
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}