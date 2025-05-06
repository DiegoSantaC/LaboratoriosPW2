google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(cargarDatos);
let datos = [];

function mostrarGrafica(){
  crearGrafica();
}

function cargarDatos() {
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
  const regiones = datos.map(item => item.region);

  regiones.forEach(region => {
    const opt = document.createElement('option');
    opt.value = region;
    opt.textContent = region;
    select.appendChild(opt);
  });
}

function crearGrafica() {
  const seleccionadas = Array.from(document.getElementById('selectRegiones').selectedOptions)
    .map(function(opt) {
      return opt.value;
    });

  if (seleccionadas.length === 0) {
    alert('Selecciona al menos una región');
    return;
  }

  const fechas = datos.find(function(r) {
    return r.region === seleccionadas[0];
  })?.confirmed.map(function(e) {
    return e.date;
  });

  const encabezado = ['Fecha'].concat(seleccionadas);
  const grafica = [encabezado];

  for (let i = 0; i < fechas.length; i++) {
    const fila = [fechas[i]];

    seleccionadas.forEach(function(region) {
      const regionData = datos.find(function(r) {
        return r.region === region;
      });
      const valor = parseInt(regionData?.confirmed[i]?.value) || 0;
      fila.push(valor);
    });

    grafica.push(fila);
  }

  const data = google.visualization.arrayToDataTable(grafica);

  const options = {
    title: 'Regiones Seleccionadas por el usuario',
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Casos confirmados' },
    legend: { position: 'bottom' },
    curveType: 'function'
  };

  const chart = new google.visualization.LineChart(document.getElementById('graficoComparativo'));
  chart.draw(data, options);
}