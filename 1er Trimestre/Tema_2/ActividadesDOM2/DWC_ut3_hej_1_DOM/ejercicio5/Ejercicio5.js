let encabezadosH1 = document.getElementsByTagName("h1"); // RECORDAR QUE ALMACENA VARIOS ELEMENTOS. NO SOLO UNO !!!!
let encabezadosH2 = document.getElementsByTagName("h2");

for (let i = 0; i < encabezadosH1.length; i++) {
    encabezadosH1[i].style.backgroundColor = "red";
    encabezadosH1[i].style.color = "#004b0e";
}

for (let i = 0; i < encabezadosH2.length; i++) {
    encabezadosH2[i].style.backgroundColor = "blue";
    encabezadosH2[i].style.fontSize = "30px";
}