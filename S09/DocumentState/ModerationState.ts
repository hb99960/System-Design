import { Doc, DocumentState } from "../type";
import { User } from "../User";
import { PublishState } from "./PublishState";

export class ModerationState implements DocumentState{
    publish(document: Doc, user: User): void {
        if(user.role === "scriptWriter"){
            console.log(`${document.name} script cannot be published by ${user.role}`);
        } else if(user.role === "actor"){
            console.log(`${document.name} script cannot be published by ${user.role}`);
        } else if(user.role === "producer"){
            console.log(`${document.name} script published by ${user.role}`);
            document.setState(new PublishState);
        } else{
            throw new Error("Invalid Role");
        }
    }
}