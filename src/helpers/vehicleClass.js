export class Vehicle {
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
