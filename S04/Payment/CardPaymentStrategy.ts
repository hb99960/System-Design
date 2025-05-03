import { IPaymentStrategy } from "./IPaymentStrategy";

export class CardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    let fee = 10;
    amount  = amount + fee;
    console.log(`Paid ${amount} using Card.`);
  }
}