let value1 = "";
let value2 = "";
let operator = 0;
let operation = 0;

function addValue(newValue) {
    if (newValue === '=') {
        operateValues();
    } else if (operation == 0) {
        value1 = numberConstruction(value1, newValue);
        document.getElementById("result").innerHTML = value1;
    } else if (operation == 1) {
        value2 = numberConstruction(value2, newValue);
        document.getElementById("result").innerHTML = value2;
    }

    console.log(value1, value2)
}

function numberConstruction(value, newValue) {
    console.log(operation);
    let comparation = operation;

    let operators = new Array('+', '-', '*', '/');
    for (let i = 0; i < 4; i++) {
        console.log(operators[i] === newValue)
        if (operators[i] === newValue) {
            operator = i + 1;
            operation++;
        }
    }

    if (operation == comparation) {
        value = "" + value + newValue;
        return value;
    } else {
        return value;
    }
}

function operateValues(){
    let result = 0;

    switch (operator) {
        case 1:
            result = Number(value1) + Number(value2);
            break;
        case 2:
            result = Number(value1) - Number(value2);
            break;
        case 3:
            result = Number(value1) * Number(value2);
            break;
        case 4:
            result = Number(value1) / Number(value2);
    }

    document.getElementById("result").innerHTML = result;
    value1 = result;
    value2 = "";
}