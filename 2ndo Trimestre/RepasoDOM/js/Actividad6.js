// JSON de los datos
const datos = [
    { nombre: "María López", edad: 25, ciudad: "Madrid" },
    { nombre: "Carlos Ruiz", edad: 32, ciudad: "Barcelona" },
    { nombre: "Ana Torres", edad: 29, ciudad: "Sevilla" },
    { nombre: "Luis Gómez", edad: 41, ciudad: "Valencia" },
    { nombre: "Laura Díaz", edad: 22, ciudad: "Zaragoza" },
    { nombre: "Jorge Martín", edad: 35, ciudad: "Bilbao" },
    { nombre: "Elena Pérez", edad: 28, ciudad: "Granada" },
    { nombre: "Raúl Sánchez", edad: 33, ciudad: "Málaga" },
    { nombre: "Carmen Gil", edad: 26, ciudad: "Murcia" },
    { nombre: "David Ortiz", edad: 30, ciudad: "Alicante" },
    { nombre: "Alex Casablancas", edad: 39, ciudad: "Barcelona"}
];

// Creamos la tabla
const tabla = document.createElement("table");
tabla.id = "tabla";
tabla.style.border = "1px solid black";
document.body.appendChild(tabla); // La añado al html.

// Crear el thead
let thead = document.createElement("thead");
thead.style.border = "1px solid black";
tabla.appendChild(thead);

// Crear el tr
let tr = document.createElement("tr");
thead.appendChild(tr);

// Contenido del tr (th)
let contador = 0;
for (let i = 0; i < 3; i++) {
    let th = document.createElement("th");
    if (contador == 0) {
        th.textContent = "Nombre";
    } else if (contador == 1) {
        th.textContent = "Edad";
    } else if (contador == 2) {
        th.textContent = "Ciudad";
    }
    tr.appendChild(th);
    contador++;
}

// Crear el tbody
let tbody = document.createElement("tbody");
tbody.style.border = "1px solid black";
tabla.appendChild(tbody);

// Contenido del tbody
console.log(datos.length) // Longitud del JSON
for (let i = 0; i < datos.length; i++) {
    let tr = document.createElement("tr");
    tr.style.border = "1px solid black";
    tbody.appendChild(tr);
    // console.log(datos[i].ciudad);
    let td = document.createElement("td");
    td.textContent = datos[i].nombre;
    td.style.border = "1px solid black";
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = datos[i].edad;
    td.style.border = "1px solid black";
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = datos[i].ciudad;
    td.style.border = "1px solid black";
    tr.appendChild(td);
}

let input = document.getElementById("buscador");
let tds = document.getElementsByTagName("td");
console.log(tds.length); // Total de tds.

input.addEventListener("input", function() {
    let valor = input.value;
    // console.log(valor); // Cada vez que escriba, se verá.
    for (let i = 0; i < tds.length; i++) {
        if (tds[i].textContent == valor) {
            tds[i].style.backgroundColor = "deepskyblue";
        } else {
            tds[i].style.backgroundColor = "white";
        }
    }
});