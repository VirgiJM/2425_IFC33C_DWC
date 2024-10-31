/**
 * Classifica una persona segons la seva edat.
 * @param {number} edat - L'edat de la persona.
 * @returns {string} - La classificació de la persona.
 */
function classificarPerEdat(edat) {
    let classificacio;
    edat = parseInt(edat);
    switch (edat) {
        case edat < 0:
            classificacio = "Edat no vàlida";
            break;
        case edat >= 0 && edat <= 12:
            classificacio = "Nen/a";
            break;
        case edat > 12 && edat < 18:
            classificacio = "Adolescent";
            break;
        case edat >= 18 && edat < 65:
            classificacio = "Adult";
            break;
        case edat > 64:
            classificacio = "Persona gran";
            break;
        default:
            classificacio = "Error";
                }
                    
    // console.log(edat);
    return classificacio;
}

// Array d'objectes que representen pacients
const pacients = [
    { nom: "Laura", edat: 5 },
    { nom: "Javier", edat: 15 },
    { nom: "Rosa", edat: 25 },
    { nom: "Antonio", edat: 70 },
    { nom: "Sofia", edat: -3 },
];

// Classificació i impressió de cada pacient
for (const pacient of pacients) {
    let classificacio = classificarPerEdat(pacient.edat);
    // console.log(pacient.edat); // Esto tiene la edad
    console.log(`A la pacient ${pacient.nom}, edat ${pacient.edat}, la classificació és: ${classificacio}.`);
    // console.log(classificarPerEdat(pacient.edat));

}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
