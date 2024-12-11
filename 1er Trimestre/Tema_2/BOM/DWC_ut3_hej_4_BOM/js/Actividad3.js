let estaCerrada, abrirCerrar;
let abrir = () => {
    estaCerrada = false;
    abrirCerrar = window.open("./NuevaVentana.html", "_blank", "height=300,weigth=300");
}

let cerral = () => {
    if (!estaCerrada) {
        abrirCerrar.close();
        estaCerrada = true;
    } else {
        alert("No hay ninguna ventana abierta.");
    }
}

let mover = () => {
    abrirCerrar.moveTo(500, 100);
}

let redimensionar = () => {
    abrirCerrar.resizeTo(300, 300);
}