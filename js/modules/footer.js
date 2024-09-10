import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

export const footer = () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: "top bottom",
            toggleActions: "play none play reverse",
        }
    })
    
    tl
    .from('footer .background', { scaleY: 0, duration: 1.2, ease: "sine.inOut" })
    .from('.follow-wording', { opacity: 0, duration: 0.2, delay: -0.2 })
    .from('.follow-item', { opacity: 0, y: "10px", stagger: 0.2, duration: 0.4, delay: -0.2})
    .from('footer .line', { scale: 0, delay: -0.4,  duration: 1.2})
    .from('footer h2', {
        y: "100%", 
        opacity: 0, 
        duration: 1.2, 
        delay: -0.8,
        ease: "power4.out"
    })
    .from('footer .mailto', {
        opacity: 0, 
        duration: 0.8, 
        ease: "power4.out",
        delay: -0.8,
    })
}