import { IFlyStrategy } from "./IFlyStrategy";


export abstract class AbstractDuck{
    
    public flyStrategy: IFlyStrategy;

    constructor(flyStrategy: IFlyStrategy){
        this.flyStrategy = flyStrategy;
    }

    swim(){
        console.log("Duck is swimming");
    }

    performFly(){
        this.flyStrategy.fly();
    }

    abstract fly():void;
    // Problem Statement : Out of 100 types of ducks, 60 fly, 40 do not fly
    /**
     * Solution 
     * 1. I will write my code 60 times, 40 times
     * 2. Reusability
     */

    setFlyStrategy(flyStrategy: IFlyStrategy){
        this.flyStrategy = flyStrategy;
    }
}

// Break till 5:07 pm