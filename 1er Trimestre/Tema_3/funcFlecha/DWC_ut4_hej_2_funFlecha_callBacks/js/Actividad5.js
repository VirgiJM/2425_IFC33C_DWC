let numeros = [505, 39, 114, 15, 42, 2013, 17, 68, 7];

let maximo = (array) => {
    let numMax = Math.max(...array); // El ... creo que crea una "lista", de esta forma, Max mirará todos los valores y pillará el más alto.
    const p = document.createElement("p");
    p.innerHTML = `El valor máximo de este array es ${numMax}.`;
    document.body.appendChild(p);
}

let minimo = (array) => {
    let numMin = Math.min(...array);
    const p = document.createElement("p");
    p.innerHTML = `El valor mínimo de este array es ${numMin}.`;
    document.body.appendChild(p);
}

let promedio = (array) => {
    let resultado = 0;
    array.forEach(element => {
        resultado += element;
    });
    const p = document.createElement("p");
    resultado = resultado / array.length;
    p.innerHTML = `El promedio de este array es ${resultado}.`;
    document.body.appendChild(p);
}
maximo(numeros);
minimo(numeros);
promedio(numeros);

