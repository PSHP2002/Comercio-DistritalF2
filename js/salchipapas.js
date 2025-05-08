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

  const costoDomicilio = 5000;
  
  function calcularTotal() {
    const checkboxes = document.querySelectorAll('.producto-checkbox');
    let totalProductos = 0;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        totalProductos += parseInt(cb.getAttribute('data-precio'));
      }
    });

    const totalFinal = totalProductos + costoDomicilio;
    document.getElementById('resultado').textContent = `Total a pagar (productos + domicilio): $${totalFinal.toLocaleString()}`;
  }

  function abrirModal() {
    document.getElementById("modal").style.display = "flex";
  }

  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }

      // voltea las cartas

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });
  });
  
  