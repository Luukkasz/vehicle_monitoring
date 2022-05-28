import React, {useState} from 'react';
import "./singleComponent.scss";


function SingleComponent({singleComponent}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);


    // useEffect(() => {
    //     console.log(singleComponent);
    // }, )

    return (
        <>
            <div className="singleComponent__infoWrapper">
                <p className="singleComponent__name">{singleComponent.name}</p>
                <button onClick={handleClick}>
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