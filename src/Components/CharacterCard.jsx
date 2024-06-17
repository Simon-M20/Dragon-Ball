import { useEffect, useState } from "react";
// import Goku from "../Assets/Characters/goku.png";
import DBContext from "../Context/GlobalContext";
import { useContext } from "react";

function CharacterCard({ name, id, desc, raze, universe }) {
    const [isClicked, setIsClicked] = useState(false);

    const { mainCharacter, setMainCharacter } = useContext(DBContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".CharacterCards")) {
                document.querySelectorAll(".CharacterCards").forEach((card) => {
                    card.classList.remove("active");
                });

                setIsClicked(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        if (mainCharacter.length <= 0 || mainCharacter[0].id !== id) {
            setMainCharacter([{ name, id, desc, raze, universe, imageSrc }]);
        }

        document.querySelectorAll(".CharacterCards").forEach((card) => {
            card.classList.remove("active");
        });

        setIsClicked(true);

        console.log({ name, id, desc, raze, universe, imageSrc });
    };

    const importAll = (files) => {
        let images = {};
        files.keys().map((item, index) => {
            return (images[item.replace("./", "")] = files(item));
        });
        return images;
    };

    const images = importAll(
        require.context("../Assets/Characters", false, /\.webp$/)
    );

    const imageMapping = {
        1: images["goku.webp"],
        2: images["vegeta.webp"],
        3: images["gohan.webp"],
        4: images["piccolo.webp"],
        5: images["krillin.webp"],
        6: images["tien.webp"],
        7: images["yamcha.webp"],
        8: images["chiaotzu.webp"],
        9: images["goten.webp"],
        10: images["trunks.webp"],
        11: images["android18.webp"],
        12: images["android17.webp"],
        13: images["frieza.webp"],
        14: images["cell.webp"],
        15: images["buu.webp"],
        16: images["beerus.webp"],
        17: images["whis.webp"],
        18: images["bulma.webp"],
        19: images["chi-chi.webp"],
        20: images["videl.webp"],
        21: images["mr-satan.webp"],
        22: images["turtle.webp"],
        23: images["master-roshi.webp"],
        24: images["yajirobe.webp"],
        25: images["kami.webp"],
        26: images["king-piccolo.webp"],
        27: images["raditz.webp"],
        28: images["nappa.webp"],
        29: images["ginyu.webp"],
        30: images["recoome.webp"],
        31: images["burter.webp"],
        32: images["jeice.webp"],
        33: images["guldo.webp"],
        34: images["dende.webp"],
        35: images["mr popo.webp"],
        36: images["shenron.webp"],
        37: images["broly.webp"],
        38: images["bardock.webp"],
        39: images["caulifla.webp"],
        40: images["kale.webp"],
        41: images["hit.webp"],
        42: images["cabba.webp"],
    };

    const imageSrc = imageMapping[id];

    return (
        <section
            id={id}
            className={`flex flex-col justify-center cursor-pointer CharacterCards ${
                isClicked ? "active" : ""
            }`}
            onClick={handleClick}>
            <figure className='bg-orange-500'>
                <img src={imageSrc} alt={name} loading='lazy' />
            </figure>
            <h2 className='md:text-xl text-base pt-3 text-center text-gray-500 font-extrabold uppercase'>
                {name}
            </h2>
        </section>
    );
}

export default CharacterCard;
