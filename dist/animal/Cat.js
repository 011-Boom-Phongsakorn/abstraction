"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    makeSound() {
        const catSounds = ["เหมียว~", "เมี๊ยววว~", "แง้ว!"];
        return `${catSounds[Math.floor(Math.random() * catSounds.length)]}`;
    }
}
exports.Cat = Cat;
