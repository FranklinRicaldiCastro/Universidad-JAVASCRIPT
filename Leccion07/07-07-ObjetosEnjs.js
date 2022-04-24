let x = 10;
console.log(x.length);

//Definiendo un Objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido
    }
}
//Imprimir uno a uno
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
//Imprimir todo el objeto para
console.log(persona);