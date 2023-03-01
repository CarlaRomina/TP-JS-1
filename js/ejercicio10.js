// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let num1 = prompt("Escribe un número");
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
document.write("El nro ingresado es divisible por 2, 3, 5 o 7");
} else {
document.write("El nro ingresado no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}