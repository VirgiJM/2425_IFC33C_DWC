let arrayEnteros = [505, 7, 114, 2013];
for (let i = 0; i < arrayEnteros.length; i++) {
    console.log(arrayEnteros[i]);
}
let arrayEnterosOrdenada = arrayEnteros.sort(function (a, b) { return a - b });

for (let i = 0; i < arrayEnterosOrdenada.length; i++) {
    console.log(arrayEnterosOrdenada[i]);
}

console.log(arrayEnterosOrdenada);

let arrayDobles = [77.14, 0.114, 8.78, 56.2, 33.33];
// let arrayDoblesOrdenada = arrayDobles.sort(function (a, b) { return a - b });
// console.log(arrayDoblesOrdenada);

function ordenarArray(array) {
    array.sort(function (a, b) { return a - b });
    return array;
}

console.log(ordenarArray(arrayDobles));

let arrayNegativa = [-7, -5565, -88, -3, -65];
console.log(ordenarArray(arrayNegativa));