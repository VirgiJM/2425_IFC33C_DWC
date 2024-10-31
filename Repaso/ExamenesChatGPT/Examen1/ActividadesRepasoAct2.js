function raizCuadrada(num) {
    // if (Number.isInteger(num)) {
    //     console.log(num + " es un número.");
    // } else {
    //     console.log(num + " no es un número.");
    //     return false;
    // }
    if (!Number.isInteger(num)) {
        return false;
    }
    if (num < 0 ){
        console.log(num + " es un número negativo.");
        return false;
    }
    let calculo = Math.sqrt(num);
    return calculo;
}

console.log(raizCuadrada(9));