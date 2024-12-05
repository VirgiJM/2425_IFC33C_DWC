let divs = document.getElementsByClassName("divs"); /* Esto devuelve un array. */
// console.log(divs.length); // Devuelve 4, que es la cantidad de divs que hay.
for (let i = 0; i <divs.length; i++) {
    divs[i].style.backgroundColor = "pink";
}