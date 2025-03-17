"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
class Radio {
    constructor() {
        this.isOn = false;
    }
    get status() {
        return this.isOn ? 'ON' : 'OFF';
    }
    set status(value) {
        if (value === 'ON') {
            this.turnOn();
        }
        else {
            this.turnOff();
        }
    }
    turnOn() {
        if (!this.isOn) {
            console.log(`Radio is now ON`);
            this.isOn = true;
        }
        return this.isOn;
    }
    turnOff() {
        if (this.isOn) {
            console.log(`Radio is now OFF`);
            this.isOn = false;
        }
        return this.isOn;
    }
}
exports.Radio = Radio;
