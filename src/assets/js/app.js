//= components/jquery.magnific-popup.js



$('.popup-content').magnificPopup({
    type: 'inline'
});

$(".scroll-link").click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2500);
    return false;
});


const menuBurger = document.querySelector('.menu__burger');

const tabsBtn = document.querySelectorAll('.login-tab');
const tabsItem = document.querySelectorAll('.login-list');

tabsBtn.forEach((item) => {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('login-active')
        })

        tabsItem.forEach(function (item) {
            item.classList.remove('login-list-active')
        })
        currentBtn.classList.add('login-active');
        currentTab.classList.add('login-list-active');
    });
});

const formSelectInfo = document.querySelectorAll('.form__select-info');


formSelectInfo.forEach((item) => {
    item.addEventListener('click', function () {
        formSelectInfo.forEach(function (item) {
            item.classList.remove('select-active')

        })

        item.classList.add('select-active');
    });
});


menuBurger.addEventListener('click', () => {
    const headerInner = document.querySelector('.header__inner');
    menuBurger.classList.toggle('burger__active');
    headerInner.classList.toggle('header__active');
})

const mainBurger = document.querySelector('.main__burger');

mainBurger.addEventListener('click', () => {
    mainBurger.classList.toggle('burger__active');

})

const entranceRegBtn = document.querySelector('.entrance-reg-btn');
entranceRegBtn.onclick = () => {
    const entranceRegistration = document.querySelector('.entrance-registration');
    const entranceForm = document.querySelectorAll('.entrance-form');
    entranceForm[0].classList.remove('entrance-active');
    entranceRegistration.classList.add('entrance-active');
};
