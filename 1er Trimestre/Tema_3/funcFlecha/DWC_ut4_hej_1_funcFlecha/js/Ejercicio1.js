// Creo que las funciones flecha se decelaran con let o const, no con function.
let parrafo = () => {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Este es un párrafo dinámico.";
    document.body.appendChild(parrafo);
}

parrafo();