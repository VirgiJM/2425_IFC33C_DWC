function jugar() {
    console.log("----------------------------------------------------------") // Un separador para cada resultado.

    if (baraja.length > 5) {
        let trampas = prompt("¿Quieres hacer trampas?");
        console.log(trampas);
        let cartasAleatorias = [];
        let cartasDiv = document.getElementById("cartas");
        cartasDiv.innerHTML = ""; // Es importante tener esto para eliminar el anterior contenido en el div (eliminar la mano anterior).

        // desordenar(baraja);
        for (let i = 0; i < 5; i++) {
            cartasAleatorias[i] = baraja[i];
        }
        // console.log(cartasAleatorias);
        let heGanado = hayPareja(cartasAleatorias);
        console.log(heGanado);

        // Mostramos las cartas seleccionadas.
        for (let i = 0; i < cartasAleatorias.length; i++) {
            let carta = cartasAleatorias[i];
            let [valor, palo] = carta.split(" of "); // Dividir el valor y el palo.
            palo = palo.toLowerCase();
            valor = valor.toLowerCase();
            switch (valor) {
                case 'j':
                    valor = 'jack';
                    break;
                case 'q':
                    valor = 'queen';
                    break;
                case 'k':
                    valor = 'king';
                    break;
                case 'a':
                    valor = 'ace';
                    break;
                case '2':
                    valor = '2';
                    break;
                case '3':
                    valor = '3';
                    break;
                case '4':
                    valor = '4';
                    break;
                case '5':
                    valor = '5';
                    break;
                case '6':
                    valor = '6';
                    break;
                case '7':
                    valor = '7';
                    break;
                case '8':
                    valor = '8';
                    break;
                case '9':
                    valor = '9';
                    break;
                case '10':
                    valor = '10';
                    break;
                default:
                    console.error("Valor no reconocido:", valor);
            }


            let rutaImagen = `./cards/${valor}_of_${palo}.png`; // Ruta de las imagenes
            // console.log(rutaImagen);
            let img = document.createElement("img");
            img.src = rutaImagen;
            img.alt = carta;
            img.style.width = "100px";
            img.style.margin = "5px"; // Con esto puedo ajustar el espacio entre las cartas.

            cartasDiv.appendChild(img); // Agregar la imagen al div
        }


        // Supongo que aquí tendré que crear una segunda array que almacene las cartas que ya han salido. Creo que hay un método que hace eso, mirarlo (SHIFT).
        // cartasObtenidas.push(cartasAleatorias);
        for (let i = 0; i < 5; i++) {
            cartasObtenidas = baraja.shift();
            console.log(cartasObtenidas);
        }
        // Creo que por aquí debería poner el DOM para introducir las imágenes de las cartas.

        cartasAleatorias.length = 0; // En teoría, esto debería vacíar el array.
        // console.log("Cartas: " + cartasAleatorias); // Muestra el array vacío.
        if (trampas == "Si" || trampas == "SI" || trampas == "si" == "Sí" || trampas == "SÍ" || trampas == "sí" || trampas == "s" || trampas == "S") {
            // alert("Tramposa...");
            if (heGanado) {
                alert("Aunque has hecho trampas, habrías ganado igualmente.");
            } else {
                alert("Has ganado haciendo trampas, tramposa...");
                heGanado = true;

            }
        } else {
            if (heGanado) {
                alert("Has ganado sin hacer trampas, ¡Enhorabuena! ;)");
            } else {
                alert("No has hecho trampas y has perdido...");
            }
            // heGanado = true;
            // alert("Juegas limpio");
        }
        // console.log(heGanado);
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
    window.open("../resultado.html", "_blank", width="800px", height="300px");
    const PARRAFO = document.createElement("p");
    const PARRAFOHTML = document.getElementById("resultado");
    const CONTENEDOR = document.getElementById("cartas");
    if (booleano) {
        PARRAFOHTML.innerHTML = ""; // Esto lo uso para eliminar el contenido anterior (como son dos párrafos diferentes, se quedará el contenido del otro párrafo si ya se le ha añadido contenido anteriormente).
        PARRAFO.textContent = "Enhorabuena, ¡has ganado!";
        CONTENEDOR.appendChild(PARRAFO);

    } else {
        PARRAFOHTML.innerHTML = "";
        PARRAFOHTML.textContent = "Lo siento, has perdido...";
        // CONTENEDOR.appendChild(PARRAFOHTML);
    }
}

const palos = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // Esta array tiene los palos
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Esta array tiene los valores

const baraja = []; // Esta otra array tendrá una mezcla de las otras dos.

for (let i = 0; i < palos.length; i++) {
    for (let j = 0; j < valores.length; j++) {
        baraja.push(`${valores[j]} of ${palos[i]}`); // Este for introducirá en baraja todas las cartas.
    }
}
desordenar(baraja);

let cartasObtenidas = [];
// console.log(jugar());
// console.log(baraja);
