const buttons = document.getElementsByClassName('button');

let curr = '';
let total = 0;
prevOp = '';
const operations = ['+', '-', 'x', '/']

const textBox = document.querySelector('.text');
textBox.innerHTML = total;

function handleAdd() {
    if (prevOp == '-') { // finish previous operation
        handleSub();
        curr = '0';
    } else if (prevOp == '*') {
        handleMult();
        curr = '0';
    } else if (prevOp == '/') {
        handleDiv();
        curr = '0';
    }
    newTotal = total + parseInt(curr);
    total = newTotal;
    curr = '';
    prevOp = '+';
    textBox.innerHTML = total;
    console.log('total: ' + String(total));
}

function handleSub() {
    if (prevOp == '+') { // finish previous operation
        handleAdd();
        curr = '0';
    } else if (prevOp == '*') {
        handleMult();
        curr = '0';
    } else if (prevOp == '/') {
        handleDiv();
        curr = '0';
    }
    if (total != 0) {
        newTotal = total - parseInt(curr);
    } else {
        newTotal = curr;
    }
    total = newTotal;
    curr = '';
    prevOp = '-';
    textBox.innerHTML = total;
    console.log('total: ' + String(total));
}

function handleDiv() {
    if (prevOp == '+') { // finish previous operation
        handleAdd();
        curr = '1';
    } else if (prevOp == '-') {
        handleSub();
        curr = '1';
    } else if (prevOp == '*') {
        handleMult();
        curr = '1';
    }
    if (prevOp == 'AC') {
        textBox.innerHTML = curr;
        total = parseInt(curr);
    } else {
        newTotal = total / parseInt(curr);
        total = newTotal
        textBox.innerHTML = total;
    }
    curr = '';
    prevOp = '/';
    console.log('total: ' + String(total));
}

function handleMult() {
    if (prevOp == '+') { // finish previous operation
        handleAdd();
        curr = '1';
    } else if (prevOp == '-') {
        handleSub();
        curr = '1';
    } else if (prevOp == '/') {
        handleDiv();
        curr = '1';
    }
    if (total == 0) {
        total = 1;
    }
    if (curr == 0) {
        curr = 1;
    }
    newTotal = total * parseInt(curr);
    total = newTotal;
    curr = '';
    prevOp = '*';
    textBox.innerHTML = total;
    console.log('total: ' + String(total));
}

function handleEquals() {
    if (prevOp == '+') {
        handleAdd();
        curr = '0';
    } else if (prevOp == '-') {
        handleSub();
        curr = '0';
    } else if (prevOp == '*') {
        handleMult();
        curr = '0';
    } else if (prevOp == '/') {
        handleDiv();
        curr = '1';
    }
}

for (let i = 0; i < buttons.length; i++) { // b is an object
    // console.log(typeof buttons[i]);
    let b = buttons[i];
    let s = b.innerHTML
    if (parseInt(s) || s == '0') {
        b.addEventListener('click', () => {
            curr += s;
            textBox.innerHTML = curr;
            console.log('curr: ' + String(curr));
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
            prevOp = 'AC';
            textBox.innerHTML = total;
        });
    } else if (s == '=') {
        b.addEventListener('click', handleEquals);
    }
}