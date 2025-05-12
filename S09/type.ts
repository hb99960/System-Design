import { User } from "./User";

export interface Doc{
    name:string;
    state:DocumentState;

    setState(state:DocumentState):void;
    publish(user:User):void;
    // draft():void;
    // Moderation():void;
    // publish():void;
}

export interface DocumentState{
    publish(doument:Doc, user:User):void;
}