import { Radio } from "./Radio";
import { Tv } from "./Tv";

const tv = new Tv();

tv.turnOn()
tv.turnOff()
tv.turnOff()

const radio = new Radio()

console.log(radio.status)
radio.status = 'ON'
console.log(radio.status)
radio.status = 'OFF'
console.log(radio.status)
