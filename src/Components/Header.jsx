import React from "react";
import Logo from "../Assets/dragonballLogo.png";
import "./Header.css";

function Header() {
    return (
        <header className='w-full items-center flex justify-between p-2'>
            <section>
                <i>
                    <span class='material-symbols-outlined'>sort</span>
                </i>
            </section>
            <figure className='w-full flex justify-center'>
                <img
                    className='Header__logo'
                    src={Logo}
                    alt='Dragon Ball Logo'
                />
            </figure>
        </header>
    );
}

export default Header;
