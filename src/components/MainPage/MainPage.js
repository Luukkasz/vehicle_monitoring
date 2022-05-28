import React from 'react';
import './mainPage.scss';
import Vehicle from "../Vehicle/Vehicle";

function MainPage({vehiclesArray}) {
    return (
        <>
            <main className="mainPage">
                <div className="mainPage__container">
                <div>Main Page</div>
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