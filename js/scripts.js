const buttons = document.getElementsByClassName('button');

let curr = '';
let total = 0;
currentOp = '';
const operations = ['+', '-', 'x', '/']

const textBox = document.querySelector('.text');
textBox.innerHTML = total;

function handleAdd() {
    newTotal = total + parseInt(curr);
    total = newTotal;
    curr = '';
    currentOp = '+';
    textBox.innerHTML = total;
    console.log(newTotal);
}

function handleSub() {
    if (total != 0) {
        newTotal = total - parseInt(curr);
    } else {
        newTotal = curr;
    }
    total = newTotal;
    curr = '';
    currentOp = '-';
    textBox.innerHTML = total;
    console.log(newTotal);
}

function handleDiv() {
    if (currentOp == 'AC') {
        textBox.innerHTML = curr;
        total = parseInt(curr);
    } else {
        newTotal = total / parseInt(curr);
        total = newTotal
        textBox.innerHTML = total;
    }
    curr = '';
    currentOp = '/';
    console.log(newTotal);
}

function handleMult() {
    if (total == 0) {
        total = 1;
    }
    if (curr == 0) {
        curr = 1;
    }
    newTotal = total * parseInt(curr);
    total = newTotal;
    curr = '';
    currentOp = '*';
    textBox.innerHTML = total;
    console.log(newTotal);
}

function handleEquals() {
    if (currentOp == '+') {
        handleAdd();
        curr = '0';
    } else if (currentOp == '-') {
        handleSub();
        curr = '0';
    } else if (currentOp == '*') {
        handleMult();
        curr = '0';
    } else if (currentOp == '/') {
        handleDiv();
        curr = '1';
    }
}

for (let i = 0; i < buttons.length; i++) { // b is an object
    // console.log(typeof buttons[i]);
    let b = buttons[i];
    let s = b.innerHTML
    if (parseInt(s)) {
        b.addEventListener('click', () => {
            curr += s;
            textBox.innerHTML = curr;
            console.log(curr);
        });
    } else if (s == '+') {
        b.addEventListener('click', handleAdd);
    } else if (s == '-') {
        b.addEventListener('click', handleSub);
    } else if (s == 'x') {
        b.addEventListener('click', handleMult);
    } else if (s == '/') {
        b.addEventListener('click', handleDiv);
    } else if (s == 'AC') {
        b.addEventListener('click', () => {
            total = 0;
            curr = '';
            currentOp = 'AC';
            textBox.innerHTML = total;
        });
    } else if (s == '=') {
        b.addEventListener('click', handleEquals);
    }
}



