import { AmericanDuck } from "./Duck Simulation Game/AmericanDuck";
import { FlyStrategy } from "./Duck Simulation Game/FlyStrategy";
import { IndianDuck } from "./Duck Simulation Game/IndianDuck";
import { NoFlyStrategy } from "./Duck Simulation Game/NoFlyStrategy";
import { CardPayment } from "./Payment/CardPaymentStrategy";
import { CODPaymentStategy } from "./Payment/CODPaymentStrategy";
import { Payment } from "./Payment/Payment";
import { PaymentProcessor } from "./Payment/PaymentProcessor";
import { UPIPaymentStrategy } from "./Payment/UPIPaymentStrategy";

class Duck{
    swim(){}
    quack(){}
    fly(){}
}

interface IDuck{
    swim():void;
    quack():void;
    fly():void;
}

const americanDuck = new AmericanDuck(new FlyStrategy());
americanDuck.swim();
americanDuck.performFly();
americanDuck.fly();

const myStrategy = new NoFlyStrategy();
const indianDuck = new IndianDuck(myStrategy);
indianDuck.swim();
indianDuck.performFly();
indianDuck.fly();
indianDuck.setFlyStrategy(new FlyStrategy());
indianDuck.performFly();


const paymentProcessor = new PaymentProcessor(new UPIPaymentStrategy());
paymentProcessor.performPayment(1000);
paymentProcessor.setPaymentStrategy(new CODPaymentStategy());
paymentProcessor.performPayment(1000);
paymentProcessor.setPaymentStrategy(new CardPayment());
paymentProcessor.performPayment(1000);


/**
 * Familarity vs Fluency
 */







// class IndianDuck extends Duck{
//     swim(){}
//     quack(){}
//     fly(){}
// }
// 99 other types of ducks using inheritance

// class AmericanDuck implements IDuck{
//     swim(){
//     }
//     quack(){}
//     fly(){}
// }

// Abstract Class
// const abstractDuck = new abstractDuck(); 
// Error: Cannot create an instance of an abstract class
// Why we Cannot create an instance of an abstract class?
// because implementation is pending

// const rubberDuck = new RubberDuck();
// rubberDuck.swim();
// rubberDuck.fly();


/** 
 * Duck Simulation Game
 * Living Ducks : Indian Duck, American Duck
 * Problem Statement : 100 types 
 */

/**
 * Person
 * Engineer, Doctor, Teacher
 * Person
 */

/**
 * Constants
 * swim
 * 
 * Variables
 * Quack
 * Fly
 */

/**
 * Abstract Class
 */


/** 
 * Abstract & Concrete
 */

/**
 * Public, Private, Protected
 * Class Diagram of Strategy Design Pattern
 * Coupling : Composition
 */
