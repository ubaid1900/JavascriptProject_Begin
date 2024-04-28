
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
    var r = Math.random()
    // 2. figure out the multiplier
    var m = Math.pow(10,op1(Number))
    // 3. 1. * 2 
    var Number = r * m;
    // 4. ceil up 3.
    var result = Math.ceil(Number);
    var res = document.getElementById("random_result");
    res.innerText = result;

}

// console.log('hmm');
// console.warn('hmm');
// console.error('hmm');

// getElementById // camel casing
// GetElementById // pascal casing
