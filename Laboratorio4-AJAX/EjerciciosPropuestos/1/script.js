
google.charts.load('current', { packages: ['table'] });
let datos = [];

function mostrarRegiones(){
    google.charts.setOnLoadCallback(cargarRegiones);
}

function cargarRegiones() {
    fetch('../data.json')
      .then(function(response) {
        return response.json(); 
      })
      .then(function(data) {
        datos = data; 

        let listaRegiones = datos.map(function(item) {
          return item.region;
        });

        mostrarTablaRegiones(listaRegiones);
      })
      .catch(function(error) {
        console.error('Error al cargar JSON:', error);
      });
  }

  function mostrarTablaRegiones(regiones) {
    let dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Región');
  
    regiones.forEach(function(region) {
      dataTable.addRow([region]);
    });
  
    let table = new google.visualization.Table(document.getElementById('tablaRegiones'));
    table.draw(dataTable, { showRowNumber: true, width: '400px', height: 'auto' });
  }