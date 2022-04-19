let HoraDia = 6;
let saludo;

if (HoraDia >= 6 && HoraDia <= 11) {
    saludo = "Buenos dias";
}
else if (HoraDia >= 12 && HoraDia <= 18) {
    saludo = "Buenos Tardes";
}
else if (HoraDia >= 19 && HoraDia <= 24) {
    saludo = "Buenos Noches";
}
else if (HoraDia >= 0 && HoraDia < 6) {
    saludo = "Durmiendo";
}
else{
    saludo = "Ingrese una hora Correcta"
}

console.log(saludo);