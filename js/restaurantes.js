// Datos de ejemplo
const dataPaginas = [
  [
    {
      nombre: "Verdaderas",
      tipo: "Comida rápida",
      estrellas: "4.1",
      votos: 1426,
      imagen: "/imagenes/burger.jpg"
    },
    {
      nombre: "Taquería",
      tipo: "Mexican",
      estrellas: "4.0",
      votos: 875,
      imagen: "/imagenes/burger.jpg"
    }
  ],
  [
    {
      nombre: "Sushi Master",
      tipo: "Japanese",
      estrellas: "4.5",
      votos: 1020,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sushi.jpg"
    },
    {
      nombre: "Italiano",
      tipo: "Italian",
      estrellas: "4.2",
      votos: 1123,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/66/Margherita_Originale.jpg"
    }
  ],
  [
    {
      nombre: "Burgers&Brews",
      tipo: "American",
      estrellas: "4.3",
      votos: 950,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg"
    },
    {
      nombre: "Tacos Plaza",
      tipo: "Mexican",
      estrellas: "4.1",
      votos: 800,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tacos_de_carnitas.jpg"
    }
  ]
];

let currentPage = 0;

function crearTarjeta(rest) {
  return `
    <div class="card">
      <img src="${rest.imagen}" alt="${rest.nombre}">
      <h3>${rest.nombre}</h3>
      <p>${rest.tipo}</p>
      <div class="stars">⭐ ${rest.estrellas} (${rest.votos})</div>
    </div>`;
}

function renderPagina(index) {
  const contenedor = document.getElementById("contenedor-restaurantes");
  contenedor.innerHTML = dataPaginas[index].map(crearTarjeta).join("");
  document.getElementById("pageIndicator").textContent = index + 1;
}

document.getElementById("nextPage").addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage < dataPaginas.length - 1) {
    currentPage++;
    renderPagina(currentPage);
  }
});

document.getElementById("prevPage").addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 0) {
    currentPage--;
    renderPagina(currentPage);
  }
});

// Carga la primera página al inicio
renderPagina(currentPage);
