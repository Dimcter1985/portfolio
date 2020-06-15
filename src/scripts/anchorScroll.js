export default function anchorScroll () {
    const links = document.querySelectorAll('a[href^="#"]');
    let sectionCoord;
    let windowY;
    let start;

    for(const link of links ) {
        link.addEventListener('click', e => {
            e.preventDefault();
            const attr = link.getAttribute('href');
            const section = document.querySelector(attr);

            sectionCoord = section.getBoundingClientRect().top;
            windowY = window.pageYOffset;
            start = null;

            requestAnimationFrame(countStep);
        });
    }

    function countStep(time){
        if (start === null) start = time;
        const progress = time - start;
        const coordY =
            sectionCoord < 0  
                ? Math.max((windowY - progress) / 1, windowY + sectionCoord) 
                : Math.min((windowY + progress) / 0.4, windowY + sectionCoord);

        window.scrollTo(0, coordY);
     
        if (coordY !== windowY + sectionCoord) {
            requestAnimationFrame(countStep);       
        }
    }
}