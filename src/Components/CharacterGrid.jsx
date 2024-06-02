// import Goku from "../Assets/Characters/goku.png";
// import CharacterCard from "./CharacterCard";
import "./CharacterGrid.css";
import CharacterSlider from "./CharacterSlider";

function CharacterGRid() {
    return (
        <section className='CharacterGrid'>
            <CharacterSlider />
            <button className='CharacterGrid__button'>ver mas</button>
        </section>
    );
}

export default CharacterGRid;
