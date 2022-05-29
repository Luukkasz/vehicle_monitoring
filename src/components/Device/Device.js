import React, {useEffect, useState} from 'react';
import './device.scss';
import SingleComponent from "../SingleComponent/SingleComponent";

function Device({singleDevice}) {
    const [warnings, setWarnings] = useState([]);
    const [errors, setErrors] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        const errorsInDevice = singleDevice.components
            .map(component => component.errors)
            .filter(errorsArray => errorsArray.length > 0);

        const warningsInDevice = singleDevice.components
            .map(component => component.warnings)
            .filter(warningsArray => warningsArray.length > 0);

        setErrors(errorsInDevice);
        setWarnings(warningsInDevice);

    }, [singleDevice])

    return (
        <>
            <div className="device__infoWrapper">
                <div>
                    <span className="device__name">{singleDevice.name}</span>
                    <span className="device__info">
                    {warnings.length > 0 && errors.length > 0 ?
                        `Ilość ostrzeżeń: ${warnings.length}, ilość błędów: ${errors.length}`
                        : warnings.length > 0 ?
                            `Ilość ostrzeżeń: ${warnings.length}`
                            : errors.length > 0 ?
                                `Ilość błędów: ${errors.length}`
                                : ''
                    }
                     </span>
                </div>

                <button onClick={handleClick}>
                    {isOpen ? 'Ukryj komponenty'
                        : 'Wyświetl komponenty'}
                </button>
            </div>


            {isOpen &&
                <div className="device__componentsWrapper">
                    <p className="device__componentsTitle">Komponenty: </p>
                    <ul>
                        {singleDevice.components.map((singleComponent, index) => {
                            return <li key={index} className="device__listItem">
                                <SingleComponent singleComponent={singleComponent}/>
                            </li>
                        })}
                    </ul>
                </div>
            }
        </>
    );
}

export default Device;