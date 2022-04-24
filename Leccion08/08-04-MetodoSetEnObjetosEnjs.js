//Definiendo un Objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es_pe',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}
//Set = Modificar
console.log( persona.lang );

persona.lang = 'en';

console.log( persona.lang );
console.log( persona.idioma );

