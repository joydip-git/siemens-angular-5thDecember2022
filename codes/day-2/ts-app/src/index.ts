const add = (a: number, b: number): number => a + b
const res = add(13, 12)
console.log(res)
class Employee {
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _salary: number;
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
    constructor(name: string, id: number, salary: number) {
        this._name = name
        this._id = id
        this._salary = salary
    }
    print(): string {
        return this._name
    }
}
class Person {
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(private _name: string, private _id: number, private _salary: number) {

    }
    print(): string {
        return `${this._name}, ${this._salary}`
    }
}
class Trainer extends Person {
    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }
    constructor(name: string, id: number, salary: number, private _subject: string) {
        super(name, id, salary)
    }
    print(): string {
        return `${super.print()}, ${this._subject}`
    }
}

interface IOperations {
    add(a: number, b: number): number;
}

class Operations implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
}

abstract class DataAccess {
    public abstract getData(): string;
    constructor(private path: string) {

    }
}
class FileDataAccess extends DataAccess {
    constructor(path: string) {
        super(path)
    }
    public getData(): string {
        return 'data'
    }
}

interface IProduct {
    productName: string;
    price: number;
    id: number;
}

class Product implements IProduct {
    // productName: string;
    // price: number;
    // id: number;
    constructor(public productName: string, public price: number, public id: number) {

    }
}