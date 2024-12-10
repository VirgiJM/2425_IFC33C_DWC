let propiedades = Object.keys(window);

let ordenar = (elemento) => {
    let ordenado = propiedades.sort((a, b) => a.localeCompare(b)); // Compara cadenas según el idioma (en mi caso imagino que es el español).
    let primeras10 = [];
    for (let i = 0; i < 10; i++) {
        primeras10.push(ordenado[i]);
    }
    return primeras10;
}


let mostrar = (array) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Las 10 primeras propiedades de Window.";
    document.body.appendChild(h1);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    array.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element;
        ul.appendChild(li);
        console.log(element);
    });

}
// console.log(ordenar(propiedades));
mostrar(ordenar(propiedades));

