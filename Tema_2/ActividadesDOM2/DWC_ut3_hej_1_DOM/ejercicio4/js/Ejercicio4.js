// function cambiarImagen() {
//     // let div = document.getElementsByTagName("div")[0];
//     let imagen = document.getElementsByTagName("img")[0];
//     let sourceImage = imagen.src;
//     console.log(sourceImage);
//     let separar = sourceImage.split('');
//     let url = "";
//     for (let i = 32; i < separar.length; i++) {
//         url += separar[i];
//     }
//     console.log(url); // Su primer valor será "/img/rojo.png".
//     // console.log(separar[32]); La posición en la que se encuentra el "/".
//     // let separar = imagen.src.split(',');
//     console.log(separar);
//     if (imagen.src == "./img/amarillo.png") {
//         imagen.src = "./img/rojo.png";
//     } else {
//         imagen.src = "./img/amarillo.png";

function cambiarImagen() {
    let imagen = document.getElementsByTagName("img")[0];
    let sourceImage = imagen.src;
    
    // Obtener solo el nombre del archivo de la URL completa
    let nombreArchivo = sourceImage.substring(sourceImage.lastIndexOf('/') + 1); // con lastIndexOf('/') almancenamos la ruta después del último /. Siempre será "amarillo.png" o "rojo.png".
    
    // Comprobar el nombre del archivo y cambiar la imagen
    if (nombreArchivo === "amarillo.png") {
        imagen.src = "./img/rojo.png";
    } else {
        imagen.src = "./img/amarillo.png";
    }
}
