"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    constructor(cash) {
        this.cash = cash;
    }
    pay(amount) {
        if (this.cash >= amount) {
            this.cash -= amount;
            console.log(`ชำระแล้ว ${amount} ผ่าน PayPal เงินคงเหลือ ${this.cash}`);
        }
        else {
            console.log(`ยอดเงินไม่เพียงพอ`);
        }
    }
}
exports.PayPalPayment = PayPalPayment;
