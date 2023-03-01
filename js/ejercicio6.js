// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

var num1 = prompt("Escribe un número");
var num2 = prompt("Escribe otro número");
if (num1 > num2) {
document.write(num1);
} else {
document.write("El número mayor es el " + num2);
}