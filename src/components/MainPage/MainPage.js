import React from 'react';
import './mainPage.scss';
import Vehicle from "../Vehicle/Vehicle";

function MainPage({vehiclesArray}) {
    return (
        <>
            <main className="mainPage">
                <div className="mainPage__container">
                    <div className="mainPage__searchWrapper">
                        <input
                            type="text"
                            placeholder="Wyszukiwarka"
                            name="vehicleName"
                            id="vehicleType"
                        />
                        <select
                            name="vehicleType"
                            id="vehicleType">
                            <option value="all">Wszystkie</option>
                            <option value="bus">Bus</option>
                            <option value="tram">Tramwaj</option>
                        </select>
                    </div>

                    <ul className="vehicleList">
                        {vehiclesArray.map((singleVehicle, index) => {
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