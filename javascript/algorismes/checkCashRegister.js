function checkCashRegister(price, cash, cid) {
    let totalCid = calculateTotalMoney(cid);

    // Multiplico por 100 por problemas con la precision de los decimales (GRACIAS JS);
    let change = (cash * 100) - (price * 100);

    if (totalCid < change / 100) return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (totalCid == change / 100) return { status: "CLOSED", change: cid };

    let changeValues = takeChange(change, cid);
    console.log(changeValues);

    if (changeValues == -1) return { status: "INSUFFICIENT_FUNDS", change: [] };

    return { status: "OPEN", change: changeValues };
}

function calculateTotalMoney(cid) {
    let total = 0;
    for (let i = 0; i < cid.length; i++) {
        total += cid[i][1];
    }

    return total;
}

function takeChange(change, cid) {
    let result = [
        ['PENNY', 0],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
    ]

    let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

    for (let i = 8; i >= 0; i--) {
        while(change >= values[i] * 100 && cid[i][1] > 0) {
            change -= values[i] * 100;
            cid[i][1] -= values[i];
            result[i][1] += values[i];
        }
    }

    console.log(change, clean(result));
    return (change == 0) ? clean(result) : -1;
}

function clean(array) {
    let result = new Array();

    for (let i = array.length - 1, j = 0; i >= 0; i--) {
        if (array[i][1] != 0) {
            result[j] = array[i];  
            j++;
        }
    }

    return result;
}