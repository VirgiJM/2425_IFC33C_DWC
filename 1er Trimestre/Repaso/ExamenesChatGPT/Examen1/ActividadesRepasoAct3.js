let persona = {
    nombre: "Virginia",
    edad: 23,
    profesion: "Programadora"
}

function verPersona() {
    return `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Profesión: ${persona.profesion}`;
}

console.log(verPersona());