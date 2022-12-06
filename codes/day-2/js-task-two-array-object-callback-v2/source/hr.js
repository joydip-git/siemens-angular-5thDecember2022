// var hr = function (name, id, basic, da, hra, gratuity) {
//     employee.call(this, name, id, basic, da, hra)
//     this.gratuity = gratuity
//     this.calculateSalary = function () {
//         //employee.prototype.calculateSalary.apply(this)
//         this.__proto__.calculateSalary.apply(this)
//         this.totalSalary += this.gratuity
//     }
// }
// Object.setPrototypeOf(hr.prototype, employee.prototype)
class Hr extends Employee {
    #_gratuity
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        console.log(this.name)
        this.#_gratuity = gratuity
    }
    set gratuity(val) {
        this.#_gratuity = val
    }
    get gratuity() {
        return this.#_gratuity
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.#_gratuity
    }
}
