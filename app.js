const hamburger = document.querySelector('.nav-hamburger-cont');
const nav = document.querySelector('nav')
const header = document.querySelector('header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active-hamburger');
    nav.classList.toggle('active-nav');
})

window.addEventListener('scroll', () => {
    var top = window.pageYOffset
    if (top > 100) {
        header.classList.add('active-header')
    } else {
        header.classList.remove('active-header')
    }
})


const downBtn = document.getElementById('down-btn');

downBtn.addEventListener('click', () => {
    var top = window.innerHeight;
    window.scrollTo(0,top);
})

const carouselControls = document.querySelectorAll('.carousel-control')
const carousel = document.querySelector('.carousel')
const controlArr = Array.from(carouselControls)
carouselControls.forEach(control => {
    control.addEventListener('click', () => {
        var idx = controlArr.indexOf(control) * -50
        carousel.style.transform = `translateX(${idx}%)`
    })
})

const carouselControlsTwo = document.querySelectorAll('.carousel-control-two')
const carouselTwo = document.querySelector('.carousel-two')
const controlArrTwo = Array.from(carouselControlsTwo)
carouselControlsTwo.forEach(control => {
    control.addEventListener('click', () => {
        var idx = controlArrTwo.indexOf(control) * -50
        carouselTwo.style.transform = `translateX(${idx}%)`
    })
})

const carouselArrows = document.querySelectorAll('.carousel-arrow')
const controlArrowArr = Array.from(carouselArrows)
console.log(carouselArrows, controlArrowArr)
carouselArrows.forEach(control => {
    control.addEventListener('click', () => {
        
        var idx = controlArrowArr.indexOf(control) * -50
        carousel.style.transform = `translateX(${idx}%)`
    })
})
const carouselArrowsTwo = document.querySelectorAll('.carousel-arrow-two')
const controlArrowArrTwo = Array.from(carouselArrowsTwo)
console.log(carouselArrows, controlArrowArr)
carouselArrowsTwo.forEach(control => {
    control.addEventListener('click', () => {
        var idx = controlArrowArrTwo.indexOf(control) * -50
        carouselTwo.style.transform = `translateX(${idx}%)`
    })
})