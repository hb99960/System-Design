import { IFlyStrategy } from "./IFlyStrategy";

export class NoFlyStrategy implements IFlyStrategy{
    fly(): void {
        console.log("No Flying Strategy!!!");
    }
}