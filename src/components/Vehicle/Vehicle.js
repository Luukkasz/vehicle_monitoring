import React, {useState} from 'react';
import './vehicle.scss';
import Device from "../Device/Device";

function Vehicle({singleVehicle}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="vehicle__infoWrapper">
                <p className="vehicle__name">{singleVehicle.type} nr {singleVehicle.id}</p>
                <p>Status: ok</p>
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