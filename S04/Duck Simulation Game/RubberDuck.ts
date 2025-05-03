import { AbstractDuck } from "./AbstractDuck";

export class RubberDuck extends AbstractDuck{
    swim():void{
        console.log("Duck is swimming");
    }
    fly(): void {
        console.log("Rubber Duck cannot fly");
    }
}