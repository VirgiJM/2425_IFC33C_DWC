// Crearé una array con varios números y cada número representará un color. Por ejemplo, el color 1 será rojo.
const min = 0;
const max = 10;

// let formula = Math.floor(Math.random() * (max - min + 1) + min); // El número mínimo será 0, y el máximo, 10. La array tendrá 11 posiciones.
// console.log(formula);

const array = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF69B4", "#4B0082", "#40E0D0", "#DC143C", "#8A2BE2", "#FF8C00", "#7FFF00"];

// console.log(array[formula]);

let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    // console.log(divs[i]);
    divs[i].addEventListener('click', function () {
        let formula = Math.floor(Math.random() * (max - min + 1) + min); // Esto tendrá un número de la array.
        divs[i].style.backgroundColor = array[formula];

    });
}

// divs[0].addEventListener('click', function () {
//     let formula = Math.floor(Math.random() * (max - min + 1) + min); // Esto tendrá un número de la array.
//     divs[0].style.backgroundColor = array[formula];

// });

// divs[1].addEventListener('click', function () {

// });

// divs[2].addEventListener('click', function () {

// });

// divs[3].addEventListener('click', function () {

// });

// divs[4].addEventListener('click', function () {

// });
