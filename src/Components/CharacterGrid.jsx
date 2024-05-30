// import Goku from "../Assets/Characters/goku.png";
import CharacterCard from "./CharacterCard";
import "./CharacterGrid.css";

function CharacterGRid() {
    const numeroDeRepeticiones = 4;
    return (
        <section className='CharacterGrid'>
            <section className='CharacterGallery'>
                {[...Array(numeroDeRepeticiones)].map((_, index) => (
                    <CharacterCard key={index} />
                ))}
            </section>
            {/* <section className='flex justify-center w-1/3 cursor-pointer'> */}
            {/* <figure className='bg-orange-500'>
                    <img src={Goku} alt='Characters' />
                </figure>
                <h4 className='text-xl text-center text-gray-500 font-extrabold uppercase'>
                    Vegeta
                </h4> */}
            {/* </section> */}
        </section>
    );
}

export default CharacterGRid;
