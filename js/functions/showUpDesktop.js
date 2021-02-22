

export default function showUpDesktop (hidden, show, element) {
    const d = document,
    w = window;
    const $element = d.querySelector(element)

    const windowHeight = w.innerHeight/1.5;
    
    w.addEventListener("scroll", () => {
        const elementTop = $element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            $element.classList.remove(hidden)
            $element.classList.add(show) 
        }/*  else {
            $element.classList.add(hidden)
            $element.classList.remove(show) 
        } */
    })
    


}