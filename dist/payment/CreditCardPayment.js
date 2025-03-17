"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    constructor(cash) {
        this.cash = cash;
    }
    pay(amount) {
        if (this.cash >= amount) {
            this.cash -= amount;
            console.log(`ชำระแล้ว ${amount} ผ่าน CreditCard เงินคงเหลือ ${this.cash}`);
        }
        else {
            console.log(`ยอดเงินไม่เพียงพอ`);
        }
    }
}
exports.CreditCardPayment = CreditCardPayment;
