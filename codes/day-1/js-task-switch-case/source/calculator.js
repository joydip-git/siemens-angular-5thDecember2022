function add(first, second) {
    return first + second
}
function subtract(first, second) {
    return first - second
}
function multiply(first, second) {
    return first * second
}
function divide(first, second) {
    if (second <= 0) {
        throw new Error('denominator should not be equal to less than zero')
    }
    return first / second
}
