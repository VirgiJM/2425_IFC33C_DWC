function esAnagrama(valor1, valor2) {
    let cad1 = valor1.trim().toLowerCase();
    let cad2 = valor2.trim().toLowerCase();
    

    if (cad1.length !== cad2.length) {
        return false;
    }

    let letras1 = cad1.split('').sort();
    let letras2 = cad2.split('').sort();
    // console.log(letras1);
    // console.log(letras2);

    for (let i = 0; i < cad1.length; i++) {
        if (letras1[i] != letras2[i]) {
            return false;
        }
    }
    return true;
}

let cadena1 = "E a t";
let cadena2 = "At  e";

console.log(esAnagrama(cadena1, cadena2));

/* Páginas de interés
https://www.aulascript.com/retos/anagramas.html
https://www.w3schools.com/jsref/jsref_obj_string.asp # -> Mirar todos los Strings.

*/

