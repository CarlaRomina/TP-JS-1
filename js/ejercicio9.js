// Escribe un programa que pida una frase y escriba las vocales que aparecen

let cadena = prompt("Introduce una frase o palabra:");
    let numchar = cadena.length;   
    let voc;
    let contador = 0;
    let i;
    for (i = 0; i < numchar; i++) {
        voc = cadena.charAt(i);  
        if ((voc == "a") || (voc == "e") || (voc == "i") || (voc == "o") || (voc == "u")) {
            contador++;
        }
    }
    document.write("La cantidad de vocales es: " + contador + ".");