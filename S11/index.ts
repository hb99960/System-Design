import { Building } from "./Building";
import { ElevatorRequest } from "./ElevatorRequest";

const nsdBuilding:Building = new Building(10,2);
const request = new ElevatorRequest(2,7);

// Step:1 Lift is coming
const elevator = nsdBuilding.requestElevator(request);

// Step:2 You are moving to the destination floor
if(elevator){
    elevator.moveToFloor(request.destinationFloor);
    elevator.openDoor();
}

setTimeout( () => {
    if(elevator){
        elevator.closeDoor();
    }
}, 3000)

nsdBuilding.updateDisplays();