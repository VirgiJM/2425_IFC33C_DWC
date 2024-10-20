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
// for (let clave in jsonObj) {
//     console.log(jsonObj[clave]);
// }
console.log("--------------- " + jsonObj.squadName + " ---------------")
console.log("Ciudad de origen: " + jsonObj.homeTown + " // Fecha origen: " + jsonObj.formed);
for (let value of jsonObj.members) {
    console.log("Nombre: " + value.name);
    console.log("Edad: " + value.age);
    console.log("Identidad Secreta: " + value.secretIdentity);
    console.log("Poderes: " + value.powers);
    console.log("---------------");
}