/**
 * DB = Database
 * Logger
 * Singelton = Single object to handle 
 */

/**
 * static
 * private constructor
 */

/**
 * Explain static keyword : 
 */
export class LoggerSingleton {
    static #loggerInstance:LoggerSingleton
    private constructor(){    
    }

    // public static getInstance():LoggerSingleton{

    public static get instance():LoggerSingleton{

        if(!LoggerSingleton.#loggerInstance){
            LoggerSingleton.#loggerInstance = new LoggerSingleton();
        }
        return LoggerSingleton.#loggerInstance;
    }
}