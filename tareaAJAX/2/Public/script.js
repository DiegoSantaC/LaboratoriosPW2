google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(cargarDatos);

let datos = [];

function cargarDatos() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Excluir Lima y Callao
      datos = data.filter(item => item.region !== "Lima" && item.region !== "Callao");
    })
    .catch(err => console.error('Error al cargar JSON:', err));
}

function dibujarGrafico() {
  if (datos.length === 0) {
    alert("Los datos aún no han sido cargados.");
    return;
  }

  const fechas = datos[0].confirmed.map(entry => entry.date);
  const dataTable = [['Fecha', ...datos.map(d => d.region)]];

  for (let i = 0; i < fechas.length; i++) {
    const fila = [fechas[i]];
    for (let j = 0; j < datos.length; j++) {
      const valor = parseInt(datos[j].confirmed[i].value) || 0;
      fila.push(valor);
    }
    dataTable.push(fila);
  }

  const data = google.visualization.arrayToDataTable(dataTable);

  const options = {
    title: 'Crecimiento de casos confirmados por región (sin Lima ni Callao)',
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Casos confirmados' },
    legend: { position: 'bottom' },
    curveType: 'function',
    height: 600
  };

  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

