let formula = "";
console.log(formula);
let arraycita = [];
let impares = 0;
let numeroMayor = 0;
for (let i = 0; i < 15; i++) {
    formula = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    arraycita[i] = formula;
    if (arraycita[i] % 2 == 0) {
        console.log(arraycita[i]);
    } else {
        impares += arraycita[i];
    }
    if (i == 0) {
        numeroMayor = arraycita[i];
    }
    if (numeroMayor < arraycita[i]) {
        numeroMayor = arraycita[i];
    }

}
console.log("Total: " + impares);
console.log("Número mayor: " + numeroMayor);