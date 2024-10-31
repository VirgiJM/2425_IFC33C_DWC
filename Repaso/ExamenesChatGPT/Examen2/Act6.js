function esPalindtromo(palabra) {
    let copia = "";
    palabra = palabra.trim().toLowerCase();
    copia = palabra.split('').reverse();
    palabra = palabra.split('');
    console.log(palabra);
    console.log(copia);
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] != copia[i]) {
            return false;
        }
    }
    return true;
}

console.log(esPalindtromo("hola"));