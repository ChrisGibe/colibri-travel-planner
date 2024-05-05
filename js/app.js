import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'

document.addEventListener('DOMContentLoaded', () => {
    initLenis()
    initVerticalSwiper()
})