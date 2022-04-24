//function constructor de objetos de tipo persona
function persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.prototype.tel = '44332211';

let padre = new persona( 'Juan', 'Perez', 'jperez@gmail.com' );
padre.tel = '1122334433';
console.log(padre.tel);

let madre = new persona( 'Laura', 'Quintero', 'lquintero@gmail.com' );
padre.tel = '66889900';
console.log(madre.tel);