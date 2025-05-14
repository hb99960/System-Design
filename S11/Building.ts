import { format } from "node:url";
import { Direction, Elevator } from "./Elevator";
import { ElevatorRequest } from "./ElevatorRequest";

export class Building{
    numFloors:number;
    elevators: Elevator[];

    constructor(numFloors:number, numElevators :number){
        this.numFloors = numFloors;
        this.elevators = []

        for(let i=0; i<numElevators;i++){
            this.elevators.push(new Elevator());
        }
    }

    updateDisplays():void{
        for(const elevator of this.elevators){
            elevator.updateDisplay();
        }
    }

    requestElevator(requestElevator:ElevatorRequest):Elevator|null{
        let bestElevator:Elevator|null = null;

        // Closest Distance 
        let minDistance = Infinity;

        for(const elevator of this.elevators){
            const distance = Math.abs(elevator.currentFloor-requestElevator.currentFloor);

            if(elevator.direction === requestElevator.direction || elevator.direction === Direction.Idle){
                if(distance < minDistance){
                    minDistance = distance;
                    bestElevator = elevator;
                }
            }
        }

        if(bestElevator){
            bestElevator.moveToFloor(requestElevator.currentFloor);
        } else{
            console.log(`No elevator is available!!!`);
        }

        return bestElevator;
    }
}