// Usaré tres categorias: una hará referencia a tareas de casa, otra a las tareas de una dependienta en una tienda de deporte, y la última, un estudiante.
let tarea1 = { nombre: "Limpiar baño", categoria: "Casa" };
let tarea2 = { nombre: "Sacar género nuevo", categoria: "Trabajo" };
let tarea3 = { nombre: "Terminar actividades de biologia", categoria: "Estudios" };
let tarea4 = { nombre: "Planchar", categoria: "Casa" };
let tarea5 = { nombre: "Comprobar tallas de calzado Nike", categoria: "Trabajo" };
let tarea6 = { nombre: "Completar mapa político de Europa", categoria: "Estudios" };

let arrayTareas = [];
arrayTareas.push(tarea1);
arrayTareas.push(tarea2);
arrayTareas.push(tarea3);
arrayTareas.push(tarea4);
arrayTareas.push(tarea5);
arrayTareas.push(tarea6);

let listaCasa = document.createElement("ul");
let h2Casa = document.createElement("h2");
document.body.appendChild(listaCasa);
listaCasa.id = "casa";
h2Casa.innerHTML = "Tareas del hogar";
h2Casa.style.color = "red";
listaCasa.appendChild(h2Casa);

let listaTrabajo = document.createElement("ul");
let h2Trabajo = document.createElement("h2");
document.body.appendChild(listaTrabajo);
listaTrabajo.id = "trabajo";
h2Trabajo.innerHTML = "Tareas en el ambiente laboral";
h2Trabajo.style.color = "blue";
listaTrabajo.appendChild(h2Trabajo);

let listaEstudios = document.createElement("ul");
document.body.appendChild(listaEstudios);
let h2Estudios = document.createElement("h2");
listaEstudios.id = "estudios";
h2Estudios.innerHTML = "Tarea escolar";
h2Estudios.style.color = "green";
listaEstudios.appendChild(h2Estudios);

for (let i = 0; i < arrayTareas.length; i++) {
    if (arrayTareas[i].categoria == "Casa") {
        let tareaCasa = document.createElement("li");
        tareaCasa.innerHTML = arrayTareas[i].nombre;
        // tareaCasa.style.color = "black"; // Al cambiarle el color arriba también se aplica a los elementos de la lista. Prefiero que sólo el "título" quede con otro color.
        listaCasa.appendChild(tareaCasa);
    } else if (arrayTareas[i].categoria == "Trabajo") {
        let tareaTrabajo = document.createElement("li");
        tareaTrabajo.innerHTML = arrayTareas[i].nombre;
        // tareaTrabajo.style.color = "black";
        listaTrabajo.appendChild(tareaTrabajo);
    } else if (arrayTareas[i].categoria == "Estudios") {
        let tareaEscolar = document.createElement("li");
        tareaEscolar.innerHTML = arrayTareas[i].nombre;
        // tareaEscolar.style.color = "black";
        listaEstudios.appendChild(tareaEscolar);
    }
}