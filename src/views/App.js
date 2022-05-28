import './App.scss';
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import vehiclesArray from "../data/vehicles";

function App() {
    return (
        <>
            <Header/>
            <MainPage
                vehiclesArray={vehiclesArray}
            />
        </>
    )
}

export default App;
