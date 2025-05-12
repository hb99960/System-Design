import { Doc, DocumentState } from "../type";
import { User } from "../User";

export class PublishState implements DocumentState{
    publish(doument: Doc, user: User): void {
        console.log(`${doument.name} script is already published`);
    }
}