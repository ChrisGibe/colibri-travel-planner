import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"

class ShuffleSentence {
    /**
     * Shuffle animation for a sentence
     * @param {HTMLElement} container the container of the sentence
     * @param {Number} iterations number or iterations word your word or sentence
     */
    constructor(container, iterations) {
        this.containers = document.querySelectorAll(container)
        this.MAX_ITERATIONS = iterations;
        this.animated();

        gsap.registerPlugin(ScrollTrigger);
    }


    animation(container) {
        const text = container.innerHTML
        const textSplitted = text.split(' ')
        
        let i = 0;
        let timer = setInterval(() => {

            textSplitted.forEach((element, index) => {
                if(element.length > 0) {
                    const splittedWord = this.shuffleArray(element.split(''))
                    textSplitted[index] = splittedWord
                }
            });

            container.innerText = textSplitted.join(' ').toString()
            
            i === this.MAX_ITERATIONS ? this.endTimer(timer, container, text) : null;

            i++
        }, 120)   
    }

    /**
     * Trigger the animation
     */
    animatedOnHover() {
        this.containers.forEach(container => {

            const text = container.innerHTML
            const textSplitted = text.split(' ')

            container.addEventListener('mouseover', () => {
                let i = 0;
                let timer = setInterval(() => {
    
                    textSplitted.forEach((element, index) => {
                        if(element.length > 0) {
                            const splittedWord = this.shuffleArray(element.split(''))
                            textSplitted[index] = splittedWord
                        }
                    });
        
                    container.innerText = textSplitted.join(' ').toString()
                    
                    i === this.MAX_ITERATIONS ? this.endTimer(timer, container, text) : null;
        
                    i++
                }, 70)
            })
        })
    }

    animated() {
        this.containers.forEach(container => {
            this.animation(container)            
        })
    }

    animatedOnScroll() {
        this.containers.forEach(container => {
            this.animation(container)            
        })
    }

    /**
     * Shuffle the Array
     * @param {Array} splittedWord An array splitted
     * @returns {Array} A new splitted array
     */
    shuffleArray(splittedWord) {
        for (let i = splittedWord.length - 1; i > 0; i--) {

            const randomNumber = Math.floor(Math.random() * (i + 1));
            const temporaryWord = splittedWord[i];
    
            splittedWord[i] = splittedWord[randomNumber];
            splittedWord[randomNumber] = temporaryWord;
          }
        
        return splittedWord.join('')
    }

    /**
     * Stop the setInterval and display the word
     * @param {Function} callBack The setInterval
     */
    endTimer(callBack, container, text) {
        clearInterval(callBack)
        container.innerText = text
    }
}

export default ShuffleSentence
