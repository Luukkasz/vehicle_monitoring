import React, {useState} from 'react';
import './vehicle.scss';

function Vehicle({singleVehicle}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <>
            <p>{singleVehicle.type} nr {singleVehicle.id}</p>
            <p>Status: ok</p>
            <button onClick={handleClick}>Wyświetl urządzenia</button>

            {isOpen && <div>Urządzenia</div>}
        </>
    );
}

export default Vehicle;