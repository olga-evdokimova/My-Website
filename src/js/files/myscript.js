//Анимация текста при загрузке страницы================================================
const animBottom = document.querySelectorAll('.anim-bottom');
const anim = document.querySelectorAll('.anim');
const animTop = document.querySelectorAll('.anim-top');

// window.onload = () => {
//     animText.forEach((item) => item.classList.add('visible-bottom'));
//     anim.forEach((item) => item.classList.add('visible'));
//     animMenu.forEach((item) => item.classList.add('visible-top'));
// }

if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function () {
        animBottom.forEach((item) => item.classList.add('visible-bottom'));
        anim.forEach((item) => item.classList.add('visible'));
        animTop.forEach((item) => item.classList.add('visible-top'));

    });
};
//Слайдер секции website=======================
const slider = document.querySelector('.website__slider');
const before = document.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
});

change.addEventListener('mousedown', () => {
    isActive = true;
});

body.addEventListener('mouseup', () => {
    isActive = false;
});

body.addEventListener('mouseleave', () => {
    isActive = false;
});

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};

body.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }

    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
});

change.addEventListener('touchstart', () => {
    isActive = true;
});

body.addEventListener('touchend', () => {
    isActive = false;
});

body.addEventListener('touchcancel', () => {
    isActive = false;
});

body.addEventListener('touchmove', (e) => {
    if (!isActive) {
        return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
});
//===========================================
const formText = document.querySelector('.form__text');
const formBody = document.querySelector('.form__body');

    formText.addEventListener("click", function () {
        formText.classList.toggle('form__text--active');
        formBody.classList.toggle('hidden');
    });
