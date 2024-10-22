let nombres = ["Freddie", "Ana", "Pedro", "Alberto", "Lucía", "Amelia", "Carlos", "Aria", "Sofía", "David", "Alicia", "Matt", "Alex", "Roger"];

function nombresA(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0).toUpperCase().startsWith("A")) {
            console.log(array[i]);
        }
    }
}

nombresA(nombres);