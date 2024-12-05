// Objetos
const persona1 = { nombre: "Virginia", edad: 23, genero: "Mujer", email: "virgijm@hotmail.es" }
const persona2 = { nombre: "María", edad: 30, genero: "Mujer", email: "mariahm@yahoo.com" }
const persona3 = { nombre: "Alexander", edad: 38, genero: "Hombre", email: "alext@gmail.com" }
const persona4 = { nombre: "David", edad: 15, genero: "Hombre", email: "davidv@hotmail.es" }
const persona5 = { nombre: "Miriam", edad: 26, genero: "Mujer", email: "mirijm@hotmail.com" }

let arrayObjetos = [];
arrayObjetos.push(persona1);
arrayObjetos.push(persona2);
arrayObjetos.push(persona3);
arrayObjetos.push(persona4);
arrayObjetos.push(persona5);

console.log(arrayObjetos);

const table = document.createElement("table"); // Creamos la tabla.
table.id = "personas";
document.body.appendChild(table);

table.style.border = "1px solid black";
table.style.borderCollapse = "collapse"; // Con esto podré hacer que las celdas estén separadas entre sí y no queden juntas.

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

let valores = [];
let contador = 0;

for (let llave in persona1) {
    valores[contador] = llave;
    contador++;
}

for (let valor in valores) {
    const th = document.createElement("th");
    th.innerText = valores[valor];
    th.style.border = "1px solid black"; // Borde para las celdas de encabezado
    tr.appendChild(th);
}

for (let i = 0; i < arrayObjetos.length; i++) {
    const tr2 = document.createElement("tr");
    for (let llave in arrayObjetos[i]) {
        const td = document.createElement("td");
        td.innerHTML = arrayObjetos[i][llave];
        td.style.border = "1px solid black"; // Borde para cada celda
        tr2.appendChild(td);
    }
    table.appendChild(tr2);
}
