import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'
import { initHorizontalSwiper } from './modules/horizontalSwiper'

document.addEventListener('DOMContentLoaded', () => {
    initLenis()
    initVerticalSwiper()
    initHorizontalSwiper()
})