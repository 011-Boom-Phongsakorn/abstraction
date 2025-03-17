"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    constructor(brand, engine, speed) {
        super(brand, engine);
        this.speed = speed;
        this.speed = speed;
    }
    fly() {
        console.log(`${this.brand} บินแล้ว`);
        return super.brand;
    }
    flybleSpeed(amount) {
        return this.speed += amount;
    }
    isElectrical(electric) {
        if (electric === true) {
            console.log(`This Car ${this.brand} is ElectricVehical`);
        }
        else {
            console.log(`This Car ${this.brand} is not ElectricVehical`);
        }
        return false;
    }
}
exports.Car = Car;
