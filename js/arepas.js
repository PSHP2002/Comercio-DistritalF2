document.addEventListener('DOMContentLoaded', () => {
  // Dropdown
  const dropdownLink = document.querySelector('.dropdown > a');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownLink && dropdownMenu) {
    dropdownLink.addEventListener('click', (event) => {
      event.preventDefault();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', (event) => {
      if (!dropdownMenu.contains(event.target) && !dropdownLink.contains(event.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  // Manejo de productos
  const checkboxes = document.querySelectorAll('.producto-checkbox');
  checkboxes.forEach(checkbox => {
    const producto = checkbox.closest('.producto');
    const cantidadSpan = producto.querySelector('.cantidad');
    const botonSumar = producto.querySelector('.sumar');
    const botonRestar = producto.querySelector('.restar');

    // Inicialmente desactiva botones si no está marcado
    const actualizarEstadoBotones = () => {
      const deshabilitado = !checkbox.checked;
      botonSumar.disabled = deshabilitado;
      botonRestar.disabled = deshabilitado;
    };
    actualizarEstadoBotones();

    checkbox.addEventListener('change', () => {
      actualizarEstadoBotones();
      calcularTotal();
    });

    botonSumar.addEventListener('click', () => {
      let cantidad = parseInt(cantidadSpan.textContent);
      cantidad++;
      cantidadSpan.textContent = cantidad;
      calcularTotal();
    });

    botonRestar.addEventListener('click', () => {
      let cantidad = parseInt(cantidadSpan.textContent);
      if (cantidad > 1) {
        cantidad--;
        cantidadSpan.textContent = cantidad;
        calcularTotal();
      }
    });
  });

  // Volteo de cartas
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Botón de WhatsApp con mensaje dinámico
  document.getElementById('pedidoBtn').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('.producto-checkbox');
    const costoDomicilio = 5000;
    let mensaje = '🛒 *Pedido de Arepas Rellenas:*\n';
    let total = 0;
    let hayProductos = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        hayProductos = true;
        const producto = checkbox.closest('.producto');
        const nombre = producto.querySelector('label').innerText.trim().split(' - ')[0];
        const precio = parseInt(checkbox.dataset.precio);
        const cantidad = parseInt(producto.querySelector('.cantidad').textContent);
        const subtotal = precio * cantidad;

        mensaje += `• ${nombre} x${cantidad} = $${subtotal.toLocaleString()}\n`;
        total += subtotal;
      }
    });

    if (!hayProductos) {
      alert("Por favor selecciona al menos un producto antes de pedir.");
      return;
    }

    total += costoDomicilio;
    mensaje += `\n🚚 *Domicilio:* $${costoDomicilio.toLocaleString()}`;
    mensaje += `\n💰 *Total a pagar:* $${total.toLocaleString()}`;
    mensaje += `\n\n📍 Dirección: `;

    const numeroWhatsApp = "3206587850";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});

function calcularTotal() {
  const checkboxes = document.querySelectorAll('.producto-checkbox');
  let total = 0;
  let hayProductoSeleccionado = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      hayProductoSeleccionado = true;
      const precio = parseInt(checkbox.dataset.precio);
      const cantidad = parseInt(checkbox.closest('.producto').querySelector('.cantidad').textContent);
      total += precio * cantidad;
    }
  });

  if (hayProductoSeleccionado) {
    total += 5000; // domicilio
  }

  document.getElementById('resultado').textContent = `Total a pagar: $${total.toLocaleString()}`;
}

function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
