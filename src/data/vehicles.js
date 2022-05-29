import {Vehicle} from "../helpers/vehicleClass";

// Function which adds new vehicles to the database
const addVehiclesToArray = (vehicle, number) => {
    for (let i = 0; i < number; i++) {
        const newVehicle = new Vehicle(vehicle, i + 1);
        vehiclesArray.push(newVehicle);
    }
};

// Function which adds random Warning to the Vehicle
const addRandomWarning = (vehicleNumber, deviceNumber, componentNumber, repeatNumber= 1) => {
    for(let i=0; i < repeatNumber; i++){
        vehiclesArray[vehicleNumber-1].addWarning('Testowy warning', deviceNumber,componentNumber)
    };
};

// Function which adds random Error to the Vehicle
const addRandomError = (vehicleNumber, deviceNumber, componentNumber, repeatNumber= 1) => {
    for(let i=0; i < repeatNumber; i++){
        vehiclesArray[vehicleNumber-1].addError('Testowy błąd', deviceNumber,componentNumber)
    };
};


// Our vehicle database
const vehiclesArray = [];

// Adding vehicles to the database
addVehiclesToArray("Autobus", 5);
addVehiclesToArray("Tramwaj", 5);


// Use addRandomError / addRandomWarning to push errors/warnings to any Vehicle in your array
// vehicleNumber: choose any from 1 to 10 (1-5 bus, 6-10 tram)
// deviceNumber: 1 -> Biletomat nr 1 / deviceNumber: 2 -> Biletomat nr 2
// componentNumber: 1 -> payment terminal, 2 -> qr reader, 3 -> printer
// repeatNumber: number of errors/warnings, default is 1, you can choose any number

//Buses
addRandomWarning(1, 1,1,10);
addRandomWarning(1, 1,2,10);

addRandomError(2,1,1,10);
addRandomError(2,2,2,10);

addRandomWarning(3, 1,1,10);
addRandomError(3,2,2,10);
addRandomError(3,1,2,10);



// Trams
addRandomWarning(6, 1,1,10);
addRandomWarning(6, 1,2,10);

addRandomError(7,1,1,10);
addRandomError(7,2,2,10);

addRandomWarning(9, 1,1,10);
addRandomError(9,2,2,10);



export default vehiclesArray;