function convertToRoman(num) {
    let unidades = ["I", "V", "X"];
    let decenas = ["X", "L", "C"];
    let centenas = ["C", "D", "M"];

    let mil = Math.trunc(num / 1000);
    let cien = Math.trunc((num % 1000) / 100);
    let diez = Math.trunc(((num % 1000) % 100) / 10);
    let unidad = Math.trunc(((num % 1000) % 100) % 10);

    let result = "";

    for (let i = 0; i < mil; i++) {
        result += "M";
    }

    result += convertToLetters(cien, centenas);
    result += convertToLetters(diez, decenas);
    result += convertToLetters(unidad, unidades);
    
    return result;
}

function convertToLetters(num, leters) {
    switch(num) {
        case 1: return leters[0];
        case 2: return leters[0].repeat(2);
        case 3: return leters[0].repeat(3);
        case 4: return leters[0] + leters[1];
        case 5: return leters[1];
        case 6: return leters[1] + leters[0];
        case 7: return leters[1] + leters[0].repeat(2);
        case 8: return leters[1] + leters[0].repeat(3);
        case 9: return leters[0] + leters[2];
    }

    return"";
}