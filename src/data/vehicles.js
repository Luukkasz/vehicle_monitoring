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
    }
}

const vehiclesArray = [];
const addVehiclesToArray = (vehicle, number) => {
    for (let i = 0; i < number; i++) {
        const newVehicle = new Vehicle(vehicle, i + 1);
        vehiclesArray.push(newVehicle);
    }
};

addVehiclesToArray("Autobus", 10);
addVehiclesToArray("Tramwaj", 10);

export default vehiclesArray;