//employee(....)
// var employee = function(name, id, basic, da, hra) {
//     this.name = name
//     this.id = id
//     this.basic = basic
//     this.da = da
//     this.hra = hra
//     this.totalSalary = 0
// }
// employee.prototype.calculateSalary = function () {
//     this.totalSalary = this.basic + this.da + this.hra
// }
class Employee {
    #_name
    #_id
    #_basic
    #_da
    #_hra
    #_totalSalary
    constructor(name, id, basic, da, hra) {
        this.#_name = name
        this.#_id = id
        this.#_basic = basic
        this.#_da = da
        this.#_hra = hra
        this.#_totalSalary = 0
    }
    get name() {
        return this.#_name
    }
    set name(val) {
        this.#_name = val
    }
    get id() {
        return this.#_id
    }
    set id(val) {
        this.#_id = val
    }
    get basic() {
        return this.#_basic
    }
    set basic(val) {
        this.#_basic = val
    }
    get da() {
        return this.#_da
    }
    set da(val) {
        this.#_da = val
    }
    get hra() {
        return this.#_hra
    }
    set hra(val) {
        this.#_hra = val
    }
    set totalSalary(val) {
        this.#_totalSalary = val
    }
    get totalSalary() {
        return this.#_totalSalary
    }
    calculateSalary() {
        this.#_totalSalary = this.#_basic + this.#_da + this.#_hra
    }
}

//console.log(Employee.prototype)
