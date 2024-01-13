import React from "react";
import Goku from "../Assets/Characters/goku.png";
import "./Main_character.css";

function Main_character() {
    return (
        <main className='pt-8'>
            <figure className='flex justify-center items-start flex-col'>
                <img className='Main__image' src={Goku} alt='Goku' />
                <figcaption>Goku</figcaption>
            </figure>
        </main>
    );
}

export default Main_character;
