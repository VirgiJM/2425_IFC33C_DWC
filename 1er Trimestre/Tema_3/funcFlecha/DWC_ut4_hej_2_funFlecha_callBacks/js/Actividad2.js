const personas = [
    { nombre: "Miguel", edad: 28 },
    { nombre: "Luisa", edad: 22 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Sofía", edad: 27 }
];

let orden = (array) => {
    array = array.sort((a, b) => a.edad - b.edad);
    return array;
}

console.log(orden(personas));

let mostrar = (array) => {
    const tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.style.border = "1px solid black";
    document.body.appendChild(tabla);
    const thead = document.createElement("thead");
    tabla.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    let th = document.createElement("th");
    th.innerHTML = "Nombre";
    tr.appendChild(th); 
    th = document.createElement("th");
    th.innerHTML = "Edad";
    tr.appendChild(th);

    array.forEach(element => {
        tr = document.createElement("tr");
        tabla.appendChild(tr);
        td = document.createElement("td");
        td.innerHTML = element.nombre;
        tr.appendChild(td);
        tabla.appendChild(tr);
        td = document.createElement("td");
        td.innerHTML = element.edad;
        tr.appendChild(td);
    });
}

mostrar(personas);