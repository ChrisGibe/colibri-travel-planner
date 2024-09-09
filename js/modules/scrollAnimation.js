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
            }
        })
    });

    // Sub-title section animation
    gsap.utils.toArray('.text-reveal').forEach(text => {
        const lines = text.querySelectorAll('.lines')
        
        gsap.from(lines, {
            y: "140%", 
            opacity: 0, 
            duration: 1.8, 
            ease: "power4.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
            }
        })
    });

    // Square border svg animation from "who i am" section
    gsap.from('.frame-line', {
        drawSVG: "0%",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.frame-profil',
            start: "top 75%",
        } 
    })

    // "Pricing list" svg animation
    gsap.from('.path-animated', {
        drawSVG: "0%",
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
            trigger: '.path-animated',
            start: "top 70%",
        } 
    })
}