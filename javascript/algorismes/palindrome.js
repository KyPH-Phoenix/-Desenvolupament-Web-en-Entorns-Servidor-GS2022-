function palindrome(str) {
    str = letersOnly(str).toLowerCase() ;
    let reverse = reverseWord(str);

    return (str === reverse);
}

function letersOnly(str) {
    let result = "";
    let len = str.length;

    for (let i = 0; i < len; i++) {
        let char = str.charAt(i);
        if (isLeter(char)) result += char;
    }

    return result;
}

function isLeter(char) {
    switch(char) {
        case " ": return false;
        case "_": return false;
        case ",": return false;
        case ".": return false;
        case "-": return false;
        case "(": return false;
        case ")": return false;
    }

    return true;
}

function reverseWord(str) {
    let result = "";
    let len = str.length;

    for (let i = 0; i < len; i++) {
        result += str.charAt(len - i - 1)
    }

    return result;
}