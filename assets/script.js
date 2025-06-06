/* Gestione sidebar mobile */
const sidebar = document.getElementById('sidebar-mobile');
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');


openButton.addEventListener('click', function () {
    sidebar.style.display = 'flex';
    overlay.style.display = 'inline';
});

closeButton.addEventListener('click', function () {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});

var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});