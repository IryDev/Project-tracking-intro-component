const burger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => { 
    nav.classList.toggle('open');
    burger.classList.toggle('burger-open');
});