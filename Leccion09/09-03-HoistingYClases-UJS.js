//No es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
//let persona2 = new persona('Karla', 'Juarez');

class Persona{
    //Agregando un cosntructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Carlos ', 'Lara');
persona1.nombre = 'Maria Paula'// set nombre ('Maria Paula')
console.log( persona1.nombre );//get nombre

let persona2 = new Persona('Karla', 'Juarez')
console.log( persona2 );