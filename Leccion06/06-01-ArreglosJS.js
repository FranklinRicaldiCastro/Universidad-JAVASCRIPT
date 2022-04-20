//let autos = new Array('BMW','Mercedes Benz', 'Volvo');
const autos = ['BMW','Mercedes Benz', 'Volvo'];
console.log(autos);
//Imprimiendo valores
console.log(autos[0]);
console.log(autos[2]);
//Imprimiendo todos los valores del Array
for (let i = 0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}
//Modificando los valores
autos[1] = 'MercedesBenz';
console.log(autos[1]);

//Agregar elementos aun arreglo de
autos.push('Audi');
console.log(autos);

console.log(autos.length);

//Agregar un nuevo elemento en el indice 4
autos[autos.length] = 'Cadillac';
console.log(autos);
//Agregar un nuevo elemento en el indice 6
autos[6] = 'Porshe';
console.log(autos);

//Preguntar si es un Arreglo
console.log(typeof autos);//no devuelve respuesta

console.log(Array.isArray(autos));
console.log(autos instanceof Array);