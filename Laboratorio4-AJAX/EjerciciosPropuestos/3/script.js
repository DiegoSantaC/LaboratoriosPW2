
google.charts.load('current', { packages: ['table'] });
let datos = [];

function mostrarRegiones(){
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
        let regionesOrdenadas = listaRegiones.sort(function(a,b){
            return b.confirmados - a.confirmados;    
        }) 

        crearTabla(regionesOrdenadas);
      })
      .catch(function(error) {
        console.error('Error al cargar JSON:', error);
      });
  }

  function crearTabla(regiones) {
    let dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Región');
    //Agregamos una columna para el total de confirmados por region
    dataTable.addColumn('number', 'Confirmados Totales')
    // Ahora el foreach agrega tanto la region como el total de confirmados
    for(i=0;i<=10;i++){
      dataTable.addRow([regiones[i].region,regiones[i].confirmados]);
    };
  
    let table = new google.visualization.Table(document.getElementById('tablaRegiones'));
    table.draw(dataTable, { showRowNumber: true, width: '400px', height: 'auto' });
  }