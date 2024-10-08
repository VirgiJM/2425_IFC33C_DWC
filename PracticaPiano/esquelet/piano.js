function Nota(nom, tipus) { // Esto es un objeto llamado Nota.
    this.nom = nom; // Partícula que indica que es un constructor de un objeto. 
    this.tipus = tipus;
}

let nota1 = new Nota("Mi", ""); // Nota creada. Es un objeto. Cuando es New, siempre es un objeto (se utiliza para inicializarlo).
let nota2 = new Nota("Do", "#");
let cerca = [nota1, nota2];
let contador = 2;
function addCerca(nomNota, tipus) {

    let nota = new Nota(nomNota, tipus);
    cerca[contador] = [nota];
    contador++;
}

// let nota1= "Mi";
// let tipo1 = "Normal";

console.log(nota1);
console.log(nota2);

// let melodia = [nota1, nota2];
// console.log(melodia);

addCerca("Re", "");
addCerca("Fa", "#");
console.log(cerca);