import React, {useState, useEffect} from 'react';
import "./singleComponent.scss";


function SingleComponent({singleComponent}) {
    const [warnings, setWarnings] = useState([]);
    const [errors, setErrors] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);


    useEffect(() => {
        const errorsInComponent = singleComponent.errors;
        const warningsInComponent = singleComponent.warnings;

        setErrors(errorsInComponent);
        setWarnings(warningsInComponent);

    }, [singleComponent])

    return (
        <>
            <div className="singleComponent__infoWrapper">
                <div>
                    <span className="singleComponent__name">{singleComponent.name}</span>
                    <span className="singleComponent__info">
                    {warnings.length > 0 || errors.length > 0 ?
                        `(${warnings.length} ostrzeżeń i ${errors.length} błędów)`
                        : ''}
                    </span>
                </div>

                <button
                    className="singleComponent__btn"
                    onClick={handleClick}>
                    {isOpen ? 'Ukryj'
                        : 'Rozwiń'}
                </button>
            </div>


            {isOpen &&
                <>
                    <div className="singleComponent__componentsWrapper">
                        <p className="singleComponent__componentsTitle">Ostrzeżenia: </p>
                        <ul>
                            {singleComponent.warnings.map((singleWarning, index) => {
                                return <li key={index}>
                                    <p className="singleComponent__warningMessage">
                                        {singleWarning}
                                    </p>
                                </li>
                            })}
                        </ul>
                    </div>


                    <div className="singleComponent__componentsWrapper">
                        <p className="singleComponent__componentsTitle">Błędy: </p>
                        <ul>
                            {singleComponent.errors.map((singleError, index) => {
                                return <li key={index}>
                                    <p className="singleComponent__errorMessage">
                                        {singleError}
                                    </p>
                                </li>
                            })}
                        </ul>
                    </div>
                </>
            }
        </>
    );
}

export default SingleComponent;