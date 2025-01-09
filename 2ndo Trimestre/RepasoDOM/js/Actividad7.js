let inicio = document.getElementById("inicio");
let tiempo = document.getElementById("tiempo");
let detener = document.getElementById("detener");
let segundos = 0;
let minutos = 0;
let intervalo;
inicio.addEventListener("click", function() {
    intervalo = setInterval(function () {
        segundos++;
        tiempo.innerHTML = minutos + ":" +segundos;
        if (segundos > 59) {
            segundos = 0;
            minutos++;
        }
    }, 1000);
});
detener.addEventListener("click", function() {
clearInterval(intervalo);
});