import { BasicCrustDecorator } from "./BasicCrustDecorator";
import { CheeseDecorator } from "./CheeseDecorator";
import { IPizza } from "./IPizza";
import { NonVegDecorator } from "./NonVegDecorator";
import { Pizza } from "./Pizza";
import { VegDecorator } from "./VegDecorator";

console.log("Decorator Pattern");
let RohitsPizza = new Pizza();
// console.log(RohitsPizza.cost());
RohitsPizza = new CheeseDecorator(RohitsPizza);
// console.log(RohitsPizza.cost());
RohitsPizza = new CheeseDecorator(RohitsPizza);
RohitsPizza = new VegDecorator(RohitsPizza);
console.log(RohitsPizza.description());
console.log(RohitsPizza.cost());

let SurajPizza = new Pizza();
SurajPizza = new CheeseDecorator(SurajPizza);
SurajPizza = new NonVegDecorator(SurajPizza);
console.log(SurajPizza.description());
console.log(SurajPizza.cost());

// NSD Pizza
let NSDPizza = new Pizza(); // 50
NSDPizza = new BasicCrustDecorator(NSDPizza); // 15
NSDPizza = new CheeseDecorator(NSDPizza); // 10
NSDPizza = new VegDecorator(NSDPizza); // 15
NSDPizza = new VegDecorator(NSDPizza); // 15
console.log(NSDPizza.description());
console.log(NSDPizza.cost());

/**
 * Class Diagram
 * SO of SOLID Principles
 */

/**
 * Users
 * - Rohit(R)
 * - Suraj(R,W)
 * - Sanju(R,W)
 * - Sudhir(R,W,D)
 */

/** 
 * Patterns, Principles and Rules
 * following SOLID or violating SOLID
 * S = Single Responsibility Principle (SRP)
 *  - A class should have only one reason to change
 * O = Open/Closed Principle (OCP)
 *  - Open for extension : Feature
 *  - Closed for modification : Code level
 * 
 */










/**
 * Pizza : Plain Pizza (50), Hand Tossed Pizza (70)
 * Toppings : BCrust, CheeseC, Cheese(10), Veg(15), Non-Veg(20)
 */

// class HandTossedPizza implements Pizza{
//     description(): string {
//         return "Hand Tossed Pizza";
//     }
//     cost(): number {
//         return 70;
//     }
// }

// Rohit's Pizza = PlainPizza + Cheese + Cheese + Veg
//    cost = 50 + 10 + 10 + 15 = 85

// MyPizza = PlainPizza + Cheese + Veg
// cost = 50 + 10 + 15 = 75

// AnotherPizza = HandTossedPizza + NonVeg + NonVeg
// cost = 70 + 20 + 20 = 110

/**
 * Rohit's Pizza = PlainPizza 
 * Rohit's Pizza = Rohit's Pizza + Cheese
 * RP = RP + Cheese
 */













