import { Payment } from "./Payment";

export class PayPalPayment implements Payment {
  private cash: number

  constructor(cash: number){
    this.cash = cash
  }

  public pay(amount: number): void {
    if(this.cash >= amount){
      this.cash -= amount
      console.log(`ชำระแล้ว ${amount} ผ่าน PayPal เงินคงเหลือ ${this.cash}`)
    }else{
      console.log(`ยอดเงินไม่เพียงพอ`)
    }
  }
}