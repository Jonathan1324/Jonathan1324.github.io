let sqrt = Math.sqrt
let x,y = Math.pow
let round = Math.round
let abs = Math.abs
let π = Math.PI
let e = Math.E

function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById('resultArea');
    let result = eval(container.innerHTML);

    if (container.innerHTML.endsWith('/ 0')) {
        container.innerHTML = 'undefined'
    } else {
        container.innerHTML = result;
    }
}

function deleteLast() {
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function deleteAll() {
    let container = document.getElementById('resultArea');
    container.innerHTML = container.innerHTML.slice(0, -1000000);
}

function Res() {
    let container = document.getElementById('resultArea');
    let result = eval(container.innerHTML);
    container.innerHTML = 'x,y(' + result + ', ';
}

function roundnumber() {
    let container = document.getElementById('resultArea');
    let result = eval(container.innerHTML);
    let num = result
    container.innerHTML = num.toFixed(5);
}

function sin(angle){
    let result = Math.sin(angle * (π / 180));
    return result.toFixed(10)
}

function cos(angle){
    let result = Math.cos(angle * (π / 180));
    return result.toFixed(10)
}

function Tangens(){
    let result = Math.tan(angle * (π / 180));
    return result.toFixed(10)
}