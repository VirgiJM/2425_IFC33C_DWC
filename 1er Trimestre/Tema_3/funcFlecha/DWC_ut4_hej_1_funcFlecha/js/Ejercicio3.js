let propiedades = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let p;
    p = document.createElement("p");
    p.innerHTML = `El width es ${width}. <br> El height es ${height}.`
    document.body.appendChild(p);

}

propiedades();