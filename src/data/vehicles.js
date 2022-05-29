class Vehicle {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.devices = [
            {
                name: "Biletomat nr 1",
                components: [
                    {
                        name: 'Terminal płatniczy',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'Czytnik kodów QR',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'Drukarka termiczna',
                        warnings: [],
                        errors: [],
                    },
                ]
            },
            {
                name: "Biletomat nr 2",
                components: [
                    {
                        name: 'Terminal płatniczy',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'Czytnik kodów QR',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'Drukarka termiczna',
                        warnings: [],
                        errors: [],
                    },
                ],
            },
        ];
    };

    addError(errorValue, deviceNumber, componentNumber) {
        this
            .devices[deviceNumber-1]
            .components[componentNumber-1]
            .errors.push(errorValue)
    };

    addWarning(warningValue, deviceNumber, componentNumber) {
        this
            .devices[deviceNumber-1]
            .components[componentNumber-1]
            .warnings.push(warningValue)
    };


}

// Function for adding vehicles to the array
const addVehiclesToArray = (vehicle, number) => {
    for (let i = 0; i < number; i++) {
        const newVehicle = new Vehicle(vehicle, i + 1);
        vehiclesArray.push(newVehicle);
    }
};

// Adding vehicles to the array
const vehiclesArray = [];
addVehiclesToArray("Autobus", 10);
addVehiclesToArray("Tramwaj", 10);


// Use addError / addWarning to push errors/warnings to any Vehicle in your array
// deviceNumber: 1 -> Biletomat nr 1 || deviceNumber: 2 -> Biletomat nr 2
// componentNumber: 1 -> payment terminal, 2 -> qr reader, 3 -> printer

vehiclesArray[0].addError('Testowy błąd', 2,3);
vehiclesArray[0].addError('Testowy błąd', 1,1);

vehiclesArray[0].addWarning('Testowy warning', 2,3);
vehiclesArray[0].addWarning('Testowy warning', 1,1);

vehiclesArray[1].addError('Testowy błąd', 2,1);
vehiclesArray[2].addError('Testowy błąd', 1,1);

vehiclesArray[3].addWarning('Testowy warning', 1,2);
// vehiclesArray[3].addError('Testowy błąd', 1,1);


export default vehiclesArray;