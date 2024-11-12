function tablas() {
    let tabla = document.createElement("table");
    tabla.id = "tablasMultiplicar";
    tabla.style.border = "1px solid black";
    tabla.style.width = "350px";
    tabla.style.height = "350px";
    document.body.appendChild(tabla);
    const numeroFilas = 10;
    const numeroColumnas = 10;
    let resultado = 0;
    for (let i = 0; i <= numeroFilas; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        let th = document.createElement("th");
        if (i == 0) {
            th.innerHTML = "x";
        } else {
            th.innerHTML = i;
        }
        th.style.border = "1px solid black";
        th.style.textAlign = "center";
        tr.appendChild(th);
        for (let j = 1; j <= numeroColumnas; j++) {
            let td = document.createElement("td");
            resultado = i * j;
            if (resultado == 0 ) {
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

tablas();