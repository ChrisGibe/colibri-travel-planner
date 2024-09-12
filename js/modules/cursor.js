import gsap from "gsap";

export const cursor = () => {
  document.addEventListener("pointermove", (e) => {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY,
    };
  });
};
