import React from "react";
import Goku from "../Assets/Characters/goku.png";

function Main_character() {
    return (
        <main className='py-8'>
            <figure className='flex justify-center flex-col w-4/5 mx-auto'>
                <img className='Main__image' src={Goku} alt='Goku' />
                <h3 className='text-yellow-400 uppercase font-bold text-2xl'>
                    SAIYAJIN
                </h3>
                <h2 className='text-white uppercase font-bold text-5xl'>
                    GOKU
                </h2>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum totam dicta consectetur aperiam, fugiat excepturi
                    laudantium nisi culpa soluta quaerat.
                </p>
            </figure>
        </main>
    );
}

export default Main_character;
