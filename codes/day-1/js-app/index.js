var x = 10
var y = "joydip"
var a = true
var b = 12.34
var c = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    print: function () {
        return this.id + ',' + this.name + ',' + this.salary
    }
}

console.log(typeof x, typeof y, typeof a, typeof b, typeof c)
var numbers = [1, 2, 3, 4]
//var numbers = new Array(1, 2, 3, 4)
console.log(typeof numbers)

//you can invoke a function written using function decalartion style, before the function declaration itself
console.log(add(12, 4))
//function declartion
function add(a, b) {
    return a + b
}

var result = add(12, 13)
console.log(result)

subtract(12, 3)
function subtract(a, b) {
    console.log(a - b)
}

//you can't invoke a function written using function expression style, before the function expression
// console.log(multiply(12, 4))

//function expression
var multiply = function (a, b) {
    return a * b
}
console.log(multiply(12, 3))

//=== => strict equality (data type of both as well as the value of both)
// !== => strict un-equality
if (x === b)
    console.log('yes')
else
    console.log('no')

var d = null
var concat = 12 + d
console.log(concat)

var value = Number(window.prompt('enter a value', 0))
console.log(value)

var a = 1
switch (1) {

    case 1:
        var a = 2
        break;

    case 2:

        break;

    default:
        break;
}