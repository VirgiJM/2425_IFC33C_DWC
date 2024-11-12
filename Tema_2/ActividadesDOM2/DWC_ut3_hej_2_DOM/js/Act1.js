function tablas() {
    const tabla = document.createElement("table");
    document.body.appendChild(tabla);
    tabla.id = "tablasMultiplicar";
    tabla.style.border = "1px solid black";
    let numero = 0;
    let multiplicado = 0
    let tr = document.createElement("tr");
    tabla.appendChild(tr);
    let th = document.createElement("th");
    th.innerHTML = "x";
    tr.appendChild(th);
    while (numero <= 10) {
        let td = document.createElement("td");
        if (multiplicado == 0) {
            console.log("-------- TABLA DEL " + numero + " --------");
            let th2 = document.createElement("th");
            th2.innerHTML = numero;
            tr.appendChild(th2);
            let tr2 = document.createElement("tr");
            tabla.appendChild(tr2);
            td.innerHTML = numero;
            tr2.appendChild(td);
        }
        let tr2 = document.createElement("tr");
        tabla.appendChild(tr2);
        td.innerHTML = numero;
        tr2.appendChild(td);
        let resultado = numero * multiplicado;
        // let td2 = document.createElement("td");
        // td2.innerHTML = resultado;
        // tr2.appendChild(td2);



        console.log(numero + " x " + multiplicado + " = " + resultado);
        multiplicado++;
        if (multiplicado == 11) {

            numero++;
            multiplicado = 0;
        }
    }
}

tablas();