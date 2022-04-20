let miNumero = "19";
//console.log(miNumero);
//console.log(typeof miNumero);

let edad = Number (miNumero) ;
console.log(typeof miNumero);

if (edad >= 18) {
    console.log("Puede Votar");
}
else{
    console.log("Muy joven para votar");
}

let resultado = (edad >= 18) ? "Puede Votar" : "Muy joven para votar"
console.log(resultado);