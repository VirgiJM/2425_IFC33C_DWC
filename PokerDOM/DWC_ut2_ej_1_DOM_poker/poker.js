function jugar() {
    console.log("----------------------------------------------------------") // Un separador para cada resultado.
    if (baraja.length > 5) {
        let cartasAleatorias = [];

        // desordenar(baraja);
        for (let i = 0; i < 5; i++) {
            cartasAleatorias[i] = baraja[i];
        }
        // console.log(cartasAleatorias);
        let heGanado = hayPareja(cartasAleatorias);

        // Supongo que aquí tendré que crear una segunda array que almacene las cartas que ya han salido. Creo que hay un método que hace eso, mirarlo (SHIFT).
        // cartasObtenidas.push(cartasAleatorias);
        for (let i = 0; i < 5; i++) {
            cartasObtenidas = baraja.shift();
            console.log(cartasObtenidas);
        }
        // Creo que por aquí debería poner el DOM para introducir las imágenes de las cartas.

        cartasAleatorias.length = 0; // En teoría, esto debería vacíar el array.
        // console.log("Cartas: " + cartasAleatorias); // Muestra el array vacío.
        hasGanado(heGanado);
    } else {
        alert("¡No hay suficientes cartas para jugar!");
    }


}

function desordenar(array) {
    array.sort(function () { return Math.random() - 0.5 }); // Esta función desordena una array. Muy útil.
    return array;
}

function hayPareja(array) { // Esta array compara si en la posición i de una array, el primer carácter coincide con el primer carácter de la posición j de esa misma array.
    let encontrado = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].charAt(0) === array[j].charAt(0)) {
                encontrado = true;
            }
        }
    }
    return encontrado;
}

function hasGanado(booleano) {
    if (booleano) {
        console.log("¡Enhorabuena, has ganado!");
    } else {
        console.log("Lo siento, has perdido.");
    }
}

const palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas']; // Esta array tiene los palos
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Esta array tiene los valores

const baraja = []; // Esta otra array tendrá una mezcla de las otras dos.

for (let i = 0; i < palos.length; i++) {
    for (let j = 0; j < valores.length; j++) {
        baraja.push(`${valores[j]} de ${palos[i]}`); // Este for introducirá en baraja todas las cartas.
    }
}
desordenar(baraja);

let cartasObtenidas = [];
// console.log(jugar());
// console.log(baraja);
