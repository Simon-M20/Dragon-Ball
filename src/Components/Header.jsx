import React from "react";
import Logo from "../Assets/dragonballLogo.webp";
import "./Header.css";

function Header() {
    return (
        <header className='w-full items-center flex justify-between px-2'>
            <figure className='w-full flex justify-center'>
                <img
                    className='Header__logo'
                    src={Logo}
                    alt='Dragon Ball Logo'
                    sizes='(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px'
                    loading='lazy'
                />
            </figure>
        </header>
    );
}

export default Header;
