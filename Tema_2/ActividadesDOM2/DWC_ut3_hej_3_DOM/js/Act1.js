// Producto 1
const producto1 = {
    nombre: "Cafetera Automática",
    precio: 129.99,
    descripcion: "Cafetera con múltiples funciones, incluye espumador de leche.",
    urlImagen: "./img/producto1.png"
};

// Producto 2
const producto2 = {
    nombre: "Auriculares Bluetooth",
    precio: 59.99,
    descripcion: "Auriculares inalámbricos con cancelación de ruido.",
    urlImagen: "./img/producto2.png"
};

// Producto 3
const producto3 = {
    nombre: "Reloj Inteligente",
    precio: 199.99,
    descripcion: "Reloj con monitoreo de salud y GPS integrado.",
    urlImagen: "./img/producto3.png"
};

// Producto 4
const producto4 = {
    nombre: "Teclado Mecánico",
    precio: 89.99,
    descripcion: "Teclado RGB mecánico con switches personalizables.",
    urlImagen: "./img/producto4.png"
};

// Producto 5
const producto5 = {
    nombre: "Smartphone",
    precio: 699.99,
    descripcion: "Teléfono inteligente con pantalla AMOLED y cámara de 108MP.",
    urlImagen: "./img/producto5.png"
};

let productos = []
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);

console.log(productos);

// DOM
const h2 = document.createElement("h2");
h2.innerHTML = "Productos";
document.body.appendChild(h2);

// Crearemos un div en el que meteremos todos los productos. 

const div = document.createElement("div");
div.id = "productos";
document.body.appendChild(div);
for (let i = 0; i < productos.length; i++) {
    let h3 = document.createElement("h3");
   
    // Creo que quedará mejor hacer un div por producto, para que quede más separado.
    let divProducto = document.createElement("div");
    divProducto.id = "producto" + (i + 1);
    div.appendChild(divProducto);
    h3.innerHTML = productos[i].nombre; // Aquí se guardará el nombre del producto.
    divProducto.appendChild(h3);
   
    // Asignar las propiedades de cada objeto al html.
    let precio = document.createElement("p"); // Creamos una variable que creará un p y contendrá el precio del producto.
    let descripcion = document.createElement("p"); // Esta variable creará un p y contendrá la descripción del producto.
    let imagen = document.createElement("img"); // Crearemos una imagen que luego contendrá la imagen del producto.
    precio.innerHTML = productos[i].precio + " €"; // Precio del producto.
    descripcion.innerHTML = productos[i].descripcion; // Descripción dle producto.
    imagen.src = productos[i].urlImagen;
    imagen.style.width = "475px";
    imagen.style.height = "450px";
    divProducto.appendChild(precio);
    divProducto.appendChild(descripcion);
    divProducto.appendChild(imagen);




}