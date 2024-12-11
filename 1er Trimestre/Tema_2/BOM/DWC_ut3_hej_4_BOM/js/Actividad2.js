const div = document.createElement("div");
div.id = "div";
document.body.appendChild(div);


let reloj = () => {
    const hora = new Date();
    document.getElementById("div").innerHTML = hora.toLocaleTimeString();
}
setInterval(reloj, 1000);