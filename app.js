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