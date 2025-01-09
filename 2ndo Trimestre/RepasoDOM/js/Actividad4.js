let botones = document.getElementsByTagName("button"); // Array
let parrafo = document.getElementById("parrafo");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function() {
        // parrafo.innerHTML = `Texto ${i + 1}`;
        parrafo.innerHTML = botones[i].textContent; // Tanto este como la línea de encima dan el mismo resultado, pero este es más 'limpio'.
    });
}

// console.log(botones[0].textContent);