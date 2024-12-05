function noEspacios(string) {
    // return string.split(' ').join(''); // Esto funciona, pero quita todos los espacios. Cadena quedaría "TunnelOfLove-DireStraits."
    return string.trim().split(' ').filter(palabra => palabra !== '').join(' '); // Con este quedaría "Tunnel Of Love - Dire Straits, dejando los espacios necesarios."


}

let cadena = "                Tunnel Of Love       - Dire    Straits   ";

/* TRIM */
// console.log(cadena.trim());  // El método trim quita TODOS los espacios de DELANTE y todos los de DETRÁS, pero NO los de enmedio.

/* SPLIT */
// console.log(cadena.split(' ')); // Crea un array en la que almacena TODAS las posiciones del String, incluyendo los espacios en blanco.

/* FILTER */
// Filter tiene que usarse con una array. Sirve para filtrar. 
// let pruebaFilter = [20, 15, 13, 44];
// let mayoresEdad = pruebaFilter.filter(edad => edad > 17);
// console.log(mayoresEdad);

/* JOIN */
// let prueba = ["Lorem", "Ipsum", "Dolor", "Sit", "Atmet", "o", "algo", "así"];
// let pruebaJoin = prueba.join("55");
// console.log(pruebaJoin); // Join también se utiliza con un array. En otra variable, junta los valores de la array y los separa por el contenido que ponemos en el () del join. 

// console.log(cadena);
console.log(noEspacios(cadena));

