
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
        datos = data; 

        // Obtener el objeto completo de la región Arequipa
        let Arequipa = datos.find(item => item.region === "Arequipa");

        if (Arequipa) {
            crearGrafica(Arequipa);
        } else {
            console.error("No se encontró la región Arequipa en los datos.");
        }
      })
      .catch(function(error) {
        console.error('Error al cargar JSON:', error);
      });
  }

  function crearGrafica(region) {
    const lista1 = region.confirmed;
    let grafica=[['fecha', region.region]]
    lista1.forEach(function(item) {
        const fecha = item.date;
        const confirmados = Number(item.value) || 0;
        grafica.push([fecha,confirmados]);    
      });

    const data = google.visualization.arrayToDataTable(grafica);

    const options = {
        title: `Crecimiento de casos confirmados de la region ${region.region}`,
        hAxis: { title: 'Fecha' },
        vAxis: { title: 'Casos confirmados' },
        legend: { position: 'bottom' },
        colors: ['#1e88e5'],
        curveType: 'function'
      };
    const chart = new google.visualization.LineChart(document.getElementById('graficaArequipa'));
    chart.draw(data, options);
  }