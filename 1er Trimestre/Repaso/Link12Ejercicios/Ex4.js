let array1 = [7, -40, 505, -114, -412, 39, 114];
let array2 = [4.5, -68, 74.9, 55, -114.5];

let resultadoArray1 = 0;
let resultadoArray2 = 0;

for (let i = 0; i < array1.length; i++) {
    resultadoArray1 += array1[i];
}

for (let i = 0; i < array2.length; i++) {
    resultadoArray2 += array2[i];
}

console.log("El sumar y restar los valores " + array1 + " da como resultado: " + resultadoArray1);
console.log("El sumar y restar los valores " +  array2 + " da como resultado: " + resultadoArray2);
