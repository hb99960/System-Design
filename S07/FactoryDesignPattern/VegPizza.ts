import { Pizza } from "./type";

export class VegPizza implements Pizza{
    prepare(): void {
        console.log("Preparing Veg Pizza");
    }
    bake(): void {
        console.log("Baking Veg Pizza");
    }
    cut(): void {
        console.log("Cutting Veg Pizza");
    }
    box(): void {
        console.log("Boxing Veg Pizza");
    }
}