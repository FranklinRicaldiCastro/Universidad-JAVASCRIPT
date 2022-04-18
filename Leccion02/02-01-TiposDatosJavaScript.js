/*
Ejemplos de tipos de datos en JavaScript
*/
// Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

// Tipo de dato numerico
var numerico = 1000;
console.log(numerico);

// Tipo de dato objeto
var objeto = {
    nombre : "Juan",
    Apellido : "Perez",
    telefono :"55443322"
}
console.log(typeof  objeto);

// Tipo de dato boolean(true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de Datos funcion
function miFuncion(){}
    console.log(typeof miFuncion);

//Tipo de dato Simbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//tipo indefinido
var x;
console.log(typeof x);

//Null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);