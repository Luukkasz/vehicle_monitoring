import React, {useState} from 'react';
import './device.scss';
import SingleComponent from "../SingleComponent/SingleComponent";

function Device({singleDevice}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="device__infoWrapper">
                <p className="device__name">{singleDevice.name}</p>
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