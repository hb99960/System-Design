import { Direction } from "./Elevator";

export class ElevatorRequest{
    currentFloor:number;
    destinationFloor:number;
    direction:Direction;

    constructor(currentFloor:number, destinationFloor:number){
        this.currentFloor = currentFloor;
        this.destinationFloor = destinationFloor;

        this.direction = this.destinationFloor > this.currentFloor ? Direction.Up : Direction.Down;
    }
}