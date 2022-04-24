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

console.log( persona. nombre);
console.log(persona['apellido']);

//For In
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log( personaArray );

let personaString = persona = JSON.stringify(persona);
console.log(personaString);