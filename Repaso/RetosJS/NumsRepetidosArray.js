let arraycita = [2, 3, 4, 5, 4, 3]
function numsRepetidos(array) {
    let repetidos = []; // Aquí se guardarán los números repetidos.
    let encontrados = []; // Aquí guardaremos TODOS los números del otro array. Se comparará si el array tiene un valor ya almacenado.
    for (let i = 0; i < array.length; i++) {
        if (encontrados.includes(array[i])) { // Con este if comprobamos si el número actual ha sido encontrado.
            if (!repetidos.includes[i]) {
                repetidos.push(array[i])
            }
        } else {
            encontrados.push(array[i])
        }
    }
    return repetidos;
}

console.log(numsRepetidos(arraycita));

let ordenada = arraycita.sort(function (a, b) { return a - b }); // Función para ordenar una array. Muy útil.
console.log(ordenada);