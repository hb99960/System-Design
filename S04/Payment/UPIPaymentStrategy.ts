import { IPaymentStrategy } from "./IPaymentStrategy";
import { PaymentProcessor } from "./PaymentProcessor";

export class UPIPaymentStrategy implements IPaymentStrategy {

  pay(amount: number): void {
    console.log(`Paid ${amount} using UPI.`);
  }
}