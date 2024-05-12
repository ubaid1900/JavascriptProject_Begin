
function add() {
    var op1 = document.getElementById("add_op1").value;
    var op2 = document.getElementById("add_op2").value;
    var result = Number(op1) + Number(op2);
    var res = document.getElementById("add_result");
    res.innerText = result;
}
function subtract() {
    var op1 = document.getElementById("subtract_op1").value;
    var op2 = document.getElementById("subtract_op2").value;
    var result = Number(op1) - Number(op2);
    var res = document.getElementById("subtract_result");
    res.innerText = result;
}
function multiply() {
    var op1 = document.getElementById("multiply_op1").value;
    var op2 = document.getElementById("multiply_op2").value;
    var result = Number(op1) * Number(op2);
    var res = document.getElementById("multiply_result");
    res.innerText = result;
}
function divide() {
    var op1 = document.getElementById("divide_op1").value;
    var op2 = document.getElementById("divide_op2").value;
    var result = Number(op1) / Number(op2);
    var res = document.getElementById("divide_result");
    res.innerText = result;
}
function square() {
    var op1 = document.getElementById("square_op1").value;
    var op1 = document.getElementById("square_op1").value;
    var result = Number(op1) * Number(op1);
    var res = document.getElementById("square_result");
    res.innerText = result;
}

function powern() {
    var op1 = document.getElementById("powern_op1").value;
    var op2 = document.getElementById("powern_op2").value;
    // var result = Number(op1) ** Number(op2);
    var result = Math.pow(Number(op1), Number(op2));
    var res = document.getElementById("powern_result");
    res.innerText = result;
}
function random() {
    var op1 = document.getElementById("random_op1").value;
    // 1. generate random
    var r = Math.random();
    // 2. figure out the multiplier
    var m = Math.pow(10, Number(op1));
    // 3. 1. * 2 
    var number = r * m;
    // 4. ceil up 3.
    var result = Math.ceil(number);
    var res = document.getElementById("random_result");
    res.innerText = result;
}
function digits() {
    var op1 = document.getElementById("digits_op1").value;
    // 1. convert input to number
    var actualNumber = Number(op1);
    // 2. floor the number
    var floored = Math.floor(actualNumber);
    // 3. convert back to string
    var stringedNumber = String(floored);
    // 4. get length of string
    var length = stringedNumber.length;
    var res = document.getElementById("digits_result");
    res.innerText = length;
}
function reverse() {
    var op1 = document.getElementById("reverse_op1").value;
    var result = '';
    for (let j = op1.length - 1; j >= 0; j = j - 1) {
        const element = op1[j];
        result = result.concat(element);
        // result = result + element;
    }
    var res = document.getElementById("reverse_result");
    res.innerText = result;
}

function alternate() {
    var op1 = document.getElementById("alternate_op1").value;
    var result = '';
    for (let j = 0; j < op1.length; j = j + 1) {
        const element = op1[j];
        if (j % 2 == 0) {
            result = result.concat(element.toLowerCase());
        }
        else {
            result = result.concat(element.toUpperCase());
        }
        // result = result + element;
    }
    var res = document.getElementById("alternate_result");
    res.innerText = result;
}
function italic() {
    var op1 = document.getElementById("italic_op1").value;
    var res = document.getElementById("italic_result");
    res.innerHTML = "<strong><i>" + op1 + "</i></strong>";
}