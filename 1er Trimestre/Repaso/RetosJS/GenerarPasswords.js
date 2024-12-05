const caracteres = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["!", "@", "#", "$", "%", "&", "*", "?", "+", "=", "-", "/", "%"]
];
// console.log(caracteres);
function generarPassword() {
    let min = 15;
    let max = 87;
    let password = "";
    let passwordArray = []
    let formula = Math.floor(Math.random() * (max - min + 1) + min); // Esto determinará la longitud de la password
    console.log(formula);
    for (let i = 0; i < formula; i++) {
        let tipoCaracter = Math.floor(Math.random() * caracteres.length); // Se elige un tipo de carácter aleatorio.
        let caracterRandom = Math.floor(Math.random() * caracteres[tipoCaracter].length);
        passwordArray.push(caracteres[tipoCaracter][caracterRandom]);
    }
    password = passwordArray.join("");
    return password;
}
console.log(generarPassword());