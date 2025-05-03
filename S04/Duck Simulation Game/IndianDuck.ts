import { AbstractDuck } from "./AbstractDuck";

export class IndianDuck extends AbstractDuck{
    fly(): void {
        console.log("Indian Duck is flying at 10kmph");
    }

}