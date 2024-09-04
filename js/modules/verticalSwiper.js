import Swiper from "swiper";
import { Pagination, A11y } from 'swiper/modules';


export const initVerticalSwiper = () => {
    const topHover = document.querySelector('.top-hover')
    const botttomHover = document.querySelector('.bottom-hover')

    const swiper = new Swiper(".mySwiperVertical", {
        modules: [Pagination, A11y],
        direction: "vertical",
        slidesPerView: 1,
        draggable: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    topHover.addEventListener('click', () => {
      swiper.slidePrev()
    })

    botttomHover.addEventListener('click', () => {
      swiper.slideNext()
    })
}