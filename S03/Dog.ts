import { Animal } from "./Animal";
import { IAnimalInterface } from "./IAnimalInterface";
export class Dog extends Animal implements IAnimalInterface {
    explain(): void {
        console.log("I am a dog and I can explain myself");
    }
    sampleFunction(): void {
        console.log("This sample function belongs to dog");
    }
    sameFunction(): void {
        console.log("I have overridden the same function in Dog class");
    }
}