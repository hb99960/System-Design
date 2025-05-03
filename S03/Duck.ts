import { IAnimalInterface } from "./IAnimalInterface";
export class Duck implements IAnimalInterface{
    type: string;
    eat: string;
    subType: string;
    constructor(type:string, eat:string, subType: string){
        this.type = type;
        this.eat = eat;
        this.subType = subType;
    }
    sameFunction(): void {
        console.log("This is a same function in Duck class");
    }
    explain(): void {
       console.log("I am a duck and I can explain myself : Interface");
    }
    sampleFunction(): void {
        console.log("This sample function belongs to duck : Interface");
    }
    swim(){
        console.log("Duck is swimming");
    }
    quack(){
        console.log("Duck is quacking");
    }        
}