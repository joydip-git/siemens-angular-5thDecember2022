var anilObject = {
    name: 'anil',
    id: 1,
    basic: 1000,
    da: 2000,
    hra: 3000,
    calculateSalary: function () {
        return this.basic + this.da + this.hra
    }
}

var sunilObject = {
    name: 'sunil',
    id: 2,
    basic: 1000,
    da: 1500,
    hra: 2000,
    calculateSalary: function () {
        return this.basic + this.da + this.hra
    }
}

var vinodObject = {
    name: 'vinod',
    id: 3,
    basic: 2000,
    da: 3000,
    hra: 4000,
    calculateSalary: function () {
        return this.basic + this.da + this.hra
    }
}

var ramnathObject = {
    name: 'Ramnath',
    id: 4,
    basic: 1200,
    da: 2200,
    hra: 1000,
    calculateSalary: function () {
        return this.basic + this.da + this.hra
    }
}

var employees = [anilObject, sunilObject, vinodObject, ramnathObject]

var filteredEmployees = employees.filter(
    function (employee) {
        return employee.calculateSalary() >= 5000
    }
)

filteredEmployees.forEach(
    function (employee) {
        console.log(employee.name + ' got salary of ' + employee.calculateSalary())
    }
)