console.log("Prototype Design Pattern");
// Problem Statement : 

// obstacles - clones : copies

// Shallow Copies vs Deep copies

interface IClone{
    clone():this;
}

class Soldier implements IClone{
    name:string;
    weapon:string;

    constructor(name:string, weapon:string){
        this.name = name;
        this.weapon = weapon;
    }

    clone(): this {
        // 
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    describe():void{
        console.log(`Soldier name is ${this.name} and weapon is ${this.weapon}`);
    }
}

const s1 = new Soldier("Anubhav", "Kar98");
s1.describe();

const s2 = new Soldier("Tarun", "mp5");
s2.describe();

const s3 = s1.clone();
s3.describe()

const s4 = s1.clone();
s4.describe();

const s5 = s3.clone();
s5.describe();