google.charts.load('current', { packages: ['corechart'] });
let datos = [];

function mostrarGrafica() {
    google.charts.setOnLoadCallback(cargarGrafica);
}

function cargarGrafica() {
    fetch('../data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            datos = data.filter(function(item) {
                return item.region !== "Lima" && item.region !== "Callao";
            });
            crearGraficas(datos);
        })
        .catch(function(error) {
            console.error('Error al cargar JSON:', error);
        });
}

function crearGraficas(regiones) {
    const contenedor = document.getElementById('graficaComparativa');
    contenedor.innerHTML = '';

    regiones.forEach(function(region, index) {
        const datosRegion = [['Fecha', 'Confirmados', 'Crecimiento']];

        for (let i = 0; i < region.confirmed.length; i++) {
            const fecha = region.confirmed[i].date;
            const confirmados = Number(region.confirmed[i]?.value) || 0;
            let crecimiento = 0;

            if (i > 0) {
                const anterior = Number(region.confirmed[i - 1]?.value) || 0;
                crecimiento = Math.max(0, confirmados - anterior);
            }

            datosRegion.push([fecha, confirmados, crecimiento]);
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
            legend: { position: 'bottom' },
            hAxis: {
                textPosition: 'none'
            },
            vAxis: {
                minValue: 0
            },
            chartArea: { width: '80%', height: '70%' },
            series: {
                0: { color: '#3366cc' }, // Confirmados
                1: { color: '#dc3912' }  // Crecimiento
            }
        };

        const chart = new google.visualization.LineChart(div);
        chart.draw(data, options);
    });
}