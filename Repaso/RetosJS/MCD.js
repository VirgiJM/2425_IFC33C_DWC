function mcd(num1, num2) {
    while (num2 !== 0) {
        let residuo = num1 % num2;
        num1 = num2;
        num2 = residuo;
    }
    return num1;
}

console.log(mcd(500, 40));  
