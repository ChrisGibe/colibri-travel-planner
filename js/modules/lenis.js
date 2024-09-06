import Lenis from "lenis";

export const initLenis = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const navWhy = Array.from(document.querySelectorAll('.nav-link'))
  navWhy.map(nav => {
    const target = nav.getAttribute("href")
    nav.addEventListener('click', () => {
        lenis.scrollTo(target, { offset : 50 })
    })
  })
};
