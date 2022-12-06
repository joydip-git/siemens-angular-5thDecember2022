//'use strict'
/*
function test() {
    let x
    x = 10
    console.log(x)//10
    for (let i = 0; i < 1; i++) {
        let x
        x = 20
        console.log(x)//20
    }
    console.log(x)//10

    const a = 100
    //a = 20
    console.log(a)

    const arr = [1, 2, 3, 4]
    //arr = []
    arr.push(10, 20)
    console.log(arr)

    //object-literal syntax
    const obj = {
        name: 'anil',
        id: 1,
        salary: 2000
    }
    // const objName = obj.name
    // const objId = obj.id
    // const objSalary = obj.salary

    //object de-structuring
    // const { name: objName, id: objId, salary: objSalary } = obj
    //console.log(objName, objId, objSalary)

    // const { name: name, id: id, salary: salary } = obj
    const { name, id, salary } = obj
    console.log(name, id, salary)

    //array destructuring
    const numbers = [1, 2, 3, 4]
    // const first = numbers[0]
    // const third = numbers[2]
    const [first, , third] = numbers
    console.log(first, third)

    const [, , , fourth] = numbers
    console.log(fourth)

    //spread operator (...)
    //const copy = { name: '', id: 0, salary: 0 }
    // const copy = {}
    // for (const propName in obj) {
    //     const propValue = obj[propName]
    //     copy[propName] = propValue
    // }
    const copy = {
        ...obj
    }
    console.log(obj)
    console.log(copy)

    //... (rest operator) is used to declare an array to accept any number and type of arguments as part of the function argument list
    //you can declare only one array with rest operator
    //this should be the last in the argument list
    function calculateAverage(studentName, ...marks) {
        let sum = 0
        marks.forEach(
            function (mark) {
                sum += mark
            }
        )
        // return studentName + ' has got average marks of ' + (sum / marks.length)
        
        //templated string or string template with string inmterpolation
        // return `${studentName} has got average marks of ${sum / marks.length}`
        let message = `
        <div>
            <span>
                ${studentName} has got average marks of ${sum / marks.length}
            </span>
        </div>
        <br>
        `
        return message
    }
    let message = ''
    message += calculateAverage('suresh', 10, 20)
    message += calculateAverage('mahesh', 10, 20, 30)
    message += calculateAverage('anil', 10, 20, 30, 40, 50)
    document.body.innerHTML += message
}
test()
*/
function outer() {
    //object data
    this.a = 100
    console.log(this)
    //const outerRef = this
    // function inner() {
    const inner = () => {
        this.b = 200
        console.log(this)
        const res = this.a + this.b
        //const res = outerRef.a + this.b
        console.log(res)
    }
    //bind just binds the function with a context (object) and returns the reference of the same function (but bound)
    //whereas, call and apply also binds the function with some context as well as immediately invokes the function
    //inner = inner.bind(this)
    return inner
}
var innerFnRef = outer()
innerFnRef()

//declaration
function add(a, b) {
    console.log(this)
    return a + b
}
//expression-1
const subtract = function (a, b) {
    return a - b
}
//expression-2 (arrow function)
const multiply = (a, b) => {
    console.log(this)
    return a * b
}
const divide = (a, b) => a / b
const div = (a, b) => console.log(a / b)
add(12, 3)
console.log(multiply(12, 3))

function layer1() {
    this.x = 100
    const layer2 = () => {
        this.y = 200
        const layer3 = () => {
            this.z = 300
            console.log(this.x + this.y + this.z)
        }
        layer3()
    }
    layer2()
}
new layer1()