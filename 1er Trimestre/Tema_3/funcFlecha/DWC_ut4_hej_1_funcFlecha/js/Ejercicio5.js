const texto = "aas dafs sfa";

let contar = (frase) => {
    // let convertir = frase.trim();
    let convertir = frase.trim(); // Esto quita los espacios del principio y del final.
    convertir = convertir.split('').sort(); // Lo convierte en array. Cada caracter es una posición de la array. Lo ordena.
    // Como quiero saber cuántas palabras tiene, el número de espacios determinará cuántas son
    let numero = 0;
    for (let i = 0; i < convertir.length; i++) {
        if (convertir[i] == " ") {
            numero++;
        } else {
            numero++; // Le sumo uno porque si hay un espacio, indica que hay dos palabras. Si no hay espacios, habrá una palabra como mínimo.
            break;
        }
    }

    // Vamos a hacer el párrafo dentro de la función.
    let parrafo = document.createElement("p");
    if (numero == 1) {
        parrafo.innerHTML = `La cadena de texto '${frase}' contiene un total de ${numero} palabra.`;
    } else {
        parrafo.innerHTML = `La cadena de texto '${frase}' contiene un total de ${numero} palabras.`;
    }
    document.body.appendChild(parrafo);
}

contar(texto);
