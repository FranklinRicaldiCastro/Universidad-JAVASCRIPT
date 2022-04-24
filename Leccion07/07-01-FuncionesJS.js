//miFuncion(2, 2)

//Declaracion de la funcion
function miFuncion(a, b) {
    //Imprimo el resultado
    //console.log("Suma: " + ( a + b ));

    //como saber cuantos argumentos tiene mi  funcion del
    console.log(arguments. length);

    //regresando el valor de la suma
    return a + b;
}
//LLamando ala función
let resultado = miFuncion(2, 3);

console.log(resultado);

//Declaracion la funcion de tipo Expresión
let sumar = function (a, b) {return a + b};

resultado = sumar(1, 2);
console.log(resultado);

(function (a, b) {
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

//tipo de dato
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);