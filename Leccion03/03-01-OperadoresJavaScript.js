/*
+ = Suma
- =  Resta
* = Multiplicación
** = Exponeciación
/ = Divición
% = Modulo
++ = Incremento
-- = Decremento
*/

let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la Suma: " + z);

z = a - b;
console.log("Resultado de la Resta: " + z);

z = a * b;
console.log("Resultado de la Multiplicación: " + z );

z = a / b;
console.log("Resultado de la Divición: " + z );

z = a % b; //Residuo de la Divición
console.log("Resultado del operador Modulo (Residuo): " + z );

z = a ** b; //Exponente
console.log("Resultado del operador Exponente (3^2): " + z );

//Incremento
//Pre-incremento (El operador ++  antes la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (El operador ++  despues la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento (El operador ++  antes la variable)
z = --a;
console.log(a);
console.log(z);

//Post-decremento (El operador ++  despu es la variable)
z = b--;
console.log(b);
console.log(z);
