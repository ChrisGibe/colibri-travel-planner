window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

import "../style.css";
import "swiper/css/bundle";

import {initLenis} from "./modules/lenis";
import {initVerticalSwiper} from "./modules/verticalSwiper";
import {initHorizontalSwiper} from "./modules/horizontalSwiper";
import {cursor} from "./modules/cursor";
import {loader} from "./modules/loader";
import {scrollAnimation} from "./modules/scrollAnimation";
import {loadFonts} from "./helpers/loadFonts";
import {imgEffect} from "./modules/imgEffect";
import {footer} from "./modules/footer";

const fontsToLoad = [
  {name: "unbounded", url: "/fonts/unbounded/Unbounded-Regular.woff2", weight: "400", style: "normal"},
  {name: "unbounded", url: "/fonts/unbounded/Unbounded-Bold.woff2", weight: "700", style: "normal"},
  {name: "poppins", url: "/fonts/poppins/Poppins-Regular.woff2", weight: "400", style: "normal"},
  {name: "poppins", url: "/fonts/poppins/Poppins-Bold.woff2", weight: "700", style: "normal"},
];

document.addEventListener("DOMContentLoaded", () => {
  loadFonts(fontsToLoad, [loader, scrollAnimation, initLenis]);
  initVerticalSwiper();
  initHorizontalSwiper();
  cursor();
  imgEffect();
  footer();
});
