let Auto = {
    marca: "Ford",
    modelo: "Cortina",
    year: 2013,
    velocidad: 50,
    acelerar: function() {
        this.velocidad += 10;
    }
}

console.log(Auto.velocidad);
Auto.acelerar();
Auto.acelerar();
Auto.acelerar();
console.log(Auto.velocidad);