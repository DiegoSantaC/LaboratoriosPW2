function validarEntrada(valor1, valor2, operacion) {
    if (isNaN(valor1) || isNaN(valor2)) {
        return "Por favor ingrese ambos valores";
    }

    if ((operacion === "&&" || operacion === "||") &&
        ((valor1 !== 0 && valor1 !== 1) || (valor2 !== 0 && valor2 !== 1))) {
        return "Para operaciones lógicas solo se permiten 0 y 1";
    }

    if (operacion === "/" && valor2 === 0) {
        return "No se puede dividir entre 0";
    }

    return null; 
}

function calcular() {
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let operacion = document.getElementById('operacion').value;
    let resultado;

    let error = validarEntrada(valor1, valor2, operacion);
    if (error) {
        mostrarResultado(error, true); 
        return;
    }

    switch (operacion) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        case '&&':
            resultado = valor1 && valor2;
            break;
        case '||':
            resultado = valor1 || valor2;
            break;
        case '<<':
            resultado = valor1 << valor2;
            break;
        case '>>':
            resultado = valor1 >> valor2;
            break;
        default:
            resultado = "Operación no válida";
    }

    mostrarResultado("Resultado: " + resultado, false);
}

function mostrarResultado(mensaje, esError) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = mensaje;
    resultadoDiv.style.color = esError ? 'red' : 'black';
}