let array = [{ texto: "Inicio", url: "./Act2.html" }, { texto: "Sobre Nosotros", url: "./Nosotros.html" }, { texto: "Iniciar sesión", url: "IniciarSesion.html" }, { texto: "Registro", url: "Registro.html" }]


const div = document.createElement("div");
document.body.appendChild(div);
div.style.backgroundColor = "#ff00fb";

// Creación del nav
const nav = document.createElement("nav");
div.appendChild(nav);

// Creación de la lista (ul)
const ul = document.createElement("ul");
ul.style.listStyleType = "none"; // Para quitar los puntitos al lado del nombre.
ul.style.textAlign = "center";
nav.appendChild(ul);

// Creación de los elementos de la lista.
for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li"); // Creamos el li.
    li.style.display = "inline";
    li.style.textAlign = "center";
    li.style.margin = "0 10px 0 0";
    let link = document.createElement("a"); // Creamos la url.
    link.href = array[i].url; // Asigno la url a la variable.
    li.className = "lista";
    // li.innerHTML = array[i].texto; // Asigno el texto que tendrá este elemento en la barra de navegación.
    link.innerHTML = array[i].texto;
    li.appendChild(link);
    ul.appendChild(li);
    console.log(link);
    
}
