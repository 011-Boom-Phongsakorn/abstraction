"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cat_1 = require("./Cat");
const Dog_1 = require("./Dog");
const dog = new Dog_1.Dog();
console.log(dog.makeSound());
const cat = new Cat_1.Cat();
console.log(cat.makeSound());
