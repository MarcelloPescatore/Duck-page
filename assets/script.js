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

/* slider */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // default
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const toggle = question.querySelector('.faq-toggle');

    // Toggle visibilità
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
    toggle.textContent = isVisible ? '+' : '−';
  });
});


const form = document.getElementById('contatto-form');
const grazieSection = document.getElementById('grazie-section');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita redirect

  // Nascondi il form, mostra la sezione di ringraziamento
  form.style.display = 'none';
  grazieSection.style.display = 'block';

  // Invia comunque i dati a Netlify (submit "manuale")
  setTimeout(() => {
    form.submit();
  }, 200);

  // Dopo 1 minuto, riabilita il form (opzionale)
  setTimeout(() => {
    form.reset();
    form.style.display = 'block';
    grazieSection.style.display = 'none';
  }, 60000);
});