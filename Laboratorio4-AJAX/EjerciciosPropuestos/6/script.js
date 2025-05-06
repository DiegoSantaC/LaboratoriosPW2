
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
  
    // Construir cabecera de la tabla de datos: fecha + cada región
    const grafica = [['Fecha', ...regiones.map(r => r.region)]];
  
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