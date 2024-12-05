// SELECIONAR ELEMENTOS

let v1 = document.getElementById("hombre");


// CREAR ELEMENTOS
let v8 = document.createElement("h2"); // Lo crea pero no lo pone en ningún sitio. Crearlo != insertarlo.
v8.innerText = ""; // Sólo introduce texto. El código de debajo mostraría literalmente "Hola <strong>tú</strong>".
v8.innerHTML = "Hola <span style color='red'><strong>tú</strong></span>"; // Permite introducir código HTML.
v3[0].appendChild(v8);