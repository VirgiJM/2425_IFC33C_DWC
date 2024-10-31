function anagramas(palabra1, palabra2) {
    palabra1 = palabra1.trim().toLowerCase();
    palabra2 = palabra2.trim().toLowerCase();

    palabra1 = palabra1.split('').sort();
    palabra2 = palabra2.split('').sort();

    if (palabra1.length == palabra2.length) {
        for (let i = 0; i < palabra1.length; i++) {
            if (palabra1[i] !== palabra2[i]) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
    
}

let p1 = "Casa";
let p2 = "  Saca  ";
console.log(anagramas(p1, p2));