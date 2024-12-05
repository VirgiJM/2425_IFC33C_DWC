let array = [505, -39, 114, -7];
function noNegativos(array) {
    // arrayConNegativos = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            // console.log(array[i]);
            // delete array[i]; // Borrará los elementos pero quedarán en empty las posiciones (es decir, con la misma longitud). Mejor buscar otro método.
            // arrayConNegativos = array.splice(i, 1); // Splice recibe dos parámetros: la posición que vamos a quitar y cuántas posiciones vamos a quitar a partir de esa. He almacenado los valores en otro array.
            array.splice(i, 1); // También puede hacerse sin guardar los valores eliminados en otra array.
        }
    }
    return array;
}

console.log(noNegativos(array));