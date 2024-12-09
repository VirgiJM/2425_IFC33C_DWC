const numeros = [505, 39, 68, 114];

let promedio = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let resultado = suma / array.length;
    // return resultado;
    const parrafo = document.createElement("p");
    parrafo.innerHTML = `El promedio del array [${array}] es ${resultado}.`;
    document.body.appendChild(parrafo);
}

promedio(numeros);