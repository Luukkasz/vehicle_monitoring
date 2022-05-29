import React, {useState, useEffect} from 'react';
import './mainPage.scss';
import Vehicle from "../Vehicle/Vehicle";

function MainPage({vehiclesArray}) {
    const [filteredVehiclesArray, setFilteredVehiclesArray] = useState(vehiclesArray);
    const [vehicleTypeInput, setVehicleTypeInput] = useState('all')

    // Function filters the list of displayed vehicles when input changes
    const handleChange = (e) => {
        const keyword = e.target.value
        setVehicleTypeInput(keyword);
        if (keyword !== 'all') {
            const results = vehiclesArray.filter((vehicle) => {
                return vehicle.type.toLowerCase() === keyword;
            });
            setFilteredVehiclesArray(results);
        } else {
            setFilteredVehiclesArray(vehiclesArray);
        }
    };

    // Function filters the list of displayed vehicles when the original list will update its state
    useEffect(() => {
        if (vehicleTypeInput !== 'all') {
            const results = vehiclesArray.filter((vehicle) => {
                return vehicle.type.toLowerCase() === vehicleTypeInput;
            });
            setFilteredVehiclesArray(results);
        } else {
            setFilteredVehiclesArray(vehiclesArray);
        }
    }, [vehiclesArray])

    return (
        <>
            <main className="mainPage">
                <div className="mainPage__container">
                    <div className="mainPage__searchWrapper">
                        <label htmlFor="vehicleTypeInput">
                            Wybierz typ pojazdu
                        </label>
                        <select
                            id="vehicleTypeInput"
                            value={vehicleTypeInput}
                            onChange={handleChange}>
                            <option value="all">Wszystkie</option>
                            <option value="autobus">Autobus</option>
                            <option value="tramwaj">Tramwaj</option>
                        </select>
                    </div>

                    <ul className="vehicleList">
                        {filteredVehiclesArray.map((singleVehicle, index) => {
                            return <li key={index} className="vehicleList__item">
                                <Vehicle singleVehicle={singleVehicle}/>
                            </li>
                        })}
                    </ul>
                </div>
            </main>
        </>


    );
}

export default MainPage;