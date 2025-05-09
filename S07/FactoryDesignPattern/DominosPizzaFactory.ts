import { CheesePizza } from "./CheesePizza";
import { NonVegPizza } from "./NonVegPizza";
import { PineapplePizza } from "./PineapplePizza";
import { PizzaFactory } from "./PizzaFactory";
import { Pizza } from "./type";
import { VegPizza } from "./VegPizza";

export class DominosPizzaFactory extends PizzaFactory{

    // Factory Method
    createPizza(pizzaCode: string): Pizza {
        switch (pizzaCode){
            case "Veg":
                return new VegPizza();
            case "Cheese":
                return new CheesePizza();
            case "NonVeg":
                return new NonVegPizza();
            case "Pineapple":
                return new PineapplePizza();
            default:
                throw new Error("Incorrect Pizza Code");
        }
    }
    
}