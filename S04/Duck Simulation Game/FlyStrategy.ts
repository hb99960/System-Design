import { IFlyStrategy } from "./IFlyStrategy";

export class FlyStrategy implements IFlyStrategy {
  fly(): void {
    console.log("Flying Strategy!!!");
  }
}