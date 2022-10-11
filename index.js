function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b 
}

function increment(number) {
    number++;
    return number
}

function decrement(number) {
    number--;
    return number
}

function makeInt(number, base = 10) {
    return parseInt(number, base)

}

function preserveDecimal(n) {
    return parseFloat(n)
}