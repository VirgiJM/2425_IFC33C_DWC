const tareas = [
    { descripcion: "Lavar los platos", estado: "pendiente" },
    { descripcion: "Hacer la compra", estado: "completado" },
    { descripcion: "Estudiar JavaScript", estado: "pendiente" },
    { descripcion: "Regar las plantas", estado: "completado" },
    { descripcion: "Preparar la cena", estado: "pendiente" }
];

console.log(tareas);

let mostrar = (lista) => {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    let li;
    lista.forEach(element => {
        li = document.createElement("li");
        li.innerHTML = `${element.descripcion}`;
        if (element.estado === "completado") {
            li.style.color = "lightgreen";
            li.innerHTML = `<del>${element.descripcion}</del>`;
        }
        ul.appendChild(li);
    });
    console.log("Contexto: ", this);
}

mostrar(tareas);