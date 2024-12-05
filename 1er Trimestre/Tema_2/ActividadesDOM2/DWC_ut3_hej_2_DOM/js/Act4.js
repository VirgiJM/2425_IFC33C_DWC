let jugador1 = { nombre: "Matt", puntuacion: 80 };
let jugador2 = { nombre: "María", puntuacion: 75 };
let jugador3 = { nombre: "Roger", puntuacion: 83 };
let jugador4 = { nombre: "Laura", puntuacion: 87 };
let jugador5 = { nombre: "Nick", puntuacion: 90 };
let jugador6 = { nombre: "Diana", puntuacion: 94 };

let jugadores = [];
jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
jugadores.push(jugador4);
jugadores.push(jugador5);
jugadores.push(jugador6);

jugadores.sort(function (a, b) {
    return b.puntuacion - a.puntuacion; // Función para ordenar de mayor a menor. Muy útil. Para ordenar de menor a mayor, cambiar el b por a y viceversa.
});

console.log(jugadores);

const tabla = document.createElement("table");
tabla.id = "tablaPuntuaciones";
tabla.className = "bordes";
tabla.style.border = "1px solid black";
document.body.appendChild(tabla);
const thead = document.createElement("thead");
thead.className = "bordes";
tabla.appendChild(thead);
let tr = document.createElement("tr");
thead.appendChild(tr);
tr.className = "bordes";
let thNombre = document.createElement("th");
thNombre.innerHTML = "Nombre";
thNombre.className = "bordes";
tr.appendChild(thNombre);
let thPuntuacion = document.createElement("th");
thPuntuacion.innerHTML = "Puntuación";
thPuntuacion.className = "bordes";
tr.appendChild(thPuntuacion);

for (let i = 0; i < jugadores.length; i++) {
    let tr2 = document.createElement("tr");
    tabla.appendChild(tr2);
    tr2.className = "bordes";
    // for (let j = 0; j < jugadores[i].length; j++) {
    let tdNombre = document.createElement("td");
    tdNombre.innerHTML = jugadores[i].nombre;
    tr2.appendChild(tdNombre);
    tdNombre.className = "bordes";
    let tdPuntuacion = document.createElement("td");
    tdPuntuacion.innerHTML = jugadores[i].puntuacion;
    tr2.appendChild(tdPuntuacion);
    tdPuntuacion.className = "bordes";
    }

let ths = document.getElementsByClassName("bordes");
for (let i = 0; i < ths.length; i++) {
    ths[i].style.border = "1px solid black";
}