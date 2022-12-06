function developer(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra)
    this.incentive = incentive
    this.calculateSalary = function () {
        //employee.prototype.calculateSalary.apply(this)
        this.__proto__.calculateSalary.apply(this)
        console.log(this.totalSalary)
        this.totalSalary += this.incentive
    }
}

Object.setPrototypeOf(developer.prototype, employee.prototype)
//fn() => this => window
//new fn() => this => new object
//somthing.fn.apply(obj-ref) => this => something/obj-ref
//employee.prototype.calculateSalary() => this => employee.prototype
//employee.prototype.calculateSalary.apply(this) => this => employee.prototype/this