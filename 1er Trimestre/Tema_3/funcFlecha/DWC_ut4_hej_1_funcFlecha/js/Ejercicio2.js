let lista = ["Alex", "María", "Lucía"];

let agregarElementos = (array) => {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    let li;
    for (nombre of array){
        li = document.createElement("li");
        li.innerHTML = nombre;
        ul.appendChild(li);
    }
}

agregarElementos(lista);