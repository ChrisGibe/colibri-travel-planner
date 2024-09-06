import gsap from "gsap";

export const loader = () => {
    const cp = document.querySelector('.loader')
    const banner = document.querySelector('.hero-banner')
    
    const tl = gsap.timeline()

     tl
    .to('.hidden-text', { opacity: 1, duration: 1.2, ease: "power4.in"})
    .to('.hidden-text', { opacity: 0, duration: 1, ease: "power4.in"})
    .to(cp, { scaleY: 0, translateY: "-100%", duration: 1.8, ease: "power4.inOut"})
    .to(banner, { translateY: 0, duration: 1.7, ease: "power4.inOut", delay: -1.8})
}