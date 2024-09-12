import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

export const footer = () => {
    gsap.registerPlugin(ScrollTrigger);

    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: window.isMobile ? "top 90%" : "top 70%",
            toggleActions: "play none play reverse",
        }
    })
    
    if(window.isMobile) {
        tl
        .to('.follow-wording', { opacity: 1, duration: 0.2 })
        .to('.follow-item', { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 })
        .to('footer h2', { y: 0, opacity: 1, duration: 1.2, delay: -0.8, ease: "power4.out" })
        .to('footer .mailto', { opacity: 1, duration: 0.8, ease: "power4.out", delay: -0.8 })
    }else {
        tl
        .to('.follow-wording', { opacity: 1, duration: 0.2 })
        .to('.follow-item', { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 })
        .to('footer .line', { scale: 1, delay: -0.4,  duration: 1.2})
        .to('footer h2', { y: 0, opacity: 1, duration: 1.2, delay: -0.8, ease: "power4.out" })
        .to('footer .mailto', { opacity: 1, duration: 0.8, ease: "power4.out", delay: -0.8 })
    }
}