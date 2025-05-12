import { MovieScript } from "./MovieScript";
import { User } from "./User";

console.log("Client Code - State Design Patter");

const operationSindoor = new MovieScript("Operation Sindoor");
// draft -> moderation -> published state
const sanju = new User("scriptWriter");
const sudhir = new User("actor");
const tarun = new User("producer");

console.log(operationSindoor.state);
operationSindoor.publish(sudhir);
// operationSindoor.publish(sanju);
console.log(operationSindoor.state);
operationSindoor.publish(sanju);
operationSindoor.publish(sudhir);
operationSindoor.publish(tarun);

/**
 * Employee
 * Car
 * Vending - 
 * Elevator Problem
 * Print
 * Document
 */


// Document - 
// eg : WhitePaper, Scripts, Research papers, Draft Bill & Act
// State of Document : Draft, Moderation, Publish

// How will we code??


/**
 * scriptWriter : draft, can move it to moderation
 * actor : can move it to moderation, actors can moderate it, they cannot publish it
 * producer : only producer of the movie can publish the script
 */





// SOLID principles
// L : Inheritance
// I : interface
// D : Dependency Inversion







