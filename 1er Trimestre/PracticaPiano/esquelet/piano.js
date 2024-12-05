// Función Nota (Constructor)
function Nota(nom, tipus) {
    this.nom = nom;
    this.tipus = tipus;
}

// Función addCerca
function addCerca(nomNota, tipus) {
    let nota = new Nota(nomNota, tipus);
    cerca.push(nota);
}

// Función cercador sin slice
function cercador(partituras) {
    for (let i = 0; i < partituras.length; i++) { // partituras.length es el tamaño de la array de partituras.
        let partitura = partituras[i]; // Cada partitura es un array con el nombre y las notas
        let nombreCancion = partitura[0]; // Variable en la que se guardará el nombre de la canción que coincida
        let notasCancion = partitura[1]; // Array que guarda las notas de una partitura (canción)
        let enPartitura = false; // Variable para confirmar o denegar que "cerca" se encuentra en una partitura.

        // Recorremos las notas de la canción buscando coincidencias con cerca.
        for (let j = 0; j <= notasCancion.length - cerca.length; j++) { // For que utilizo para ver si la secuencia de cerca está en alguna partitura. La resta es para que no pase de lo que queda en la partitura.
            let estaEnPartitura = true; // Se pasa a true si la secuencia está en la cancón.

            for (let k = 0; k < cerca.length; k++) {
                if (notasCancion[j + k].nom !== cerca[k].nom || notasCancion[j + k].tipus !== cerca[k].tipus) {
                    estaEnPartitura = false; // La secuencia de cerca NO se encuentra en la partitura.
                    break; // Rompemos el bucle en caso de que no haya ninguna coincidencia.
                }
            }

            // 
            if (estaEnPartitura) {
                enPartitura = true; // Lo ponemos en true si todas las notas de cerca están en una partitura.
                break; // Rompmemos el bucle en caso de encontrar una coincidencia.
            }
        }

        // Sólo entraremos a este if si enPartitura es True. Para que sea True, tiene que haber encontrado, como mínimo, una coincidencia entre las notas de cerca y la de alguna partitura.
        if (enPartitura) {
            console.log(nombreCancion);
        }
    }
}


let nota1 = new Nota("LA", ""); // Nota de prueba 1.
let nota2 = new Nota("DO", "#"); // Nota de prueba 2.
let cerca = [nota1, nota2]; // Array de cerca.


// Creación de las notas para "La Balanguera".
let laBalanguera = ["La Balanguera", [
    new Nota("DO", ""),
    new Nota("RE", ""),
    new Nota("MI", ""),
    new Nota("FA", ""),
    new Nota("FA", ""),
    new Nota("SOL", ""),
    new Nota("SOL", ""),
    new Nota("LA", "#"),
    new Nota("LA", "#")
]];


// Creación de las notas para la canción de "Cumpleañps Feliz".
let happyBirthday = ["Happy Birthday", [
    new Nota("DO", ""),
    new Nota("DO", ""),
    new Nota("RE", ""),
    new Nota("DO", ""),
    new Nota("FA", ""),
    new Nota("MI", "")
]];

// Creación de las notas para la canción "Imagine".
let imagine = ["Imagine", [
    new Nota("LA", ""),
    new Nota("DO", "#"),
    new Nota("LA", ""),
    new Nota("DO", "#"),
    new Nota("MI", "#"),
    new Nota("MI", "#"),
    new Nota("RE", ""),
    new Nota("DO", ""),
    new Nota("LA", ""),
    new Nota("SI", ""),
    new Nota("SI", ""),
    new Nota("SI", ""),
    new Nota("DO", "#"),
    new Nota("RE", "#"),
]]

let partituras = [laBalanguera, happyBirthday, imagine]; // Lista de partituras

// Añadir más notas a cerca
// addCerca("FA", "");
// addCerca("SOL", "#");

// console.log(cerca);

// Llamamos a la función cercador
cercador(partituras);
