import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'
import { initHorizontalSwiper } from './modules/horizontalSwiper'
import { cursor } from './modules/cursor'
import ShuffleSentence from './modules/ShuffleSentence'
import { loader } from './modules/loader'

document.addEventListener('DOMContentLoaded', () => {
    loader()
    initVerticalSwiper()
    initHorizontalSwiper();
    new ShuffleSentence('.shuffle-number', 10)
    cursor()
    initLenis()
})