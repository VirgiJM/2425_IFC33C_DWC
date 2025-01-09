let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");

boton.addEventListener("click", function () {
    if (parrafo.style.visibility == "hidden") {
        parrafo.style.visibility = "visible";
    } else {
        parrafo.style.visibility = "hidden";
    }
    // console.log(parrafo.style.visibility); // Para ver la visibilidad del párrafo.
});