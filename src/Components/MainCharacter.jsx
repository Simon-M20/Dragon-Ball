import React from "react";
import Goku from "../Assets/Characters/goku.png";

import "./MainCharacter.css";
import { useContext } from "react";
import DBContext from "../Context/GlobalContext";

function Main_character() {
    const { gallery, characters, mainCharacter } = useContext(DBContext);
    console.log(mainCharacter, "log from the MAIN");
    return (
        <main className={`md:py-10 pt-4 pb-6 ${gallery ? "hide" : ""}`}>
            <figure className='flex justify-center flex-col w-11/12 mx-auto gap-3.5'>
                <img
                    className='Main__image'
                    src={
                        mainCharacter.length <= 0
                            ? Goku
                            : mainCharacter[0].imageSrc
                    }
                    alt='Goku'
                />
                <span>
                    <figcaption className='flex items-center justify-start'>
                        <span className='text-yellow-400 uppercase font-bold md:text-2xl text-lg'>
                            {mainCharacter.length <= 0
                                ? characters[0].raze
                                : mainCharacter[0].raze}
                        </span>
                        <hr className='w-2 mx-2' />
                        <span className='text-yellow-600 uppercase font-bold md:text-lg text-sm'>
                            {mainCharacter.length <= 0
                                ? `Universe ${characters[0].universe}`
                                : `Universe ${mainCharacter[0].universe}`}
                        </span>
                    </figcaption>
                    <h1 className='text-white uppercase font-bold md:text-5xl text-2xl'>
                        {mainCharacter.length <= 0
                            ? characters[0].name
                            : mainCharacter[0].name}
                    </h1>
                    <p className='text-white font-medium pt-2 md:text-base text-sm'>
                        {mainCharacter.length <= 0
                            ? characters[0].desc
                            : mainCharacter[0].desc}
                    </p>
                </span>
            </figure>
        </main>
    );
}

export default Main_character;
