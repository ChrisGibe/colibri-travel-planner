import '../style.css'
import 'swiper/css/bundle'

import { initLenis }from './modules/lenis'
import { initVerticalSwiper } from './modules/verticalSwiper'
import ShuffleSentence from './modules/ShuffleSentence'

document.addEventListener('DOMContentLoaded', () => {
    initLenis()
    initVerticalSwiper()
    new ShuffleSentence('.shuffle-number', 10)
})