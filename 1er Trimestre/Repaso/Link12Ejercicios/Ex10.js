let cadena = "  askalskFAslfk  ";
let cadena2 = "asdfghjklñpoiuytrewq";
function numVocales(cadena) {
    let contador = 0;
    cadena = cadena.trim().toLowerCase();
    cadena = cadena.split('');
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
            contador++;
        }
    }
    return contador;
}

console.log(numVocales(cadena));
console.log(numVocales(cadena2));