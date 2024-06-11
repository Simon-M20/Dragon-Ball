import React from "react";
import Goku from "../Assets/Characters/goku.png";

import "./MainCharacter.css";
import { useContext } from "react";
import DBContext from "../Context/GlobalContext";

function Main_character() {
    const { gallery, characters, mainCharacter } = useContext(DBContext);
    console.log(mainCharacter, "log from the MAIN");
    return (
        <main className={`pt-4 pb-4 ${gallery ? "hide" : ""}`}>
            <figure className='flex justify-center flex-col w-11/12 mx-auto'>
                <img
                    className='Main__image'
                    src={
                        mainCharacter.length <= 0
                            ? Goku
                            : mainCharacter[0].imageSrc
                    }
                    alt='Goku'
                />
                <figcaption className='flex items-center justify-start'>
                    <h3 className='text-yellow-400 uppercase font-bold text-2xl'>
                        {mainCharacter.length <= 0
                            ? characters[0].raze
                            : mainCharacter[0].raze}
                    </h3>
                    <hr className='w-2 mx-2' />
                    <span className='text-yellow-600 uppercase font-bold text-lg'>
                        {mainCharacter.length <= 0
                            ? `Universe ${characters[0].universe}`
                            : `Universe ${mainCharacter[0].universe}`}
                    </span>
                </figcaption>
                <h2 className='text-white uppercase font-bold text-5xl'>
                    {mainCharacter.length <= 0
                        ? characters[0].name
                        : mainCharacter[0].name}
                </h2>
                <p className='text-white font-medium pt-2'>
                    {mainCharacter.length <= 0
                        ? characters[0].desc
                        : mainCharacter[0].desc}
                </p>
            </figure>
        </main>
    );
}

export default Main_character;
