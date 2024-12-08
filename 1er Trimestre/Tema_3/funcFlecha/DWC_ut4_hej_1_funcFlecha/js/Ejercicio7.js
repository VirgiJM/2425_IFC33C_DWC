let mostrarNavigator = () => {
    let nombreNavegador = navigator.userAgent;
    // console.log(nombreNavegador);
    let p = document.createElement("p");
    p.innerHTML = `El nombre del navegador es: ${nombreNavegador}.`;
    document.body.appendChild(p);
    p = document.createElement("p");
    let idiomaNavegador = navigator.language;
    p.innerHTML = `El idioma del navegador es: ${idiomaNavegador}.`;
    document.body.appendChild(p);
    console.log(idiomaNavegador);
}

mostrarNavigator();