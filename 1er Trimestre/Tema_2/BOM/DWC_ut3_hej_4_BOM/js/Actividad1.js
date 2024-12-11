
// Nombre del navegador
let nombre = navigator.userAgent;

// Versión del navegador
let version = navigator.appVersion; // Obsoleto, pero funciona.

// Cookies activadas.
let cookies = navigator.cookieEnabled;

const ul = document.createElement("ul");
document.body.appendChild(ul);

let datos = [nombre, version, cookies];
for (let dato of datos) {
    let li = document.createElement("li");
    li.innerHTML = dato;
    if (dato === true) {
        li.innerHTML = `¿Están las cookies habilitadas? ${dato}`;
    }
    ul.appendChild(li);
    // console.log(dato);
}