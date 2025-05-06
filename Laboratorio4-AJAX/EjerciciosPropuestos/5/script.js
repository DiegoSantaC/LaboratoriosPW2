google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(inicializar);

let datos = [];

function inicializar() {
  fetch('../data.json')
    .then(res => res.json())
    .then(data => {
      datos = data;
      llenarSelectRegiones();
    })
    .catch(err => console.error('Error cargando JSON:', err));
}

function llenarSelectRegiones() {
  const select = document.getElementById('selectRegiones');
  const regiones = datos.map(d => d.region);
  const unicas = [...new Set(regiones)];

  unicas.forEach(region => {
    const opt = document.createElement('option');
    opt.value = region;
    opt.textContent = region;
    select.appendChild(opt);
  });
}

function mostrarComparacion() {
  const seleccionadas = Array.from(document.getElementById('selectRegiones').selectedOptions)
    .map(opt => opt.value);

  if (seleccionadas.length === 0) {
    alert('Selecciona al menos una región');
    return;
  }

  // Extraer fechas base
  const fechas = datos.find(r => r.region === seleccionadas[0])?.confirmed.map(e => e.date);

  // Inicializar tabla con fechas
  const tabla = [['Fecha', ...seleccionadas]];

  for (let i = 0; i < fechas.length; i++) {
    const fila = [fechas[i]];

    seleccionadas.forEach(region => {
      const regionData = datos.find(r => r.region === region);
      const valor = parseInt(regionData?.confirmed[i]?.value) || 0;
      fila.push(valor);
    });

    tabla.push(fila);
  }

  const data = google.visualization.arrayToDataTable(tabla);

  const options = {
    title: 'Comparación de regiones por casos confirmados',
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Casos confirmados' },
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#e44d26', '#1e88e5', '#43a047', '#fbc02d', '#8e24aa']
  };

  const chart = new google.visualization.LineChart(document.getElementById('graficoComparativo'));
  chart.draw(data, options);
}