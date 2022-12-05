var numbers = [1, 2, 3, 4]

for (var index = 0; index < numbers.length; index++) {
    var element = numbers[index]
    console.log(element)
}

for (var i in numbers) {
    console.log('numbers[' + i + ']: ' + numbers[i])
}

for (var ele of numbers) {
    console.log('element ', ele)
}

numbers.push(10, 20, 30)
console.log(numbers)

var copyNumbers = numbers.slice(0, 4)
console.log(copyNumbers)

//deletion of elements from array using splice
// var deletedNumbers = copyNunbers.splice(2, 2)
// console.log(deletedNumbers)
// console.log(copyNunbers)

//replacement of elements from array using splice
var deletedNumbers = copyNumbers.splice(2, 2, 50, 60)
console.log(deletedNumbers)
console.log(copyNumbers)

var isEven = function (num) {
    //return num % 2 === 0 ? true : false
    return num % 2 === 0
}
//console.log(isEven(12))
var evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

var isOdd = function (num) {
    //return num % 2 === 0 ? true : false
    return num % 2 !== 0
}
var oddNumbers = numbers.filter(isOdd)
console.log(oddNumbers)

//transformation of array elements
var multipliedNumbers = numbers.map(
    function (element) {
        return element + ' * 5 =' + (element * 5)
    }
)
console.log(multipliedNumbers)

//numbers.find()
//numbetrs.findIndex()
//numbers.sort()

var names = ['anil', 'sunil', 'ankit', 'bipin']
var filteredNames = names.filter(
    function (name) {
        //return name[0] === 'a' ? true : false
        //return name.indexOf('a') !== -1 ? true : false
        return name.indexOf('a') === 0 ? true : false
    }
)

console.log(filteredNames)

