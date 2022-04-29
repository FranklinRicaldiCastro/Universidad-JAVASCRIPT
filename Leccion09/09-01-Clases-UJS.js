//Creando una clase
class Persona{
    //Agregando un cosntructor
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//creando Objetos
let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );