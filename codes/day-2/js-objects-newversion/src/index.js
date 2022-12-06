//function main(){
/*
console.log(globalData)
var globalData
globalData = 100
console.log(globalData)
console.log(person)

//person('anil', 1, 1000)
function sample(name, id, salary) {
    console.log(x) //undefined
    var x
    x = 10
    console.log(x) //10
    for (var i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x)//20
    }
    console.log(x)//20
    //declaration
    function inner() {
        console.log('inner declaration')
    }
    //ex()
    //expression
    var ex
    ex = function () {
        console.log('inner expression')
    }
    inner()
    ex()
}
sample('anil', 1, 1000)
console.log(add)
//add(10, 20)
var add
add = function (a, b) {
    return a + b
}
// console.log(person.prototype)
// console.log(Object.prototype)
*/
//constructor function
function person(name, id, salary) {
    var info
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.print = function () {
        info = this.personName + ', ' + this.personSalary
        return info
    }
}
var anilObject = new person('anil', 1, 1000)
var sunilObject = new person('sunil', 2, 2000)
console.log(anilObject.print())
console.log(sunilObject.print())
/*
Object.prototype.sayHi = function () {
    console.log('Hi ' + this.personName)
}
anilObject.sayHi()
sunilObject.sayHi()

console.log(anilObject.hasOwnProperty('sayHi'))
//console.log(person.prototype.hasOwnProperty('sayHi'))
console.log(anilObject.__proto__.hasOwnProperty('sayHi'))
//console.log(Object.prototype.hasOwnProperty('sayHi'))
console.log(anilObject.__proto__.__proto__.hasOwnProperty('sayHi'))
*/
//console.log(window)
//}
//main()