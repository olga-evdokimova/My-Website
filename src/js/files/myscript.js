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