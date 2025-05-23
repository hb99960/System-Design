/** 
 * ISP : Interface Seggregation Principle
 * 
 */

// interface sampleInterface{
//     mf1;
//     mf2;
//     mf3
//     .
//     .
//     .
//     .mf10;
// }

interface IMachine{
    print():void;
    scan():void;
    fax():void;
}

// violation of ISP of SOLID
class OldPrinter implements IMachine{
    print(): void {
        console.log("Printing....");
    }
    scan(): void {
        throw new Error("Scanning not possible");
    }
    fax(): void {
        throw new Error("Method not implemented.");
    }
}

const oldPrinter = new OldPrinter();
oldPrinter.print();
// oldPrinter.scan();

interface IPrintable{
    print():void;
}

interface IScannable{
    scan():void;
}

interface IFaxable{
    fax():void;
}

class VintagePrinter implements IPrintable{
    print(): void {
        console.log("Printing...");
    }
}

const vintagePrinter = new VintagePrinter();
vintagePrinter.print();

class ModernPrinter implements IPrintable, IScannable{
    print(): void {
        console.log("Printing....");
    }
    scan(): void {
        console.log("Scanning....");
    }
}

const modernPrinting = new ModernPrinter();
modernPrinting.scan()

