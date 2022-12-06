// var developer = function (name, id, basic, da, hra, incentive) {
//     employee.call(this, name, id, basic, da, hra)
//     this.incentive = incentive
//     this.calculateSalary = function () {
//         //employee.prototype.calculateSalary.apply(this)
//         this.__proto__.calculateSalary.apply(this)
//         console.log(this.totalSalary)
//         this.totalSalary += this.incentive
//     }
// }

// Object.setPrototypeOf(developer.prototype, employee.prototype)
class Developer extends Employee {
    #_incentive
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        console.log(this.name)
        this.#_incentive = incentive
    }
    set incentive(val) {
        this.#_incentive = val
    }
    get incentive() {
        return this.#_incentive
    }
    calculateSalary() {
        super.calculateSalary()
        console.log(this.totalSalary)
        this.totalSalary += this.#_incentive
    }
}

//console.log(Developer.prototype)


