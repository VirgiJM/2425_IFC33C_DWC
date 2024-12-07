let personas = [
    { nombre: "Julian", edad: 46 },
    { nombre: "Nick", edad: 39 },
    { nombre: "María", edad: 30 },
    { nombre: "Blanca", edad: 15 }
];

// Crear tabla
const tabla = document.createElement("table");
document.body.appendChild(tabla);
const thead = document.createElement("thead");
tabla.appendChild(thead);
let tr = document.createElement("tr");
thead.appendChild(tr);
let th = document.createElement("th");
th.innerHTML = "Nombre";
tr.appendChild(th);
th = document.createElement("th");
th.innerHTML = "Edad";
tr.appendChild(th);

let rellenarTabla = () => {
    let tr;
    let td;
    for (let i = 0; i < personas.length; i++) {
        tr = document.createElement("tr");
        td = document.createElement("td");
        tabla.appendChild(tr);
        td.innerHTML = personas[i].nombre;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = personas[i].edad;
        tr.appendChild(td);
    }
}

rellenarTabla();