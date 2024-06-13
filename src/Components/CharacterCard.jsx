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
        require.context("../Assets/Characters", false, /\.png$/)
    );

    const imageMapping = {
        1: images["goku.png"],
        2: images["vegeta.png"],
        3: images["gohan.png"],
        4: images["piccolo.png"],
        5: images["krillin.png"],
        6: images["tien.png"],
        7: images["yamcha.png"],
        8: images["chiaotzu.png"],
        9: images["goten.png"],
        10: images["trunks.png"],
        11: images["android18.png"],
        12: images["android17.png"],
        13: images["frieza.png"],
        14: images["cell.png"],
        15: images["buu.png"],
        16: images["beerus.png"],
        17: images["whis.png"],
        18: images["bulma.png"],
        19: images["chi-chi.png"],
        20: images["videl.png"],
        21: images["mr satan.png"],
        22: images["turtle.png"],
        23: images["master roshi.png"],
        24: images["yajirobe.png"],
        25: images["kami.png"],
        26: images["king piccolo.png"],
        27: images["raditz.png"],
        28: images["nappa.png"],
        29: images["ginyu.png"],
        30: images["recoome.png"],
        31: images["burter.png"],
        32: images["jeice.png"],
        33: images["guldo.png"],
        34: images["dende.png"],
        35: images["mr popo.png"],
        36: images["shenron.png"],
        37: images["broly.png"],
        38: images["bardock.png"],
        39: images["caulifla.png"],
        40: images["kale.png"],
        41: images["hit.png"],
        42: images["cabba.png"],
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
            <h4 className='md:text-xl text-base pt-3 text-center text-gray-500 font-extrabold uppercase'>
                {name}
            </h4>
        </section>
    );
}

export default CharacterCard;
