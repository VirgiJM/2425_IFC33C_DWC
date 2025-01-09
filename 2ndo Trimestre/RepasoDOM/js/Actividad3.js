let boton = document.getElementById("boton");
let p = document.createElement("p");
document.body.appendChild(p);
let contador = 0;
boton.addEventListener("click", function() {
    contador++;
    p.innerHTML = `El número de clicks es ${contador}.`;
});