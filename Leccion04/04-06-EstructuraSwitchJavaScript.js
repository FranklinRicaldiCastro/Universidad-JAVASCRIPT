let numero = 4;

let numeroTexto = 'Valor Desconocido';

switch (numero){
    case 1:
        numeroTexto = 'Número Uno';
        break;
    case 2:
        numeroTexto = 'Número Dos';
        break;
    case 3:
        numeroTexto = 'Número Tres';
        break;
    case 4:
        numeroTexto = 'Número Cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}
console.log(numeroTexto);