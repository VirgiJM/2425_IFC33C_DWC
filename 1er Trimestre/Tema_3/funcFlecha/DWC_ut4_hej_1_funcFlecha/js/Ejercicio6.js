let tablaDel5 = () => {
    let tabla = document.createElement("table");
    document.body.appendChild(tabla);
    let thead = document.createElement("thead");
    tabla.appendChild(thead);
    let tr;
    let td;
    let th;
    // Para poner los valores de forma horizontal.
    const numeroColumnas = 10;
    const numeroFilas = 10;
    for (let i = 5; i <= 5; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        let th = document.createElement("th");
        th.style.border = "1px solid black";
        th.style.textAlign = "center";
        for (let j = 1; j <= numeroColumnas; j++) {
            let td = document.createElement("td");
            resultado = i * j;
            if (resultado == 0) {
                td.style.fontWeight = "bold";
                td.innerHTML = j;

            } else {
                td.innerHTML = resultado;
            }
            td.style.border = "1px solid black";
            td.style.textAlign = "center";
            tr.appendChild(td);
        }
    }
}

tablaDel5();