export interface IPaymentStrategy {
    pay(amount: number): void;
}