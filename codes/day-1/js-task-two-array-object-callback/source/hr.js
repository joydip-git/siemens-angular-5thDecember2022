function hr(name, id, basic, da, hra, gratuity) {
    employee.call(this, name, id, basic, da, hra)
    this.gratuity = gratuity
    this.calculateSalary = function () {
        //employee.prototype.calculateSalary.apply(this)
        this.__proto__.calculateSalary.apply(this)
        this.totalSalary += this.gratuity
    }
}
Object.setPrototypeOf(hr.prototype, employee.prototype)