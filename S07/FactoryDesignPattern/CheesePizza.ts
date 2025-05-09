import { Pizza } from "./type";

export class CheesePizza implements Pizza{
    prepare(): void {
        console.log("Preparing Cheese Pizza");
    }
    bake(): void {
        console.log("Baking Cheese Pizza");
    }
    cut(): void {
        console.log("Cutting Cheese Pizza");
    }
    box(): void {
        console.log("Boxing Cheese Pizza");
    }
}