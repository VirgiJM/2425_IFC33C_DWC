function tareaPrincipal(callback) {
    setTimeout(() => {
        console.log("Realizando una tarea...")
    }, 1000);
    callback();
}

function tareaSecundaria(callback) {
    setTimeout(() => {
        console.log("Realizando segunda tarea.")
    }, 1000);
    callback();
}

function tareaTerciaria(callback) {
    setTimeout(() => {
        console.log("Realizando tercera tarea.")
    }, 1000);
    callback();

}

// CALLBACK HELL
// Cuando hay un callback detrás de otro detrás de otro detrás de otro... Y no sabes ni donde van los paréntesis (o algo así).

tareaPrincipal(() => {
    tareaSecundaria(() => {
        tareaTerciaria(() => {
            console.log("¡Hemos terminado las tareas!");
        })
    })
})

// Promesas
function tareaPrincipal2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea principal controlada");
            resolve();
        }, 3000);
    });
}

function tareaSecundaria2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea secundaria controlada");
            resolve();
        }, 1000);
    });
}

function tareaTerciaria3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea terciaria controlada");
            resolve();
        }, 1000);
    });
}


tareaPrincipal2()
    .then(tareaSecundaria2)
    .then(tareaTerciaria3)
    .then(() => console.log("Hemos terminado las tareas."));
