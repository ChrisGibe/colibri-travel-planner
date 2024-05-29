import Swiper from "swiper";
import { Pagination, A11y } from 'swiper/modules';


export const initHorizontalSwiper = () => {
    new Swiper(".mySwiperHorizontal", {
        modules: [Pagination, A11y],
        slidesPerView: 1,
    });
}