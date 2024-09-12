import Lenis from "lenis";

export const initLenis = () => {  
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    lenis.scrollTo(0, 0)
  
    const navLink = Array.from(document.querySelectorAll('.nav-link'))
    const navLinkMobile = document.querySelector('.nav-link-mobile')

    navLink.map(nav => {
      const target = nav.getAttribute("href")
      nav.addEventListener('click', () => {
          lenis.scrollTo(target, { offset : 50 })
      })
    })

    const targetMobile = navLinkMobile.getAttribute("href")
    navLinkMobile.addEventListener('click', () => {
        lenis.scrollTo(targetMobile, { offset : 50 })
    })
};
