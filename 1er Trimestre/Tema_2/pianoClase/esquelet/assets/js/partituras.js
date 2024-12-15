function Cancion(nombre, idioma) {
    this.nombre = nombre;
    this.idioma = idioma
}

let laBalanguera = new Cancion("La Balanguera", "ca");
let happyBirthday = new Cancion("Happy Birthday", "en");
let frereJacques = new Cancion("Frère Jacques", "fr");
let imagine = new Cancion("Imagine", "en");

const canciones = [laBalanguera, happyBirthday, frereJacques, imagine];

// for (let i = 0; i < canciones.length; i++) {
//     console.log(canciones[i].nombre + " " + canciones[i].idioma);
// }

// Crear la tabla.
const tabla = document.createElement("table");
document.body.appendChild(tabla);
tabla.id = "tabla";
tabla.style.border = "1px solid black";
tabla.style.width = "100%";

// Crear Thead.
let thead = document.createElement("thead");
tabla.appendChild(thead);
thead.id = "tablaHead";
let tr = document.createElement("tr");
thead.appendChild(tr);
let th = document.createElement("th");
th.innerHTML = "Título";
tr.appendChild(th);
// th.style.border = "1px solid black";
th = document.createElement("th");
th.innerHTML = "Idioma";
tr.appendChild(th);
th = document.createElement("th");
th.innerHTML = "Acciones";
tr.appendChild(th);

// Crear los valores.
let td = document.createElement("td");
let i;
let i2;
let a;

for (let cancion of canciones) {
    let tr = document.createElement("tr"); // Crear fila aquí
    tabla.appendChild(tr);
    td = document.createElement("td");
    td.innerHTML = cancion.nombre;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = cancion.idioma;
    tr.appendChild(td);

    td = document.createElement("td");
    i = document.createElement("i");
    i.className = "fa-regular fa-pen-to-square";
    td.innerHTML = "Editar ";
    td.appendChild(i);  // Insertar icono
    tr.appendChild(td);


    td = document.createElement("td");
    i2 = document.createElement("i");
    i2.className = "fa-solid fa-trash";
    td.innerHTML = "Eliminar ";
    td.appendChild(i2);
    td.style.cursor = "pointer"; // Esto sirve para que el cursor cambie cuando lo pase por encima.
    td.onclick = eliminar;
    tr.appendChild(td);

    if (cancion.nombre == "Imagine") {
        // Crear 100 filas adicionales sin sobrescribir la fila principal
        for (let j = 0; j < 100; j++) {
            let trCopy = document.createElement("tr"); // Nueva fila para cada iteración
            tabla.appendChild(trCopy);
            td = document.createElement("td");
            td.innerHTML = cancion.nombre;
            trCopy.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = cancion.idioma;
            trCopy.appendChild(td);

            td = document.createElement("td");
            i = document.createElement("i");
            i.className = "fa-regular fa-pen-to-square";
            td.innerHTML = "Editar ";
            td.appendChild(i);
            trCopy.appendChild(td);

            td = document.createElement("td");
            i2 = document.createElement("i2");
            i2.className = "fa-solid fa-trash";
            td.innerHTML = "Eliminar ";
            td.appendChild(i2);
            td.style.cursor = "pointer"; // Esto sirve para que el cursor cambie cuando lo pase por encima.
            td.onclick = eliminar;
            trCopy.appendChild(td);
        }
    }
}


// Dar efectos a los tds.
let contador = 0;
let tds = document.getElementsByTagName("td");
for (let td of tds) {
    td.style.border = "1px solid black";
    td.style.textAlign = "center";
    if (contador % 2 == 0) {
        td.style.backgroundColor = "#e0e0e0";
    } else {
        td.style.backgroundColor = "#ffffff";
    }
    contador++;
}

// Dar efectos a los ths
let ths = document.getElementsByTagName("th");
for (let th of ths) {
    th.style.border = "1px solid black";
    th.style.backgroundColor = "#d50000";
    th.style.color = "white";
}
const maxTh = ths.length - 1;
console.log(maxTh);
ths[ths.length - 1].colSpan = 2;

function eliminar() {
    let borrar = prompt("¿Estás seguro de que quieres eliminar la partitura? Y/N.")
    if (borrar == "Y" || borrar == "y") {
        alert("Partitura eliminada");
        // Código para borrar la partitura
    } else if (borrar == "N" || borrar == "n") {
        alert("No se ha borrado la partitura.");
    } else {
        alert("Has introducido una respuesta inválida.");
    }
}

// Lo del Login
// let idLogin = document.getElementById("login");
// idLogin.style.cursor = "pointer";
// if (idLogin.onclick) {
//     window.open("login.html", '_blank', "height=700,width=700");
// }
// let id = document.getElementById("login");
// id.style.cursor = "pointer";
// id.onclick = alert("HOLA");

document.getElementById("login").style.cursor = "pointer";
document.getElementById("login").onclick = function () {abrirLogin()};
let ventana;
function abrirLogin() {
    ventana = window.open("login.html", '_blank', "height=450,width=600");
    moverVentana();
}

function moverVentana() {
    ventana.moveTo(550,250);
}