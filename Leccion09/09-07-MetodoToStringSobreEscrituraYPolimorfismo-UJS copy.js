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
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }

    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (Multiples formas en tiempo de ejecucion)
        //El metodo que se ejecuta depende si es una referencia de tipo padre es
        //o de tipo Hijo.
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super( nombre, apellido );//LLamar al cosntuctor de la clase Padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //SobreEscritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan ', 'Perez');
console.log( persona1.toString() );//get nombre
''
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );
console.log( empleado1.toString() );