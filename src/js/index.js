let cards = {...document.querySelectorAll('.card')};
let slider = document.querySelector('.slider');
let sliderWidth;
let cardWidth;
let current = 0;
let target = 0;
let ease = 0.1;

function lerp(start, end, t){
    return start * (1-t) + end *t;
}

function setTransform(el, transform){
    el.style.transform = transform;
}

function init(){
    sliderWidth = slider.getBoundingClientRect().width;
    cardWidth = sliderWidth / cards.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}

function animate(){
    current = parseFloat(lerp(current, target, ease)).toFixed(2)
    target = window.scrollY;
    setTransform(slider, `transelateX)-${current}px`)
    requestAnimationFrame(animate);
}

init();
animate();

//Try to get just this element to scroll