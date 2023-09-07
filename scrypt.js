document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    const slider = new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });

    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.btn-prev').onclick = function () {
        // перейдём к предыдущему слайду
        slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.btn-next').onclick = function () {
        // перейдём к следующему слайду
        slider.next();
    }


});

const burger = document.querySelector("#mobile_burger");
const menu = document.querySelector('#mobile_menu');
const wrapper = document.querySelector('.main');
const modalSearch = document.querySelector('.modal-search');
const modalBody = document.querySelector('.mobile__search');
const body = document.querySelector('body');

const screenWidth = window.screen.width

/*if (screenWidth <= 320) {
    menu.classList.add("close_nav");
}*/

const burgerFunc = () => {
    menu.classList.toggle("open");
    wrapper.classList.toggle("shading");
    body.classList.toggle('scroll_block');
    modalSearch.classList.remove("modal-open");
}
const modalToggle = () => {
    modalSearch.classList.toggle("modal-open");
    menu.classList.remove("open");
    wrapper.classList.remove("shading");
}

menu.addEventListener('click', (e) => {
    if (e.type === 'click') {
        menu.classList.remove("open");
        wrapper.classList.remove("shading");
        body.classList.remove('scroll_block');
        modalSearch.classList.remove("modal-open");
    }
})

wrapper.addEventListener('click', (e) => {
    if (e.type === 'click') {
        menu.classList.remove("open");
        wrapper.classList.remove("shading");
        body.classList.remove('scroll_block');
        modalSearch.classList.remove("modal-open");
    }
})
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        menu.classList.remove("open");
        wrapper.classList.remove("shading");
        body.classList.remove('scroll_block');
        modalSearch.classList.remove("modal-open");
    }
})

