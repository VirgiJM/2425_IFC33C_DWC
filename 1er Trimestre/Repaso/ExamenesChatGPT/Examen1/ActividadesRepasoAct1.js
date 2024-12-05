// Fórmula random: Math.floor(Math.random() * (max - min + 1)) + min;
let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log("Posición " + i + ". Número generado: " + array[i]);
    }
}

console.log("-----------");
console.log(array);