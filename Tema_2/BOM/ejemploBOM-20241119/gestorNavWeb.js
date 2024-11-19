
// Función para mostrar la URL.
function mostrarURLActual() {
    alert("La url es: " + window.location.href);
}

// Función para ir hacia atrás (cargar la anterior página web).
function irAtras() {
    window.history.back();
}

// Función para ir hacia adelante (cargar la siguiente página web).
function irAdelante() {
    window.history.forward();
}

// Obtener información sobre el navegador
function mostrarInfoNavegador() {
    let nombreNavegador = window.navigator.userAgent; // También se puede usar window.navigator.appName, pero creo que está obsoleto.
    let idioma = window.navigator.language; // Idioma del navegador.
    let estaOnLine = window.navigator.onLine; // Ver si el navegador está online.
    alert(`El nombre del navegador es: ${nombreNavegador} \nEl idioma del navegador es: ${idioma} \n¿Está el navegador online? ${estaOnLine}`); // El \n es un salto de línea. Si no uso el ``, se pone "\n" (con las comillas).
}

function redirigirURL() {
    window.location.assign((document.getElementById("urlInput").value));
    // window.location.assign(url);
}

// event.preventDefault() usaremos el ejemplo del formulario de esta página. Cuando le de click al submit, si la url es incorrecta (algo como "lnafenjkw"), este método lanzará un error.

// Creo que una forma de hacer lo de abrir y cerral es declarar una variable fuera y usarla en ambas funciones.
let abrirCerrar;
let estaCerrada;
function abrirPopup() {
    estaCerrada = true;
    abrirCerrar = window.open("https://www.w3schools.com/", '_blank', "height=700,width=700"); // ¡¡¡¡¡ NO PROBAR CON GOOGLE, NO FUNCIONA !!!!!

}

function cerrarPopup() {
    if (estaCerrada) {
        abrirCerrar.close();
        estaCerrada = false;
    } else {
        alert("No hay ninguna ventana por cerrar.");
    }
}