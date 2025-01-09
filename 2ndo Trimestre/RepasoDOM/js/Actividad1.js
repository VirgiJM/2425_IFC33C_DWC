let boton = document.getElementById("boton");
let lista = document.getElementById("lista");
boton.addEventListener('click', function () {
    let elemento = prompt("Introduce un elemento a añadir");
    let li = document.createElement("li");
    li.innerHTML = elemento;
    lista.appendChild(li);

}) // No debería usar eventos, pero no hay otra forma de hacerlo
