const usuario = document.getElementById("usuario");
const dropdown = document.getElementById("dropdown");
const temaToggle = document.getElementById(" temaToggle");

usuario.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display ==
    "block" ? "none": "block";
});


document.addEventListener("click", function(e) {
   if(!usuario.contains(e.target)){
    dropdown.style.display = "none";
   }

});
document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const moreButton = document.querySelector('.more-button');

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            console.log(`Clic en la categoría: ${category}`);
            // Aquí puedes añadir la lógica para redirigir o mostrar más información
            // window.location.href = `/categorias/${category}`;
        });
    });

    if (moreButton) {
        moreButton.addEventListener('click', () => {
            alert('Mostrar más categorías (funcionalidad no implementada)');
            // Aquí podrías implementar la lógica para cargar o mostrar más categorías
        });
    }
});
  // Datos históricos de ejemplo
  const historyData = [
    { year: 1965, type: 'Criolla', value: 5 },
    { year: 1980, type: 'Mariscos', value: 8 },
    { year: 1995, type: 'Internacional', value: 6 },
    { year: 2010, type: 'Fast Food', value: 10 },
    { year: 2025, type: 'Criolla', value: 12 }
  ];
  
  // Filtro de tipo
  const typeFilter = document.getElementById('typeFilter');
  new Set(historyData.map(d => d.type)).forEach(t => typeFilter.add(new Option(t, t)));
  document.getElementById('btnFilter').addEventListener('click', filterData);
  
  function renderTable(data) {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';
    data.forEach(d => {
      tbody.innerHTML += `<tr><td>${d.year}</td><td>${d.type}</td><td>${d.value}</td></tr>`;
    });
  }
  
  function filterData() {
    const from = parseInt(document.getElementById('yearFrom').value) || 1965;
    const to = parseInt(document.getElementById('yearTo').value) || 2025;
    const type = document.getElementById('typeFilter').value;
    const filtered = historyData.filter(d => d.year >= from && d.year <= to && (type === '' || d.type === type));
    renderTable(filtered);
  }
  
  // Encuesta de calidad
  const questions = [
    { q: 'Certificación sanitaria?', w: 3 },
    { q: 'Variedad de menú?', w: 2 },
    { q: 'Buena ubicación?', w: 3 },
    { q: 'Atención al cliente?', w: 2 }
  ];
  const surveyDiv = document.getElementById('survey');
  questions.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <p>${s.q}</p>
      <select id="q${i}">
        <option value="0">No</option>
        <option value="${s.w}">Sí</option>
      </select>`;
    surveyDiv.appendChild(card);
  });
  
  document.getElementById('btnCalc').addEventListener('click', () => {
    let score = 0;
    questions.forEach((s, i) => {
      score += parseInt(document.getElementById('q' + i).value);
    });
    const maxScore = questions.reduce((a, b) => a + b.w, 0);
    const percent = ((score / maxScore) * 100).toFixed(2);
    document.getElementById('surveyResult').innerHTML = `<div class="card">Puntuación: ${percent}%</div>`;
  });
  
  // Generar gráficos
  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Criolla', 'Mariscos', 'Internacional', 'Fast Food'],
      datasets: [{ label: '# Restaurantes', data: [12, 8, 6, 10], backgroundColor: '#c0392b' }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeOutQuad'
      }
    }
  });
  new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['Criolla', 'Mariscos', 'Internacional', 'Fast Food'],
      datasets: [{ data: [12, 8, 6, 10], backgroundColor: ['#c0392b', '#e67e22', '#2ecc71', '#f1c40f'] }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeOutQuad'
      }
    }
  });
  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: [1965, 1980, 1995, 2010, 2025],
      datasets: [{ label: 'Total Restaurantes', data: [5, 8, 15, 25, 30], borderColor: '#c0392b', fill: false }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeOutQuad'
      }
    }
  });
  new Chart(document.getElementById('areaChart'), {
    type: 'line',
    data: {
      labels: [1965, 1980, 1995, 2010, 2025],
      datasets: [{ label: 'Restaurantes', data: [5, 8, 15, 25, 30], backgroundColor: 'rgba(192,57,43,0.5)', fill: true }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeOutQuad'
      }
    }
  });

