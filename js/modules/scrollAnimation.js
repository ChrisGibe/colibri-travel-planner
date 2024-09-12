import gsap from "gsap"
import {SplitText} from "../libs/SplitText.js";
import {DrawSVGPlugin} from "../libs/DrawSVGPlugin.js";
import {ScrollTrigger} from "gsap/all"

export const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
    
    new SplitText(".text-reveal", {type: "lines", linesClass: "lines", reduceWhiteSpace: true});

    // Title section animation
    gsap.utils.toArray('.title-reveal').forEach(title => {
        gsap.from(title, {
            y: "100%", 
            opacity: 0, 
            duration: 1.2, 
            ease: "power4.out",
            scrollTrigger: {
                trigger: title,
                start: "top 90%",
                toggleActions: "play none play reverse",
            }
        })
    });

    // Sub-title section animation
    gsap.utils.toArray('.text-reveal').forEach(text => {
        const lines = text.querySelectorAll('.lines')
        
        gsap.from(lines, {
            opacity: 0, 
            duration: 1.8, 
            ease: "power4.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none play reverse",
            }
        })
    });

    // Square border svg animation from "who i am" section desktop
    gsap.from('.frame-line', {
        drawSVG: "0%",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.frame-profil',
            start: "top 60%",
            toggleActions: "play none play reverse",
        } 
    })

    // Square border svg animation from "who i am" section mobile
    gsap.from('.frame-line-mobile', {
        drawSVG: "0%",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.frame-profil-mobile',
            start: "top 70%",
            toggleActions: "play none play reverse",
        } 
    })

    // "Pricing list" svg animation
    gsap.utils.toArray('.path-animated').forEach(path => {
        gsap.from(path, {
            drawSVG: "0%",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: path,
                start: "top 60%",
                toggleActions: "play none play reverse",
            } 
        })
    })

    // "Pricing list" svg animation
    gsap.utils.toArray('.img-appear').forEach(img => {
        gsap.from(img, {
            y: "10%", 
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none play reverse",
            } 
        })
    })
    
    // "Parallax" effect
    if(!window.isMobile) {
        let speedElements = gsap.utils.toArray("[data-speed]");
        speedElements.forEach((el, i) => {
            let speed = parseFloat(el.getAttribute("data-speed"))
            gsap.fromTo(el, 
                {
                    y: 0
                }, 
                {
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        onRefresh: self => {
                            let start = Math.max(0, self.start),
                                distance = self.end - start,
                                end = start + (distance / speed);
    
                            self.setPositions(start, end);
                            self.animation.vars.y = (end - start) * (1 - speed);
                            self.animation.invalidate().progress(1).progress(self.progress);
                        }
                    }
                }   
            )
        })
    }

    // Circle svg aninmation
    gsap.utils.toArray('.circle-animated').forEach(circle => {
        const tl = gsap.timeline({ repeat: -1 })

        const paths = Array.from(circle.querySelectorAll('path'))
        const pathsReversed = paths.reverse()

        tl
        .to(paths, {opacity: 0, stagger: 0.1, duration: 0.1 })
        .to(pathsReversed, {opacity: 1, stagger: 0.1, duration: 0.8 })
    })

    ScrollTrigger.refresh();
}