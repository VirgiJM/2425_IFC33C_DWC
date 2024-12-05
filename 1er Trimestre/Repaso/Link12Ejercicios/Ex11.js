let miArraycita = [20, -114, 0.114, 505, 39, 68, -706.33];
function numMayor(array) {
    let numMayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (i == 0) { // Esto quiere decir que la array esté en la posición 0.
            numMayor = array[i]; // numMayor tendrá el valor de la primera posición ya que hasta el momento no hay número más grande.
        } else { // A este else entrará siempre una vez haya pasado la primera posición
            if (numMayor < array[i]) {
                numMayor = array[i];
            }
        }
    }
    return numMayor;
}

console.log(numMayor(miArraycita));