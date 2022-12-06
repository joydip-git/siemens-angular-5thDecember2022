/*var anilObject = {
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
*/
function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basic = basic
    this.da = da
    this.hra = hra
    this.totalSalary = 0
}
employee.prototype.calculateSalary = function () {
    this.totalSalary = this.basic + this.da + this.hra
}
