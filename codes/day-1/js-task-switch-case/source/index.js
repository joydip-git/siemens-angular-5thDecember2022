function main() {
    var toContinue = 'n'
    do {
        try {
            printMenu()
            var choiceValue = askChoice()
            //args is a variable to store reference of an array containing both values
            var args = getData()
            var calculationResult = calculate(choiceValue, args[0], args[1])
            console.log('Result: ', calculationResult ? calculationResult : 'NA')

            toContinue = askForContinuation()

            if (toContinue >= 'A' && toContinue <= 'Z')
                toContinue = toContinue.toLocaleLowerCase()

        } catch (error) {
            console.log(error.message)
        }
    } while (toContinue !== 'n')
}
//main()
//apart from false, 0, -0, null, undefined, NaN every other expression in boolean expression context will be 'truthified'
if ('false')
    console.log('true')
else
    console.log('false')

var x = false
console.log(x)