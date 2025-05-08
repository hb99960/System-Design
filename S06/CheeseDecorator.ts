import { Pizza } from "./Pizza";

export class CheeseDecorator extends Pizza{
    pizza:Pizza;
    constructor(pizza:Pizza){
        super();
        this.pizza = pizza;
    }

    cost(): number {
        return this.pizza.cost() + 10;
    }
}