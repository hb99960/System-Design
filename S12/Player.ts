export class Player{
    name:string;
    characater:string;

    constructor(name:string, character:string){
        this.name = name;
        this.characater = character;
    }

    // class inside the class

    static Builder = class PlayerBuilder{
        private name!:string;
        private character!:string;

        setName(name:string):PlayerBuilder{
            this.name = name;
            return this;
        }

        setCharacter(characater:string){
            this.character = characater;
            return this;
        }

        build():Player{
            return new Player(this.name, this.character);
        }
    }
}