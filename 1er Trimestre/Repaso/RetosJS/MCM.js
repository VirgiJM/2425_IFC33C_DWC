function mcm(num1, num2) {
    if (num1 <= 0 || num2 <=0) {
        return false;
    }
    let multiplo = 1;
    while (multiplo % num1 !== 0 || multiplo % num2 !== 0) {
        multiplo++;
    }
    return multiplo;
}

console.log(mcm(505,39));