let arrayNumeros = [505, 39, 68, 7, 114, 2013, 17];
// Ordenar el array en orden ascendente.

// Función que hace todo
// let ordenar = (array) => {

//     // Creamos las arrays ordenadas.
//     let ordenAscendente = array.sort((a, b) => a - b); // El callback es la función flecha que hay dentro del sort.
//     let ordenDescendente = array.sort((a, b) => b - a);

//     // Ahora las listas
//     const ascendente = document.createElement("ul");
//     ascendente.id = "ascendente";
//     ascendente.innerHTML = "Orden Ascendente";
//     document.body.appendChild(ascendente);

//     const descendente = document.createElement("ul");
//     descendente.id = "descendente";
//     descendente.innerHTML = "Orden Descendente";
//     document.body.appendChild(descendente);


//     ordenAscendente.forEach(element => {
//         let li = document.createElement("li");
//         li.innerHTML = element;
//         ascendente.appendChild(li);
//     });

//     ordenDescendente.forEach(element => {
//         let li = document.createElement("li");
//         li.innerHTML = element;
//         descendente.appendChild(li);
//     })

// }

// ordenar(arrayNumeros);


let ordenar = (array) => {
    let ordenAscendente = array.slice();
    ordenAscendente = ordenAscendente.sort((a, b) => a - b);

    let ordenDescendente = array.slice();
    ordenDescendente = ordenDescendente.sort((a, b) => b - a);
    // const ordenAscendente = array.sort((a, b) => a - b);
    // const ordenDescendente = array.sort((a, b) => b - a);

    return [ordenAscendente, ordenDescendente];
}

const ascendente = document.createElement("ul");
ascendente.id = "ascendente";
ascendente.innerHTML = "Orden Ascendente";
document.body.appendChild(ascendente);

const descendente = document.createElement("ul");
descendente.id = "descendente";
descendente.innerHTML = "Orden Descendente";
document.body.appendChild(descendente);

let mostrar = (array, id) => {
    array.forEach(element => {
        let ul = document.getElementById(id);
        const li = document.createElement("li");
        li.innerHTML = element;
        ul.appendChild(li);
    });
}

let resultado = ordenar(arrayNumeros);
let resultadoAsc = resultado[0];
let resultadoDesc = resultado[1];
console.log(resultadoAsc);
console.log(resultadoDesc);

mostrar(resultadoAsc, "ascendente");
mostrar(resultadoDesc, "descendente");