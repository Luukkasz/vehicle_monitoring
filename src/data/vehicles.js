class Vehicle {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.devices = [
            {
                name: "biletomat nr 1",
                components: [
                    {
                        name: 'terminal płatniczy',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'czytnik kodów QR',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'drukarka termiczna',
                        warnings: [],
                        errors: [],
                    },
                ]
            },
            {
                name: "biletomat nr 2",
                components: [
                    {
                        name: 'terminal płatniczy',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'czytnik kodów QR',
                        warnings: [],
                        errors: [],
                    },
                    {
                        name: 'drukarka termiczna',
                        warnings: [],
                        errors: [],
                    },
                ],
            },
        ];
    }
}

// const myBus = {
//     type: 'bus',
//     id: 123,
//     devices: [
//         {
//             name: "biletomat nr 1",
//             components: [
//                 {
//                     name: 'terminal płatniczy',
//                     warnings: [],
//                     errors: [],
//                 },
//                 {
//                     name: 'czytnik kodów QR',
//                     warnings: [],
//                     errors: [],
//                 },
//                 {
//                     name: 'drukarka termiczna',
//                     warnings: [],
//                     errors: [],
//                 },
//             ]
//         },
//         {
//             name: "biletomat nr 2",
//             components: [
//                 {
//                     name: 'terminal płatniczy',
//                     warnings: [],
//                     errors: [],
//                 },
//                 {
//                     name: 'czytnik kodów QR',
//                     warnings: [],
//                     errors: [],
//                 },
//                 {
//                     name: 'drukarka termiczna',
//                     warnings: [],
//                     errors: [],
//                 },
//             ],
//         },
//     ],
// };

const bus1 = new Vehicle('bus', 1);
const tram1 = new Vehicle('tram', 1);


const vehiclesArray = [];
vehiclesArray.push(bus1, tram1);

export default vehiclesArray;