import gsap from "gsap";

export const loader = () => {
    const cp = document.querySelector('.loader')
    const banner = document.querySelector('.hero-banner')
    
    gsap.to(cp, { opacity: 0, duration: 2 })
    gsap.to(banner, { opacity: 1, duration: 2 })

}