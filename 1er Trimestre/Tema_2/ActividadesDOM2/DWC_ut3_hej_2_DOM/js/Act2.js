const img1 = { url: "./img/Landscape1.png", descripcion: "Lorem Ipsum" };
const img2 = { url: "./img/Landscape2.png", descripcion: "Lorem Ipsum" };
const img3 = { url: "./img/Landscape3.png", descripcion: "Lorem Ipsum" };
const img4 = { url: "./img/Landscape4.png", descripcion: "Lorem Ipsum" };
const img5 = { url: "./img/Landscape5.png", descripcion: "Lorem Ipsum" };
const img6 = { url: "", descripcion: "Lorem Ipsum" };
const img7 = { url: "", descripcion: "Lorem Ipsum" };
const img8 = { url: "", descripcion: "Lorem Ipsum" };
const img9 = { url: "", descripcion: "Lorem Ipsum" };
const img10 = { url: "", descripcion: "Lorem Ipsum" };

let galeria = [];
galeria.push(img1);
galeria.push(img2);
galeria.push(img3);
galeria.push(img4);
galeria.push(img5);

console.log(galeria);
const h1 = document.createElement("h1");
h1.innerHTML = "Galería de imágenes";
document.body.appendChild(h1);
const divPrincipal = document.createElement("div"); // Este div contendrá toda la galería.
document.body.appendChild(divPrincipal);

// Hacer un for que genere un div y un img por imágen.
for (let i = 0; i < galeria.length; i++) {
    let div = document.createElement("div");
    divPrincipal.appendChild(div); // Aquí se crearán 5 divs en total (uno por cada aumento en el for). Crearé un img por cada div.
    let img = document.createElement("img");
    img.src = galeria[i].url;
    img.style.width = "350px";
    img.style.height = "350px";
    div.appendChild(img);
}