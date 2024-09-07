import "../style.css";
import "swiper/css/bundle";

import {initLenis} from "./modules/lenis";
import {initVerticalSwiper} from "./modules/verticalSwiper";
import {initHorizontalSwiper} from "./modules/horizontalSwiper";
import {cursor} from "./modules/cursor";
import {loader} from "./modules/loader";
import {loadFonts} from "./helpers/loadFonts";

// Liste des polices à charger avec leurs poids et styles
const fontsToLoad = [
  {name: "unbounded", url: "./public/fonts/unbounded/Unbounded-Regular.woff2", weight: "400", style: "normal"},
  {name: "unbounded", url: "./public/fonts/unbounded/Unbounded-Bold.woff2", weight: "700", style: "normal"},
  {name: "poppins", url: "./public/fonts/poppins/Poppins-Regular.woff2", weight: "400", style: "normal"},
  {name: "poppins", url: "./public/fonts/poppins/Poppins-Bold.woff2", weight: "700", style: "normal"},
];

document.addEventListener("DOMContentLoaded", () => {
  initVerticalSwiper();
  initHorizontalSwiper();
  cursor();
  loadFonts(fontsToLoad, [loader, initLenis]);
});
