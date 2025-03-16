"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeEmployee = void 0;
const Employee_1 = require("./Employee");
class PartTimeEmployee extends Employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    calculateBonus() {
        const setSalary = super.getSalary() * 0.05;
        super.setSalary(setSalary);
        return setSalary;
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
