let jsonObj = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

console.log("--------------------- " + jsonObj.squadName + " ---------------------");
console.log("---------------- " + "Ciudad de origen: " + jsonObj.homeTown + " // Fecha de origen: " + jsonObj.formed + " ---------------------");
// for (let i = 0; i <jsonObj.members.length; i++) {
// console.log("Nombre: " + jsonObj.members[i].name);
//     console.log("Edad: " + jsonObj.members[i].age);
//     console.log("Identidad Secreta: " + jsonObj.members[i].secretIdentity);
//     console.log("Poderes " + jsonObj.members[i].powers);
// }

for (let miembro of jsonObj.members) {
    console.log("Nombre: " + miembro.name);
    console.log("Edad: " + miembro.age);
    console.log("Identidad Secreta: " + miembro.secretIdentity);
    console.log("Poderes " + miembro.powers);
}


function esAnagrama(palabra1, palabra2) {
    let resultado = false;
    palabra1 = palabra1.trim().toLowerCase();
    palabra2 = palabra2.trim().toLowerCase();
    palabra1 = palabra1.split('').sort();
    palabra2 = palabra2.split('').sort();

    if (palabra1.length === palabra2.length) {
        for (let i = 0; i < palabra1.length; i++) {
            if (palabra1[i] !== palabra2[i]) {
                return false;
            }
        }
    } else {
        return false; // Aquí hago return porque si no tienen la misma longitud no son anagramas.
    }
    return true;
}

console.log(esAnagrama("Cosa", "Saco"));