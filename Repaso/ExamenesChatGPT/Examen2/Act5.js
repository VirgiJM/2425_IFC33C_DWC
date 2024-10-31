function juego(num) {
    let min = 1;
    let max = 10;
    let resultado = "";
    let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    if (num == numRandom) {
        alert("Enhorabuena, ¡has acertado!");
    } else {
        alert("¡Has fallado! El número era " + numRandom + ". Más suerte a la próxima");
    }
    // return resultado;
    return numRandom;
}

let numero = parseInt(prompt("Introduce un número:"));
while (isNaN(numero) || numero > 10 || numero < 1) {
    numero = parseInt(prompt("Introduce un número:"));
}

console.log(juego(numero));