import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'
import { initHorizontalSwiper } from './modules/horizontalSwiper'
import ShuffleSentence from './modules/ShuffleSentence'

document.addEventListener('DOMContentLoaded', () => {
    initLenis()
    initVerticalSwiper()
    initHorizontalSwiper()
    new ShuffleSentence('.shuffle-number', 10)
})