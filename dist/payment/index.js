"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PayPalPayment_1 = require("./PayPalPayment");
const paypalpayment = new PayPalPayment_1.PayPalPayment(2000);
paypalpayment.pay(2000);
