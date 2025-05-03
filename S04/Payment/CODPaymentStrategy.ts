import { IPaymentStrategy } from "./IPaymentStrategy";

export class CODPaymentStategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Cash on Delivery.`);
  }
}