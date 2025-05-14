console.log("Abstract Factory Design Pattern");
// Factory of Factories

interface IProduct{
    name:string;
    price:number;
    describe():string;
}

class AppleLaptop implements IProduct{
    name: string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    describe(): string {
        return `AppleLaptop ${this.name}, Price: ${this.price}`;
    }
}

class AppleMobile implements IProduct{
    name: string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    describe(): string {
        return `AppleMobile ${this.name}, Price: ${this.price}`;
    }
}

class SamsungLaptop implements IProduct{
    name: string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    describe(): string {
        return `SamsungLaptop ${this.name}, Price: ${this.price}`;
    }
}

class SamsungMobile implements IProduct{
    name: string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    describe(): string {
        return `SamsungMobile: ${this.name}, Price: ${this.price}`;
    }
}

interface IProductFactory{
    createLaptop():IProduct;
    creatMobile():IProduct
}

class AppleFactory implements IProductFactory{
    createLaptop(): IProduct {
        return new AppleLaptop("Macbook Air", 80000);
    }
    creatMobile(): IProduct {
        return new AppleLaptop("iphone 16", 100000);
    }
}

class SamsungFactory implements IProductFactory{
    createLaptop(): IProduct {
        return new SamsungLaptop("Galaxy NoteBook", 85000);
    }
    creatMobile(): IProduct {
        return new SamsungMobile("Galaxy s24 ultra", 130000);
    }
}

class FactorProvider{
    static getFactory(brand:string){
        if(brand === "Apple"){
            return new AppleFactory();
        } else if (brand === "Samsung"){
            return new SamsungFactory();
        } else {
            throw new Error("Invalid brand name");
        }
    }
}

const appleFactory = FactorProvider.getFactory("Apple");
const surajAppleLaptop = appleFactory.createLaptop();
console.log(surajAppleLaptop.describe());
const sudhirAppleMobile = appleFactory.creatMobile();
console.log(sudhirAppleMobile.describe());

const samsungFactory = FactorProvider.getFactory("Samsung");
const meeraSamsungLaptop = samsungFactory.createLaptop();
console.log(meeraSamsungLaptop.describe());

const ankitSamsungMobile = samsungFactory.creatMobile();
console.log(ankitSamsungMobile.describe());