//Get -> Leer
//Set -> Editar
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

//Get
let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.nombre );

//Set
let persona2 = new Persona('Carlos ', 'Lara');
persona2.nombre = 'Maria Paula'// set nombre ('Maria Paula')
console.log( persona2.nombre );//get nombre