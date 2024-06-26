import { useContext } from "react";
import "./App.css";
import CharacterGRid from "./Components/CharacterGrid";
import Header from "./Components/Header";
import MainCharacter from "./Components/MainCharacter";
import DBContext from "./Context/GlobalContext";
// import { getCharactersData } from "./Utils/FetchApi";
// import { useState } from "react";

function App() {
    const { gallery, setGallery } = useContext(DBContext);
    // const [characters, setCharacters] = useState([]);

    // useEffect(() => {}, []);

    return (
        <div className='App'>
            <Header />
            <MainCharacter />
            <section>
                <CharacterGRid />
                <footer className={`Footer ${gallery ? "active" : ""}`}>
                    <button
                        onClick={() => {
                            setGallery(!gallery);
                        }}
                        className='Main__button'>
                        {gallery ? "ver menos" : "ver mas"}
                    </button>
                </footer>
            </section>
        </div>
    );
}

export default App;
