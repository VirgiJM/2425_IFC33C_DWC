let numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Hay almacenado un número random entre el 1 y el 10.
// console.log(numeroAleatorio);
let numerUsuario = parseInt(prompt("Introduce un número entre el 1 y el 10 (incluyendo ambos):"));


while (isNaN(numerUsuario) || numerUsuario > 10 || numerUsuario < 1) {
    numerUsuario = parseInt(prompt("Introduce un número entre el 1 y el 10 (incluyendo ambos):"));
}
if (numerUsuario == numeroAleatorio) {
    console.log("Enhorabuena, ¡has acertado!");
} else {
    console.log("Lo siento, has fallado. El número era " + numeroAleatorio);
}