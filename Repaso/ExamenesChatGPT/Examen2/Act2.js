function calcularRaizCuadrada(num) {
    if (num < 0) {
        return false;
    }
    let resultado = Math.sqrt(num);
    return resultado;
}

console.log(calcularRaizCuadrada(4));