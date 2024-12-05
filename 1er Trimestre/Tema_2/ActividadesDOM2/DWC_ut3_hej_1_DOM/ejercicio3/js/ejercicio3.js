const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

let body = document.getElementsByTagName("body")[0]; // Aunque sólo haya un body, esto devuelve una array. Por eso, uso ese [0],
// Para indicarle que quiero el elemento de la posición 0.

// let contenedor = document.getElementById("contenedor")
let lista = document.createElement("ul");
body.appendChild(lista);

for (let nombre of nombres) {
    let elementos = document.createElement("li");
    // console.log(nombre); // Mostrará los nombres de la lista.
    elementos.innerHTML = nombre;
    // console.log(elementos);
    lista.appendChild(elementos);
}