class Person{

    /**
     * member varaibles and member functions
     */
    name:string;
    jobVariable:string;

    constructor(name:string, jobVariable:string){
        this.name = name;
        this.jobVariable = jobVariable;
    }
    
    job():void{
        console.log(`My name is ${this.name} and I am a ${this.jobVariable}`);
    }

    sleep():void{
        console.log("Sleeping");
    }

    move():void{

    }

}

let tarun:Person = new Person("Tarun", "Developer");
let vishal:Person = new Person("Vishal", "Designer");

tarun.job();
vishal.job();

let ranjit:Person = new Person("Ranjit", "Manager");
ranjit.job();
/**
 * class is the blueprint of the object + example
 * object is the instance of the class + example
 * constructor is the special method of the class use to initialize the object
 * this keyword provides the context of the current object
 * new keyword is used to create the instance of the class. (memory allocation)
 *      new keyword triggers the constructor of the class
 */