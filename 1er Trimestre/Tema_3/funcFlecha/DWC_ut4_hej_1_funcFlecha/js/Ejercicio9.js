let enlaces = () => {
    const sitiosWeb = [
        { nombre: "W3Schools", URL: "https://www.w3schools.com/" },
        { nombre: "YouTube", URL: "https://www.youtube.com" },
        { nombre: "GitHub", URL: "https://github.com" },
        { nombre: "Stack Overflow", URL: "https://stackoverflow.com" },
        { nombre: "Mozilla", URL: "https://www.mozilla.org" }
    ];

    // console.log(sitiosWeb);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    let li;
    for (let elemento of sitiosWeb) {
        li = document.createElement("li");
        li.innerHTML = `${elemento.nombre}: ${elemento.URL}`;
        ul.appendChild(li);
    }

}

enlaces();