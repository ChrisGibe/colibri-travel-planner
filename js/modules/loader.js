import gsap from "gsap";
import {SplitText} from "../libs/SplitText.js";
import ShuffleSentence from './ShuffleSentence'

gsap.registerPlugin(SplitText);

export const loader = () => {
  new SplitText(".text-animated", {type: "lines", linesClass: "lines", reduceWhiteSpace: true});
  new SplitText(".text-animated-delay", {type: "lines", linesClass: "lines", reduceWhiteSpace: true});

  const tl = gsap.timeline();

  tl.to(".hidden-text", {opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power4.in"})
    .to(".hidden-text", {opacity: 0, filter: "blur(10px)", duration: 1.8, ease: "power4.in"})
    .to(".loader", {scaleY: 0, translateY: "-100%", duration: 2, ease: "power2.inOut", onComplete: () => {
        new ShuffleSentence('.shuffle-number-loader', 10)
        gsap.to(".number-line", {scale: 1, duration: 2.8, ease: "power4.out"})
        gsap.to(".shuffle-para", {opacity: 1, duration: 2.8, ease: "power4.out"})
    }})
    .to(".hero-banner", {translateY: 0, duration: 1.7, ease: "power4.inOut", delay: -2})
    .from(".text-animated .lines", {y: "100%", opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out", delay: -1.2})
    .from(".text-animated-delay .lines", {y: "100%", opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out", delay: -0.9})
    .to("nav", {translateY: 0, duration: 1, ease: "power4.out", delay: -1.2})
};
