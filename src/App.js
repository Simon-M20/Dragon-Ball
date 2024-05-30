import "./App.css";
import CharacterGRid from "./Components/CharacterGrid";
import Header from "./Components/Header";
import MainCharacter from "./Components/MainCharacter";

function App() {
    return (
        <div className='App'>
            <Header />
            <MainCharacter />
            <CharacterGRid />
        </div>
    );
}

export default App;
