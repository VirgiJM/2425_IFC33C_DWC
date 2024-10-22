function Marca(nombre) {
    this.nombre = nombre;
}

function Modelo(marca, modelo) { // Marca y modelo son propiedades del objeto.
    this.marca = marca;
    this.modelo = modelo;
}

let ford = new Marca("FORD");
let citroen = new Marca("CITROEN");
let seat = new Marca("SEAT");

let cortina = new Modelo(ford, "CORTINA");
let fiesta = new Modelo(ford, "FIESTA");
let saxo = new Modelo(citroen, "SAXO");
let c3 = new Modelo(citroen, "C3");

let coches = [cortina, fiesta, saxo, c3];
console.log(coches);
console.log(ford.nombre);

let div = document.getElementById("app");
let div2 = document.querySelector("#app");
// let div3 = document.querySelector("body div:first-child"); // Este y div2 es lo mismo, pero div2 mucho más sencillo.


// Crear una tabla
let table = document.createElement("table");
table.id = "coches"; // Con esto, podemos otorgarle un id a un elemento creado.

let thead = document.createElement("thead");
table.appendChild(thead);

let tr = document.createElement("tr");
let th = document.createElement("th");

let cabeceras = ["MARCA", "MODELO"];
for (let cabecera of cabeceras) {
    th = document.createElement("th");
    th.innerText = cabecera;
    tr.appendChild(th);

}

// let th = document.createElement("th");
// th.innerText = "MARCA";
// tr.appendChild(th);

// let th2 = document.createElement("th");
// th2.innerText = "MODELO";
// tr.appendChild(th2);

let tbody = document.createElement("tbody");
table.appendChild(tbody);

for (let i = 0; i < coches.length; i++) {
    tr = document.createElement("tr");
    tbody.appendChild(tr);

    // for (let j = 0; j < coches[i].modelo.length; j++) {
    //     td = document.createElement("td");        
    //     td.innerText = coches[i].modelo[j];
    //     tr.appendChild(td);
    // }

    for (let propiedad in coches[i]) {
        td = document.createElement("td");
        if (typeof coches[i][propiedad] === "string") {
            td.innerText = coches[i][propiedad];
        } else {
            td.innerText = coches[i][propiedad].nombre;
        }
        tr.appendChild(td);
    }

    // td.innerText = coches[i].marca.nombre;
    // tr.appendChild(td);

    // td = document.createElement("td");
    // td.innerText = coches[i].modelo;
    // tr.appendChild(td);
}

div.appendChild(table);
table.style.backgroundColor = "yellow";

// console.log(table);