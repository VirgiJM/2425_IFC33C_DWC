let miArraycita = [1, 2, 3, 4, 5];
function desordenar(array) {
    array.sort(function() {return Math.random() - 0.5});
    return array;
}
console.log(desordenar(miArraycita));