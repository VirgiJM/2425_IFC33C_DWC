let numero = prompt('Dame un número entre el 1 y el 10');
numero = parseInt(numero); // Con esto, convierto el resultado a número. Si no es un número, dará NaN.




function numeroAleatorio(numero) {
    let resultado = false;
    while (isNaN(numero) || numero > 10 || numero < 1) {
        numero = prompt('Dame un número entre el 1 y el 10');
        numero = parseInt(numero);
    }
    let numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (numero === numeroAleatorio) {
        resultado = true;
    }
    return resultado;
}

let resultado = (numeroAleatorio(numero));
if (resultado) {
    alert("¡Enhorabuena, has acertado!");
} else {
    alert("Lo sentimos, NO has acertado.");
}

// Ejercicio 2

let array = [];
let formula;
let asterisco = "*";
let texto = "";
for (let i = 0; i < 15; i++) {
    formula = Math.floor(Math.random() * 100 + 1);
    cantidad = formula;
    array.push(formula);
    // console.log(array[i]);
        texto = asterisco.repeat(array[i]);
        console.log(texto);
}