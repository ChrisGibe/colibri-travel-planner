import gsap from "gsap";

export const cursor = () => {
  const cursors = Array.from(document.querySelectorAll(".cursor"));
  const cursorTop = document.querySelector('.cursor.top')
  const cursorBottom = document.querySelector('.cursor.bottom')
  const topHover = document.querySelector('.top-hover')
  const botttomHover = document.querySelector('.bottom-hover')

  document.addEventListener("pointermove", (e) => {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY,
    };

    cursors.map((cursor) => {

      gsap.set(cursor, {
        left: cursorPosition.left,
        top: cursorPosition.top,
      });

      gsap.to(cursor, {
        left: cursorPosition.left,
        top: cursorPosition.top,
        duration: 0.2,
      });
    });
  });
  
  topHover.addEventListener('mouseenter', () => {
    gsap.to(cursorBottom, { scale: 1})
  })

  topHover.addEventListener('mouseleave', () => {    
    gsap.to(cursorBottom, { scale: 0})
  })

  botttomHover.addEventListener('mouseenter', () => {
    gsap.to(cursorTop, { scale: 1})
  })

  botttomHover.addEventListener('mouseleave', () => {    
    gsap.to(cursorTop, { scale: 0})
  })
};
