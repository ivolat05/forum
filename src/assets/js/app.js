const menuBurger = document.querySelector('.menu__burger');

menuBurger.addEventListener('click', () => {
    const headerInner = document.querySelector('.header__inner');
    menuBurger.classList.toggle('burger__active');
    headerInner.classList.toggle('header__active');
    document.querySelector('body').classList.toggle('look');
})

const mainBurger = document.querySelector('.main__burger');

mainBurger.addEventListener('click', () => {
    mainBurger.classList.toggle('burger__active');

})