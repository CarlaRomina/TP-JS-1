// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.



let num1,num2,num3,t,mayor;
	num1 = parseInt(prompt("Ingrese el nro 1"));
	num2 = parseInt(prompt("Ingrese el nro 2"));
	num3 = parseInt(prompt("Ingrese el nro 3"));

	if (num1 > num2) {
		t = num1;
	}else{
		t = num2;
	}

	if (t > num3) {
		mayor = t;
	}else{
		mayor = num3;
	}

	document.write("El número mayor es " + mayor);