let jugadores = [
    { nombre: "Pepe", puntuacion: "40" },
    { nombre: "Juan", puntuacion: "80" },
    { nombre: "Antonio", puntuacion: "25" },
    { nombre: "Felipe", puntuacion: "92" },
    { nombre: "Daniel", puntuacion: "15" },
];

let cabeceras = ["nombre", "puntuación"];

jugadores.sort((jugador1, jugador2) => jugador2.puntuacion - jugador1.puntuacion); // Para ordenar de mayor a menor.
// Compara dos números y si el resultado es positivo, significa que jugador2 tiene que ir antes que jugador 1.

let divElem = document.querySelectorAll("#tabla")[0];
// console.log(divElem);

let tablaNodo = document.createElement("table");
let tablaHead = document.createElement("thead");
let tablaTr = document.createElement("tr");
let tablaTh;

for (let cabecera of cabeceras) {
    tablaTh = document.createElement("th");
    tablaTh.innerText = cabecera;
    tablaHead.appendChild(tablaTh);
}

tablaTr.appendChild(tablaTh);
tablaHead.appendChild(tablaTr);
tablaNodo.appendChild(tablaHead);
divElem.appendChild(tablaNodo);

let tablaBody = document.createElement("tbody");
let tablaTd;


for (let jugador of jugadores) {
    tablaTr = document.createElement("tr");

    for (let clave of Object.values(jugador)) {
        tablaTd = document.createElement("td");
        tablaTd.innerText = jugador;
        tablaTr.appendChild(tablaTh);
    }
}