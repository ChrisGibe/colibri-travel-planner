import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'
import { Curtains } from 'curtainsjs'


document.addEventListener('DOMContentLoaded', () => {
    initLenis()
    initVerticalSwiper()
})