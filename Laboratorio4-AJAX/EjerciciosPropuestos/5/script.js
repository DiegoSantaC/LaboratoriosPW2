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
        datos = data.filter(item => item.region !== "Lima" && item.region !== "Callao");
        crearGrafica(datos);

      })
      .catch(function(error) {
        console.error('Error al cargar JSON:', error);
      });
  }

  function crearGrafica(regiones) {
    const fechas = regiones[0].confirmed.map(item => item.date);
  
    const grafica = [['Fecha', ...regiones.map(item => item.region)]];

    for (let i = 0; i < fechas.length; i++) {
      const fila = [fechas[i]];
      regiones.forEach(function(region){
        const valor = Number(region.confirmed[i]?.value) || 0;
        fila.push(valor);
      });
      grafica.push(fila);
    }
  
    const data = google.visualization.arrayToDataTable(grafica);
  
    const options = {
      title: 'Crecimiento de casos confirmados por región (excepto Lima y Callao)',
      hAxis: { title: 'Fecha' },
      vAxis: { title: 'Casos confirmados' },
      legend: { position: 'bottom' },
      curveType: 'function'
    };
  
    const chart = new google.visualization.LineChart(document.getElementById('graficaComparativa'));
    chart.draw(data, options);
  }