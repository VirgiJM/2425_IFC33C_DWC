let numero = 0;

console.log("------ TABLA DEL 0 ------");
for (let i = 0; i <= 10;) {
    if (numero > 10) {
        numero = 0;
        i++
        if (i <= 10) {
            console.log("------ TABLA DEL " + i + " ------");
        } else {
            break;
        }
    }
    console.log(i + " x " + numero + " = " + i * numero);
    numero++;
}