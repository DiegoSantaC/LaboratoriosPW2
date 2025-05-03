google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(cargarRegiones);

let datos = [];

function cargarRegiones() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      datos = data;

      const regiones = [...new Set(data.map(item => item.region))].sort();

      const select1 = document.getElementById('region1');
      const select2 = document.getElementById('region2');

      regiones.forEach(region => {
        select1.add(new Option(region, region));
        select2.add(new Option(region, region));
      });
    })
    .catch(err => console.error('Error al cargar JSON:', err));
}

function dibujarGrafico() {
  const region1 = document.getElementById('region1').value;
  const region2 = document.getElementById('region2').value;

  if (!region1 || !region2) {
    alert("Selecciona ambas regiones.");
    return;
  }

  const datosRegion1 = datos.find(item => item.region === region1);
  const datosRegion2 = datos.find(item => item.region === region2);

  if (!datosRegion1 || !Array.isArray(datosRegion1.confirmed) ||
      !datosRegion2 || !Array.isArray(datosRegion2.confirmed)) {
    alert("No se encontraron datos confirmados para una de las regiones.");
    return;
  }

  const lista1 = datosRegion1.confirmed;
  const lista2 = datosRegion2.confirmed;

  const dataTable = [['Fecha', region1, region2]];

  for (let i = 0; i < lista1.length; i++) {
    const fecha = lista1[i].date;
    const valor1 = parseInt(lista1[i].value) || 0;
    const valor2 = parseInt(lista2[i].value) || 0;
    dataTable.push([fecha, valor1, valor2]);
  }

  const data = google.visualization.arrayToDataTable(dataTable);

  const options = {
    title: `Comparación de casos confirmados (${region1} vs ${region2}) - Últimos 30 días`,
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Casos confirmados' },
    legend: { position: 'bottom' },
    colors: ['#1e88e5', '#e53935'],
    curveType: 'function'
  };

  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

