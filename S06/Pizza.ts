import { IPizza } from "./IPizza";

export class Pizza implements IPizza{
    description(): string {
        return "Plain Pizza";
    }
    cost(): number {
        return 50;
    }
}