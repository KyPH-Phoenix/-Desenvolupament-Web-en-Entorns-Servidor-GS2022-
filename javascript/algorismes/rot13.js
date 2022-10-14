const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let num = getNum(char);

        if (num !== -1) {
            num += 13;

            if (num >= 26) num -= 26;

            result += alphabet.charAt(num);
        } else {
            result += char;
        }
    }

    return result;
}

function getNum(char) {
    for (let i = 0; i < 26; i++) {
        if (alphabet.charAt(i) === char) return i;
    }

    return -1;
}