import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'
import { initHorizontalSwiper } from './modules/horizontalSwiper'
import { cursor } from './modules/cursor'
import { loader } from './modules/loader'

document.addEventListener('DOMContentLoaded', () => {
    initVerticalSwiper()
    initHorizontalSwiper();
    cursor()
    loader()
    initLenis()
})