/**
 * Animal
 * Duck (Water based)
 * Dog (Land based)
 */

import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Duck } from "./Duck";

const duck:Duck = new Duck("Duck","Fish", "Water based");
const duck2:Duck = new Duck("Duck","Meat", "Fish based");
duck.swim();
duck.quack();
duck.explain();
duck.sampleFunction();

duck2.swim();
duck2.quack();
duck2.explain();
duck2.sampleFunction();

const dog:Dog = new Dog();
dog.explain();
dog.sampleFunction();

const dog2:Dog = new Dog();
dog2.sameFunction();

// const animal:Animal = new Animal("Dog", "Meat");
// console.log(animal.eat);
// console.log(animal.type);
// animal.explain();
// animal.sampleFunction();



// Parent class


// Can we create objects of Animal class?
// const animal:Animal = new Animal("Dog", "Meat");
// const animal2:Animal = new Animal("Duck", "Fish");

// console.log(animal.eat, animal.type);
// console.log(animal2.eat, animal2.type);

// Inheritance

// child class
// class Duck extends Animal{

//     subType: string;

//     constructor(type:string, eat:string, subType: string,){
//         super(type, eat);
//         this.subType = subType;
//     }
//     // no need of constructor. why?

//     // child has overriden the parent class method : Method overriding
//     explain(){
//         console.log("I am a duck and I can explain myself");
//     }
//     swim(){
//         console.log("Duck is swimming");
//     }
//     quack(){
//         console.log("Duck is quacking");
//     }    
// }
// Types : IndianDuck, American Duck, RubberDuck, WoodenDuck
// what is use of Super Function?

// Problem Statement : Child is forced to do the same thing as parent

// What is Inteface? It is a contract
// syntax : implement




/**
 * Animal
 * Duck extends Animal
 * - super
 * - Method overriding
 * Exact Opposite of Inheritance(Code Reusability) : Interface
 * IAnimalInterface
 * Dog implements IAnimalInterface
 * modified Duck implements IAnimalInterface
 */