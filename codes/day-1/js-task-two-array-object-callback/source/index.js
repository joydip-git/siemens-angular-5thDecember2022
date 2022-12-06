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