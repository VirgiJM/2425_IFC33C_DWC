let cadena = "cinco";
let cadena2 = "kayak";
let cadena3 = "hohoh";
let cadena4 = "mom";
let cadena5 = "course";
let abba = "ABBA";

function palindromo(palabra) {
    palabra.trim().toLowerCase();
    palabra.split('');
    let contador = palabra.length - 1;
    // let esPalindromo = true;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === palabra[contador]) {
            // console.log("i: " + palabra[i]);
            // console.log("contador: " + palabra[contador]);
            contador--;
            if (palabra[contador] == undefined) {
                return true;
            }
            else {

            }
        }
    }
    return false;
}
console.log(palindromo(cadena5));
console.log(palindromo(abba));