"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
var PowerState;
(function (PowerState) {
    PowerState[PowerState["OFF"] = 0] = "OFF";
    PowerState[PowerState["ON"] = 1] = "ON";
})(PowerState || (PowerState = {}));
class Tv {
    constructor() {
        this.state = PowerState.OFF;
    }
    turnOn() {
        if (this.state === PowerState.OFF) {
            console.log(`TV is now ON`);
            this.state = PowerState.ON;
        }
        return this.state === PowerState.ON;
    }
    turnOff() {
        if (this.state === PowerState.ON) {
            console.log(`Tv is now OFF`);
            this.state = PowerState.OFF;
        }
        return this.state === PowerState.OFF;
    }
}
exports.Tv = Tv;
