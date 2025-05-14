document.getElementById('pedidoBtn').addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=3206587850&text=Quiero%20hacer%20un%20pedido';
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownLink = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    if (dropdownLink && dropdownMenu) {
      dropdownLink.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      });
  
      // Cierra el menú desplegable al hacer clic fuera de él
      document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !dropdownLink.contains(event.target)) {
          dropdownMenu.style.display = 'none';
        }
      });
    }
  });

const carousel = document.querySelector('.carousel');
const viewport = document.querySelector('.viewport');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const intervalTime = 3000; // Cambia de slide cada 3 segundos

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  viewport.scrollLeft = slides[currentSlide].offsetLeft;
}

setInterval(nextSlide, intervalTime);

// Buscar todas las tarjetas
const cards = document.querySelectorAll('.card');

// Añadir un event listener a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// --------- Mostrar mensaje al ordenar ---------
const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // para que no se voltee la carta cuando haces click en el botón
    const productName = button.parentElement.parentElement.querySelector('.card-title').innerText;
    alert(`¡Has ordenado: ${productName}!`);
  });
});

// --------- Pausar video si sales de la pestaña ---------
const video = document.querySelector('.video-section video');

if (video) {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play();
    }
  });
}
// --------- Menu Hamburguesa ---------
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.getElementById("hamburger-btn").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
});
