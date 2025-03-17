import { Payment } from "./Payment";

export class CreditCardPayment implements Payment{
    private cash: number

    constructor(cash:number){
        this.cash = cash
    }

  public pay(amount: number): void {
      if (this.cash >= amount) {
          this.cash -= amount
          console.log(`ชำระแล้ว ${amount} ผ่าน CreditCard เงินคงเหลือ ${this.cash}`)
      } else {
          console.log(`ยอดเงินไม่เพียงพอ`)
      }
  }
}