"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary += salary;
    }
}
exports.Employee = Employee;
