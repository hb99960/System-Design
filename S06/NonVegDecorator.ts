import { Pizza } from "./Pizza";

export class NonVegDecorator extends Pizza{
    pizza:Pizza;
    constructor(pizza:Pizza){
        super();
        this.pizza = pizza;
    }
    cost(): number {
        return this.pizza.cost() + 20;
    }
}