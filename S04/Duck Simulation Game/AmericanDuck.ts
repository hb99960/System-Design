import { AbstractDuck } from "./AbstractDuck";

export class AmericanDuck extends AbstractDuck{
    fly(): void {
        console.log("American Duck is flying at 20kmph");
    }
}