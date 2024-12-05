function conversor(kilometros) {
    kilometros = Number(kilometros);
    if (Number.isNaN(kilometros)) {
        return "Not a Number";
    }
    let equivalencia = 1.609344;
    let millas = kilometros / equivalencia;
    return millas;
}

let kilometros = prompt("Escribe la cantidad (en kilometros) para convertir en millas");
console.log(conversor(kilometros));