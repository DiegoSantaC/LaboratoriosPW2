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

  if (!region1 || !region2 || region1 === region2) {
    alert("Selecciona dos regiones diferentes.");
    return;
  }

  const datosRegion1 = datos.find(item => item.region === region1);
  const datosRegion2 = datos.find(item => item.region === region2);

  if (!datosRegion1 || !datosRegion2) {
    alert("No se encontraron datos para una o ambas regiones.");
    return;
  }

  // Tomar el último valor de la lista confirmed
  const lista1 = datosRegion1.confirmed;
  const lista2 = datosRegion2.confirmed;

  const total1 = parseInt(lista1[lista1.length - 1].value) || 0;
  const total2 = parseInt(lista2[lista2.length - 1].value) || 0;

  const data = google.visualization.arrayToDataTable([
    ['Región', 'Casos confirmados'],
    [region1, total1],
    [region2, total2]
  ]);

  const options = {
    title: `Comparación de casos confirmados`,
    pieHole: 0.4,
    slices: {
      0: { color: '#1e88e5' },
      1: { color: '#e53935' }
    }
  };

  const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

