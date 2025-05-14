export enum Direction{
    Up='up',
    Down='Down',
    Idle='Idle'
}

interface IElevatorState{
    moveToFloor(elevator:Elevator, floor:number):void;
    openDoor(elevator:Elevator):void;
    closeDoor(elevator:Elevator):void;
}

class CloseDoorState implements IElevatorState{
    moveToFloor(elevator: Elevator, floor: number): void {
        // direction
        elevator.direction = elevator.currentFloor > floor ? Direction.Down : Direction.Up;
        // change the state
        elevator.state = new MovingState();

        let distance = Math.abs(floor - elevator.currentFloor);
        let step = elevator.currentFloor < floor? 1 : -1;

        for(let i=1; i<=distance; i++){
            elevator.currentFloor += step;
            console.log(`Elevator at floor : ${elevator.currentFloor}`);

            if(elevator.currentFloor === floor){
                console.log(`Elevator has arrived at floor ${floor}`);
                elevator.state = new CloseDoorState();
                elevator.updateDisplay();
            }
        }
        
    }
    openDoor(elevator: Elevator): void {
        console.log(`Elevator door is opening....`);
        elevator.doorOpen = true;
        elevator.state = new OpenDoorState();
    }
    closeDoor(elevator: Elevator): void {
        console.log(`Elevator Door is closed!!!`);
        elevator.doorOpen = false;
    }
}

class MovingState implements IElevatorState{
    moveToFloor(elevator: Elevator, floor: number): void {
        console.log(`Elevator is already moving`);
        // Add the request into queue;
    }
    openDoor(elevator: Elevator): void {
        console.log(`Cannot open the door while moving!!!`);
    }
    closeDoor(elevator: Elevator): void {
        console.log(`Doors are already closed!!!`);
    }

}

class OpenDoorState implements IElevatorState{
    moveToFloor(elevator: Elevator, floor: number): void {
        console.log(`Cannot move Elevator while doors are open!!!`);
    }
    openDoor(elevator: Elevator): void {
        console.log(`Doors are already open!!!`);
    }
    closeDoor(elevator: Elevator): void {
        console.log(`Doors are closing...`);
        elevator.doorOpen=false;
        elevator.state = new CloseDoorState();
    }

}

export class Elevator{
    currentFloor:number;
    direction:Direction;
    capacity:number;
    state:IElevatorState = new CloseDoorState();
    doorOpen:Boolean;
    constructor(){
        this.currentFloor = 1;
        this.direction = Direction.Idle;
        this.capacity = 0;
        this.doorOpen = false;
    }

    //function

    moveToFloor(floor:number):void{
        this.state.moveToFloor(this, floor);
    }

    openDoor(){
        this.state.openDoor(this);
    }

    closeDoor(){
        this.state.closeDoor(this);
    }

    updateDisplay(){
        console.log(`Current floor is ${this.currentFloor}, Direction : ${this.direction}`);
    }
}