import { Pizza } from "./type";

export abstract class PizzaFactory{
    // Factory Method
    abstract createPizza(type:string):Pizza;
    orderPizza(type:string):void{
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}