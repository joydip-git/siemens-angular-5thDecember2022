"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var add = function (a, b) { return a + b; };
var res = add(13, 12);
console.log(res);
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this._name = name;
        this._id = id;
        this._salary = salary;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.print = function () {
        return this._name;
    };
    return Employee;
}());
var Person = /** @class */ (function () {
    function Person(_name, _id, _salary) {
        this._name = _name;
        this._id = _id;
        this._salary = _salary;
    }
    Object.defineProperty(Person.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return "".concat(this._name, ", ").concat(this._salary);
    };
    return Person;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(name, id, salary, _subject) {
        var _this = _super.call(this, name, id, salary) || this;
        _this._subject = _subject;
        return _this;
    }
    Object.defineProperty(Trainer.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Trainer.prototype.print = function () {
        return "".concat(_super.prototype.print.call(this), ", ").concat(this._subject);
    };
    return Trainer;
}(Person));
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.prototype.add = function (a, b) {
        return a + b;
    };
    return Operations;
}());
var DataAccess = /** @class */ (function () {
    function DataAccess(path) {
        this.path = path;
    }
    return DataAccess;
}());
var FileDataAccess = /** @class */ (function (_super) {
    __extends(FileDataAccess, _super);
    function FileDataAccess(path) {
        return _super.call(this, path) || this;
    }
    FileDataAccess.prototype.getData = function () {
        return 'data';
    };
    return FileDataAccess;
}(DataAccess));
var Product = /** @class */ (function () {
    // productName: string;
    // price: number;
    // id: number;
    function Product(productName, price, id) {
        this.productName = productName;
        this.price = price;
        this.id = id;
    }
    return Product;
}());
