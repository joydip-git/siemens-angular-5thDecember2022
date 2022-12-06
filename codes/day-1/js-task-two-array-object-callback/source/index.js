var anilObject = new developer('anil', 1, 1000, 2000, 3000, 4000)
// Object.setPrototypeOf(anilObject.__proto__, employee.prototype)
var sunilObject = new hr('sunil', 2, 1000, 1200, 2000, 2200)
var vinodObject = new hr('vinod', 3, 2000, 3000, 4000, 5000)
var ramnathObject = new developer('ramnath', 4, 1500, 1500, 1500, 1500)

var employees = [anilObject, sunilObject, vinodObject,
    ramnathObject]

employees.forEach(
    function (emp) {
        emp.calculateSalary()
        console.log(emp.name + ', ' + emp.totalSalary)
    }
)
var filteredEmployees = employees.filter(
    function (emp) {
        return emp.totalSalary >= 7000
    }
)

filteredEmployees.forEach(
    function (emp) {
        console.log(emp.name + ' got salary of ' + emp.totalSalary)
    }
)