function printMenu() {
    window.alert('1. add \n 2. subtract \n 3. multiply \n 4. divide')
}
function askChoice() {
    var choice = Number(window.prompt('enter a choice[1,2,3,4]', 1))
    return choice
}
function getData() {
    var first = Number(window.prompt('enter 1st Value: ', 0))
    var second = Number(window.prompt('enter 2nd Value: ', 0))

    //returning an array containing both values
    return [first, second]
}
function calculate(choiceInfo, first, second) {
    var result
    switch (choiceInfo) {
        case 1:
            result = add(first, second)
            break;

        case 2:
            result = subtract(first, second)
            break;

        case 3:
            result = multiply(first, second)
            break;

        case 4:
            result = divide(first, second)
            break;

        default:
            result = undefined
            break;
    }
    return result
}

function askForContinuation() {
    return window.prompt('continue?[y/Y/n/N]: ', 'n')
}