var anilObject = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.id + ', ' + this.name + ', ' + this.salary
    }
}

console.log(anilObject.id)
console.log(anilObject['name'])
var info = anilObject.print()
console.log(info)

//JS objects are dynamically expandable
anilObject.location = 'Bangalore'
anilObject['projectName'] = 'CITA'
anilObject.sayHello = function () {
    console.log('hello from ' + this.name)
}
anilObject['sayHi'] = function () {
    console.log('hi from ' + this.name)
}

for (var propName in anilObject) {
    var propValue = anilObject[propName]
    console.log(propName + ': ' + propValue)
}