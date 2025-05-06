
google.charts.load('current', { packages: ['corechart'] });
let datos = [];

function mostrarGrafica(){
    google.charts.setOnLoadCallback(cargarTabla);
}

function cargarTabla() {
    fetch('../data.json')
      .then(function(response) {
        return response.json(); 
      })
      .then(function(data) {
        datos = data; 

        // Agregamos una variable para el total de confirmados y tomamos el ultimo valor de
        // Confirmed para dar el total de confirmados y lo retornamos como un atributo mas
        let listaRegiones = datos.map(function(item) {
        let totalConfirmados = Number(item.confirmed[item.confirmed.length - 1]?.value || 0);
            return {
              region: item.region,
              confirmados: totalConfirmados
            };
          });

        crearGrafica(listaRegiones);
      })
      .catch(function(error) {
        console.error('Error al cargar JSON:', error);
      });
  }

  function crearGrafica(regiones) {
    let dataLista = [['Region', 'Confirmados']];
    
    regiones.forEach(function(item) {
        dataLista.push([item.region, item.confirmados]);  // X = Region , Y = confirmados
    });

    let data = google.visualization.arrayToDataTable(dataLista);

    let options = {
        title: 'Confirmados Totales por Región (Gráfico de Puntos)',
        hAxis: {
            title: 'Regiones (Eje X)'
        },
        vAxis: {
            title: 'Casos Confirmados Totales(EjeY)'
        },
        legend: 'none',
        pointSize: 10,
    };

    let chart = new google.visualization.ScatterChart(document.getElementById('graficaComparativa'));
    chart.draw(data, options);
}