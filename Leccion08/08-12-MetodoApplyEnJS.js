let persona1 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto: function (titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre : 'Calos',
    apellido : 'Lara',
}
//Uso de Aply para usar el metodo persona1.nombreCompleto con los datos de la persona2
console.log(persona1.nombreCompleto('Lic', '66887711'));

let arreglo =  ['Ing', '55443322'];
console.log(persona1.nombreCompleto.apply( persona2, arreglo ));