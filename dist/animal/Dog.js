"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    makeSound() {
        const dogSounds = ["โฮ่ง โฮ่ง!", "งี้ด งี้ด~", "หงิงๆ", "กรรรร~", "โฮ่วววว~"];
        return `${dogSounds[Math.floor(Math.random() * dogSounds.length)]}`;
    }
}
exports.Dog = Dog;
