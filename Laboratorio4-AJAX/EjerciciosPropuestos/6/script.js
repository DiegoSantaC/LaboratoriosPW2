
google.charts.load('current', { packages: ['corechart'] });
let datos = [];

function mostrarGrafica(){
    google.charts.setOnLoadCallback(cargarGrafica);
}

function cargarGrafica() {
    fetch('../data.json')
      .then(function(response) {
        return response.json(); 
      })
      .then(function(data) {
        //Filtra los datos de Lima y Callao
        datos = data.filter(item => item.region !== "Lima" && item.region !== "Callao");
        crearGrafica(datos);

      })
      .catch(function(error) {
        console.error('Error al cargar JSON:', error);
      });
  }

  function crearGrafica(regiones) {
    // Suponemos que todas las regiones tienen las mismas fechas
  const fechas = regiones[0].confirmed.map(item => item.date);

  // Cabecera: Fecha, Región1, Región2, ...
  const grafica = [['Fecha', ...regiones.map(r => r.region)]];

  // Para cada día (desde el segundo en adelante), calcular crecimiento diario
  for (let i = 1; i < fechas.length; i++) {
    const fila = [fechas[i]];
    regiones.forEach(region => {
      const valorHoy = Number(region.confirmed[i]?.value) || 0;
      const valorAyer = Number(region.confirmed[i - 1]?.value) || 0;
      const crecimiento = Math.max(0, valorHoy - valorAyer);  // <-- cambio aquí
      fila.push(crecimiento);
    });
    grafica.push(fila);
  }

  const data = google.visualization.arrayToDataTable(grafica);

  const options = {
    title: 'Crecimiento diario de casos confirmados por región (excepto Lima y Callao)',
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Crecimiento de casos confirmados' },
    legend: { position: 'bottom' },
    curveType: 'function'
  };

  const chart = new google.visualization.LineChart(document.getElementById('graficaComparativa'));
  chart.draw(data, options);
  }