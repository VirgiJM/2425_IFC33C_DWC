// function numeroAleatorio(numeroPrompt) {
//     let min = 1;
//     let max = 10;
//     let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(numAleatorio);

//     if (numAleatorio != numeroPrompt) {
//         return false;
//     } else {
//         return true;
//     }
// }

// let numero = prompt('Dame un número entre el 1 y el 10');

// while (numero < 1 || numero > 10) {
//     numero = prompt('Dame un número entre el 1 y el 10');
// }
// console.log(numero) // Esto se verá una vez el número esté entre el 1 y el 10.

// // console.log(numeroAleatorio(numero));
// let resultado = numeroAleatorio(numero);
// // console.log(resultado);
// if (resultado) {
//     alert("¡Enhorabuena, has acertado!")
// } else {
//     alert("Lo sentimos, NO has acertado.");
// }

// ACT 2
let arrayAleatoria = [];
let min = 1;
let max = 30;
let asterisco = "*";
let texto = "";

for (let i = 0; i < 15; i++) {
    arrayAleatoria[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    texto = asterisco.repeat(arrayAleatoria[i]);
    console.log(texto);
}
console.log(arrayAleatoria);
