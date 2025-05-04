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
  if (!verificar()) return;

  graficarCrecimiento();
  graficarTotales();
}

function verificar() {
  const region1 = document.getElementById('region1').value;
  const region2 = document.getElementById('region2').value;

  if (!region1 || !region2) {
    alert("Selecciona ambas regiones.");
    return false;
  }

  if (region1 === region2) {
    alert("No puedes comparar una región consigo misma.");
    return false;
  }

  if ((region1 === "Lima" && region2 === "Callao") ||
      (region1 === "Callao" && region2 === "Lima")) {
    alert("No se puede comparar Lima y Callao entre sí. Por favor elige otra combinación.");
    return false;
  }

  return true;
}

function graficarCrecimiento() {
  const region1 = document.getElementById('region1').value;
  const region2 = document.getElementById('region2').value;

  const datosRegion1 = datos.find(item => item.region === region1);
  const datosRegion2 = datos.find(item => item.region === region2);

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
    title: `Comparación de casos confirmados (${region1} vs ${region2})`,
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Casos confirmados' },
    legend: { position: 'bottom' },
    colors: ['#1e88e5', '#e53935'],
    curveType: 'function'
  };

  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function graficarTotales() {
  const region1 = document.getElementById('region1').value;
  const region2 = document.getElementById('region2').value;

  const datosRegion1 = datos.find(item => item.region === region1);
  const datosRegion2 = datos.find(item => item.region === region2);

  const lista1 = datosRegion1.confirmed;
  const lista2 = datosRegion2.confirmed;

  const totalRegion1 = lista1.reduce((sum, entry) => sum + (parseInt(entry.value) || 0), 0);
  const totalRegion2 = lista2.reduce((sum, entry) => sum + (parseInt(entry.value) || 0), 0);

  const dataCircular = google.visualization.arrayToDataTable([
    ['Región', 'Total Confirmados'],
    [region1, totalRegion1],
    [region2, totalRegion2]
  ]);

  const opcionesCircular = {
    title: `Total de casos confirmados (${region1} vs ${region2})`,
    pieHole: 0.4,
    colors: ['#1e88e5', '#e53935'],
  };

  const graficoCircular = new google.visualization.PieChart(document.getElementById('grafico_circular'));
  graficoCircular.draw(dataCircular, opcionesCircular);
}

