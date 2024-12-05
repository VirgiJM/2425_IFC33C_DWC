// Fórmula para generar un número aleatorio entre un intérvalo.
let numero = Math.floor(Math.random() * (max - min + 1) + min);

// Fórmula para desordenar una array.
array.sort(function () { return Math.random() - 0.5 });

// Calcular mínimo comúm múltiplo de dos números
function mcm(num1, num2) {
    if (num1 <= 0 || num2 <= 0) {
        return false;
    }
    let multiplo = 1;
    while (multiplo % num1 !== 0 || multiplo % num2 !== 0) {
        multiplo++;
    }
    return multiplo;
}

// calcular máximo común divisor de dos números
function mcd(num1, num2) {
    while (num2 !== 0) {
        let residuo = num1 % num2;
        num1 = num2;
        num2 = residuo;
    }
    return num1;
}

// Recorrer un array de arrays en un objeto.
for (let i = 0; i < jsonObj.members.length; i++) {
    console.log("Nombre: " + jsonObj.members[i].name);
    console.log("Edad: " + jsonObj.members[i].age);
    console.log("Identidad secreta: " + jsonObj.members[i].secretIdentity);
    console.log("Poderes" + jsonObj.members[i].powers);
    console.log("---------------");
}

// Anagrama
function esAnagrama(valor1, valor2) {
    let cad1 = valor1.trim().toLowerCase(); // Trim quita los espacios en blanco que hay al principio y al final del string.
    let cad2 = valor2.trim().toLowerCase();


    if (cad1.length !== cad2.length) {
        return false;
    }

    let letras1 = cad1.split('').sort(); // Split convierte un string en un array con su contenido. Sort lo ordena.
    let letras2 = cad2.split('').sort();
    // console.log(letras1);
    // console.log(letras2);

    for (let i = 0; i < cad1.length; i++) {
        if (letras1[i] != letras2[i]) {
            return false;
        }
    }
    return true;
}

// Números repetidos en un array
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

// Invertir un array
let invertir = array.reverse();
for (let i = 0; i < invertir.length; i++) {
    console.log(invertir[i]);
}

// Quitar TODOS los espacios en blanco de un String
return string.trim().split(' ').filter(palabra => palabra !== '').join(' ');