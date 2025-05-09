import { Pizza } from "./type";

export class NonVegPizza implements Pizza{
    prepare(): void {
       console.log("Preparing Non Veg Pizza");
    }
    bake(): void {
        console.log("Baking Non Veg Pizza");
    }
    cut(): void {
        console.log("Cutting Non Veg Pizza");
    }
    box(): void {
        console.log("Boxing Non Veg Pizza");
    }
}