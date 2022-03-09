function cong() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    a = parseInt(num1);
    b = parseInt(num2);
    let c=a+b;
    document.getElementById('result').innerHTML='Result Division: ' +c;
}
function tru() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    a = parseInt(num1);
    b = parseInt(num2);
    let d = a - b;
    document.getElementById('result').innerHTML = 'Result Division: ' + d;
}
function nhan() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    a = parseInt(num1);
    b = parseInt(num2);
    let e = a * b;
    document.getElementById('result').innerHTML = 'Result Division: ' + e;
}
function chia() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    a = parseInt(num1);
    b = parseInt(num2);
    let f = a / b;
    document.getElementById('result').innerHTML = 'Result Division: ' + f;
}
