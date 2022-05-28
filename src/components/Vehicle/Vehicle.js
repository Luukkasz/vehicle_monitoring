import React, {useState, useEffect} from 'react';
import './vehicle.scss';
import Device from "../Device/Device";

function Vehicle({singleVehicle}) {
    const [hasWarning, setHasWarning] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);


    // Function monitors component errors and regulates the state of the application
    useEffect(() => {
        const errorsTerminalArray = singleVehicle.devices
            .map(device => device.components[0])
            .map(component => component.errors)
            .filter(errors => errors.length > 0);

        const warningsTerminalArray = singleVehicle.devices
            .map(device => device.components[0])
            .map(component => component.warnings)
            .filter(warnings => warnings.length > 0);

        const errorsQrArray = singleVehicle.devices
            .map(device => device.components[1])
            .map(component => component.errors)
            .filter(errors => errors.length > 0);

        const warningsQrArray = singleVehicle.devices
            .map(device => device.components[1])
            .map(component => component.warnings)
            .filter(warnings => warnings.length > 0);

        const errorsPrinterArray = singleVehicle.devices
            .map(device => device.components[2])
            .map(component => component.errors)
            .filter(errors => errors.length > 0);

        const warningsPrinterArray = singleVehicle.devices
            .map(device => device.components[2])
            .map(component => component.warnings)
            .filter(warnings => warnings.length > 0);

        let errorsLength = errorsTerminalArray.length + errorsQrArray.length + errorsPrinterArray.length;
        let warningsLength = warningsTerminalArray.length + warningsQrArray.length + warningsPrinterArray.length;


        errorsLength > 0 ? setHasError(true)
            : setHasError(false);

        warningsLength > 0 ? setHasWarning(true)
            : setHasWarning(false);

    }, [singleVehicle])

    return (
        <>
            <div className="vehicle__infoWrapper">
                <p className="vehicle__name">{singleVehicle.type} nr {singleVehicle.id}</p>
                <p className={`vehicle__status ${
                    hasWarning && hasError ? 'vehicle__status--both'
                        : hasWarning ? 'vehicle__status--warning'
                            : hasError ? 'vehicle__status--error'
                                : ''
                }`}>

                    {hasWarning && hasError ? 'Status: Błąd i ostrzeżenie'
                        : hasWarning ? 'Status: Ostrzeżenie'
                            : hasError ? 'Status: Błąd'
                                : 'Status: Ok'}

                </p>
                <button onClick={handleClick}>
                    {isOpen ? 'Ukryj urządzenia'
                        : 'Wyświetl urządzenia'}
                </button>
            </div>


            {isOpen &&
                <div className="vehicle__devicesWrapper">
                    <p className="vehicle__devicesTitle">Urządzenia w pojeździe:</p>
                    <ul>
                        {singleVehicle.devices.map((singleDevice, index) => {
                            return <li key={index} className="vehicle__listItem">
                                <Device singleDevice={singleDevice}/>
                            </li>
                        })}
                    </ul>
                </div>
            }
        </>
    );
}

export default Vehicle;