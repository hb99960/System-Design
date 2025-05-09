import { Pizza } from "./type";

export class PineapplePizza implements Pizza{
    prepare(): void {
        console.log("Preparing Pineapple Pizza");
    }
    bake(): void {
        console.log("Baking Pineapple Pizza");
    }
    cut(): void {
        console.log("Cutting Pineapple Pizza");
    }
    box(): void {
        console.log("Boxing Pineapple Pizza");
    }
}