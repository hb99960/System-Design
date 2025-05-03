import { IPaymentStrategy } from "./IPaymentStrategy";

export abstract class Payment{
    public IPaymentStrategy: IPaymentStrategy;
    constructor(IPaymentStrategy: IPaymentStrategy){
        this.IPaymentStrategy = IPaymentStrategy;
    }

    public performPayment(amount: number){
        this.IPaymentStrategy.pay(amount);
    }

    setPaymentStrategy(IPaymentStrategy: IPaymentStrategy){ 
        this.IPaymentStrategy = IPaymentStrategy;
    }
}