/**
 * Dependency Inversion Principle
 * 
 * Dependency : object or service
 * 
 * High module, Lower module; Abstraction
 */


class MYSQLDatabase{

}

// higher module
class userService{
    
    // lower module
    db = new MYSQLDatabase();
}

interface Database{
    save(data:string):void;
}

class mySQLDatabase implements Database{
    save(data: string): void {
        console.log("saving in mySQLDatabase ${data}");
    }

}

class MongoDB implements Database{
    save(data: string): void {
        console.log("Saving in MongoDB");
    }
    
}

// Following the DIP Principle
class UserService{
    db:Database;

    constructor(db:Database){
        this.db = db;
    }

    registerUser(data:string){
        this.db.save(data);
    }
}


const mySQL = new mySQLDatabase();
const usrService = new UserService(mySQL);
usrService.registerUser("NSD");
