const nombres = ["Julian", "Nick", "Albert", "María", "Rosa", "Laura", "Alex"];

let mostrar = (array) => {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    array.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element;
        ul.appendChild(li);    
    });
}
mostrar(nombres);