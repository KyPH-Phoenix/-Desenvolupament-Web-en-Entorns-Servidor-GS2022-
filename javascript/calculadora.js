let value1 = "";
let value2 = "";
let operator = 0;
let operation = 0;

function addValue(value) {
    let operators = new Array('+', '-', '*', '/');
    for (let i = 0; i < 4; i++) {
        if (operator[i] == value) {
            console.log 
            operator = i + 1;
            operation = 1;
            break;
        }
    }

    if (operation == 0) {
        value1 += "" + value;
    }

    console.log(value1)
}