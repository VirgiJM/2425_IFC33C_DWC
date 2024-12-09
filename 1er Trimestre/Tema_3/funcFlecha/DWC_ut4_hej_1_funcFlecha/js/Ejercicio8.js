let listaOrdenada = () => {
    const listaOrdenada = document.createElement("ol");
    document.body.appendChild(listaOrdenada);
    let li;
    for (let i = 1; i <= 10; i++) {
        li = document.createElement("li");
        li.innerHTML = i;
        listaOrdenada.appendChild(li);
    }
}

listaOrdenada();