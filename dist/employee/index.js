"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FullTimeEmployee_1 = require("./FullTimeEmployee");
const PartTimeEmployee_1 = require("./PartTimeEmployee");
const fullTimeEmployee = new FullTimeEmployee_1.FullTimeEmployee('Jane', 10000);
console.log(`${fullTimeEmployee.calculateBonus()} โบนัส 10% ของเงินเดือน`); // 1000
console.log(fullTimeEmployee.getSalary());
console.log('#################################################');
const partTimeEmployee = new PartTimeEmployee_1.PartTimeEmployee('John', 5000);
console.log(`${partTimeEmployee.calculateBonus()} โบนัส 5% ของเงินเดือน`); // 250
console.log(partTimeEmployee.getSalary());
