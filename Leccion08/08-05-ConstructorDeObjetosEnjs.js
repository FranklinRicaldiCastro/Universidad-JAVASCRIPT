//function constructor de objetos de tipo persona
function persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new persona ('Juan', 'Perez', 'jperes@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new persona ('Laura', 'quintero', 'lquintero@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = 'Carlos';

console.log(padre);
console.log(madre)