import React from "react";
import Goku from "../Assets/Characters/goku.png";

import "./MainCharacter.css";
import { useContext } from "react";
import DBContext from "../Context/GlobalContext";

function Main_character() {
    const { gallery } = useContext(DBContext);
    return (
        <main className={`pt-4 pb-4 ${gallery ? "hide" : ""}`}>
            <figure className='flex justify-center flex-col w-11/12 mx-auto'>
                <img className='Main__image' src={Goku} alt='Goku' />
                <h3 className='text-yellow-400 uppercase font-bold text-2xl'>
                    SAIYAJIN
                </h3>
                <h2 className='text-white uppercase font-bold text-5xl'>
                    GOKU
                </h2>
                <p className='text-white font-medium pt-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum totam dicta consectetur aperiam, fugiat excepturi
                    laudantium nisi culpa soluta quaerat.
                </p>
            </figure>
        </main>
    );
}

export default Main_character;
