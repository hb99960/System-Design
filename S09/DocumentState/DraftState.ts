import { Doc, DocumentState } from "../type";
import { User } from "../User";
import { ModerationState } from "./ModerationState";


export class DraftState implements DocumentState{
    publish(document: Doc, user: User): void {
        //
        console.log(`${document.name} script is sent for moderation by ${user.role}`);
        document.setState(new ModerationState);
    }
}

