
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
    const contenedor = document.getElementById('graficaComparativa');
    contenedor.innerHTML = '';

    regiones.forEach(function(region, index){
        const datosRegion = [['Fecha', 'Crecimiento']];
        
        for (let i = 1; i < region.confirmed.length; i++) {
            const hoy = Number(region.confirmed[i]?.value) || 0;
            const ayer = Number(region.confirmed[i - 1]?.value) || 0;
            const crecimiento = Math.max(0, hoy - ayer);
            datosRegion.push([region.confirmed[i].date, crecimiento]);
        }

        const data = google.visualization.arrayToDataTable(datosRegion);

        const div = document.createElement('div');
        div.id = 'grafica_' + index;
        div.style.width = '300px';
        div.style.height = '200px';
        div.style.margin = '10px';
        div.style.display = 'inline-block';
        div.style.verticalAlign = 'top';
        div.style.border = '1px solid #ccc';
        div.style.padding = '5px';
        contenedor.appendChild(div);

        const options = {
            title: region.region,
            legend: 'none',
            hAxis: {
                textPosition: 'none'
            },
            vAxis: {
                minValue: 0
            },
            chartArea: { width: '80%', height: '70%' }
        };

        const chart = new google.visualization.LineChart(div);
        chart.draw(data, options);
    });
  }