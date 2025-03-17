import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

const motorcycle = new Motorcycle("W","V8",0)
motorcycle.fly()
motorcycle.isElectrical(false)
console.log("เร่งสปีดการบินเป็น " + motorcycle.flybleSpeed(110)+" km /h")


const car = new Car("Lamborghini","V12", 0);
car.fly()
car.isElectrical(false)
console.log("เร่งสปีดการบินเป็น " + car.flybleSpeed(285)+" km /h")