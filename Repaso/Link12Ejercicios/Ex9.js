let numero = 20;
let numero2 = 21;

function divisiblePor10(num) {
    if (num % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisiblePor10(numero));
console.log(divisiblePor10(numero2));