import "../style.css";
import "swiper/css/bundle";

import {initLenis} from "./modules/lenis";
import {initVerticalSwiper} from "./modules/verticalSwiper";
import {initHorizontalSwiper} from "./modules/horizontalSwiper";
import {cursor} from "./modules/cursor";
import {loader} from "./modules/loader";
import {scrollAnimation} from "./modules/scrollAnimation";
import {loadFonts} from "./helpers/loadFonts";

const fontsToLoad = [
  {name: "unbounded", url: "/fonts/unbounded/Unbounded-Regular.woff2", weight: "400", style: "normal"},
  {name: "unbounded", url: "/fonts/unbounded/Unbounded-Bold.woff2", weight: "700", style: "normal"},
  {name: "poppins", url: "/fonts/poppins/Poppins-Regular.woff2", weight: "400", style: "normal"},
  {name: "poppins", url: "/fonts/poppins/Poppins-Bold.woff2", weight: "700", style: "normal"},
];

document.addEventListener("DOMContentLoaded", () => {
  initVerticalSwiper();
  initHorizontalSwiper();
  cursor();
  loadFonts(fontsToLoad, [loader, scrollAnimation, initLenis]);
});
