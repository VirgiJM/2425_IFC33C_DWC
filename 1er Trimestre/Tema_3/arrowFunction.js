function suma(param1, param2){
    return param1 + param2;
}

// Esto es lo mismo
let suma = (param1, param2) => {
    return param1 + param2; // Devolución explícita
}

// Se puede hacer así si es sólo una línea. Creo que las arrow function es para algo del contexto superior
let suma = (param1, param2) => param1 + param2; // Devolución / retorno implícito.

