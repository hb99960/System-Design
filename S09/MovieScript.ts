import { DraftState } from "./DocumentState/DraftState";
import { Doc, DocumentState } from "./type";
import { User } from "./User";

export class MovieScript implements Doc{
    name: string;
    state: DocumentState;

    constructor(name:string){
        this.name = name;
        this.state = new DraftState();
    }
    
    setState(state: DocumentState): void {
        this.state = state
    }
    publish(user: User): void {
        this.state.publish(this, user);
    }
}